import React, { useState } from 'react';
import { FileUpload } from './FileUpload';
import { TextInput } from './TextInput';
import { ResultsPanel } from './ResultsPanel';
import { ConfigPanel } from './ConfigPanel';
import { LogParser } from '../utils/logParser';
import { ParseResult, AppConfig, defaultConfig } from '../types';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useTranslation } from 'react-i18next';

export const NginxLogParser: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'upload' | 'paste'>('upload');
  const [parseResult, setParseResult] = useState<ParseResult | null>(null);
  const [config, setConfig] = useLocalStorage<AppConfig>('nginx-parser-config', defaultConfig);
  const [showSaveNotification, setShowSaveNotification] = useState(false);

  const handleLogContent = (content: string) => {
    const result = LogParser.parseLogContent(content, config);
    setParseResult(result);
  };

  const handleClearResults = () => {
    setParseResult(null);
  };

  const handleConfigSave = () => {
    // Config is automatically saved via useLocalStorage
    setShowSaveNotification(true);
    setTimeout(() => setShowSaveNotification(false), 2000);
  };

  const handleConfigReset = () => {
    setConfig(defaultConfig);
    setShowSaveNotification(true);
    setTimeout(() => setShowSaveNotification(false), 2000);
  };

  return (
    <div>
      {/* Save Notification */}
      {showSaveNotification && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-fade-in">
          {t('settings_saved_successfully')}
        </div>
      )}
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Input Section */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                {t('import_nginx_logs')}
              </h2>
              <p className="text-sm text-gray-600">
                {t('upload_log_file_or_paste_log_content')}
              </p>
            </div>
            
            {/* Tab Navigation */}
            <div className="flex bg-gray-100 rounded-lg p-1 mb-6">
              <button
                onClick={() => setActiveTab('upload')}
                className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-colors ${
                  activeTab === 'upload'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {t('upload_file')}
              </button>
              <button
                onClick={() => setActiveTab('paste')}
                className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-colors ${
                  activeTab === 'paste'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {t('paste_content')}
              </button>
            </div>
            
            {/* Tab Content */}
            <div>
              {activeTab === 'upload' ? (
                <FileUpload onFileContent={handleLogContent} />
              ) : (
                <TextInput onTextContent={handleLogContent} />
              )}
            </div>
          </div>
          
          {/* Configuration Panel */}
          <ConfigPanel 
            config={config}
            onConfigChange={setConfig}
            onSave={handleConfigSave}
            onReset={handleConfigReset}
          />
          
          {/* Info Panel */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-medium text-blue-900 mb-2">{t('supported_format')}</h3>
            <p className="text-sm text-blue-800 mb-2">
              {t('supported_format_desc')}
            </p>
            <ul className="text-xs text-blue-700 space-y-1">
              <li>• method, uri, request_body</li>
              <li>• user_agent, http_referer</li>
              <li>• remote_addr, status, time_local</li>
            </ul>
          </div>
        </div>
        
        {/* Results Section */}
        <div className="lg:col-span-2">
          {parseResult ? (
            <ResultsPanel 
              result={parseResult} 
              onClearResults={handleClearResults}
            />
          ) : (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
              <div className="text-gray-400 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {t('no_logs_processed_yet')}
              </h3>
              <p className="text-gray-600">
                {t('no_logs_processed_yet_desc')}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};