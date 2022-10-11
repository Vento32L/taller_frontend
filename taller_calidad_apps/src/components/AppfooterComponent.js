import {Component}  from "react";

class AppFooterComponent extends Component{
    render(){
        return(
            <footer
            style={{
                height:"200px",
                backgroundColor: "#F0F3F4",
                textAlign: "right",
                fontSize: "15px",
            }}>
                

            <div style = { {marginTop:"52%"}}>
                <p >
                    <br></br>
                    <h4>Creada por: Vento Jimenez</h4>
                    <h4>Numero telefono: 3219646543</h4>
                    <h4>Correo: vento@gmail.com</h4>
                    <h4>Dirección: Calle 34A sur #97F-41</h4>
                    
                </p> 
                
            </div> 
        </footer>
        );
    
    }
}

export default AppFooterComponent;