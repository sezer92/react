import React from 'react';
import './Accueil.css';


const Accueil = () => {
    return (
        <section className='accueil'>
            <div className='overlay'>
                <div className='conatiner accueil-content'>
                    <h1>Bienvenue, je suis John Doe</h1>
                    <h2>Développeur Web Full Stack</h2>
                    <a href="#about" className="btn btn-primary">En savoir plus</a>
                </div>
            </div>
            <section id="#about">
                <div className='container about-section'>
                    <h3>A propos</h3>
                    <p>
                     Passionné par l"informatique et les nouvelles technologies, j'ai suivi une formation d'<strong>intégrateur-développeur web</strong> au CEF. Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le domaine du <strong>développement web.</strong> <br />
                     Basé à Lyon, je suis à la recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de <strong>développeur web full stack.</strong> <br />
                     J'accorde une attention particulière à la qualité du code que j'écris et je respect les bonnes pratiques du web.
                    </p>
                    <div className="row">
                    {/* Section "À propos" */}
                    <div className="col-md-6 col-sm-12">
                    <img src="/src/assets/img/john-doe-about.jpg" alt="John Doe" className="img-fluid"/>
                    </div>

                    {/* Section "Compétences" */}
                    <div className="col-md-6 col-sm-12">
                    <h3>Mes Compétences</h3>

                    {/* HTML5 Progress */}
                    <p>HTML5 90%</p>
                    <div className="progress">
                    <div className="progress-bar bg-success" role="progressbar" aria-label="Success example" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>

                    {/* CSS3 Progress */}
                    <p>CSS3 80%</p>
                    <div className="progress">
                    <div className="progress-bar bg-info" role="progressbar" aria-label="Info example" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>

                    {/* JavaScript Progress */}
                    <p>JavaScript 70%</p>
                    <div className="progress">
                    <div className="progress-bar bg-warning" role="progressbar" aria-label="Warning example" style={{ width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>

                    {/* React Progress */}
                    <p>React 50%</p>
                    <div className="progress">
                    <div className="progress-bar bg-danger" role="progressbar" aria-label="Danger example" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
               </div>
              </div>     
             </div>
            </section>
        </section>
    )
}

export default Accueil;