import Navbar from "./components/Navb/Navbar";
import Home from "./components/Home/Home";
import Contact from "./components/contact/Contact";
import Project from "./components/Project/Project";
import TechStack from "./components/Techstack/Techstack";

function App(){

    let component;

    switch(window.location.pathname){
        case "/":
             component=<Home/>
             break;
        case "/contact":
            component=<Contact/>
            break;
        case "/Tech":
            component=<TechStack/>
            break;
        case "/Project":
            component=<Project/>
            break;   
        default:
            component=<Home/>
              
    }
    console.log(component);
    return(
            <div>
            <Navbar/>
            {component}
            </div>
        )
    
}

export default App;