'use client';

import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const greetings = [
    'Salut',
    'Bonjour',
    'Bonsoir',
    'Coucou',
    'Bienvenue'
  ];

  const handleGreet = () => {
    if (name.trim()) {
      const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
      setGreeting(`${randomGreeting}, ${name}! 👋`);
    } else {
      setGreeting('Salut! 👋');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '20px'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '50px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        textAlign: 'center',
        maxWidth: '500px',
        width: '100%'
      }}>
        <h1 style={{
          fontSize: '3em',
          margin: '0 0 10px 0',
          color: '#667eea'
        }}>
          Salut! 👋
        </h1>

        <p style={{
          color: '#666',
          marginBottom: '30px',
          fontSize: '1.1em'
        }}>
          Bienvenue sur cette application de salutation
        </p>

        <input
          type="text"
          placeholder="Entrez votre nom..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleGreet()}
          style={{
            width: '100%',
            padding: '15px',
            fontSize: '1.1em',
            border: '2px solid #e0e0e0',
            borderRadius: '10px',
            marginBottom: '20px',
            boxSizing: 'border-box',
            outline: 'none',
            transition: 'border-color 0.3s'
          }}
        />

        <button
          onClick={handleGreet}
          style={{
            width: '100%',
            padding: '15px',
            fontSize: '1.1em',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'transform 0.2s, box-shadow 0.2s',
            boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)'
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.6)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)';
          }}
        >
          Me saluer
        </button>

        {greeting && (
          <div style={{
            marginTop: '30px',
            padding: '20px',
            background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            borderRadius: '10px',
            color: 'white',
            fontSize: '1.5em',
            fontWeight: 'bold',
            animation: 'fadeIn 0.5s'
          }}>
            {greeting}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
