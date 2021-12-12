import "./Track.css";
import { competitiveProfile } from "../../../data";

export default function Track(){
    return(
        <div className="track-wrapper">
            <div className="container">
                <h2 className="tracker-heading">Competitive Tracks</h2>
                <div className="tracker row">
                    {competitiveProfile.map((item)=>{
                        return(
                        <a href={item.link} key={item.id} className="col-md-3" target="_blank">
                        <div id="circle">
                            <img src={item.image} alt={item.title} />
                        </div></a>
                    )
                })}
                </div>
            </div>
        </div>
        
    )
}