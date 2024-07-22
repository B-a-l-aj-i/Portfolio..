import "./Home.css"
import pic  from "../Home/unnamed.png"

function Home(){
    return (
        <main className="main">
        <div className="bg">

        </div>
            <div className="card">

                <div className="pic">

                <div><img className="prof" alt="profile" src={pic} width={"200px"}  height={"200px"} /></div>

                <center>
                <p style={{fontSize:"2rem",fontWeight:690,marginTop:"2px"}} >Balaji<br/>Mariappan</p>
                </center>                

                <div className="line"></div>

                <span style={{fontWeight:100,fontSize:"1.2rem",letterSpacing:"0.3rem",marginTop:"20px"}}>FrontendDeveloper</span>
                
                </div>

                <div className="desc">
                        <div>
                            <p style={{margin:0}}>Hello</p>
                            <p style={{marginTop:"1rem",fontSize:"1.5rem",fontWeight:600}}>Here's who I am & what I do</p>
                        </div>

                        <div className="btns">
                            <button>Resume</button>
                            <button className="projectbtn">Projects</button>
                        </div>

                        <div className="obj">
                        I am an aspiring Frontend developer with a passion for creating user-friendly websites
                         and I Love to leverage my skills and implement my knowledge in the real world
                        </div>
                </div>

            </div>
           
                <div className="sidebar">
                <a href="https://www.linkedin.com/in/balaji-m-400bb4249/" target="blank" >      <svg  xmlns="http://www.w3.org/2000/svg" width="2.2rem" height="2.2rem" viewBox="0 0 24 24"><path fill="white" fill-rule="evenodd" d="M9.429 8.969h3.714v1.85c.535-1.064 1.907-2.02 3.968-2.02c3.951 0 4.889 2.118 4.889 6.004V22h-4v-6.312c0-2.213-.535-3.461-1.897-3.461c-1.889 0-2.674 1.345-2.674 3.46V22h-4zM2.57 21.83h4V8.799h-4zM7.143 4.55a2.53 2.53 0 0 1-.753 1.802a2.573 2.573 0 0 1-1.82.748a2.59 2.59 0 0 1-1.818-.747A2.548 2.548 0 0 1 2 4.55c0-.677.27-1.325.753-1.803A2.583 2.583 0 0 1 4.571 2c.682 0 1.336.269 1.819.747c.482.478.753 1.126.753 1.803" clip-rule="evenodd"/></svg>  </a>
                
                <a href="https://github.com/B-a-l-aj-i" target="blank"><svg xmlns="http://www.w3.org/2000/svg" width="2.2rem" height="2.2rem" viewBox="0 0 24 24"><path fill="white" d="M20.116 5.901a3.883 3.883 0 0 0-.26-.31a4.413 4.413 0 0 0 .21-.76a5.284 5.284 0 0 0-.35-2.8s-1.12-.35-3.69 1.38a12.477 12.477 0 0 0-3.35-.45a12.604 12.604 0 0 0-3.36.45c-2.57-1.75-3.69-1.38-3.69-1.38a5.263 5.263 0 0 0-.35 2.77a4.21 4.21 0 0 0 .22.79c-.09.1-.18.21-.26.31a5.14 5.14 0 0 0-1.12 3.3a7.686 7.686 0 0 0 .04.85c.32 4.43 3.27 5.46 6.08 5.78a2.558 2.558 0 0 0-.77 1.39a4.022 4.022 0 0 0-.13 1.09v1.31c-1.119.1-2.267-.063-2.623-1.061a5.695 5.695 0 0 0-1.834-2.413a1.179 1.179 0 0 1-.17-.112a1.001 1.001 0 0 0-.93-.645h-.005a1 1 0 0 0-1 .995c-.003.812.81 1.337 1.143 1.515a4.466 4.466 0 0 1 .923 1.359c.364 1.023 1.429 2.578 4.466 2.376l.002.098l.004.268a1 1 0 0 0 1 1h4.714a1 1 0 0 0 1-1s.008-3.16.008-3.69a4.024 4.024 0 0 0-.13-1.09l-.002-.006l.004.006c-.009-.035-.022-.063-.032-.097a2.532 2.532 0 0 0-.74-1.293l.012.021l-.02-.02c2.81-.32 5.74-1.37 6.06-5.78a7.687 7.687 0 0 0 .04-.85a5.23 5.23 0 0 0-1.11-3.3Z"/></svg>
</a>
                </div>



                <footer className="footer">
                <div>
                <div className="info">
                        <p style={{fontWeight:700}}>Call</p>
                        <p>+91 8015219775</p>
                    </div>

                    <div className="info">
                        <p  style={{fontWeight:700}}>Write</p>
                        <p>connectbalajidev@gmail.com</p>
                    </div>

                    <div className="info lin" >
                        <p  style={{fontWeight:700}}>Follow</p>
                        <p>
                        <a href="https://www.linkedin.com/in/balaji-m-400bb4249/" target="blank" >      <svg  xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24"><path fill="black" fill-rule="evenodd" d="M9.429 8.969h3.714v1.85c.535-1.064 1.907-2.02 3.968-2.02c3.951 0 4.889 2.118 4.889 6.004V22h-4v-6.312c0-2.213-.535-3.461-1.897-3.461c-1.889 0-2.674 1.345-2.674 3.46V22h-4zM2.57 21.83h4V8.799h-4zM7.143 4.55a2.53 2.53 0 0 1-.753 1.802a2.573 2.573 0 0 1-1.82.748a2.59 2.59 0 0 1-1.818-.747A2.548 2.548 0 0 1 2 4.55c0-.677.27-1.325.753-1.803A2.583 2.583 0 0 1 4.571 2c.682 0 1.336.269 1.819.747c.482.478.753 1.126.753 1.803" clip-rule="evenodd"/></svg>
                        </a>
                        </p>
                    </div>
               </div>
                </footer>
        </main>
    )
}


export default Home;