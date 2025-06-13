import React from 'react';

const albums = [
  {
    title: 'Scorpion',
    artist: 'Drake',
    cover: 'https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg',
  },
  {
    title: 'Take Care',
    artist: 'Drake',
    cover: 'https://upload.wikimedia.org/wikipedia/en/7/7e/Drake_-_Take_Care_cover.jpg',
  },
  {
    title: 'Nothing Was the Same',
    artist: 'Drake',
    cover: 'https://upload.wikimedia.org/wikipedia/en/9/98/Drake_-_Nothing_Was_the_Same_cover.png',
  },
  {
    title: 'PARTYNEXTDOOR 3 (P3)',
    artist: 'PARTYNEXTDOOR',
    cover: 'https://upload.wikimedia.org/wikipedia/en/2/2e/PartyNextDoor_-_P3.png',
  },
  {
    title: 'PARTYMOBILE',
    artist: 'PARTYNEXTDOOR',
    cover: 'https://upload.wikimedia.org/wikipedia/en/2/2e/PartyNextDoor_-_Partymobile.png',
  },
  {
    title: "If You're Reading This It's Too Late",
    artist: 'Drake',
    cover: 'https://upload.wikimedia.org/wikipedia/en/7/70/Drake_-_If_You%27re_Reading_This_It%27s_Too_Late.png',
  },
];

export default function AlbumGrid() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
      gap: 32,
      padding: 32,
      overflowY: 'auto',
      maxHeight: '60vh',
      background: 'rgba(255,255,255,0.08)',
      borderRadius: 20,
      boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
    }}>
      {albums.map((album) => (
        <div key={album.title} style={{ background: '#fff', borderRadius: 12, padding: 16, boxShadow: '0 2px 8px rgba(59,182,255,0.08)', textAlign: 'center' }}>
          <img src={album.cover} alt={album.title} style={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: 8, marginBottom: 12 }} />
          <div style={{ fontWeight: 600, color: '#3bb6ff', fontSize: 16 }}>{album.title}</div>
          <div style={{ color: '#222', fontSize: 14 }}>{album.artist}</div>
        </div>
      ))}
    </div>
  );
} 