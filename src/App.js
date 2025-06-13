import React from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import AlbumGrid from './components/AlbumGrid';
import PlayerBar from './components/PlayerBar';

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #e0f7ff 0%, #3bb6ff 100%)',
      fontFamily: 'Inter, Arial, sans-serif',
      position: 'relative',
      paddingBottom: 100,
    }}>
      <Topbar />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Sidebar />
        <div style={{ flex: 1, margin: '16px 16px 0 0' }}>
          <AlbumGrid />
        </div>
      </div>
      <PlayerBar />
    </div>
  );
}

export default App;
