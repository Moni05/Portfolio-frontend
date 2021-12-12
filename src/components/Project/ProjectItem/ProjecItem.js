import { projects } from "../../../data";
import "./Project.css";
import ScreenHeading from "../../../utilities/SectionHeading/SectionHeading"

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
                                <div className="bottom">
                                    <ul>
                                        <li><a href={d.githubLink} className="portfolio-link" target="_blank"><i className="fa fa-github"></i></a></li>
                                        <li><a href={d.link} className="portfolio-link" target="_blank"><i className="fa fa-link"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )})}
                </div>
            </div>
        </div>
    )
}
