import { aboutMe } from "../../../data";
import ScreenHeading from "../../../utilities/SectionHeading/SectionHeading";
import "./Aboutme.css";

export default function AboutMe(){
    return(
        <div className="aboutme-wrapper">
            <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} classTitle={"transparent-heading"} />
            <div className="container">
                <div className="row container">
                    <div className="col-md-8">
                        <h2>Web Developer/Full Stack Developer</h2>
                        <p>Hey, I'm a Web Developer based in Chennai.I have over 3 years of work experience in web-development.I develop responsive websites using MERN Stack and different CMS.</p>
                        <p>I have vast knowledge on JS, C and Python technology.Always, ready to explore and keen on learning new ideas and technologies.</p>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="arrow-bulletin"></i> <strong>Birthday:</strong> <span>06 Nov 1996</span></li>
                                    <li><i className="arrow-bulletin"></i> <strong>Phone:</strong> <span>+91 8220722409</span></li>
                                    <li><i className="arrow-bulletin"></i> <strong>City:</strong> <span>Arakkonam, India</span></li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="arrow-bulletin"></i> <strong>Age:</strong> <span>25</span></li>
                                    <li><i className="arrow-bulletin"></i> <strong>Degree:</strong> <span>BE., Electronics and Instrumentation</span></li>
                                    <li><i className="arrow-bulletin"></i> <strong>Freelance:</strong> <span>Available</span></li>
                                </ul>
                            </div>
                        </div>
                        <p>An Engineer who deeps down into cricket and universe.Would love to have fun and healthy conversation on them.</p>
                    </div>
                    <div className="col-md-4">
                        {aboutMe.map((item)=>{
                            return(
                            <img src={item.image} key={item.id} className="aboutme-img-wrapper" alt="about-me" />
                            )
                        })}
                    </div>
                </div>

            </div>
        </div>
    )

}