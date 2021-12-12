import { skills } from "../../../data";
import "./Skills.css";

export default function Skills(){
    return(
        <div className="skill-wrapper">
            <div className="container">
                <h2 className="heading-wrapper">Skills</h2>
                <div className="skills-wrapper">
                    {skills.map((item) => {
                        return(
                        <div key={item.id} className="skills">
                            <img src={item.img} className="skillsImg" title={item.title} alt={item.title} />
                        </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}