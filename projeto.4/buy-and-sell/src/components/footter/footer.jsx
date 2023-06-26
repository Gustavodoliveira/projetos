import "./footer.css"
import { AiFillFacebook } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";


function Footer () {
    return (
        <footer>
           <div className="contacts">
                <h3>Contacts</h3>
               <a href="#"> 
                  <h3><AiFillFacebook/> </h3>         
                </a> <span>Facebook</span>  
                <a href="#">         
                   <h3><AiFillGithub/> </h3>        
                </a> <span>Github</span>
                <a href="#"> 
                  <h3><AiOutlineMail/> </h3>         
                </a>  <span>Email</span>       
           </div>
           <div className="email">
               <h4>App@email.com </h4>
               <span>2023</span>
           </div>
        </footer>
    )
};

export default Footer;