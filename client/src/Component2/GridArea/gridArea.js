import React, { Component } from 'react';
import './style.css'
import {HearPhoneApi} from '../../Components/Api/hearPhoneApi'
import {RecentPostApi} from '../../Components/Api/RecentPostApi'
import ShopKart from '../../Components/ShopKart/shopKart';
import 'animate.css'
import Carousel from 'react-bootstrap/Carousel' 
class GridArea extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            hearPhone: HearPhoneApi,
            recentPostApi: RecentPostApi,
            itemShopList: []
         }
    }
    componentDidMount(){
        window.addEventListener('scroll',()=>{
            const header = document.querySelector('.header')
            header.classList.toggle('sticky',window.scrollY > 0);
        })

        let SlideIndex = 0;
        const SlideDiv = ()=>{
            var i ;
            var slideDiv = document.querySelectorAll('.contentImg')
            
            var dot = document.querySelectorAll('.dot')
            for(i = 0; i < slideDiv.length; i++){
                slideDiv[i].style.display='none'
            }
            SlideIndex++;
            if(SlideIndex > slideDiv.length){SlideIndex = 1}
            for(i = 0; i < dot.length; i++){
                dot[i].className = dot[i].className.replace(" active", "");
            }
            slideDiv[SlideIndex-1].style.display= "block";

            setTimeout(SlideDiv,8000)

        }
        SlideDiv()
        let SlideIndexRecnt = 0;
        const SlideDivRecent = ()=>{
            var i ;
            var slideDiv = document.querySelectorAll('.recentDrop')
            
            var dot = document.querySelectorAll('.dot')
            for(i = 0; i < slideDiv.length; i++){
                slideDiv[i].style.display='none'
            }
            SlideIndexRecnt++;
            if(SlideIndexRecnt > slideDiv.length){SlideIndexRecnt = 1}
            for(i = 0; i < dot.length; i++){
                dot[i].className = dot[i].className.replace(" active", "");
            }
            slideDiv[SlideIndexRecnt-1].style.display= "block";

            setTimeout(SlideDivRecent,2000)

        }
        SlideDivRecent()
    }
    render() { 
        return ( 
            <div className='gridAreaMain'>
                <div className='hideShopKart'>
                    <ShopKart />
                </div>
                <aside className='sidebar'>
                    <h5 className='btn btn-warning recentBtn'>Recent Post</h5>
                    <section className='recentPost'>
                        {this.state.recentPostApi.map(recentApi =>{
                            return(
                                <div className='recentDrop' onClick={()=>{
                                   localStorage.setItem('CkeckItem',recentApi.id)
                                }}>
                                    <img src={recentApi.img} alt='pic'/>
                                    <h5>{recentApi.text}</h5>
                                </div>
                            )
                        })}
                    </section>
                    <section className='carl'>
                       <Carousel>
                       <Carousel.Item className='CarItem'>
                            <img src={require('../../AllInOne/bike/CYBIC-E-Legend_1.jpg')}/>
                            <Carousel.Caption>
                                <p>CYBIC-E-Legend</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className='CarItem'>
                            <img src={require('../../AllInOne/fresh_on/iphonr SE rose gold860709645.jpg')}/>
                            <Carousel.Caption>
                                <p>iphonr SE rose</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className='CarItem'>
                            <img src={require('../../AllInOne/hearphones/Dragon Gaming Headset GPDRA-COM COMBAT Black.jpeg')}/>
                            <Carousel.Caption>
                                <p>Dragon Gaming Headset</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className='CarItem'>
                            <img src={require('../../AllInOne/laptop/samsung-notebook-9-pro-07.jpg')}/>
                            <Carousel.Caption>
                                <p>samsung-notebook-9-pro</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                       </Carousel>
                    </section>
                </aside>
                <header className='header'>
                <nav className='nav-links animate__animated animate__bounceInLeft animate__slower'>
                        <ul >
                            <li><a href='/'>HOME</a></li>
                            <li><a href='/about-us'>ABOUT-US</a></li>
                            <li><a href='/getStart'>GET STARTED</a></li>
                            <li><a href='/reffer'>AFFILIATE</a></li>
                            <li><a href='/FAQ'>FAQ</a></li>
                            <li><a href='/support'>SUPPORT</a></li>
                        </ul>
                       
                    </nav>
                </header>
                <section className='content'>
                    <div className='contentImg'>
                        <img src={require('../../AllInOne/laptop/Hot-Red-Crystal-Case-For-Apple-Macbook-Air-Pro-Retina-11-12-13-15-Laptop-Cover.webp')}/>
                    </div>
                    <div className='contentImg'>
                        <img src={require('../../AllInOne/laptop/Lenovo Ideapad A12 Price In Ghana Reapp Ghana.jpg')}/>
                    </div>
                    <div className='contentImg'>
                        <img src={require('../../AllInOne/laptop/Lenovo ThinkPad X1 Yoga Gen 4 (2019).jpg')}/>
                    </div>
                    <div className='contentImg'>
                        <img src={require('../../AllInOne/laptop/Samsung Notebook 9 Pro (13-inch, 2019) - Full Review and ....jpg')}/>
                    </div>
                </section>
                <main className='main'>
                    {this.state.hearPhone.map(item =>{
                        return(
                            <div className='itemList'>
                                <div className='itemNow'>
                                    <div className='itemDrop' onClick={()=>{
                                        localStorage.setItem("productName", JSON.stringify(item.name) )
                                        localStorage.setItem("productPrice", JSON.stringify(item.price) )
                                    }}>
                                        <img src={item.img}/>
                                        <i class="fas fa-shopping-cart fa-2x btn btn-warning fontIcon"><span className='fasText'>Add To Kart</span></i>
                                        <h4>{item.name}</h4>
                                        <p className='btn btn-warning'>{item.price}</p>
                                        <a href='' className='btn btn-warning btnBuyNow '>Buy Now</a>
                                    </div>
                                </div>
                                <div className='promtion'></div>
                            </div>
                        )
                    })}
                </main>
                <footer className='footer'>
                </footer>
            </div>
         );
    }
}
 
export default GridArea;