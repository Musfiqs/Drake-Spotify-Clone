import React from 'react';
import { FaHome, FaSearch, FaBook } from 'react-icons/fa';

const playlists = [
  'Chill Hits',
  'Top 50',
  'Workout',
  'Jazz Vibes',
  'Indie Mix',
];

export default function Sidebar() {
  return (
    <div style={{
      width: 220,
      background: 'rgba(255,255,255,0.1)',
      color: '#222',
      padding: '32px 16px',
      borderRadius: 20,
      backdropFilter: 'blur(8px)',
      minHeight: '80vh',
      boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
      margin: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 32,
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#3bb6ff', fontWeight: 600, textDecoration: 'none', fontSize: 18 }}><FaHome /> Home</a>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#3bb6ff', fontWeight: 600, textDecoration: 'none', fontSize: 18 }}><FaSearch /> Search</a>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#3bb6ff', fontWeight: 600, textDecoration: 'none', fontSize: 18 }}><FaBook /> Your Library</a>
      </div>
      <div>
        <h4 style={{ color: '#3bb6ff', marginBottom: 12 }}>Playlists</h4>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {playlists.map((pl) => (
            <li key={pl} style={{ margin: '10px 0', color: '#222', fontWeight: 500, cursor: 'pointer' }}>{pl}</li>
          ))}
        </ul>
      </div>
    </div>
  );
} 