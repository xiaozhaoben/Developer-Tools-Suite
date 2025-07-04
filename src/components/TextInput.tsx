import React, { useState } from 'react';
import { Code, Zap } from 'lucide-react';

interface TextInputProps {
  onTextContent: (content: string) => void;
}

export const TextInput: React.FC<TextInputProps> = ({ onTextContent }) => {
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    if (content.trim()) {
      onTextContent(content);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      handleSubmit();
    }
  };

  return (
    <div className="w-full space-y-4">
      <div className="flex items-center gap-2 text-gray-700">
        <Code className="w-5 h-5" />
        <span className="font-medium">Paste nginx log content</span>
      </div>
      
      <div className="relative">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Paste your nginx log entries here... (one per line)

Example:
/path/to/log.access.log:{&quot;remote_addr&quot;:&quot;192.168.1.1&quot;,&quot;method&quot;:&quot;POST&quot;,&quot;uri&quot;:&quot;/api/endpoint&quot;...}"
          className="w-full h-40 p-4 border border-gray-300 rounded-lg font-mono text-sm resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        
        <div className="absolute bottom-2 right-2 text-xs text-gray-400">
          Ctrl+Enter to parse
        </div>
      </div>
      
      <button
        onClick={handleSubmit}
        disabled={!content.trim()}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
      >
        <Zap className="w-4 h-4" />
        Parse Logs
      </button>
    </div>
  );
};