import Footer from './footer'

const Home = () => {
    return (
        <div id="main">
            <div className="container">
                <div className="row">
                    <div className="col pt-5">
                        <h1 className="display-2 page-title">Alec Peters</h1>
                        <p className="text-muted">Freelance software developer and data scientist</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p className="lead">Alec is a software developer located in Portland, Oregon specializing in web development and data engineering. He is currently available for consulting work.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
