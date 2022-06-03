import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='bgset'>
                    <div className='container'>
            <div className='row icons '>
                <div className='col-md-6'>
                <i style={{backgroundColor:'#3C5B9B'}} className="fa fa-facebook"></i>
                <i style={{backgroundColor:'#359BED'}} className="fa fa-twitter"></i>
                <i style={{backgroundColor:'#E33729'}} className="fa fa-google-plus"></i>
                <i style={{backgroundColor:'#FD9F13'}} className="fa fa-rss"></i>
                <i style={{backgroundColor:'#CB2027'}} className="fa fa-pinterest"></i>
                <i style={{backgroundColor:'#027BA5'}} className="fa fa-linkedin"></i>
                <i style={{backgroundColor:'#F03434'}} className="fa fa-youtube-play"></i>
                </div>
                <div className='col-md-6 f-image'>
                    <img src='https://i.ibb.co/6vqsrJs/1.png' />
                    <img src='https://i.ibb.co/8Db95tQ/2.png' />
                    <img src='https://i.ibb.co/DVS16dK/3.png' />
                    <img src='https://i.ibb.co/VNktNcC/4.png' />
                    <img src='https://i.ibb.co/9WQXXdq/5.png' />
                </div>
            </div>
            
        </div>
        </div>
    );
};

export default Footer;