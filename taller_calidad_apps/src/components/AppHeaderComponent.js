import { Component } from "react";
import logo from "../images/Logo.jpg";
import  user from "../images/Perfil.jpg";

class AppHeaderComponent extends Component{
    render(){
        return(
              <header 
                id="hd" 
                style={{
                    backgroundColor: "#7bcbd4",
                    border: "1px solid white",
                    height: "100%",
                    width: "100%",
                    
                }}>
                    <ul 
                        style={{
                            fontWeight:"600px",
                            fontSize:"20px",
                            marginTop:"3%",
                            fontSize:"20px"
                        }}>

                        <a href="CLASS">INICIO</a>&nbsp;
                        <a href="M_PEDIDAS">AS MAIS PEDIDAS</a>&nbsp;
                        <a href="G_NEW">GIRO NEWS</a>&nbsp;
                        <a href="BAIXA_CDS" > BAIXAR CDS</a>&nbsp;
                        <a href="TOP_CDS"> TOP CDS</a>
                    </ul>

                    <span class="icon" style={{marginLeft:"31%"}}><i class="fa fa-search"></i></span>
                    <input type="search" id="search" placeholder="Search" />

                    <figure style={{marginLeft: "90%", marginTop:"-60px"}}>
                    <img 
                        src={user}
                        style={{
                            marginLeft: "15%",	
                            width:"80px",
                            height:"60px"   
                        }}   
                    />  
                                             
                    <figcaption >PERFIL</figcaption>
                </figure> 
                    <figure style={{marginLeft: "79%", marginTop:"-90px"}}>
                    <img 
                        src={logo}
                        style={{
                            marginLeft:"15%",
                            width:"80px",
                            height:"60px"
                        }} 
                    />       
                    <figcaption>LOGO</figcaption>
                </figure>
             
              </header>
        );
    }
}
export default AppHeaderComponent;