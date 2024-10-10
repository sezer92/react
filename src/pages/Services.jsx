import React from 'react';
import './Services.css'; // Fichier CSS lié
import bannerImg from '../assets/img/banner.jpg'; // Assurez-vous que le chemin de l'image est correct

const Services = () => {
  return (
    <section className="services-section">
      {/* Section avec image de fond pleine largeur */}
      <div className="img-container">
        <img src={bannerImg} alt="Background Blue" className="img-du-haut" />
      </div>
      <div className="container">

        <h2>Mon Offre de Services</h2>
        <p id='para'>Voici les prestations sur lesquelles je peux intervenir.</p>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100 text-center">
              <div className="card-body">
                <i className="fas fa-laptop-code fa-3x mb-3 service-icon"></i>
                <h5 className="card-title">UX Design</h5>
                <p className="card-text">
                  UX Design est une méthode de conception centrée sur
                  l'utilisateur. Son but est d'offrir une expérience de
                  navigation optimale à l'internaute.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 text-center">
              <div className="card-body">
                <i className="fas fa-code fa-3x mb-3 service-icon"></i>
                <h5 className="card-title">Développement Web</h5>
                <p className="card-text">
                  Le développement de sites web repose sur l'utilisation des
                  langages HTML, CSS, JavaScript et PHP.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 text-center">
              <div className="card-body">
                <i className="fas fa-search fa-3x mb-3 service-icon"></i>
                <h5 className="card-title">Référencement</h5>
                <p className="card-text">
                  Le référencement naturel d'un site, aussi appelé SEO,
                  consiste à améliorer sa position dans les résultats des
                  moteurs de recherche.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
