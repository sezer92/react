import React, { useState } from 'react';
import './Contact.css'; // Assurez-vous que le fichier CSS est bien lié

const Contact = () => {
  // Définir des états pour chaque champ du formulaire
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // Fonction de soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    // Par exemple, tu peux log les données ou les envoyer à une API
    console.log({
      name,
      email,
      phone,
      subject,
      message
    });

    // Réinitialiser les champs après soumission si nécessaire
    setName('');
    setEmail('');
    setPhone('');
    setSubject('');
    setMessage('');
  };

  return (
    <section className="contact-section">
      {/* Overlay bleu transparent */}
      <div className="overlay"></div>

      <div className="container">
      <div className="card"> 
      <div className="card-body"> 
        <div className='titre'>
        <h2>ME CONTACTER</h2>
        <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
        </div>
       
            <div className="row">
              {/* Colonne du formulaire de contact */}
              <div className="col-md-6 col-12 order-md-1 order-1">
                <h3>Formulaire de contact</h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Votre nom"
                      aria-label="Votre nom"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="email"
                      placeholder="Votre adresse email"
                      aria-label="Votre adresse mail"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="tel"
                      placeholder="Votre numéro de téléphone"
                      aria-label="Votre numéro de téléphone"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Sujet"
                      aria-label="Sujet"
                      required
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control form-control-lg"
                      rows="5"
                      placeholder="Votre message"
                      aria-label="Votre message"
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="form-group button-wrapper">
                    <button type="submit" className="btn btn-primary">Envoyer</button>
                  </div>
                </form>
              </div>

              {/* Colonne des coordonnées */}
              <div className="col-md-6 col-12 order-md-2 order-2 mes-coordonnees">
                <h3>Mes coordonnées</h3>
                <p><i class="fa-solid fa-location-dot"></i>40 Rue Laure Diebold, 69009 Lyon, France</p>
                <p><i class="fa-solid fa-mobile-screen-button"></i>Téléphone : 06 20 30 40 50</p>
                
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.178911447585!2d4.810232415745957!3d45.77179911999778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4c1b9bf8e872d%3A0x4f631f660bbabb1d!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1667211794713!5m2!1sfr!2sfr"
                  width="100%"
                  height="380"
                  allowFullScreen=""
                  loading="lazy"
                  title="Google Maps"
                ></iframe>
              </div>
            </div>
          </div>
        </div> {/* Fin de la carte */}
      </div>
    </section>
  );
};

export default Contact;
