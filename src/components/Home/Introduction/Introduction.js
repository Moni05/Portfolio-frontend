import "./Introduction.css";

export default function Introduction(){
    return(
        <div className="introduction-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="intro">
                            <h3 className="salutation">Hey there,</h3>
                            <p className="intro-text">I am <span className="name">Moni Shankar</span>, I am Full-Stack JavaScript Developer. I like to make digital experiences easier and simpler for people.</p>
                            <div className="social-media-wrapper">
                                <div className="social-icon">
                                    <a href="https://www.linkedin.com/in/moni-shankar-r-s/" target="_blank" className="field-social-media-wrap linkedin">
                                        <span className="fa fa-linkedin"></span>
                                    </a>
                                </div>
                                <div className="social-icon">
                                    <a href="https://github.com/Moni05" target="_blank" className="field-social-media-wrap github">
                                        <span className="fa fa-github"></span>
                                    </a>
                                </div>
                                <div className="social-icon">
                                    <a  href="mailto:rs.monishankar96@gmail.com" target="_blank" className="field-social-media-wrap envelope">
                                        <span className="fa fa-envelope"></span>
                                    </a>
                                </div>
                            </div>
                            <a href="https://drive.google.com/file/d/1Zcy6LReYb4qxCWhFE5hWFYPXq5kYYFSQ/view?usp=sharing" target="_blank"><button className="btn highlighted-btn">Get Resume</button></a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src="https://firebasestorage.googleapis.com/v0/b/mern-project-images.appspot.com/o/freecodeformat.svg?alt=media&token=974b2be1-eac8-45ff-894c-4bec2a0970a3" className="home-banner" alt="img"/>
                    </div>
                </div>
            </div>
        </div>
    );
}