import React, { useState } from 'react';
import { Settings, ChevronDown, ChevronUp, Save, RotateCcw, Globe, Shield, Clock, Code } from 'lucide-react';
import { AppConfig } from '../types';

interface ConfigPanelProps {
  config: AppConfig;
  onConfigChange: (config: AppConfig) => void;
  onSave: () => void;
  onReset: () => void;
}

export const ConfigPanel: React.FC<ConfigPanelProps> = ({ 
  config, 
  onConfigChange, 
  onSave, 
  onReset 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleChange = (key: keyof AppConfig, value: any) => {
    onConfigChange({
      ...config,
      [key]: value
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div 
        className="p-4 cursor-pointer flex items-center justify-between hover:bg-gray-50 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-2">
          <Settings className="w-5 h-5 text-gray-600" />
          <span className="font-medium text-gray-900">Advanced Configuration</span>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-4 h-4 text-gray-500" />
        ) : (
          <ChevronDown className="w-4 h-4 text-gray-500" />
        )}
      </div>
      
      {isExpanded && (
        <div className="px-4 pb-4 space-y-4 border-t border-gray-100">
          {/* Host Configuration */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <Globe className="w-4 h-4" />
              Target Host
            </label>
            <input
              type="text"
              value={config.host}
              onChange={(e) => handleChange('host', e.target.value)}
              placeholder="localhost:3000"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-500">
              The host/domain to use in generated curl commands
            </p>
          </div>

          {/* Protocol Selection */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <Shield className="w-4 h-4" />
              Protocol
            </label>
            <div className="flex gap-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="protocol"
                  value="http"
                  checked={config.protocol === 'http'}
                  onChange={(e) => handleChange('protocol', e.target.value)}
                  className="mr-2"
                />
                <span className="text-sm">HTTP</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="protocol"
                  value="https"
                  checked={config.protocol === 'https'}
                  onChange={(e) => handleChange('protocol', e.target.value)}
                  className="mr-2"
                />
                <span className="text-sm">HTTPS</span>
              </label>
            </div>
          </div>

          {/* Content Type */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <Code className="w-4 h-4" />
              Default Content Type
            </label>
            <select
              value={config.defaultContentType}
              onChange={(e) => handleChange('defaultContentType', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="application/json">application/json</option>
              <option value="application/x-www-form-urlencoded">application/x-www-form-urlencoded</option>
            </select>
          </div>

          {/* Timeout */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <Clock className="w-4 h-4" />
              Timeout (seconds)
            </label>
            <input
              type="number"
              min="1"
              max="300"
              value={config.timeout}
              onChange={(e) => handleChange('timeout', parseInt(e.target.value) || 30)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Checkboxes */}
          <div className="space-y-3">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={config.includeHeaders}
                onChange={(e) => handleChange('includeHeaders', e.target.checked)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">Include original headers</span>
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={config.prettyPrintJson}
                onChange={(e) => handleChange('prettyPrintJson', e.target.checked)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">Pretty print JSON</span>
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={config.followRedirects}
                onChange={(e) => handleChange('followRedirects', e.target.checked)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">Follow redirects (-L flag)</span>
            </label>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 pt-2 border-t border-gray-100">
            <button
              onClick={onSave}
              className="flex items-center gap-1 px-3 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors"
            >
              <Save className="w-4 h-4" />
              Save Settings
            </button>
            
            <button
              onClick={onReset}
              className="flex items-center gap-1 px-3 py-2 bg-gray-600 text-white text-sm rounded-md hover:bg-gray-700 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Reset to Default
            </button>
          </div>
        </div>
      )}
    </div>
  );
};