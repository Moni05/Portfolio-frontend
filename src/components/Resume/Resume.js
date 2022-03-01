import { education, internship, workExperience, achievements, career } from "../../data";
import "./Resume.css"
import ScrollService from "../../utilities/scrollService";
import Animations from "../../utilities/Animation";
import ScreenHeading from "../../utilities/SectionHeading/SectionHeading";

export default function Resume(props){

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
    
        Animations.animations.fadeInScreen(props.id);
    };
      const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    return(
        <>
        <div id={props.id || ""}>
            <div className="resume-wrapper">
               <ScreenHeading title={"Resume"} subHeading={"My Bio Details"} classTitle={"heading"} />
                <div className="container">
                    <div className="row container">
                        <div className="col-md-6">
                            <h2>Career Objective</h2>
                            {career.map((item) => {
                                return(
                                <div className="career-item" key={item.id}>
                                    <p>{item.description}</p>
                                </div>
                                )
                            })}
                            <h2>Education</h2>
                            {education.map((item) => {
                                return(
                                <div className="education-item" key={item.id}>
                                    <h4>{item.course}</h4>
                                    <h5 className="fa fa-calendar calendar-container">{item.fromDate + "-" + item.toDate}</h5>
                                    <p className="text">{item.institute}</p>
                                    <p>{item.percentage}</p>
                                </div>
                                )
                            })}
                            <h2>Awards and achievements</h2>
                            {achievements.map((item) => {
                                return(
                                <div className="awards-item" key={item.id}>
                                    <h4>{item.title}</h4>
                                    <h5 className="fa fa-calendar calendar-container">{item.fromDate + "-" + item.toDate}</h5>
                                    <p>{item.description}</p>
                                </div>
                                )
                            })}
                        </div>
                        <div className="col-md-6">
                            <h2>Work Experience</h2>
                            {workExperience.map((item) => {
                                return(
                                <div className="internship-item" key={item.id}>
                                    <h4>{item.title}</h4>
                                    <h5 className="fa fa-calendar calendar-container">{item.fromDate + "-" + item.toDate}</h5>
                                    <p>{item.description}</p>
                                </div>
                                )
                            })}
                            <h2>Internship</h2>
                            {internship.map((item) => {
                                return(
                                <div className="internship-item" key={item.id}>
                                    <h4>{item.title}</h4>
                                    <h5 className="fa fa-calendar calendar-container">{item.fromDate + "-" + item.toDate}</h5>
                                    <p>{item.description}</p>
                                </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

            </div>

        </div>
        </>
    );
}