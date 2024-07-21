import "./Navbar.css"

function Navbar(){
    return (
        <nav id="navbar" >
            <div className="container">
                <div className="name">
               
                <p>  <div className="sq"> </div>  BALAJI <span style={{fontWeight:100,fontSize:"1.2rem",letterSpacing:"0.3rem"}}> / Frontend Developer</span></p>
                </div>

                <div className="lists">
                    <ul>
                        <li>Home</li>
                        <li>Techstack</li>
                        <li>Project</li>
                        <li>contact</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
    
}


export default Navbar;