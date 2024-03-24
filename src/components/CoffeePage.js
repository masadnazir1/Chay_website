import React from 'react';
import coffee1 from './coffee1.jpg';
import coffee2 from './coffee1.jpg';
import coffee3 from './coffee1.jpg';
import heartIcon from './heart.png';
import './CoffeePage.css'; // 








const CoffeePage = () => {
    return (
        <div className="coffee-container">


<div className="home-container">



             
<div className='center-content'>
<h1 className="heading">About Us</h1>

<p className='main-ec-p'>Welcome to our tea and coffee shop. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at turpis vitae libero pretium lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at turpis vitae libero pretium lacinia.</p>


</div>
</div>

<div className='services'>
        <h1 className="OUR">SELECT</h1>
        <h1 className="SERVICE">YOUR FAVRITE!</h1>
        </div>


<div className='flex-wrap'>

            <div className="coffee-item">
                <img src={coffee1} alt="Coffee 1" className='coffe-img'/>
                <div className="coffee-details">
                    <h3>Coffee 1</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at turpis vitae libero pretium lacinia.</p>
                    <p>Price: $5.99</p>

                    <div className='button-area'>
                    <button className='coffee-btn'>Order Now</button>
                    <img src={heartIcon} alt="Add to Wishlist" className="wishlist-icon" />
                    </div>


                </div>
            </div>




            <div className="coffee-item">
                <img src={coffee2} className='coffe-img'/>
                <div className="coffee-details">
                    <h3>Coffee 2</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at turpis vitae libero pretium lacinia.</p>
                    <p>Price: $6.99</p>


                    <div className='button-area'>
                    <button className='coffee-btn'>Order Now</button>
                    <img src={heartIcon} alt="Add to Wishlist" className="wishlist-icon" />
                    </div>


                </div>
            </div>




            <div className="coffee-item">
                <img src={coffee3} alt="Coffee 3" className='coffe-img'/>
                <div className="coffee-details">
                    <h3>Coffee 3</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at turpis vitae libero pretium lacinia.</p>
                    <p>Price: $7.99</p>


                    <div className='button-area'>
                    <button className='coffee-btn'>Order Now</button>
                    <img src={heartIcon} alt="Add to Wishlist" className="wishlist-icon" />
                    </div>


                </div>
            </div>




            <div className="coffee-item">
                <img src={coffee3} alt="Coffee 3" className='coffe-img'/>
                <div className="coffee-details">
                    <h3>Coffee 3</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at turpis vitae libero pretium lacinia.</p>
                    <p>Price: $7.99</p>


                    <div className='button-area'>
                    <button className='coffee-btn'>Order Now</button>
                    <img src={heartIcon} alt="Add to Wishlist" className="wishlist-icon" />
                    </div>


                </div>
            </div>

            </div>


        </div>
    );
};

export default CoffeePage;
