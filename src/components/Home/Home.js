import React from 'react';
import "./Home.css";
import Product from "../Product/Product"

function Home(){
    return(
        <div className = "home">
            <div className = "home-container">
                
                
                <div className = "home-row">
                    <Product
                        id = "cdcdef1434"
                        title = "Belt" 
                        price = {23.99}
                        image = "https://m.media-amazon.com/images/I/912gy9ku2VL._UX569_.jpg" 
                        rating = {1}
                        />
                    <Product
                        id = "abcdef9324"
                        title = "Cap" 
                        price = {3.93}
                        image = "https://m.media-amazon.com/images/I/419DHgF1nqL.jpg" 
                        rating = {5}
                        />
                    <Product
                        id = "cdgdlk4534"
                        title = "Long Sleeve Tees" 
                        price = {342.99}
                        image = "https://media.everlane.com/image/upload/c_fill,dpr_2,f_auto,g_face:center,q_auto,w_auto/v1/i/d2577d95_b9b3.jpg" 
                        rating = {4}
                        />
                </div>
                <div className = "home-row">
                <Product
                        id = "achdlk4534"
                        title = "Backpack" 
                        price = {132.99}
                        image = "https://m.media-amazon.com/images/I/91YVwfV7b1L._SY879_.jpg" 
                        rating = {4}
                        />
                    <Product
                        id = "cdjytk4534"
                        title = "Bottles Pack" 
                        price = {23.99}
                        image = "https://image.shutterstock.com/image-photo/plastic-bottles-water-wrapped-package-260nw-1606702615.jpg" 
                        rating = {5}
                        />
                        <Product
                        id = "cdgtys4534"
                        title = "MotorBike" 
                        price = {3342.99}
                        image = "https://etimg.etb2bimg.com/photo/73271529.cms" 
                        rating = {5}
                        />
                </div>
            </div>
        </div>
    )
}

export default Home;