import { useState, useEffect } from "react";
import ScrollService from "../../../utilities/scrollService";
import { TOTAL_SCREENS, GET_SCREEN_INDEX, } from "../../../utilities/commonUtils";
import "./Navbar.css";

export default function Navbar(){

    const [selectedScreen, setSelectedScreen] = useState(0);
    const [showHeaderOptions, setShowHeaderOptions] = useState(false);

    const updateCurrentScreen = (currentScreen) => {
        if (!currentScreen || !currentScreen.screenInView) return;
    
        let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView);
        if (screenIndex < 0) return;
    };
      
    let currentScreenSubscription = ScrollService.currentScreenBroadcaster.subscribe(updateCurrentScreen);

    const getHeaderOptions = () => {
        return TOTAL_SCREENS.map((Screen, i) => (
          <li
            key={Screen.screen_name}
            className={getHeaderOptionsClasses(i)}
            onClick={() => switchScreen(i, Screen)}
          >
            <span>{Screen.screen_name}</span>
          </li>
        ));
    };

    const getHeaderOptionsClasses = (index) => {
        let classes = "nav-item ";
        if (index < TOTAL_SCREENS.length - 1) classes += "nav-item-seperator ";
    
        if (selectedScreen === index) classes += "selected-nav-item-option ";
    
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

    const [isScrolled, setIsScrolled] =  useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset===0? false: true);
        return () => (window.onscroll=null);
    };



    return(
        <nav className={isScrolled? "navbar navbar-expand-md navbar-dark fixed-top site-header scrolled" : "navbar navbar-expand-md navbar-dark fixed-top site-header " }>
            <div className="container">
            <a className="navbar-brand site-name" href="/"> Moni Shankar</a>
            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse" id="navbarCollapse">
                <ul className="navbar-nav ml-auto">
                    {getHeaderOptions()}
                </ul>
      </div>
      </div>
    </nav>
    )
}