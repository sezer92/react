import React, { useState, useEffect } from 'react';

const GitHubProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = 'https://api.github.com/users/github-john-doe';
    
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erreur lors du chargement du profil');
        }
        return response.json();
      })
      .then((data) => {
        setProfile(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>Erreur : {error}</div>;
  }

  return (
    <div className="github-profile">
      <img src={profile.avatar_url} alt="Avatar" width="150" />
      <h2>{profile.name}</h2>
      <p><strong>Nom d'utilisateur :</strong> {profile.login}</p>
      <p><strong>Bio :</strong> {profile.bio}</p>
      <p><strong>Lieu :</strong> {profile.location}</p>
      <p><strong>Repositories publics :</strong> {profile.public_repos}</p>
      <p><strong>Suiveurs :</strong> {profile.followers}</p>
      <p><strong>Suivis :</strong> {profile.following}</p>
      <a href={profile.html_url} target="_blank" rel="noopener noreferrer">
        Voir le profil GitHub
      </a>
    </div>
  );
};

export default GitHubProfile;
