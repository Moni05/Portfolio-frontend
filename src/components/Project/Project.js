import ProjectItem from "./ProjectItem/ProjecItem";
import ScrollService from "../../utilities/scrollService";
import Animations from "../../utilities/Animation";


export default function Project(props) {

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
    
        Animations.animations.fadeInScreen(props.id);
    };
      
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    return(
        <>
        <div id={props.id || ""}>
            <ProjectItem />
        </div>
        </>
    )
}