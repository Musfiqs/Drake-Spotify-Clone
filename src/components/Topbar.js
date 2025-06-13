import React from 'react';

export default function Topbar() {
  return (
    <div style={{
      width: '100%',
      height: 64,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 32px',
      background: 'linear-gradient(90deg, #3bb6ff 0%, #aeefff 100%)',
      boxShadow: '0 2px 12px rgba(59,182,255,0.08)',
      borderRadius: 16,
      margin: '16px 0',
    }}>
      {/* Monkey logo placeholder - using a new image for better visibility */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <img src="https://cdn.pixabay.com/photo/2021/01/15/15/04/monkey-5919932_1280.png" alt="Monkey Logo" style={{ width: 48, height: 48, borderRadius: '50%', background: '#fff', objectFit: 'cover' }} />
        <span style={{ fontWeight: 700, fontSize: 24, color: '#fff', letterSpacing: 1 }}>Monkeyfy</span>
      </div>
      {/* User profile placeholder */}
      <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" style={{ width: 40, height: 40, borderRadius: '50%', border: '2px solid #fff' }} />
    </div>
  );
} 