export interface NginxLogEntry {
  remote_addr: string;
  'X-Forwarded-For': string;
  remote_user: string;
  time_local: string;
  method: string;
  uri: string;
  server_protocol: string;
  request_body: string;
  status: string;
  body_bytes_sent: string;
  http_referer: string;
  user_agent: string;
  upstream_response_time: string;
}

export interface CurlCommand {
  id: string;
  original: string;
  curl: string;
  method: string;
  url: string;
  timestamp: string;
  status: string;
}

export interface ParseResult {
  success: boolean;
  commands: CurlCommand[];
  errors: string[];
  total: number;
}

export interface AppConfig {
  host: string;
  protocol: 'http' | 'https';
  includeHeaders: boolean;
  prettyPrintJson: boolean;
  defaultContentType: 'application/json' | 'application/x-www-form-urlencoded';
  timeout: number;
  followRedirects: boolean;
}

export const defaultConfig: AppConfig = {
  host: 'localhost',
  protocol: 'http',
  includeHeaders: true,
  prettyPrintJson: true,
  defaultContentType: 'application/json',
  timeout: 30,
  followRedirects: true,
};