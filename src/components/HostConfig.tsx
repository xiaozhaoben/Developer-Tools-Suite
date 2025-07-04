import React from 'react';
import { Globe, Settings } from 'lucide-react';

interface HostConfigProps {
  host: string;
  onHostChange: (host: string) => void;
}

export const HostConfig: React.FC<HostConfigProps> = ({ host, onHostChange }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <div className="flex items-center gap-2 mb-3">
        <Settings className="w-4 h-4 text-gray-600" />
        <span className="font-medium text-gray-900">Configuration</span>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="host-input" className="block text-sm font-medium text-gray-700">
          Target Host
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Globe className="h-4 w-4 text-gray-400" />
          </div>
          <input
            id="host-input"
            type="text"
            value={host}
            onChange={(e) => onHostChange(e.target.value)}
            placeholder="localhost:3000"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <p className="text-xs text-gray-500">
          The host/domain to use in generated curl commands
        </p>
      </div>
    </div>
  );
};