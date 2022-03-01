import AboutMe from "./AboutMe/AboutMe";
import Skills from "./Skills/Skills";
import Track from "./Track/Track";
import ScrollService from "../../utilities/scrollService";
import Animations from "../../utilities/Animation";


export default function About(props){

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
    
        Animations.animations.fadeInScreen(props.id);
    };
      const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    
    return(
        <div id={props.id || ""}>
            <AboutMe />
            <Track />
            <Skills />
        </div>
    )
}