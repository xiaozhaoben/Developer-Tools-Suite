import React, { useCallback, useState } from 'react';
import { Upload, FileText, AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface FileUploadProps {
  onFileContent: (content: string) => void;
}

export const FileUpload: React.FC<FileUploadProps> = ({ onFileContent }) => {
  const { t } = useTranslation();
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileRead = useCallback((file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      onFileContent(content);
      setError(null);
    };
    reader.onerror = () => {
      setError(t('failed_to_read_file'));
    };
    reader.readAsText(file);
  }, [onFileContent]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    const logFile = files.find(file => 
      file.name.includes('.log') || 
      file.type === 'text/plain' ||
      file.type === ''
    );
    
    if (logFile) {
      handleFileRead(logFile);
    } else {
      setError(t('please_upload_valid_log_file'));
    }
  }, [handleFileRead]);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileRead(file);
    }
  }, [handleFileRead]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  return (
    <div className="w-full">
      <div
        className={`
          relative border-2 border-dashed rounded-lg p-8 text-center transition-all duration-200
          ${isDragging 
            ? 'border-blue-500 bg-blue-50 dark:border-blue-400 dark:bg-blue-900/20' 
            : 'border-gray-300 hover:border-gray-400 dark:border-dark-600 dark:hover:border-dark-500'
          }
        `}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <input
          type="file"
          accept=".log,.txt"
          onChange={handleFileSelect}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          id="file-upload"
        />
        
        <div className="space-y-4">
          <div className="flex justify-center">
            <div className="p-3 bg-gray-100 rounded-full dark:bg-dark-700">
              <Upload className="w-6 h-6 text-gray-600 dark:text-dark-400" />
            </div>
          </div>
          
          <div>
            <label htmlFor="file-upload" className="cursor-pointer">
              <span className="text-lg font-medium text-gray-900">
                {t('upload_nginx_log_file')}
              </span>
              <p className="text-sm text-gray-500 mt-1">
                {t('drag_and_drop_or_click')}
              </p>
            </label>
          </div>
        </div>
      </div>
      
      {error && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 dark:bg-red-900/20 dark:border-red-800">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 dark:text-red-400" />
          <span className="text-red-700 text-sm dark:text-red-300">{error}</span>
        </div>
      )}
    </div>
  );
};