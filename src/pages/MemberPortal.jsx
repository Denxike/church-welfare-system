import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, History, User, Home, ArrowRight, X, ShieldCheck, PhoneCall } from 'lucide-react';

export default function MemberPortal() {
  const [showMpesaModal, setShowMpesaModal] = useState(false);
  
  // Mock logged-in member data
  const member = {
    name: "Dennis Kathuku",
    phone: "254712345678",
    balance: -600, // Negative means in arrears
    status: "ARREARS",
    joinDate: "August 2025"
  };

  const transactions = [
    { id: 1, desc: "Burial Fund (Mama Sarah)", date: "Oct 2, 2026", amount: -400, type: "DEBIT" },
    { id: 2, desc: "Monthly Welfare Fee", date: "Sep 30, 2026", amount: -200, type: "DEBIT" },
    { id: 3, desc: "M-Pesa Contribution", date: "Sep 15, 2026", amount: 500, type: "CREDIT" },
  ];

  return (
    <div style={{ backgroundColor: '#f1f5f9', minHeight: '100vh', padding: '24px 16px', fontFamily: 'Inter, sans-serif', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      
      {/* Responsive Main Container */}
      <div style={{ width: '100%', maxWidth: '920px', backgroundColor: '#ffffff', borderRadius: '28px', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)', overflow: 'hidden', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
        
        {/* Top Header */}
        <div style={{ padding: '24px 32px', backgroundColor: '#ffffff', borderBottom: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ width: '45px', height: '45px', backgroundColor: '#eff6ff', color: '#1d4ed8', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', fontSize: '16px', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)' }}>
              DK
            </div>
            <div>
              <h1 style={{ fontSize: '20px', fontWeight: '900', color: '#0f172a', margin: 0, letterSpacing: '-0.02em' }}>Church Welfare Portal</h1>
              <p style={{ fontSize: '13px', fontWeight: '600', color: '#64748b', margin: '2px 0 0 0' }}>Welcome back, {member.name}</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: '#ecfdf5', color: '#047857', padding: '6px 12px', borderRadius: '9999px', fontSize: '12px', fontWeight: '800' }}>
            <ShieldCheck size={16} /> Verified Member
          </div>
        </div>

        {/* Responsive Grid Styles */}
        <style>{`
          @media (min-width: 768px) {
            .portal-grid {
              grid-template-columns: 1fr 1.2fr !important;
            }
          }
        `}</style>

        <div className="portal-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px', padding: '32px', backgroundColor: '#f8fafc', flex: 1 }}>
          
          {/* Left Column: Balance Card & Support */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* Hero Balance Card */}
            <div style={{ background: member.balance < 0 ? 'linear-gradient(135deg, #e11d48 0%, #be123c 100%)' : 'linear-gradient(135deg, #059669 0%, #047857 100%)', borderRadius: '24px', padding: '28px', color: '#ffffff', boxShadow: '0 10px 20px -5px rgba(225, 29, 72, 0.3)', position: 'relative' }}>
              <p style={{ fontSize: '12px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 6px 0', opacity: 0.9 }}>
                {member.balance < 0 ? 'Outstanding Arrears' : 'Prepaid Balance'}
              </p>
              <h2 style={{ fontSize: '42px', fontWeight: '900', margin: '0 0 16px 0', letterSpacing: '-0.03em' }}>
                {member.balance} Ksh
              </h2>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: 'rgba(0,0,0,0.18)', padding: '6px 12px', borderRadius: '9999px', width: 'fit-content', fontSize: '12px', fontWeight: '700', marginBottom: '24px' }}>
                {member.balance < 0 ? <AlertCircle size={14} /> : <CheckCircle2 size={14} />}
                {member.balance < 0 ? 'Action Required: Clear before 5th' : 'Account in good standing'}
              </div>

              {/* Iconic Green M-Pesa Button using Tailwind bg-[#43B02A] */}
              <button 
                onClick={() => setShowMpesaModal(true)}
                className="w-full bg-[#43B02A] hover:bg-[#3a9925] text-white py-3.5 px-4 rounded-xl font-black text-base flex justify-center items-center gap-2 shadow-md transition-all cursor-pointer border-none"
              >
                Pay via M-Pesa <ArrowRight size={18} />
              </button>
            </div>

            {/* Committee Support Box */}
            <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '20px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ padding: '10px', backgroundColor: '#eff6ff', color: '#1d4ed8', borderRadius: '12px' }}>
                <PhoneCall size={20} />
              </div>
              <div>
                <p style={{ fontSize: '13px', fontWeight: '800', color: '#0f172a', margin: '0 0 2px 0' }}>Need Assistance?</p>
                <p style={{ fontSize: '12px', fontWeight: '600', color: '#64748b', margin: 0 }}>Contact the church welfare treasurer for support.</p>
              </div>
            </div>

          </div>

          {/* Right Column: Transaction Ledger */}
          <div style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '24px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '900', color: '#0f172a', margin: 0 }}>Transaction Ledger</h3>
              <span style={{ fontSize: '12px', fontWeight: '800', color: '#1d4ed8', cursor: 'pointer' }}>View All History</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
              {transactions.map((tx) => (
                <div key={tx.id} style={{ backgroundColor: '#f8fafc', padding: '14px 16px', borderRadius: '16px', border: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <p style={{ fontSize: '14px', fontWeight: '800', color: '#0f172a', margin: '0 0 2px 0' }}>{tx.desc}</p>
                    <p style={{ fontSize: '12px', fontWeight: '600', color: '#64748b', margin: 0 }}>{tx.date}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p style={{ fontSize: '14px', fontWeight: '900', color: tx.type === 'CREDIT' ? '#059669' : '#e11d48', margin: '0 0 2px 0' }}>
                      {tx.type === 'CREDIT' ? '+' : ''}{tx.amount} Ksh
                    </p>
                    <span style={{ fontSize: '10px', fontWeight: '800', padding: '2px 6px', borderRadius: '4px', backgroundColor: tx.type === 'CREDIT' ? '#ecfdf5' : '#fff1f2', color: tx.type === 'CREDIT' ? '#047857' : '#be123c' }}>
                      {tx.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div style={{ backgroundColor: '#ffffff', padding: '16px 32px', borderTop: '1px solid #f1f5f9', textAlign: 'center', fontSize: '12px', fontWeight: '600', color: '#94a3b8' }}>
          Church Welfare Financial System &bull; Secured M-Pesa Integration
        </div>

        {/* M-Pesa Payment Instructions Modal */}
        {showMpesaModal && (
          <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(4px)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 50, padding: '16px' }}>
            <div style={{ backgroundColor: '#ffffff', width: '100%', maxWidth: '440px', borderRadius: '24px', padding: '28px', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.2)', position: 'relative' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '900', color: '#0f172a', margin: 0 }}>Lipa na M-Pesa</h3>
                <button onClick={() => setShowMpesaModal(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748b' }}><X size={20} /></button>
              </div>

              <p style={{ fontSize: '13px', fontWeight: '600', color: '#475569', margin: '0 0 16px 0' }}>Follow these steps on your phone to clear your arrears instantly:</p>

              <div style={{ backgroundColor: '#f8fafc', padding: '16px', borderRadius: '16px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', fontWeight: '700', color: '#1e293b', marginBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>1. Go to M-Pesa Menu:</span> <span style={{ color: '#1d4ed8' }}>Lipa na M-Pesa</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>2. Select Paybill:</span> <span style={{ color: '#1d4ed8' }}>Buy Goods / Paybill</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>3. Enter Business No:</span> <span style={{ color: '#0f172a', fontFamily: 'monospace', fontSize: '15px' }}>123456</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>4. Enter Account No:</span> <span style={{ color: '#0f172a', fontFamily: 'monospace', fontSize: '15px' }}>{member.phone}</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>5. Enter Amount:</span> <span style={{ color: '#e11d48', fontFamily: 'monospace', fontSize: '15px' }}>600 Ksh</span></div>
              </div>

              <button 
                onClick={() => { alert("Simulating M-Pesa STK Push prompt sent to your phone..."); setShowMpesaModal(false); }}
                className="w-full bg-[#43B02A] hover:bg-[#3a9925] text-white py-3.5 px-4 rounded-xl font-black text-base shadow-md transition-all cursor-pointer border-none"
              >
                Simulate Instant STK Push
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}