import React, { useState } from 'react';
import { TrendingUp, Users, AlertCircle, Plus } from 'lucide-react';

export default function Dashboard() {
  const [stats] = useState({ totalFund: 45000, expectedMonthly: 24000, totalArrears: 12500 });
  
  const recentTransactions = [
    { id: 1, date: '2026-09-20', member: 'Emmanuel Kibet', desc: 'Monthly Fee', amount: 200, type: 'CREDIT' },
    { id: 2, date: '2026-09-18', member: 'Zipporah Wanjiru', desc: 'Burial Fund', amount: 500, type: 'CREDIT' },
    { id: 3, date: '2026-09-15', member: 'Trevor Kinyua', desc: 'Wedding Penalty', amount: -300, type: 'DEBIT' },
  ];

  return (
    <div style={{ padding: '32px', maxWidth: '1280px', margin: '0 auto', width: '100%', minHeight: '100%' }}>
      {/* Header Section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h1 style={{ fontSize: '28px', fontWeight: '800', color: '#0f172a', margin: '0 0 6px 0', letterSpacing: '-0.025em' }}>
            System Overview
          </h1>
          <p style={{ fontSize: '15px', fontWeight: '600', color: '#334155', margin: 0 }}>
            Real-time financial summary and recent church welfare activity.
          </p>
        </div>
        <button style={{ backgroundColor: '#1d4ed8', color: '#ffffff', padding: '10px 18px', borderRadius: '12px', fontSize: '14px', fontWeight: '600', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
          <Plus size={16} /> Record Cash Payment
        </button>
      </div>

      {/* Key Metrics Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '32px' }}>
        <div style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '16px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
          <div style={{ padding: '12px', backgroundColor: '#ecfdf5', color: '#059669', borderRadius: '12px' }}><TrendingUp size={22} /></div>
          <div>
            <p style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: '#475569', margin: '0 0 4px 0', letterSpacing: '0.05em' }}>Total Fund Liquidity</p>
            <p style={{ fontSize: '24px', fontWeight: '800', color: '#0f172a', margin: 0 }}>Ksh {stats.totalFund.toLocaleString()}</p>
          </div>
        </div>

        <div style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '16px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
          <div style={{ padding: '12px', backgroundColor: '#fff1f2', color: '#e11d48', borderRadius: '12px' }}><AlertCircle size={22} /></div>
          <div>
            <p style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: '#475569', margin: '0 0 4px 0', letterSpacing: '0.05em' }}>Total Arrears (Owed)</p>
            <p style={{ fontSize: '24px', fontWeight: '800', color: '#0f172a', margin: 0 }}>Ksh {stats.totalArrears.toLocaleString()}</p>
          </div>
        </div>

        <div style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '16px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
          <div style={{ padding: '12px', backgroundColor: '#f0f9ff', color: '#0284c7', borderRadius: '12px' }}><Users size={22} /></div>
          <div>
            <p style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: '#475569', margin: '0 0 4px 0', letterSpacing: '0.05em' }}>Monthly Expected</p>
            <p style={{ fontSize: '24px', fontWeight: '800', color: '#0f172a', margin: 0 }}>Ksh {stats.expectedMonthly.toLocaleString()}</p>
          </div>
        </div>
      </div>

      {/* Recent Ledger Table */}
      <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
        <div style={{ padding: '20px 24px', backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a', margin: 0 }}>
            Recent Transactions
          </h2>
          <span style={{ fontSize: '13px', fontWeight: '700', color: '#1d4ed8', cursor: 'pointer' }}>
            View All Ledger
          </span>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
                <th style={{ padding: '16px 24px', fontSize: '12px', fontWeight: '800', textTransform: 'uppercase', color: '#1e293b' }}>Date</th>
                <th style={{ padding: '16px 24px', fontSize: '12px', fontWeight: '800', textTransform: 'uppercase', color: '#1e293b' }}>Member Name</th>
                <th style={{ padding: '16px 24px', fontSize: '12px', fontWeight: '800', textTransform: 'uppercase', color: '#1e293b' }}>Description</th>
                <th style={{ padding: '16px 24px', fontSize: '12px', fontWeight: '800', textTransform: 'uppercase', color: '#1e293b', textAlign: 'right' }}>Amount</th>
                <th style={{ padding: '16px 24px', fontSize: '12px', fontWeight: '800', textTransform: 'uppercase', color: '#1e293b', textAlign: 'center' }}>Type</th>
              </tr>
            </thead>
            <tbody>
              {recentTransactions.map((tx) => (
                <tr key={tx.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '16px 24px', fontSize: '14px', fontWeight: '600', color: '#334155' }}>{tx.date}</td>
                  <td style={{ padding: '16px 24px', fontSize: '14px', fontWeight: '800', color: '#0f172a' }}>{tx.member}</td>
                  <td style={{ padding: '16px 24px', fontSize: '14px', fontWeight: '600', color: '#334155' }}>{tx.desc}</td>
                  <td style={{ padding: '16px 24px', fontSize: '14px', fontWeight: '800', textAlign: 'right', color: tx.type === 'CREDIT' ? '#059669' : '#e11d48' }}>
                    {tx.type === 'CREDIT' ? '+' : ''}{tx.amount} Ksh
                  </td>
                  <td style={{ padding: '16px 24px', textAlign: 'center' }}>
                    <span style={{ padding: '4px 12px', borderRadius: '9999px', fontSize: '12px', fontWeight: '800', backgroundColor: tx.type === 'CREDIT' ? '#ecfdf5' : '#fff1f2', color: tx.type === 'CREDIT' ? '#047857' : '#be123c' }}>
                      {tx.type}
                    </span>
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