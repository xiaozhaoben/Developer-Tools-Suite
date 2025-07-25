import React, { useState } from 'react';
import { Header } from './components/Header';
import { NginxLogParser } from './components/NginxLogParser';
import { StringManipulator } from './components/StringManipulator';
import { Terminal, Type } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'nginx' | 'string'>('nginx');

  const tabs = [
    {
      id: 'nginx' as const,
      name: t('nginx_log_parser'),
      icon: Terminal,
      description: t('nginx_log_parser_desc')
    },
    {
      id: 'string' as const,
      name: t('string_manipulator'),
      icon: Type,
      description: t('string_manipulator_desc')
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="border-b border-gray-200 dark:border-dark-700">
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab.id
                        ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-dark-400 dark:hover:text-dark-300'
                    }`}
                  >
                    <Icon className={`mr-2 h-5 w-5 ${
                      activeTab === tab.id ? 'text-blue-500 dark:text-blue-400' : 'text-gray-400 group-hover:text-gray-500 dark:text-dark-500 dark:group-hover:text-dark-400'
                    }`} />
                    <div className="text-left">
                      <div>{tab.name}</div>
                      <div className="text-xs text-gray-400 dark:text-dark-500">{tab.description}</div>
                    </div>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
        
        {/* Tab Content */}
        <div className="mt-8">
          {activeTab === 'nginx' && <NginxLogParser />}
          {activeTab === 'string' && <StringManipulator />}
        </div>
      </main>
    </div>
  );
}

export default App;