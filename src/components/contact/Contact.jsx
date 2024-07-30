 
import React from "react";


 
 import "./Contact.css"
 function Contact() {
    const [result, setResult] = React.useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "bf486903-4b8f-43c8-a1eb-30dce988e8e8");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
    return (
      <div   id="contact">
      <center><p style={{color:"black",fontSize:"2.5rem"}}>Send me a message!</p></center>
       <section className="contact">
          <div>
        <form onSubmit={onSubmit} >
        <div className="contact-ips">
          <input type="text" name="name" required placeholder="Enter-your-name"/>
          <input type="email" name="email" required placeholder="Enter-your-email"/>
          </div>
          <div className="ips">
          <textarea name="message" required placeholder="description"></textarea>
              <center> <button type="submit" className="sbtn">Submit</button></center>  
        <span>{result}</span>
          </div>
          
  
        </form>
        </div>
       </section>
      </div>
    );
  }


  export default Contact