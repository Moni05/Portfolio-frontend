import Home from "../components/Home/Home";
import About from "../components/About/About";
import Resume from "../components/Resume/Resume";
import Project from "../components/Project/Project";
import Contact from "../components/Contact/Contact";

export const TOTAL_SCREENS = [
    {
        screen_name: "Home",
        component: Home,
    },
    {
        screen_name: "About",
        component: About,
    },
    {
        screen_name: "Resume",
        component: Resume,
    },
    {
        screen_name: "Project",
        component: Project,
    },
    {
        screen_name: "Contact",
        component: Contact,
    },
]

export const GET_SCREEN_INDEX = (screen_name) => {
    if (!screen_name) return -1;
  
    for (let i = 0; i < TOTAL_SCREENS.length; i++) {
      if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
    }
  
    return -1;
};