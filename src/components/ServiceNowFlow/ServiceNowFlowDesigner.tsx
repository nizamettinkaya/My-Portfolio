import { useState } from 'react';
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
import FlowScreen from './FlowScreen';
import AppointmentForm from './AppointmentForm';

// Define message type
interface Message {
  id: string;
  text: string;
  timestamp: string;
  isApprovalRequest?: boolean;
  isCompleted?: boolean;
  approved?: boolean;
  appointmentData?: any;
}

// Define screen configuration
interface FlowScreenConfig {
  id: string;
  title: string;
  role: string;
  icon: string;
  color: string;
  order: number;
  messages: Message[];
}

export default function ServiceNowFlowDesigner() {
  // Define workflow steps
  const workflowSteps = [
    { id: 'reception', name: 'Reception', role: 'Initial Entry' },
    { id: 'insurance', name: 'Insurance Verification', role: 'Financial' },
    { id: 'nursing', name: 'Nursing', role: 'Initial Screening' },
    { id: 'doctor', name: 'Doctor', role: 'Medical Approval' },
    { id: 'scheduling', name: 'Scheduling', role: 'Final Confirmation' },
    { id: 'patient', name: 'Patient', role: 'Notification' },
  ];

  // Initialize state for each screen's messages
  const [screens, setScreens] = useState<FlowScreenConfig[]>([
    {
      id: 'reception',
      title: 'Reception',
      role: 'Initial Request Entry',
      icon: '👩‍💼',
      color: 'bg-blue-600',
      order: 1,
      messages: [],
    },
    {
      id: 'insurance',
      title: 'Insurance',
      role: 'Financial Verification',
      icon: '💵',
      color: 'bg-green-600',
      order: 2,
      messages: [],
    },
    {
      id: 'nursing',
      title: 'Nursing',
      role: 'Initial Screening',
      icon: '👨‍⚕️',
      color: 'bg-indigo-600',
      order: 3,
      messages: [],
    },
    {
      id: 'doctor',
      title: 'Doctor',
      role: 'Medical Approval',
      icon: '👩‍⚕️',
      color: 'bg-purple-600',
      order: 4,
      messages: [],
    },
    {
      id: 'scheduling',
      title: 'Scheduling',
      role: 'Final Appointment Setup',
      icon: '📅',
      color: 'bg-pink-600',
      order: 5,
      messages: [],
    },
    {
      id: 'patient',
      title: 'Patient Portal',
      role: 'Patient View',
      icon: '👤',
      color: 'bg-gray-600',
      order: 6,
      messages: [],
    },
  ]);

  // Track current workflow state
  const [workflowState, setWorkflowState] = useState({
    currentAppointmentId: '',
    currentStepIndex: 0,
    isWorkflowActive: false,
  });

  // Format date for display
  const formatDate = (date: string) => {
    const d = new Date(date);
    return d.toLocaleDateString();
  };

  // Format time for display
  const formatTime = (time: string) => {
    return time;
  };

  // Get current timestamp
  const getCurrentTimestamp = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Handle new appointment submission
  const handleAppointmentSubmit = (appointmentData: any) => {
    const appointmentId = uuidv4();

    // Start the workflow
    setWorkflowState({
      currentAppointmentId: appointmentId,
      currentStepIndex: 0,
      isWorkflowActive: true,
    });

    // Format the appointment data for display
    const formattedDate = formatDate(appointmentData.date);
    const formattedTime = formatTime(appointmentData.time);

    // Create initial message for reception
    const receptionMessage: Message = {
      id: uuidv4(),
      text: `New appointment request received for ${appointmentData.patientName} (ID: ${appointmentData.patientId}). Department: ${appointmentData.department.toUpperCase()}, Doctor: ${appointmentData.doctor}, Date: ${formattedDate}, Time: ${formattedTime}. Please verify and approve.`,
      timestamp: getCurrentTimestamp(),
      isApprovalRequest: true,
      appointmentData: appointmentData,
    };

    // Create notification for patient
    const patientMessage: Message = {
      id: uuidv4(),
      text: `Your appointment request has been submitted and is being processed. You will be notified once it's approved. Requested for ${formattedDate} at ${formattedTime}.`,
      timestamp: getCurrentTimestamp(),
    };

    // Update screens with new messages
    setScreens(prev =>
      prev.map(screen => {
        if (screen.id === 'reception') {
          return {
            ...screen,
            messages: [receptionMessage, ...screen.messages],
          };
        } else if (screen.id === 'patient') {
          return {
            ...screen,
            messages: [patientMessage, ...screen.messages],
          };
        }
        return screen;
      })
    );
  };

  // Handle approval action
  const handleApprove = (screenId: string, messageId: string) => {
    setScreens(prev => {
      // Find the screen and message
      const screenIndex = prev.findIndex(s => s.id === screenId);
      if (screenIndex === -1) return prev;

      const screen = prev[screenIndex];
      const messageIndex = screen.messages.findIndex(m => m.id === messageId);
      if (messageIndex === -1) return prev;

      const message = screen.messages[messageIndex];

      // Create a new array of screens with the updated message
      const newScreens = [...prev];
      newScreens[screenIndex] = {
        ...screen,
        messages: [
          ...screen.messages.slice(0, messageIndex),
          {
            ...message,
            isCompleted: true,
            approved: true,
          },
          ...screen.messages.slice(messageIndex + 1),
        ],
      };

      // Progress workflow to next step
      const nextStepIndex = workflowState.currentStepIndex + 1;

      // If not the last step, create a new message for the next step
      if (nextStepIndex < workflowSteps.length - 1) {
        const nextStepId = workflowSteps[nextStepIndex].id;
        const nextScreenIndex = newScreens.findIndex(s => s.id === nextStepId);

        if (nextScreenIndex !== -1) {
          // Create a message for the next step based on which screen we're coming from
          let nextMessage: Message;

          if (screenId === 'reception') {
            nextMessage = {
              id: uuidv4(),
              text: `Patient information verified. Please check insurance details for ${message.appointmentData.patientName} (ID: ${message.appointmentData.patientId}). Insurance: ${message.appointmentData.insurance || 'Not provided'}`,
              timestamp: getCurrentTimestamp(),
              isApprovalRequest: true,
              appointmentData: message.appointmentData,
            };
          } else if (screenId === 'insurance') {
            nextMessage = {
              id: uuidv4(),
              text: `Financial verification completed. Please perform initial medical screening for patient ${message.appointmentData.patientName}. Urgency: ${message.appointmentData.urgency.toUpperCase()}`,
              timestamp: getCurrentTimestamp(),
              isApprovalRequest: true,
              appointmentData: message.appointmentData,
            };
          } else if (screenId === 'nursing') {
            nextMessage = {
              id: uuidv4(),
              text: `Medical screening completed. Doctor approval required for appointment with ${message.appointmentData.patientName}. Reason: ${message.appointmentData.description || 'Not specified'}`,
              timestamp: getCurrentTimestamp(),
              isApprovalRequest: true,
              appointmentData: message.appointmentData,
            };
          } else if (screenId === 'doctor') {
            nextMessage = {
              id: uuidv4(),
              text: `Doctor approved appointment. Please schedule final appointment for patient ${message.appointmentData.patientName} with doctor ${message.appointmentData.doctor} on ${formatDate(message.appointmentData.date)} at ${formatTime(message.appointmentData.time)}.`,
              timestamp: getCurrentTimestamp(),
              isApprovalRequest: true,
              appointmentData: message.appointmentData,
            };
          }

          // Add the message to the next screen
          newScreens[nextScreenIndex] = {
            ...newScreens[nextScreenIndex],
            messages: [
              nextMessage!,
              ...newScreens[nextScreenIndex].messages,
            ],
          };
        }
      } else if (nextStepIndex === workflowSteps.length - 1) {
        // If this is the final approval (scheduling), send confirmation to patient
        const patientScreenIndex = newScreens.findIndex(s => s.id === 'patient');

        if (patientScreenIndex !== -1) {
          const finalMessage: Message = {
            id: uuidv4(),
            text: `Your appointment has been confirmed! You are scheduled to see ${message.appointmentData.doctor} in ${message.appointmentData.department.toUpperCase()} on ${formatDate(message.appointmentData.date)} at ${formatTime(message.appointmentData.time)}. Please arrive 15 minutes early.`,
            timestamp: getCurrentTimestamp(),
          };

          newScreens[patientScreenIndex] = {
            ...newScreens[patientScreenIndex],
            messages: [
              finalMessage,
              ...newScreens[patientScreenIndex].messages,
            ],
          };

          // Reset workflow state
          setWorkflowState({
            currentAppointmentId: '',
            currentStepIndex: 0,
            isWorkflowActive: false,
          });
        }
      }

      // Update workflow state if not the final step
      if (nextStepIndex < workflowSteps.length - 1) {
        setWorkflowState({
          ...workflowState,
          currentStepIndex: nextStepIndex,
        });
      }

      return newScreens;
    });
  };

  // Handle rejection action
  const handleReject = (screenId: string, messageId: string) => {
    setScreens(prev => {
      // Find the screen and message
      const screenIndex = prev.findIndex(s => s.id === screenId);
      if (screenIndex === -1) return prev;

      const screen = prev[screenIndex];
      const messageIndex = screen.messages.findIndex(m => m.id === messageId);
      if (messageIndex === -1) return prev;

      const message = screen.messages[messageIndex];

      // Create a new array of screens with the updated message
      const newScreens = [...prev];
      newScreens[screenIndex] = {
        ...screen,
        messages: [
          ...screen.messages.slice(0, messageIndex),
          {
            ...message,
            isCompleted: true,
            approved: false,
          },
          ...screen.messages.slice(messageIndex + 1),
        ],
      };

      // Send rejection notification to patient
      const patientScreenIndex = newScreens.findIndex(s => s.id === 'patient');

      if (patientScreenIndex !== -1) {
        const rejectionMessage: Message = {
          id: uuidv4(),
          text: `We're sorry, but your appointment request for ${formatDate(message.appointmentData.date)} at ${formatTime(message.appointmentData.time)} has been declined. Please contact the hospital for more information or submit a new request.`,
          timestamp: getCurrentTimestamp(),
        };

        newScreens[patientScreenIndex] = {
          ...newScreens[patientScreenIndex],
          messages: [
            rejectionMessage,
            ...newScreens[patientScreenIndex].messages,
          ],
        };
      }

      // Reset workflow state
      setWorkflowState({
        currentAppointmentId: '',
        currentStepIndex: 0,
        isWorkflowActive: false,
      });

      return newScreens;
    });
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-10">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">ServiceNow Flow Designer</h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">Hospital Appointment Workflow Simulation</p>
        </div>

        {/* Workflow Status */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-6 shadow">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Workflow Status:</h3>

          <div className="flex flex-wrap justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className={`h-3 w-3 rounded-full ${workflowState.isWorkflowActive ? 'bg-green-500 animate-pulse' : 'bg-gray-300'}`}></span>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {workflowState.isWorkflowActive ? 'Active Workflow' : 'Waiting for New Request'}
              </span>
            </div>

            {workflowState.isWorkflowActive && (
              <div className="flex items-center space-x-4 mt-2 sm:mt-0">
                {workflowSteps.map((step, index) => (
                  <div
                    key={step.id}
                    className={`flex items-center ${index > 0 ? 'ml-2' : ''}`}
                  >
                    {index > 0 && (
                      <div className={`h-0.5 w-4 ${index <= workflowState.currentStepIndex ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                    )}
                    <div
                      className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-medium ${
                        index < workflowState.currentStepIndex
                          ? 'bg-green-500 text-white'
                          : index === workflowState.currentStepIndex
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-200 text-gray-500'
                      }`}
                    >
                      {index + 1}
                    </div>
                    <span className="ml-1 text-xs hidden md:inline">
                      {step.name}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Form Side */}
          <div>
            <AppointmentForm onSubmit={handleAppointmentSubmit} />

            {/* ServiceNow Description */}
            <div className="mt-6 bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">About this Simulation</h3>
              <p className="text-gray-600 mb-4">
              This is a simplified demonstration. I have developed a full-featured ServiceNow application with advanced workflows, enhanced functionalities, and seamless integrations with other systems on the ServiceNow platform.
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Workflow Steps:</strong>
              </p>
              <ol className="list-decimal pl-5 space-y-1 text-gray-600">
                <li>Patient submits appointment request</li>
                <li>Reception desk verifies basic information</li>
                <li>Insurance department verifies coverage</li>
                <li>Nursing performs initial screening</li>
                <li>Doctor approves the appointment</li>
                <li>Scheduling finalizes the appointment</li>
                <li>Patient receives confirmation</li>
              </ol>
            </div>
          </div>

          {/* Screens Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {screens.map((screen) => (
              <FlowScreen
                key={screen.id}
                title={screen.title}
                role={screen.role}
                icon={screen.icon}
                messages={screen.messages}
                color={screen.color}
                onApprove={(messageId) => handleApprove(screen.id, messageId)}
                onReject={(messageId) => handleReject(screen.id, messageId)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
