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