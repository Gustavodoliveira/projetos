import "./footer.css"
import { AiFillFacebook } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";


function Footer () {
    return (
        <footer>
           <div class="contacts">
                <h3>Contacts</h3>
               <a href="#"> 
                  <h3><AiFillFacebook/> </h3>         
                </a>   
                <a href="#">         
                   <h3><AiFillGithub/> </h3>        
                </a> 
                <a href="#"> 
                  <h3><AiOutlineMail/> </h3>         
                </a>         
           </div>

        </footer>
    )
};

export default Footer;