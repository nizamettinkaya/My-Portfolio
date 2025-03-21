import { useState } from 'react';
import { motion } from 'framer-motion';

interface Message {
  id: string;
  text: string;
  timestamp: string;
  isApprovalRequest?: boolean;
  isCompleted?: boolean;
  approved?: boolean;
}

interface FlowScreenProps {
  title: string;
  role: string;
  icon: string;
  messages: Message[];
  color: string;
  onApprove: (messageId: string) => void;
  onReject: (messageId: string) => void;
}

export default function FlowScreen({
  title,
  role,
  icon,
  messages,
  color,
  onApprove,
  onReject
}: FlowScreenProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <motion.div
      className={`bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 flex flex-col`}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div
        className={`p-3 text-white flex items-center justify-between ${color}`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center space-x-2">
          <span className="text-xl">{icon}</span>
          <div>
            <h3 className="font-semibold text-sm">{title}</h3>
            <p className="text-xs opacity-80">{role}</p>
          </div>
        </div>
        <button className="text-white hover:bg-white/10 p-1 rounded">
          {isExpanded ? '▼' : '▲'}
        </button>
      </div>

      {/* Content */}
      {isExpanded && (
        <div className="overflow-y-auto p-3 flex-grow max-h-[250px] min-h-[200px]">
          {messages.length === 0 ? (
            <div className="text-gray-400 text-sm text-center p-4">
              No messages yet
            </div>
          ) : (
            <div className="space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`p-3 rounded-lg text-sm ${
                    message.isApprovalRequest
                      ? 'bg-yellow-50 border border-yellow-200'
                      : message.isCompleted && message.approved
                        ? 'bg-green-50 border border-green-200'
                        : message.isCompleted && !message.approved
                          ? 'bg-red-50 border border-red-200'
                          : 'bg-gray-50 border border-gray-200'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-medium">{message.isApprovalRequest ? '🔔 Action Required' : '📌 Notification'}</span>
                    <span className="text-xs text-gray-500">{message.timestamp}</span>
                  </div>
                  <p className="mb-3">{message.text}</p>

                  {message.isApprovalRequest && !message.isCompleted && (
                    <div className="flex space-x-2 mt-2">
                      <button
                        onClick={() => onApprove(message.id)}
                        className="px-3 py-1 bg-green-600 text-white rounded text-xs hover:bg-green-700 flex-1"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => onReject(message.id)}
                        className="px-3 py-1 bg-red-600 text-white rounded text-xs hover:bg-red-700 flex-1"
                      >
                        Reject
                      </button>
                    </div>
                  )}

                  {message.isCompleted && (
                    <div className="text-sm font-medium mt-2">
                      {message.approved ? (
                        <span className="text-green-600">✓ Approved</span>
                      ) : (
                        <span className="text-red-600">✗ Rejected</span>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Status Bar */}
      <div className="p-2 bg-gray-50 text-xs text-gray-500 border-t border-gray-200">
        {messages.filter(m => m.isApprovalRequest && !m.isCompleted).length} pending approvals
      </div>
    </motion.div>
  );
}
