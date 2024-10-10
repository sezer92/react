import React from 'react';
import './Legales.css';

const Legales = () => {
  return (
    <section className="mentions-legales-section">
      <div className="container">
        <div className='legal'>
        <h2>MENTIONS LEGALES</h2>
        </div>
        <div className="accordion" id="accordionExample">
          
          {/* Éditeur du site */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Éditeur du site
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>John Doe</strong><br />
                <i className="fa-solid fa-location-dot"></i>40 Rue Laure Diebold<br />
                69009 Lyon, France.<br />
                <i className="fas fa-phone"></i> 06 20 30 40 50<br />
                <i className="fas fa-envelope"></i> <a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Hébergeur */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Hébergeur
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>Always Data</strong><br />
                91 rue du Faubourg Saint Honoré<br />
                75008 Paris<br />
                <a href="https://www.alwaysdata.com" target="_blank" rel="noopener noreferrer">www.alwaysdata.com</a>
              </div>
            </div>
          </div>

          {/* Crédits */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Crédits
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>Crédits</strong><br />
                Site développé par John Doe, étudiant du CEF.<br />
                Les images libres de droit sont issues du site <a href="https://pixabay.com" target="_blank" rel="noopener noreferrer">Pixabay</a>.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Legales;
