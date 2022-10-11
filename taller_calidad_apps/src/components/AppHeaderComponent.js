import { Component } from "react";
import logo from "../images/Logo.jpg";
import  user from "../images/Perfil.jpg";

class AppHeaderComponent extends Component{
    render(){
        return(
            <div  
                id="contenedor" 
                style={{
                backgroundColor: "#b3b3b3",
                minHeight: "100vh",
                fontSize: "calc(10px + 2vmin)"
                }}>
              <header 
                id="hd" 
                style={{
                    backgroundColor: "lightblue",
                    border: "1px solid black",
                    minHeight: "50px",
                    marginLeft:"5%",
                    marginRight:"10%",
                    width:"80%"
                }}>
                    <ul>
                         <a href="CLASS">INICIO</a>&nbsp;
                        <a href="PUBLICIDAD">PUBLICIDAD</a>&nbsp;
                        <a href="CONTACTO">CONTACTO</a>&nbsp;
                        <a href="GALERIA">GALERIA</a>&nbsp;
                        <a href="PRODUCTOS">PRODUCTOS</a>
                    </ul>

                    <span class="icon" style={{marginLeft:"31%"}}><i class="fa fa-search"></i></span>
                    <input type="search" id="search" placeholder="Search" />

                    <figure style={{marginLeft: "90%", marginTop:"-60px"}}>
                    <img 
                        src={user}
                        style={{
                            marginLeft: "5%",	
                            width:"45px",
                            height:"45px"   
                        }}   
                    />  
                                             
                    <figcaption>PERFIL</figcaption>
                </figure> 
                    <figure style={{marginLeft: "90%"}}>
                    <img 
                        src={logo}
                        style={{
                            left:"40%",
                            width:"30px",
                            height:"30px"
                        }} 
                    />       
                    <figcaption>PERFIL</figcaption>
                </figure>
             
              </header>
            </div>
        )
    }
}
export default AppHeaderComponent;