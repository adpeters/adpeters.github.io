import React from "react";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = () => {
    return (
        <div className="container page">
            <div className="row">
                <div className="col pt-5">
                    <h1 className="display-2 page-title">Alec Peters</h1>
                    <p className="text-muted">Freelance software developer and data scientist</p>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col">
                    <p className="lead">Alec is a software developer located in Portland, Oregon specializing in web development and data engineering. He is currently available for consulting work.</p>
                </div>
            </div>
            <footer className="footer row p-3">
                <div className="col-md-12">
                    <hr />
                </div>
                <div className="col-xs-1 col-sm-2 col-md-1">
                    <a href="https://github.com/adpeters" className="icon" title="Alec Peters' GitHub profile">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                        <p className="text-center">Github</p>
                    </a>
                </div>
                <div className="col-xs-1 col-sm-2 col-md-1">
                    <a href="mailto:alec.peters@gmail.com" className="icon" title="Send an email to Alec">
                        <FontAwesomeIcon icon={faEnvelope} size="2x" />
                        <p className="text-center">Email</p>
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default Home;
