import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

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
  messages: Message[];
  color: string;
  onApprove: (messageId: string) => void;
  onReject: (messageId: string) => void;
}

// Simplified Flow Screen Component
const FlowScreen = ({
  title,
  role,
  messages,
  color,
  onApprove,
  onReject
}: FlowScreenProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 flex flex-col">
      {/* Header */}
      <div className={`p-3 text-white flex items-center justify-between ${color}`}>
        <div className="flex items-center">
          <div>
            <h3 className="font-semibold text-sm">{title}</h3>
            <p className="text-xs opacity-80">{role}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="overflow-y-auto p-3 flex-grow h-[180px]">
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

      {/* Status Bar */}
      <div className="p-2 bg-gray-50 text-xs text-gray-500 border-t border-gray-200">
        {messages.filter(m => m.isApprovalRequest && !m.isCompleted).length} pending approvals
      </div>
    </div>
  );
};

export default function ServiceNowFlowDesignerSimple() {
  // Current timestamp
  const getCurrentTimestamp = () => {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Sample screens for the demo
  const [screens, setScreens] = useState([
    {
      id: 'secretary',
      title: 'Secretary',
      role: 'Initial Entry',
      color: 'bg-blue-600',
      messages: [] as Message[],
    },
    {
      id: 'finance',
      title: 'Finance',
      role: 'Payment Verification',
      color: 'bg-green-600',
      messages: [] as Message[],
    },
    {
      id: 'doctor',
      title: 'Doctor',
      role: 'Appointment Approval',
      color: 'bg-purple-600',
      messages: [] as Message[],
    },
    {
      id: 'patient',
      title: 'Patient',
      role: 'Notification',
      color: 'bg-gray-600',
      messages: [] as Message[],
    },
  ]);

  const [patientName, setPatientName] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName || !appointmentDate) return;

    setIsSubmitting(true);

    // Create a new appointment request
    const requestId = uuidv4();
    const timestamp = getCurrentTimestamp();

    // Update secretary screen
    const updatedScreens = [...screens];
    const secretaryScreen = updatedScreens.find(s => s.id === 'secretary');
    const patientScreen = updatedScreens.find(s => s.id === 'patient');

    if (secretaryScreen) {
      secretaryScreen.messages = [
        {
          id: requestId,
          text: `New appointment request for patient ${patientName} on ${appointmentDate}. Please verify patient details.`,
          timestamp,
          isApprovalRequest: true,
        },
        ...secretaryScreen.messages,
      ];
    }

    if (patientScreen) {
      patientScreen.messages = [
        {
          id: uuidv4(),
          text: `Your appointment request has been submitted for ${appointmentDate}. Awaiting confirmation.`,
          timestamp,
        },
        ...patientScreen.messages,
      ];
    }

    setScreens(updatedScreens);
    setPatientName('');
    setAppointmentDate('');
    setIsSubmitting(false);
  };

  // Handle approval
  const handleApprove = (screenId: string, messageId: string) => {
    const updatedScreens = [...screens];
    const currentScreen = updatedScreens.find(s => s.id === screenId);

    if (!currentScreen) return;

    // Mark message as approved
    const messageIndex = currentScreen.messages.findIndex(m => m.id === messageId);
    if (messageIndex === -1) return;

    currentScreen.messages[messageIndex] = {
      ...currentScreen.messages[messageIndex],
      isCompleted: true,
      approved: true,
    };

    // Handle workflow progress
    if (screenId === 'secretary') {
      // Move to finance department
      const financeScreen = updatedScreens.find(s => s.id === 'finance');
      if (financeScreen) {
        financeScreen.messages = [
          {
            id: uuidv4(),
            text: `Appointment verification for ${patientName} completed. Please verify payment information.`,
            timestamp: getCurrentTimestamp(),
            isApprovalRequest: true,
          },
          ...financeScreen.messages,
        ];
      }
    } else if (screenId === 'finance') {
      // Move to doctor
      const doctorScreen = updatedScreens.find(s => s.id === 'doctor');
      if (doctorScreen) {
        doctorScreen.messages = [
          {
            id: uuidv4(),
            text: `Payment verified for patient ${patientName}. Please approve appointment for ${appointmentDate}.`,
            timestamp: getCurrentTimestamp(),
            isApprovalRequest: true,
          },
          ...doctorScreen.messages,
        ];
      }
    } else if (screenId === 'doctor') {
      // Final approval - notify patient
      const patientScreen = updatedScreens.find(s => s.id === 'patient');
      if (patientScreen) {
        patientScreen.messages = [
          {
            id: uuidv4(),
            text: `Your appointment has been confirmed for ${appointmentDate}. Please arrive 15 minutes before your scheduled time.`,
            timestamp: getCurrentTimestamp(),
          },
          ...patientScreen.messages,
        ];
      }
    }

    setScreens(updatedScreens);
  };

  // Handle rejection
  const handleReject = (screenId: string, messageId: string) => {
    const updatedScreens = [...screens];
    const currentScreen = updatedScreens.find(s => s.id === screenId);

    if (!currentScreen) return;

    // Mark message as rejected
    const messageIndex = currentScreen.messages.findIndex(m => m.id === messageId);
    if (messageIndex === -1) return;

    currentScreen.messages[messageIndex] = {
      ...currentScreen.messages[messageIndex],
      isCompleted: true,
      approved: false,
    };

    // Notify patient of rejection
    const patientScreen = updatedScreens.find(s => s.id === 'patient');
    if (patientScreen) {
      patientScreen.messages = [
        {
          id: uuidv4(),
          text: `Your appointment request for ${appointmentDate} has been declined. Please contact the hospital for more information.`,
          timestamp: getCurrentTimestamp(),
        },
        ...patientScreen.messages,
      ];
    }

    setScreens(updatedScreens);
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Hospital Appointment System
        </h3>
        <p className="text-gray-600 mb-6">
          This is a simplified simulation of a ServiceNow Flow Designer for a hospital appointment system.
          Fill out the form to start the appointment process and observe how the request flows through different departments.
        </p>

        {/* Appointment Request Form */}
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <h4 className="font-semibold text-gray-800 mb-3">New Appointment Request</h4>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Patient Name
              </label>
              <input
                type="text"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Enter patient name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Appointment Date
              </label>
              <input
                type="Date"
                value={appointmentDate}
                onChange={(e) => setAppointmentDate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="e.g., April 15, 2025"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Appointment Request'}
            </button>
          </form>
        </div>
      </div>

      {/* Workflow Screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {screens.map((screen) => (
          <FlowScreen
            key={screen.id}
            title={screen.title}
            role={screen.role}
            messages={screen.messages}
            color={screen.color}
            onApprove={(messageId) => handleApprove(screen.id, messageId)}
            onReject={(messageId) => handleReject(screen.id, messageId)}
          />
        ))}
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">
        This is a simplified demonstration. I have developed a full-featured ServiceNow application with advanced workflows, enhanced functionalities, and seamless integrations with other systems on the ServiceNow platform.
        </p>
      </div>
    </div>
  );
}
