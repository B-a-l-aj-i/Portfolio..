import Navbar from "./components/Navb/Navbar";
import Home from "./components/Home/Home";
import Contact from "./components/contact/Contact";


function App(){

    let component;

    switch(window.location.pathname){
        case '/':
             component=<Home/>
             break;
        case '/Contact':
            component=<Contact/>
            break;
              
    }
    return(
            <div>
            <Navbar/>
            {component}
            </div>
        )
    
}

export default App;