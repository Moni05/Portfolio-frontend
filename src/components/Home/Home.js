import Navbar from "./Navbar/Navbar";
import Introduction from "./Introduction/Introduction";

export default function Home(props){

    return(
        <div id={props.id || ""}>
            <Navbar />
            <Introduction />
        </div>
    )
}