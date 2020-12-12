import React, { Component } from "react";
import "./style.css"
class ShopKart
 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            productName: "",
            productPrice: "",
            productImg: ""
         }
    }
    componentDidMount(){
      
    }
    render() { 
        return ( 
            <div className="shopKart">
                <section className="kartNow">
                    <h3>Shoping Kart</h3>
                    <div className="kartMe">
                        <h1>Product: {this.state.productName}</h1>
                    </div>
                </section>
            </div>
         );
    }
}
 
export default ShopKart
;