import { NginxLogEntry, CurlCommand, ParseResult, AppConfig } from '../types';

export class LogParser {
  private static generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  private static parseJsonLog(logLine: string): NginxLogEntry | null {
    try {
      // Remove file path prefix if present
      const jsonPart = logLine.includes(':{') ? logLine.split(':{')[1] : logLine;
      return JSON.parse(jsonPart);
    } catch (error) {
      console.error('Failed to parse log line:', error);
      return null;
    }
  }

  private static buildCurlCommand(entry: NginxLogEntry, config: AppConfig): string {
    const { method, uri, request_body, user_agent, http_referer } = entry;
    
    // Build base curl command
    let curl = `curl -X ${method}`;
    
    // Add timeout
    if (config.timeout && config.timeout > 0) {
      curl += ` --max-time ${config.timeout}`;
    }
    
    // Add follow redirects flag
    if (config.followRedirects) {
      curl += ` -L`;
    }
    
    // Add headers if enabled
    if (config.includeHeaders) {
      if (user_agent) {
        curl += ` -H "User-Agent: ${user_agent}"`;
      }
      
      if (http_referer) {
        curl += ` -H "Referer: ${http_referer}"`;
      }
    }
    
    // Add request body for requests with body
    if (request_body) {
      // Add content-type header
      curl += ` -H "Content-Type: ${config.defaultContentType}"`;
      
      try {
        // Try to parse URL-encoded body and convert based on config
        const decodedBody = decodeURIComponent(request_body);
        
        if (config.defaultContentType === 'application/json') {
          // Convert to JSON format
          if (decodedBody.includes('=') && decodedBody.includes('&')) {
            // Parse URL-encoded data into JSON object
            const params = new URLSearchParams(decodedBody);
            const jsonObj: Record<string, any> = {};
            
            for (const [key, value] of params.entries()) {
              // Try to parse JSON values
              try {
                jsonObj[key] = JSON.parse(value);
              } catch {
                jsonObj[key] = value;
              }
            }
            
            const jsonBody = config.prettyPrintJson 
              ? JSON.stringify(jsonObj, null, 2)
              : JSON.stringify(jsonObj);
            curl += ` --data '${jsonBody}'`;
          } else {
            // If it's already JSON or other format, use as is
            try {
              // Try to parse and format JSON
              const parsed = JSON.parse(decodedBody);
              const jsonBody = config.prettyPrintJson 
                ? JSON.stringify(parsed, null, 2)
                : JSON.stringify(parsed);
              curl += ` --data '${jsonBody}'`;
            } catch {
              // If not valid JSON, wrap in quotes and use as string value
              const jsonBody = config.prettyPrintJson
                ? JSON.stringify({ data: decodedBody }, null, 2)
                : JSON.stringify({ data: decodedBody });
              curl += ` --data '${jsonBody}'`;
            }
          }
        } else {
          // Use URL-encoded format
          curl += ` --data '${decodedBody}'`;
        }
      } catch (error) {
        // Fallback: use raw body
        curl += ` --data '${request_body}'`;
      }
    }
    
    // Determine protocol and format URL
    const protocol = config.host.includes('://') ? '' : `${config.protocol}://`;
    curl += ` "${protocol}${config.host}${uri}"`;
    
    return curl;
  }

  public static parseLogContent(content: string, config: AppConfig): ParseResult {
    const lines = content.split('\n').filter(line => line.trim());
    const commands: CurlCommand[] = [];
    const errors: string[] = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
      
      const logEntry = this.parseJsonLog(line);
      if (!logEntry) {
        errors.push(`Failed to parse line ${i + 1}: Invalid JSON format`);
        continue;
      }
      
      try {
        const curlCommand = this.buildCurlCommand(logEntry, config);
        commands.push({
          id: this.generateId(),
          original: line,
          curl: curlCommand,
          method: logEntry.method,
          url: logEntry.uri,
          timestamp: logEntry.time_local,
          status: logEntry.status
        });
      } catch (error) {
        errors.push(`Failed to generate curl for line ${i + 1}: ${error}`);
      }
    }
    
    return {
      success: errors.length === 0,
      commands,
      errors,
      total: lines.length
    };
  }
}