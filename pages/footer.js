import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <div className="container py-3">
                <div className="row">
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
                </div>
            </div>
        </footer>
    );
};

export default Footer;
