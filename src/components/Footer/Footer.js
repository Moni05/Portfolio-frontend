import { useState, useEffect } from "react";
import ScrollService from "../../utilities/scrollService";
import { TOTAL_SCREENS, GET_SCREEN_INDEX, } from "../../utilities/commonUtils";
import "./footer.css";

export default function Footer() {

    const [selectedScreen, setSelectedScreen] = useState(0);
    const [showHeaderOptions, setShowHeaderOptions] = useState(false);

    const updateCurrentScreen = (currentScreen) => {
        if (!currentScreen || !currentScreen.screenInView) return;
    
        let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView);
        if (screenIndex < 0) return;
    };
      
    let currentScreenSubscription = ScrollService.currentScreenBroadcaster.subscribe(updateCurrentScreen);

    const getFooterOptions = () => {
        return TOTAL_SCREENS.map((Screen, i) => (
          <li
            key={Screen.screen_name}
            className={getFooterOptionsClasses(i)}
            onClick={() => switchScreen(i, Screen)}
          >
            <span>{Screen.screen_name}</span>
          </li>
        ));
    };

    const getFooterOptionsClasses = (index) => {
        let classes = "footer-nav-item ";
        if (index < TOTAL_SCREENS.length - 1) classes += "footer-nav-item-seperator ";
    
        if (selectedScreen === index) classes += "selected-footer-nav-item-option ";
    
        return classes;
    };

    const switchScreen = (index, screen) => {
        let screenComponent = document.getElementById(screen.screen_name);
        if (!screenComponent) return;
    
        screenComponent.scrollIntoView({ behavior: "smooth" });
        setSelectedScreen(index);
    };

    useEffect(() => {
        return () => {
          currentScreenSubscription.unsubscribe();
        };
    }, [currentScreenSubscription]);


    return(
    <footer className="footer">
      <div className="container p-4">
          <div className="row">
              <div className="contact-details col-md-4">
                  <p>Phone: +91 8220722409</p>
                  <p>Email: <a href="mailto:rs.monishankar96@gmail.com">rs.monishankar6@gmail.com</a></p>
                </div>
                <div className="col-md-8 social-media-wrapper container footer-icons">
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
          </div>
        <div className="text-center p-3 copyright">Copyright © 2021 Moni Shankar. All rights reserved.</div>
    </div>
    </footer>
)
}