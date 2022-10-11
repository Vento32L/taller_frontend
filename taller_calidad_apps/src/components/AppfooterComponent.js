import {Component}  from "react";

class AppFooterComponent extends Component{
    render(){
        return(
            <div>
                <footer 
                style={{
                    height:"75px",
                    backgroundImage: "url(https://wisynco.com/wp-content/uploads/2014/12/footer-background-011.jpg)",
                    textAlign: "center",
                    fontSize: "20px",
                    fontColor: "#FFFFFF",
                }}>
                    <div>
                        <p
                        style={{
                            backgroundColor: "black", 
                            color: "white", 
                            height: "40%", 
                            width: "45%"
                        }}>
                        </p>

                        <h4>
                            Creada por: Vento Jimenez
                        </h4>
                        <h4>
                            Numero telefono: 310310566
                        </h4>
                        <h4>
                            Correo: vento@gmail.com
                        </h4>
                
                        <h4>
                            Dirección: Calle 34A sur #97F-41
                        </h4>
                    </div> 

                    <div style={{width: "100%", height: "32px", border: "3px", right: "0"}}>
                        <h3>Informacion de la empresa</h3>
                    </div>
                </footer>

            </div>
        )
    }
}

export default AppFooterComponent;