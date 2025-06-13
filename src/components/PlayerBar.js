import React, { useRef, useState } from 'react';
import { FaPlay, FaPause, FaStepForward, FaStepBackward } from 'react-icons/fa';

const demoSong = {
  title: 'Demo Song',
  artist: 'Demo Artist',
  url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
};

export default function PlayerBar() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const current = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    setProgress((current / duration) * 100);
  };

  return (
    <div style={{
      position: 'fixed',
      left: 0,
      bottom: 0,
      width: '100%',
      background: 'linear-gradient(90deg, #3bb6ff 0%, #aeefff 100%)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px 0',
      boxShadow: '0 -2px 12px rgba(59,182,255,0.08)',
      zIndex: 100,
    }}>
      <audio
        ref={audioRef}
        src={demoSong.url}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />
      <div style={{ display: 'flex', alignItems: 'center', gap: 24, width: 400 }}>
        <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=facearea&w=80&h=80" alt="Album Cover" style={{ width: 56, height: 56, borderRadius: 8, objectFit: 'cover', boxShadow: '0 2px 8px rgba(0,0,0,0.12)' }} />
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 600, fontSize: 16 }}>{demoSong.title}</div>
          <div style={{ fontSize: 14, color: '#e0f7ff' }}>{demoSong.artist}</div>
          <div style={{ height: 6, background: '#e0f7ff', borderRadius: 3, marginTop: 8 }}>
            <div style={{ width: `${progress}%`, height: '100%', background: '#fff', borderRadius: 3 }} />
          </div>
        </div>
        <button onClick={togglePlay} style={{ background: 'none', border: 'none', color: '#fff', fontSize: 28, cursor: 'pointer' }}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <button style={{ background: 'none', border: 'none', color: '#fff', fontSize: 22, cursor: 'pointer' }}><FaStepBackward /></button>
        <button style={{ background: 'none', border: 'none', color: '#fff', fontSize: 22, cursor: 'pointer' }}><FaStepForward /></button>
      </div>
    </div>
  );
} 