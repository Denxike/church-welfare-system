import React, { useState } from 'react';
import { Users, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function EventBilling() {
  const [eventData, setEventData] = useState({
    name: '',
    type: 'WEDDING',
    amount: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'success' or 'error'

  // Mock list of past events for the UI prototype
  const [pastEvents, setPastEvents] = useState([
    { id: 1, name: "John's Wedding", type: "WEDDING", amount: 500, date: "2026-08-15", membersBilled: 120 },
    { id: 2, name: "Mama Sarah's Burial", type: "BURIAL", amount: 300, date: "2026-07-02", membersBilled: 118 },
  ]);

  const handleInputChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    // Simulate API call to Spring Boot backend
    // Expected Payload: { name: "Event Name", type: "BURIAL", amount: 500 }
    setTimeout(() => {
      setPastEvents([
        {
          id: Date.now(),
          ...eventData,
          date: new Date().toISOString().split('T')[0],
          membersBilled: 125, // Mock number of active members
        },
        ...pastEvents,
      ]);
      setStatus('success');
      setIsSubmitting(false);
      setEventData({ name: '', type: 'WEDDING', amount: '' }); // Reset form
    }, 1500);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Event Billing & Contributions</h1>
        <p className="text-gray-600 mt-2">Create a new fund to automatically bill all active members.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: The Creation Form */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">New Event Fund</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Event Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={eventData.name}
                  onChange={handleInputChange}
                  placeholder="e.g., Peter's Wedding"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Event Type</label>
                <select
                  name="type"
                  value={eventData.type}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
                >
                  <option value="WEDDING">Wedding</option>
                  <option value="BURIAL">Burial</option>
                  <option value="MEDICAL">Medical Appeal</option>
                  <option value="OTHER">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Required Amount (Ksh)</label>
                <input
                  type="number"
                  name="amount"
                  required
                  min="50"
                  value={eventData.amount}
                  onChange={handleInputChange}
                  placeholder="e.g., 500"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
                />
              </div>

              {status === 'success' && (
                <div className="flex items-center gap-2 text-sm text-green-700 bg-green-50 p-3 rounded-lg border border-green-200">
                  <CheckCircle2 size={16} />
                  Successfully billed all members.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-700 text-white font-medium py-2.5 rounded-lg hover:bg-blue-800 transition-colors disabled:bg-blue-400 flex justify-center items-center gap-2"
              >
                {isSubmitting ? (
                  'Processing Ledgers...'
                ) : (
                  <>
                    <AlertCircle size={18} /> Apply Mass Debt
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Right Column: Past Events History */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800">Recent Event Billings</h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-gray-600 text-sm">
                    <th className="p-4 border-b border-gray-200 font-medium">Date</th>
                    <th className="p-4 border-b border-gray-200 font-medium">Event Name</th>
                    <th className="p-4 border-b border-gray-200 font-medium">Type</th>
                    <th className="p-4 border-b border-gray-200 font-medium text-right">Amount (Ksh)</th>
                    <th className="p-4 border-b border-gray-200 font-medium text-center">Members Billed</th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-100">
                  {pastEvents.map((evt) => (
                    <tr key={evt.id} className="hover:bg-gray-50 transition-colors">
                      <td className="p-4 text-gray-600">{evt.date}</td>
                      <td className="p-4 font-medium text-gray-900">{evt.name}</td>
                      <td className="p-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          evt.type === 'WEDDING' ? 'bg-pink-100 text-pink-700' : 
                          evt.type === 'BURIAL' ? 'bg-slate-200 text-slate-700' : 'bg-blue-100 text-blue-700'
                        }`}>
                          {evt.type}
                        </span>
                      </td>
                      <td className="p-4 text-right font-medium text-gray-900">{evt.amount}</td>
                      <td className="p-4 text-center">
                        <div className="flex items-center justify-center gap-1.5 text-gray-600">
                          <Users size={16} />
                          {evt.membersBilled}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}