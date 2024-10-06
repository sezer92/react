import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';


const Footer = () => {
    return (
        <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-12 mb-4">
            <h5>John Doe</h5>
            <p>40 Rue Laure Diebold, 69009 Lyon, France</p>
            <p>Téléphone : 06 20 30 40 50</p>
            <p>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">Github</a><br />
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a><br />
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </p>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4">
            <h5>Liens Utiles</h5>
            <ul className="list-unstyled">
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Réalisations</Link></li>
              <li><Link to="/contact">Me Contacter</Link></li>
              <li><Link to="/mentions-legales">Mentions Légales</Link></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4">
            <h5>Mes Dernières Réalisations</h5>
            <ul className="list-unstyled">
              <li><Link to="/portfolio">Fresh Food</Link></li>
              <li><Link to="/portfolio">Restaurant Akira</Link></li>
              <li><Link to="/portfolio">Espace bien-être</Link></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4">
            <h5>Mes Derniers Articles</h5>
            <ul className="list-unstyled">
              <li><Link to="/blog">Coder son site en HTML/CSS</Link></li>
              <li><Link to="/blog">Vendre ses produits sur le web</Link></li>
              <li><Link to="/blog">Se positionner sur Google</Link></li>
            </ul>
            <a href="#top" className="back-to-top">↑</a>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>© Designed by John Doe</p>
        </div>
      </div>
    </footer>
  );
};
   

export default Footer;