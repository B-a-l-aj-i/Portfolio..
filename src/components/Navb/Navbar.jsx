import "./Navbar.css"

function Navbar(){
    return (
        <nav id="navbar" >
           
            <div className="container">
                <div className="name">
               
                <p>  <div className="sq"> </div>  <a style={{textDecoration:"none",color:"black"}} href="https://balajimariappan.netlify.app/">BALAJI</a> <span style={{fontWeight:100,fontSize:"1.2rem",letterSpacing:"0.3rem",color:"black"}}> / Frontend Developer</span></p>
                </div>

                <div className="mobileList" > ☰

                <div className="bgg">
                <ul>
                        <a href="/" target="blank"><li>Home</li></a>
                       <a href="#Tech" style={{textDecoration:"line-through"}} target="blank"> <li>Techstack</li></a>
                        <a href="#Project" style={{textDecoration:"line-through"}} target="blank"><li>Project</li></a>
                        <a href="/contact" target="blank"><li>contact</li></a>
                    </ul>
            </div>
                </div>

                <div className="lists">
                    <ul>
                        <a href="/" target="blank"><li>Home</li></a>
                       <a href="#Tech" style={{textDecoration:"line-through"}} target="blank"> <li>Techstack</li></a>
                        <a href="#Project" style={{textDecoration:"line-through"}} target="blank"><li>Project</li></a>
                        <a href="/contact" target="blank"><li>contact</li></a>
                    </ul>
                </div>
            </div>
        </nav>
    )
    
}


export default Navbar;