import React, { Component } from 'react';
import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Components/Home/home';
import StoreMain from './Components/StoreMain/storeMain';
import SingleItem from './Components/SingleItem/singleItem';
import GridArea from './Component2/GridArea/gridArea';
import ShopKart from './Components/ShopKart/shopKart';
import LayOut from './Component2/LayOut/layout';
import FixedBackground from './Component2/FixedBackground/fixedBackground';
class MainApp extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        return ( 
            <Router>
                <div className='mainApp animate__animated animate__zoomIn animate__slowerss'>
                    <div className='wrapper'>
                        <div className='router'>
                           <Switch>
                              <Route path='/' exact component={Home}/> 
                              <Route path='/Store' exact component={StoreMain}/> 
                              <Route path='/single' exact component={SingleItem}/> 
                              <Route path='/gridarea' exact component={GridArea}/> 
                              <Route path='/kart' exact component={ShopKart}/> 
                              <Route path='/layout' exact component={LayOut}/> 
                              <Route path='/fixed' exact component={FixedBackground}/> 
                              
                           </Switch>
                        </div>
                    </div>
                </div>
            </Router>
         );
    }
}
 
export default MainApp;