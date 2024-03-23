import React from 'react';
import cup from './cup.png';
import './HomePage.css'; // You can define your styles in HomePage.css

const HomePage = () => {
    return (
        <div className='main'>
        <div className="home-container">



             
               <div className='center-content'>
               <h1 className="heading">Khatarnat Chay sirf app k lya!</h1>
               
               <p className='main-ec-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
            
               <button className='order-btn'>Order Now</button>

               </div>



        
            <div className="home-content"> 
            <img src={cup} className='home-container-img'></img> 

                     </div>

           
                 
               
        


        </div>

        <section className='container'>

         <div className='services'>
        <h1 className="OUR">OUR</h1>
        <h1 className="SERVICE">SERVICES</h1>
        </div>


        <div className='service-text'>
       <h3>Lorem Ipsum is simply dummy text of the printing and typesetting </h3>
       <h3>industry. Lorem Ipsum has been the</h3>
       </div>

        <div className='mainitems'>

           <div className='items'> <img src={cup} className='item-img'></img><h2>Chay</h2> 
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
           </div>

           <div className='items'> <img src={cup} className='item-img'></img><h2>Chay</h2> 
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
           </div>
         
           <div className='items'> <img src={cup} className='item-img'></img><h2>Chay</h2> 
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
           </div>
           
            
          

        </div>



        </section>
        </div>
    );
};

export default HomePage;
