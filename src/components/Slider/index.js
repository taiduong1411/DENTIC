/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Carousel } from 'antd';
const contentStyle = {
    height: '730px',
    color: '#fff',
    width: '100%',
    lineHeight: '160px',
    textAlign: 'center',
};
const Slider = () => (
    <div>
        <div className='max-[1200px]:hidden'>

            <Carousel autoplay>
                <div >
                    <img style={contentStyle} src='https://img.freepik.com/free-photo/dental-hygiene-concept-with-blue-background_23-2150312463.jpg?w=1800&t=st=1691744326~exp=1691744926~hmac=4cd14db934a40b18650a69b7b5dd3350eb57d8bfb5501b6c83571739b990c693' />
                </div>
                <div>
                    <img style={contentStyle} src='https://img.freepik.com/free-photo/white-teeth_144627-6526.jpg?w=1800&t=st=1691744310~exp=1691744910~hmac=10a08c2cfd26ef4d453b1d0f3c5d7df2ded1ed80fcd75292ddf290460a10c036' />

                </div>
                <div>
                    <img style={contentStyle} src='https://jes.edu.vn/wp-content/uploads/2017/10/h%C3%ACnh-%E1%BA%A3nh.jpg' />

                </div>
                <div>
                    <img style={contentStyle} src='https://cdn.shopify.com/s/files/1/0070/7032/files/editing-image-sizes.png?format=jpg&quality=90&v=1581621967' />
                </div>
            </Carousel>
        </div>
    </div>
);
export default Slider;