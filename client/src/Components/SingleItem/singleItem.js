import React, { Component } from 'react';
import './style.css'
class SingleItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='SingleItemMain'>
                <section className='SingleItem1'>
                    <h1>SingleItem</h1>
                    <img/>
                </section>
            </div>
         );
    }
}
 
export default SingleItem;