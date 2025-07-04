import React, { useState } from 'react';
import { Copy, Check, Eye, EyeOff, Code, Globe, Clock, Activity } from 'lucide-react';
import { CurlCommand } from '../types';

interface CommandCardProps {
  command: CurlCommand;
  index: number;
}

export const CommandCard: React.FC<CommandCardProps> = ({ command, index }) => {
  const [copied, setCopied] = useState(false);
  const [showOriginal, setShowOriginal] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command.curl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const getMethodColor = (method: string) => {
    switch (method.toLowerCase()) {
      case 'get': return 'bg-green-100 text-green-800';
      case 'post': return 'bg-blue-100 text-blue-800';
      case 'put': return 'bg-yellow-100 text-yellow-800';
      case 'delete': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    const statusNum = parseInt(status);
    if (statusNum >= 200 && statusNum < 300) return 'text-green-600';
    if (statusNum >= 300 && statusNum < 400) return 'text-yellow-600';
    if (statusNum >= 400) return 'text-red-600';
    return 'text-gray-600';
  };

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-gray-500">#{index + 1}</span>
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getMethodColor(command.method)}`}>
            {command.method}
          </span>
          <span className={`text-sm font-medium ${getStatusColor(command.status)}`}>
            {command.status}
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowOriginal(!showOriginal)}
            className="p-1 text-gray-500 hover:text-gray-700 transition-colors"
            title={showOriginal ? 'Hide original log' : 'Show original log'}
          >
            {showOriginal ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
          
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Globe className="w-4 h-4" />
          <span className="font-mono break-all">{command.url}</span>
        </div>
        
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Clock className="w-4 h-4" />
          <span>{command.timestamp}</span>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Code className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">Curl Command</span>
          </div>
          <pre className="text-sm font-mono text-gray-800 whitespace-pre-wrap break-all">
            {command.curl}
          </pre>
        </div>
        
        {showOriginal && (
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Activity className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">Original Log</span>
            </div>
            <pre className="text-xs font-mono text-gray-600 whitespace-pre-wrap break-all">
              {command.original}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};