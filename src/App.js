import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Obter informações do usuário ao carregar o componente
    axios.get('https://spotify-api-0ehs.onrender.com/api/user')
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error('Erro ao obter informações do usuário:', error);
      });
  }, []);

  return (
    <div>
      <h1>Spotify Playlist Manager</h1>
      {user ? (
        <div>
          <p>Logged in as: {user.displayName}</p>
          {/* Implemente a interação com a playlist aqui */}
        </div>
      ) : (
        <p>Please <a href="https://spotify-api-0ehs.onrender.com/auth/spotify">login</a> to manage your playlists.</p>
      )}
    </div>
  );
}

export default App;
