import React, { useState } from 'react';
import { Search, MessageCircle, MessageSquare, Plus, DollarSign } from 'lucide-react';

export default function MemberLedger() {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data representing the PostgreSQL ledger calculation
  const [members, setMembers] = useState([
    { id: 1, name: "Emmanuel Kibet", phone: "254712345678", hasWhatsapp: true, balance: 400, status: 'PREPAID' },
    { id: 2, name: "Zipporah Wanjiru", phone: "254723456789", hasWhatsapp: true, balance: 0, status: 'CLEARED' },
    { id: 3, name: "Trevor Kinyua", phone: "254734567890", hasWhatsapp: false, balance: -600, status: 'ARREARS' },
    { id: 4, name: "Josh Ndung'u", phone: "254745678901", hasWhatsapp: true, balance: -200, status: 'ARREARS' },
  ]);

  const filteredMembers = members.filter(m => 
    m.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    m.phone.includes(searchTerm)
  );

  const handleSendReminder = (member) => {
    const platform = member.hasWhatsapp ? 'WhatsApp' : 'SMS';
    alert(`Simulating dispatch: Sending ${platform} reminder to ${member.name} for Ksh ${Math.abs(member.balance)}`);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Member Ledger</h1>
          <p className="text-gray-600 mt-1">Track individual balances and dispatch payment reminders.</p>
        </div>
        <button className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition flex items-center gap-2 font-medium">
          <Plus size={18} /> Register Member
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search by name or phone..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
            />
          </div>
          <button className="text-blue-700 font-medium hover:bg-blue-50 px-4 py-2 rounded-lg transition">
            Export to Excel
          </button>
        </div>

        {/* Ledger Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white text-gray-600 text-sm border-b border-gray-200">
                <th className="p-4 font-medium">Member Name</th>
                <th className="p-4 font-medium">Contact</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium text-right">Current Balance (Ksh)</th>
                <th className="p-4 font-medium text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredMembers.map((member) => (
                <tr key={member.id} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-medium text-gray-900">{member.name}</td>
                  <td className="p-4 text-gray-600 flex items-center gap-2">
                    {member.phone}
                    {member.hasWhatsapp ? (
                      <MessageCircle size={14} className="text-green-500" title="Has WhatsApp" />
                    ) : (
                      <MessageSquare size={14} className="text-blue-400" title="SMS Only" />
                    )}
                  </td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      member.status === 'PREPAID' ? 'bg-green-100 text-green-700' :
                      member.status === 'CLEARED' ? 'bg-gray-100 text-gray-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {member.status}
                    </span>
                  </td>
                  <td className={`p-4 text-right font-medium ${
                    member.balance > 0 ? 'text-green-600' : 
                    member.balance < 0 ? 'text-red-600' : 'text-gray-900'
                  }`}>
                    {member.balance > 0 ? '+' : ''}{member.balance}
                  </td>
                  <td className="p-4">
                    <div className="flex justify-center gap-2">
                      <button 
                        className="p-2 text-gray-600 hover:bg-gray-200 rounded-lg transition"
                        title="Record Payment"
                      >
                        <DollarSign size={18} />
                      </button>
                      <button 
                        onClick={() => handleSendReminder(member)}
                        className={`p-2 rounded-lg transition ${
                          member.balance < 0 
                            ? 'text-blue-600 hover:bg-blue-100' 
                            : 'text-gray-400 cursor-not-allowed'
                        }`}
                        disabled={member.balance >= 0}
                        title="Send Reminder"
                      >
                        {member.hasWhatsapp ? <MessageCircle size={18} /> : <MessageSquare size={18} />}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}