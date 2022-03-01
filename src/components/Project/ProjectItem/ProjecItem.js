import { projects } from "../../../data";
import "./Project.css";
import ScreenHeading from "../../../utilities/SectionHeading/SectionHeading"
import Accordion from "../../Accordion/Accordion";

export default function ProjectItem(){
    return(
        <div className="project-items">
            <div className="container">
                <ScreenHeading title={"Projects"} subHeading={"Full Stack Projects"} classTitle={"transparent-heading"}/>
                <div className="project-wrapper row">
                    {projects.map((d) => {
                        return(
                        <div className="col-lg-4" key={d.id}>
                            <div className="project-card">
                                <div className="top">
                                    <img className="img-fluid" src={d.image} alt="" />
                                </div>
                                <div className="center">
                                    <h2 className="title">{d.title}</h2>
                                    <p>{d.desc}</p>
                                </div>
                                <div className="accordion">
                                    {<Accordion title={d.accordionTitle} content={d.accordionBody} />}
                                </div>
                                <div className="bottom-one">
                                    <div className="row tech-stacks">
                                           <div className="col-lg-6">
                                            <p className="stack-title">Frontend</p>
                                            <ul>
                                                <li><a target="_blank" href={d.githubFrontendLink} className="portfolio-link"><i className="fa fa-github"></i></a></li>
                                                <li><a target="_blank" href={d.frontendLink} className="portfolio-link"><i className="fa fa-link"></i></a></li>
                                            </ul>
                                            </div>
                                            <div className="col-lg-6">
                                            <p className="stack-title">Backend</p>
                                            <ul>
                                                <li><a target="_blank" href={d.githubBackendLink} className="portfolio-link"><i className="fa fa-github"></i></a></li>
                                                <li><a target="_blank" href={d.backendLink} className="portfolio-link"><i className="fa fa-link"></i></a></li>
                                            </ul>
                                            </div>
                                    </div>
                                </div>
                                <div className="bottom-two">
                                    <p className="credential-title">Credentials</p>
                                <div className="row credentials">
                                          {d.credentials ? <>
                                            <div className="col-lg-6">
                                            <p className="user-type">Test User</p>
                                            <ul>
                                               <li>{d.userMail}</li>
                                               <li>{d.userPassword}</li>
                                            </ul>
                                            </div>
                                            <div className="col-lg-6">
                                            <p className="user-type">Admin User</p>
                                            <ul>
                                                <li>{d.adminMail}</li>
                                                <li>{d.adminPassword}</li>
                                            </ul>
                                            </div>
                                          </> :<p className="credential-title">Login using Gmail since it uses Google OAuth</p>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    )})}
                </div>
            </div>
        </div>
    )
}