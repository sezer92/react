import React from 'react';
import './Portfolio.css'; // Assurez-vous que le fichier CSS est bien lié

// Importation des images
import bannerImg from '../assets/img/banner.jpg';
import freshFoodImg from '../assets/img/portfolio/fresh-food.jpg';
import restaurantAkiraImg from '../assets/img/portfolio/restaurant-japonais.jpg';
import espaceBienEtreImg from '../assets/img/portfolio/espace-bien-etre.jpg';

const Portfolio = () => {
  return (
    <section className="portfolio-section">
      <div className="header-img">
        {/* Utilisation de l'importation d'image */}
        <img src={bannerImg} alt="Background Blue" className="img-du-haut" />
      </div>
      <div className="container">
        <h2>Portfolio</h2>
        <p>Voici quelques-unes de mes réalisations.</p>

        {/* Structure de grille responsive avec Bootstrap */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {/* Première colonne */}
          <div className="col">
            <div className="card h-100">
              <img src={freshFoodImg} className="card-img-top" alt="Fresh Food" />
              <div className="card-body">
                <h5 className="card-title">Fresh Food</h5>
                <p className="card-text">Réalisation d'un site avec commande en ligne.</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Site réalisé avec PHP et MySQL</small>
              </div>
            </div>
          </div>

          {/* Deuxième colonne */}
          <div className="col">
            <div className="card h-100">
              <img src={restaurantAkiraImg} className="card-img-top" alt="Restaurant Akira" />
              <div className="card-body">
                <h5 className="card-title">Restaurant Akira</h5>
                <p className="card-text">Réalisation d'un site vitrine.</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Site réalisé avec WordPress</small>
              </div>
            </div>
          </div>

          {/* Troisième colonne */}
          <div className="col">
            <div className="card h-100">
              <img src={espaceBienEtreImg} className="card-img-top" alt="Espace bien-être" />
              <div className="card-body">
                <h5 className="card-title">Espace bien-être</h5>
                <p className="card-text">Réalisation d'un site vitrine pour un praticien de bien-être.</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Site réalisé en HTML/CSS</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
