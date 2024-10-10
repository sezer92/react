import React from 'react';
import './Accueil.css';
import JohnDoeAbout from '../assets/img/john-doe-about.jpg'; // Assurez-vous que l'image est bien dans ce dossier

const Accueil = () => {
  return (
    <section className="accueil-section">
      {/* Section avec l'image de fond */}
      <div className="hero-section">
        <div className="overlay">
          <div className="container accueil-content">
            <h1>Bonjour, je suis John Doe</h1>
            <h2>Développeur Web Full Stack</h2>
            <a href="#about" className="btn btn-primary">En savoir plus</a>
          </div>
        </div>
      </div>

      {/* Section À propos */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="card">
            <div className="card-body">
              <div className="row">
                {/* Colonne gauche - À propos */}
                <div className="col-lg-6 col-md-12 about-info">
                  <h3>À propos</h3> <br />
                  <p>
                    Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation d'<strong>intégrateur-développeur web</strong> au CEF. 
                    Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le domaine du <strong>développement web</strong>.
                    <br />
                    Basé à Lyon, je suis à la recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de <strong>développeur web full stack</strong>.
                    <br />
                    J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.
                  </p>
                </div>

                {/* Colonne droite - Image en haut et compétences en bas */}
                <div className="col-lg-6 col-md-12 about-image-skills">
                  <img src={JohnDoeAbout} className="about-image img-fluid" alt="John Doe" />
                  <h3>Mes Compétences</h3>
                  <div className="skill-wrapper">
                    <p>HTML5 - 90%</p>
                    <div className="progress mb-3">
                      <div className="progress-bar bg-success" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div className="skill-wrapper">
                    <p>CSS3 - 80%</p>
                    <div className="progress mb-3">
                      <div className="progress-bar bg-info" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div className="skill-wrapper">
                    <p>JavaScript - 70%</p>
                    <div className="progress mb-3">
                      <div className="progress-bar bg-warning" role="progressbar" style={{ width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div className="skill-wrapper">
                    <p>React - 50%</p>
                    <div className="progress mb-3">
                      <div className="progress-bar bg-danger" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Accueil;
