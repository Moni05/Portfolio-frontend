import React from "react";
import ScrollService from "../../utilities/scrollService";
import Animations from "../../utilities/Animation";
import ContactMe from "./ContactMe/ContactMe";
import Footer from "../Footer/Footer";

export default function Contact(props){

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
    
        Animations.animations.fadeInScreen(props.id);
    };
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    return(
        <div id={props.id || ""}>
            <ContactMe />
            <Footer />
        </div>
    )

}