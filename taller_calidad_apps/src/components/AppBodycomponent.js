import React, {Component} from "react";
import imagen1 from "../images/imagen1.jpg";
import imagen2 from "../images/imagen2.jpg";

class AppBodyComponent extends Component {
    render(){
        return(
            <body>
                <div 
            style={{
                backgroundColor: "#F4F6F7",
                height: "110%",
                width: "100%",
                position: "absolute"  
            }}>
                <h1 class="title" 
                    style={{
                        color: "#FF33C4",
                        textAlign: "center"
                    }}>
                    GIRO 95
                </h1>
            <div
                style={{ 
                        float: "left",
                        backgroundColor: "#CE33FF", 
                        height: "80%",
                        width: "40%",
                        marginLeft: "3%",
                        }}
                >
                <h1 class="title" 
                    style={{
                        fontfamily: 'Times New Roman, Times, serif',
                        color: "#200229 ",
                        fontfamily: "calibri-bold",
                        textAlign: "center"
                    }}>
                    GIRO DANCE<br></br>
                </h1>

                <figure style={{marginLeft: "-8%", marginTop:"25%"}}>
                    <img 
                        src={imagen1}
                        style={{
                            textAlign: "center",
                            float: "left",
                            marginLeft: "15%",	
                            width:"250px",
                            height:"300px"                         
                        }} 
                    />  
                </figure>
            </div>
            <div
            style={{ 
                    float: "left",
                    backgroundColor: "#CE33FF", 
                    height: "80%",
                    width: "40%",
                    marginLeft: "14%",
                    }}>
                    <h1 class="title" 
                    style={{
                        fontfamily: 'Times New Roman, Times, serif',
                        color: "#200229 ",
                        fontfamily: "calibri-bold",
                        textAlign: "center"
                    }}>
                   TOP DANCE<br></br>
                </h1>
            <figure style={{marginLeft: "5%", marginTop:"25%"}}>
                <img 
                    src={imagen2}
                        style={{
                            float: "left",
                            marginLeft: "15%",	
                            width:"280px",
                            height:"300px" 
                        }} 
                        
                /> 
                    
    
            </body>
        );
    }}

export default AppBodyComponent;

