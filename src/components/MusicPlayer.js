import React, { useRef, useState } from 'react';

const demoSong = {
  title: 'Demo Song',
  artist: 'Demo Artist',
  url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
};

export default function MusicPlayer() {
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
    <div style={{ maxWidth: 400, margin: '40px auto', padding: 20, background: '#222', color: '#fff', borderRadius: 10, textAlign: 'center' }}>
      <h2>{demoSong.title}</h2>
      <p>{demoSong.artist}</p>
      <audio
        ref={audioRef}
        src={demoSong.url}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />
      <button onClick={togglePlay} style={{ fontSize: 24, margin: '20px 0' }}>
        {isPlaying ? '⏸️ Pause' : '▶️ Play'}
      </button>
      <div style={{ height: 8, background: '#444', borderRadius: 4, margin: '20px 0' }}>
        <div style={{ width: `${progress}%`, height: '100%', background: '#1db954', borderRadius: 4 }} />
      </div>
    </div>
  );
} 