import React from 'react';
import './AboutPage.css';





const AboutPage = () => {
    return (
        <div className="about-container">


<div className="home-container">



             
<div className='center-content'>
<h1 className="heading">About Us</h1>

<p className='main-ec-p'>Welcome to our tea and coffee shop. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at turpis vitae libero pretium lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at turpis vitae libero pretium lacinia.</p>


</div>
</div>





  








            <div className="about-content">
                
                
            <div className='services'>
        <h1 className="OUR">CONTACT</h1>
        <h1 className="SERVICE">US BELOW!</h1>
        </div>



                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="4" required></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AboutPage;
