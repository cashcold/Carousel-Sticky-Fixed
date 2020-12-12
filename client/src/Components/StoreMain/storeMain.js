import React, { Component } from 'react';
import './style.css'
import {HearPhoneApi} from '../Api/hearPhoneApi'
class StoreMain extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            hearPhone: HearPhoneApi
         }
    }
    render() { 
        console.log(this.state.hearPhone)
        return ( 
            <div className='StoreMain'>
                <section className='StoreMain1'>
                   <div className='hearPhone'>
                       <h1>New Gaming HearPhone Avaliable</h1>
                       <div className='hearPhoneList'>
                           {this.state.hearPhone.map(hear => {
                               return(
                                   <div className='listPhone'>
                                       <div className='phoneh3'>
                                           <img src={hear.img} />
                                           <h5>{hear.name}</h5>
                                            <p>{hear.price}</p>
                                            <a href={hear.id} className='btn btn-success'>Buy Now</a>
                                       </div>

                                   </div>
                               )
                           })}
                       </div>
                   </div>
                </section>
            </div>
         );
    }
}
 
export default StoreMain;