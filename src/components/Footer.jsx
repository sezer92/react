import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <div className="container"> {/* Garder container pour le contenu */}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4"> {/* Responsive grid */}
          <div className="col">
            <h5>John Doe</h5>
            <p>40 Rue Laure Diebold,<br />
             69009 Lyon, France</p>
            Téléphone : 06 20 30 40 50
            <br />
            <div className='icone'>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer nofollow">
              <i className="fa-brands fa-github fa-2x"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer nofollow">
              <i className="fa-brands fa-square-twitter fa-2x"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer nofollow">
              <i className="fa-brands fa-linkedin fa-2x"></i>
            </a>
          </div>
          </div>
          <div className="col">
            <h5>Liens Utiles</h5>
            <ul className="list-unstyled">
              <li><Link to="/"><i class="fa-solid fa-chevron-right" style={{color: '#0d6efd'}}></i> Accueil</Link></li>
              <li><Link to="/services"><i class="fa-solid fa-chevron-right" style={{color: '#0d6efd'}}></i> Services</Link></li>
              <li><Link to="/contact"><i class="fa-solid fa-chevron-right" style={{color: '#0d6efd'}}></i> Me Contacter</Link></li>
              <li><Link to="/legales"><i class="fa-solid fa-chevron-right" style={{color: '#0d6efd'}}></i> Mentions Légales</Link></li>
            </ul>
          </div>
          <div className="col">
            <h5>Mes Dernières Réalisations</h5>
            <ul className="list-unstyled">
              <li><Link to="/portfolio"><i class="fa-solid fa-chevron-right" style={{color: '#0d6efd'}}></i> Fresh Food</Link></li>
              <li><Link to="/portfolio"><i class="fa-solid fa-chevron-right" style={{color: '#0d6efd'}}></i> Restaurant Akira</Link></li>
              <li><Link to="/portfolio"><i class="fa-solid fa-chevron-right" style={{color: '#0d6efd'}}></i> Espace bien-être</Link></li>
            </ul>
          </div>
          <div className="col">
            <h5>Mes Derniers Articles</h5>
            <ul className="list-unstyled">
              <li><Link to="/blog"><i class="fa-solid fa-chevron-right" style={{color: '#0d6efd'}}></i> Coder son site en HTML/CSS</Link></li>
              <li><Link to="/blog"><i class="fa-solid fa-chevron-right" style={{color: '#0d6efd'}}></i> Vendre ses produits sur le web</Link></li>
              <li><Link to="/blog"><i class="fa-solid fa-chevron-right" style={{color: '#0d6efd'}}></i> Se positionner sur Google</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container-fluid footer-copyright"> {/* Conteneur fluide pour la section "Designed by" */}
        <div className="text-center">
          <p>© Designed by John Doe</p>
        </div>
      </div>
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="scroll-top-btn">↑</button>
      )}
    </footer>
  );
};

export default Footer;
