import React from 'react';
import { useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faLightbulb, faMobileAlt, faUsers, faDesktop } from '@fortawesome/free-solid-svg-icons';
import waterflowDesktop from "../../assets/waterflow/waterflow-desktop.jpg";
import waterflowPersonnel from "../../assets/waterflow/waterflow-personnel-mobile.jpg";
import waterflowConsumer from "../../assets/waterflow/waterflow-consumer-mobile.jpg";
import lowFi1 from "../../assets/waterflow/userflow-low-fi.png"
import lowFi2 from "../../assets/waterflow/userflow-low-fi-2.png"
import userTesting from "../../assets/waterflow/user-testing.png"

const Waterflow: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-cyan-50 text-cyan-900">
      {/* Header with Back Button */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-cyan-600 hover:text-cyan-800 transition-all ease-in-out duration-300 mb-6 cursor-pointer"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" /> Back to Projects
          </button>
          <h1 className="text-4xl font-bold text-cyan-900">Waterflow</h1>
          <p className="mt-2 text-xl text-cyan-700">A Waterworks Management System for Local Waterworks Unit in the Philippines</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-cyan-50 rounded-xl p-8 mb-12 border border-cyan-100">
            <h2 className="text-2xl font-semibold text-cyan-900 mb-4">The Challenge</h2>
            <p className="text-lg text-cyan-800">
              The Local Waterworks Unit (LWU) of San Jacinto, Masbate, faced critical inefficiencies: missing consumer records due to paper-based tracking, 
              Excel file mismanagement, and disjointed task coordination. Field staff struggled with manual meter readings and delayed billing, 
              while supervisors lacked real-time visibility into operations.
            </p>
          </div>
          {/* Research */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-cyan-900">Research: Uncovering the Roots of Chaos</h3>
              <p className="mb-4 text-cyan-800">To understand the LWU's workflow, we:</p>
              <ul className="list-disc pl-5 space-y-2 mb-6 text-cyan-800">
                <li>Collected existing forms (billing notices, meter reading logs, complaint sheets) to identify pain points</li>
                <li>Interviewed staff and supervisors to understand their daily challenges</li>
                <li>Audited competitors to benchmark features while adapting for offline-first rural use</li>
              </ul>
              <div className="bg-cyan-100 border-l-4 border-cyan-400 p-4">
                <p className="font-medium text-cyan-900">Key Insight:</p>
                <p className="text-cyan-800">The LWU needed more than digitization—they needed a foolproof system resilient to human error and poor internet.</p>
              </div>
            </div>
            <div className="bg-cyan-50 rounded-xl p-6 flex items-center justify-center border border-cyan-100">
              <img 
                src={waterflowDesktop} 
                alt="Waterflow Desktop Interface" 
                className="rounded-lg shadow-lg max-h-80 w-auto"
              />
            </div>
          </div>
          {/* Guiding Principles */}
          <div className="mb-16 bg-gray-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Guiding Principles & Framework</h2>
            
            <div className="space-y-12">
              {/* Principle 1 */}
              <div className="grid md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-4">
                  <div className="bg-blue-50 text-cyan-900 w-12 h-12 rounded-xl flex items-center justify-center text-2xl font-bold mb-4">1</div>
                  <h3 className="text-xl font-semibold text-gray-800">Mimicking Natural Workflows</h3>
                </div>
                <div className="md:col-span-8">
                  <p className="text-gray-600 mb-4">To ease adoption, we mirrored the LWU's existing processes in the digital system:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Task assignment replicated the simplicity of making a job order through pen and paper, but in the desktop app they simply fill a simple form and can drag-and-drop tasks to personnel.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Billing forms mirrored their paper layouts to reduce retraining.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Principle 2 */}
              <div className="grid md:grid-cols-12 gap-6 items-start pt-8 border-t border-gray-100">
                <div className="md:col-span-4">
                  <div className="bg-green-50 text-cyan-800 w-12 h-12 rounded-xl flex items-center justify-center text-2xl font-bold mb-4">2</div>
                  <h3 className="text-xl font-semibold text-gray-800">Nielsen's 10 Heuristics</h3>
                </div>
                <div className="md:col-span-8">
                  <p className="text-gray-600 mb-4">We prioritized usability by applying key principles:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg border border-gray-100">
                      <h4 className="font-medium text-gray-800 mb-2">Visibility of System Status</h4>
                      <p className="text-sm text-gray-600">Real-time updates for task completion and payment confirmations.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-100">
                      <h4 className="font-medium text-gray-800 mb-2">Match with Real World</h4>
                      <p className="text-sm text-gray-600">Used terms like "Meter Reading" instead of technical jargon.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-100">
                      <h4 className="font-medium text-gray-800 mb-2">Error Prevention</h4>
                      <p className="text-sm text-gray-600">Input validation, error checkers, and info notices for actions.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Principle 3 */}
              <div className="grid md:grid-cols-12 gap-6 items-start pt-8 border-t border-gray-100">
                <div className="md:col-span-4">
                  <div className="bg-purple-50 text-cyan-700 w-12 h-12 rounded-xl flex items-center justify-center text-2xl font-bold mb-4">3</div>
                  <h3 className="text-xl font-semibold text-gray-800">Scalability for Future Upgrades</h3>
                </div>
                <div className="md:col-span-8">
                  <p className="text-gray-600 mb-4">Designed with future enhancements in mind:</p>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-gray-200">GPS Tracking Ready</span>
                    <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-gray-200">PayMongo Integration</span>
                    <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-gray-200">AI Demand Forecasting</span>
                  </div>
                  <p className="mt-4 text-gray-600">The system was designed to integrate GPS tracking for route and task optimization for field personnels, while the AI analytics is currently being implement that forecast water demand 3 months ahead, helping the LWU plan resources.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Solution Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4 text-center">A Tri-Platform Solution for Rural Water Management</h2>
            <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Addressing the LWU's needs with an integrated ecosystem that connects administration, field operations, and consumers.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Web App Card */}
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 transform transition-all hover:scale-105 hover:shadow-lg">
                <div className="bg-blue-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                  <FontAwesomeIcon icon={faDesktop} className="text-cyan-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Web App</h3>
                <h4 className="text-gray-500 font-medium mb-4">Desktop for Waterworks Admin</h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-cyan-600 mr-2">•</span>
                    Centralized consumer records & billing
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-600 mr-2">•</span>
                    Personnel & task management
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-600 mr-2">•</span>
                    AI-powered analytics & forecasting
                  </li>
                </ul>
              </div>

              {/* Mobile App Card */}
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 transform transition-all hover:scale-105 hover:shadow-lg">
                <div className="bg-green-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                  <FontAwesomeIcon icon={faMobileAlt} className="text-green-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Mobile App</h3>
                <h4 className="text-gray-500 font-medium mb-4">Field Personnel</h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Offline functionality
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Task management & meter readings
                  </li>
                  <li className="flex items-start">
                    <span className="text-lime-500 mr-2">•</span>
                    Thermal Bluetooth Printing for Billing Notices
                  </li>
                </ul>
              </div>

              {/* Consumer Web App Card */}
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 transform transition-all hover:scale-105 hover:shadow-lg">
                <div className="bg-purple-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                  <FontAwesomeIcon icon={faUsers} className="text-purple-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Consumer Web App</h3>
                <h4 className="text-gray-500 font-medium mb-4">Consumer Portal</h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    Bill viewing & history
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    Online payments via PayMongo
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    Service request chatting
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Low Fidelity Wireframe */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-6">Low-Fidelity Wireframes</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-cyan-50 rounded-xl p-6 flex flex-col items-center border border-cyan-100">
                <img 
                  src={lowFi1} 
                  alt="Low Fidelity Wireframe 1" 
                  className="rounded-lg shadow-md w-full h-auto mb-4"
                />
                <p className="text-cyan-800 text-center">Initial wireframing for the Onboarding Process, Log in, Dashboard, Client Records.</p>
              </div>
              <div className="bg-cyan-50 rounded-xl p-6 flex flex-col items-center border border-cyan-100">
                <img 
                  src={lowFi2} 
                  alt="Low Fidelity Wireframe 2" 
                  className="rounded-lg shadow-md w-full h-auto mb-4"
                />
                <p className="text-cyan-800 text-center">Continuation of the wireframing, here the Task Management, Personnel Management, and Settings is shown.</p>
              </div>
            </div>
            <div className="bg-cyan-50 rounded-xl p-6 border border-cyan-100">
              <p className="text-cyan-800 mb-4">
                We presented these low-fidelity wireframes to the client and made several iterations based on their feedback. 
                The process involved refining the user flows and interface elements to better match their operational needs.
              </p>
              <p className="text-cyan-800">
                After finalizing the low-fidelity designs and receiving client approval, we proceeded to develop high-fidelity mockups. 
                Once the high-fidelity designs were completed, we conducted user testing sessions to validate our design decisions.
              </p>
            </div>
            <div className="bg-cyan-50 rounded-xl p-6 flex flex-col items-center border border-cyan-100">
              <img 
                src={userTesting} 
                alt="Low Fidelity Wireframe 2" 
                className="rounded-lg shadow-md w-3/4 mb-4"
              />
              <p className="text-cyan-800 text-center">User Tesing of the High-Fidelity Prototype to the staff of the Waterworks</p>
            </div>
          </div>

          {/* Gallery */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6">Mobile User Interfaces</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-100 rounded-xl p-4 flex flex-col justify-center">
                <img 
                  src={waterflowPersonnel} 
                  alt="Personnel Mobile View" 
                  className="rounded-lg shadow-md h-96 w-auto"
                />
                <p className="text-cyan-800 text-center text-sm mt-5">Mobile App for Field Personnel showcasing the Dashboard, Meter Reading Task Card, Syncing Screen to the local host, and the Log In screen.</p>
              </div>
              <div className="bg-gray-100 rounded-xl p-4 flex flex-col justify-center">
                <img 
                  src={waterflowConsumer} 
                  alt="Consumer Mobile View" 
                  className="rounded-lg shadow-md h-96 w-auto"
                />
                <p className="text-cyan-800 text-center text-sm mt-5">Consumer Wep Application which aims to ease the bill posting process, bills payment, and service request of each registered consumers.</p>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-cyan-900 text-white rounded-xl p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6">Results & Impact</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">50%</div>
                <p>Faster billing process</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">88%</div>
                <p>Reduction in lost records</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">30%</div>
                <p>Less field operator downtime</p>
              </div>
            </div>
          </div>

          {/* Lessons Learned */}
          <div className="bg-cyan-50 border-l-4 border-cyan-400 p-6 rounded-r-lg mb-8">
            <div className="flex">
              <FontAwesomeIcon icon={faLightbulb} className="text-yellow-500 text-2xl mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Lesson Learned</h3>
                <p>
                  Never assume "no feedback" equals "no problems." Proactively test edge cases and observe users in their 
                  natural environment to uncover unspoken challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Waterflow;