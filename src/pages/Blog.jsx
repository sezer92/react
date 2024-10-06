import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';

// Importation des images
import bannerImg from '../assets/img/banner.jpg';
import coderImg from '../assets/img/blog/coder.jpg';
import croissanceImg from '../assets/img/blog/croissance.jpg';
import googleImg from '../assets/img/blog/google.jpg';
import reactImg from '../assets/img/blog/screens.jpg';
import ecommerceImg from '../assets/img/blog/technos.png';
import seoImg from '../assets/img/blog/seo.jpg';

const Blog = () => {
    return (
        <section className='blog-section'>
            <div className='header-img'>
                {/* Utilisation de l'image importée */}
                <img src={bannerImg} alt="Background Blue" className="img-du-haut" />
            </div>
            <div className='container-blog'>
                <h2>Blog</h2>
                <p>Retrouvez ici quelques articles sur le développement web.</p>

                {/* Ajout des 6 cartes dans la grille */}
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100">
                            {/* Utilisation de l'image importée */}
                            <img src={coderImg} className="card-img-top" alt="Coder son site en HTML/CSS" />
                            <div className="card-body">
                                <h5 className="card-title">Coder son site en HTML/CSS</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link className="btn btn-primary" to="/Blog">Lire la suite</Link>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Publié le 22 août 2022</small>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100">
                            {/* Utilisation de l'image importée */}
                            <img src={croissanceImg} className="card-img-top" alt="Vendre ses produits sur le web" />
                            <div className="card-body">
                                <h5 className="card-title">Vendre ses produits sur le web</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link className="btn btn-primary" to="/Blog">Lire la suite</Link>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Publié le 20 août 2022</small>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100">
                            {/* Utilisation de l'image importée */}
                            <img src={googleImg} className="card-img-top" alt="Se positionner sur Google" />
                            <div className="card-body">
                                <h5 className="card-title">Se positionner sur Google</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link className="btn btn-primary" to="/Blog">Lire la suite</Link>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Publié le 1 août 2022</small>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100">
                            {/* Utilisation de l'image importée */}
                            <img src={reactImg} className="card-img-top" alt="Introduction à React" />
                            <div className="card-body">
                                <h5 className="card-title">Coder en responsive design</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link className="btn btn-primary" to="/Blog">Lire la suite</Link>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Publié le 31 juillet 2022</small>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100">
                            {/* Utilisation de l'image importée */}
                            <img src={seoImg} className="card-img-top" alt="Créer une boutique en ligne" />
                            <div className="card-body">
                                <h5 className="card-title">Technique de référencement</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link className="btn btn-primary" to="/Blog">Lire la suite</Link>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Publié le 30 juillet 2022</small>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100">
                            {/* Utilisation de l'image importée */}
                            <img src={ecommerceImg} className="card-img-top" alt="Optimisation SEO avancée" />
                            <div className="card-body">
                                <h5 className="card-title">Optimisation SEO avancée</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link className="btn btn-primary" to="/Blog">Lire la suite</Link>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Publié le 12 juillet 2022</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;
