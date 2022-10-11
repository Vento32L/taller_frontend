import React, {Component} from "react";


class AppBodyComponent extends Component{
    render(){
        return(
            <body>
                <div
                style={{
                    backgroundColor: "rgb(229, 236, 236)",
                    height: "400px",
                    width: "800px",
                    position: "absolute",
                    marginTop: "10%",
                    marginLeft: "30%",
                }}>
                    <div
                        class="title-container" 
                        style={{
                            borderStyle: "solid",
                            borderWidth: "1dp",
                            backgroundImage: "linear-gradient(rgb(6, 53, 83),rgb(93, 154, 196))"
                        }}>
                            <h1
                            class="title" 
                            style={{
                                size: "4cm",
                                color: "rgb(68, 6, 6)",
                                fontfamily: 'Times New Roman, Times, serif',
                                textAlign: "center"
                            }}>
                            HOLA ESTAS EMI PÁGINA
                            </h1>
                    </div>
                    <div id="8-12" style={{ display: "flex",
                        flexDirection: "row"}}>
                            <div
                                class="container" 
                                style={{
                                position: "absolute",
                                backgroundColor: "aqua",
                                borderRadius: "1cm",
                                borderLeft: "2cm",
                                width: "100px",
                                height: "100px",
                                marginLeft: "1cm",
                                borderWidth: "1cm",
                            }}>
                            </div>
                            <div style={{ border: "250px solid  Silver" }}>
                                <img src="https://wisynco.com/wp-content/uploads/2014/12/footer-background-011.jpg"
                                    style={{ width: "150px", height: "150px" }}/>

                            </div>
                    </div>

            </div>
            </body>
            
        );
    }
}

export default AppBodyComponent;