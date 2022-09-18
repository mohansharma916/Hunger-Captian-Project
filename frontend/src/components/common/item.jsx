import React from 'react'
import item1 from "../../assets/img/item_1.png"
import shape1 from "../../assets/img/shape-down-1.png"
import heart from "../../assets/img/heart.png"
import cart from "../../assets/img/cart.png"



const Item = ({setShowRev,setCheckRev}) => {
  return (
    <>

    <div className="items">
            <div className="item">
                <div className="item-image">
                    <img className="dil" src={item1} alt="" />
                    <div className="white-shade">
                        <img src={shape1} alt="" />
                    </div>
                </div>
                <div className="like">
                    <img src={heart} alt="" />
                    <p>(15)</p>
                </div>
                <div className="name">
                    <h1>Chicken Submarine Burger</h1>
                </div>
                <div className="review" style={{display:'flex'}}>
                    <div onClick={()=>setShowRev(true)}>Write Review</div>
                    <div onClick={()=> setCheckRev(true)}>Check Review</div>
                </div>
                <div className="cart_price">
                    <div className="cart">
                        <a href="#"><img src={cart} alt="" /> Add to Cart</a>
                    </div>
                    <div className="price">
                        <p>$ 10.99</p>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="item-image">
                    <img className="dil" src={item1} alt="" />
                    <div className="white-shade">
                        <img src={shape1} alt="" />
                    </div>
                </div>
                <div className="like">
                    <img src={heart} alt="" />
                    <p>(15)</p>
                </div>
                <div className="name">
                    <h1>Chicken Submarine Burger</h1>
                </div>
                <div className="review">
                    <a href="Write_review.html">Write Review</a>
                    <a href="#">Check Review</a>
                </div>
                <div className="cart_price">
                    <div className="cart">
                        <a href="#"><img src={cart} alt="" /> Add to Cart</a>
                    </div>
                    <div className="price">
                        <p>$ 10.99</p>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="item-image">
                    <img className="dil" src={item1} alt="" />
                    <div className="white-shade">
                        <img src={shape1} alt="" />
                    </div>
                </div>
                <div className="like">
                    <img src={heart} alt="" />
                    <p>(15)</p>
                </div>
                <div className="name">
                    <h1>Chicken Submarine Burger</h1>
                </div>
                <div className="review">
                    <a href="Write_review.html">Write Review</a>
                    <a href="#">Check Review</a>
                </div>
                <div className="cart_price">
                    <div className="cart">
                        <a href="#"><img src={cart} alt="" /> Add to Cart</a>
                    </div>
                    <div className="price">
                        <p>$ 10.99</p>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="item-image">
                    <img className="dil" src={item1} alt="" />
                    <div className="white-shade">
                        <img src={shape1} alt="" />
                    </div>
                </div>
                <div className="like">
                    <img src={heart} alt="" />
                    <p>(15)</p>
                </div>
                <div className="name">
                    <h1>Chicken Submarine Burger</h1>
                </div>
                <div className="review">
                    <a href="Write_review.html">Write Review</a>
                    <a href="#">Check Review</a>
                </div>
                <div className="cart_price">
                    <div className="cart">
                        <a href="#"><img src={cart} alt="" /> Add to Cart</a>
                    </div>
                    <div className="price">
                        <p>$ 10.99</p>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="item-image">
                    <img className="dil" src={item1} alt="" />
                    <div className="white-shade">
                        <img src={shape1} alt="" />
                    </div>
                </div>
                <div className="like">
                    <img src={heart} alt="" />
                    <p>(15)</p>
                </div>
                <div className="name">
                    <h1>Chicken Submarine Burger</h1>
                </div>
                <div className="review">
                    <a href="Write_review.html">Write Review</a>
                    <a href="#">Check Review</a>
                </div>
                <div className="cart_price">
                    <div className="cart">
                        <a href="#"><img src={cart} alt="" /> Add to Cart</a>
                    </div>
                    <div className="price">
                        <p>$ 10.99</p>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="item-image">
                    <img className="dil" src={item1} alt="" />
                    <div className="white-shade">
                        <img src={shape1} alt="" />
                    </div>
                </div>
                <div className="like">
                    <img src={heart} alt="" />
                    <p>(15)</p>
                </div>
                <div className="name">
                    <h1>Chicken Submarine Burger</h1>
                </div>
                <div className="review">
                    <a href="Write_review.html">Write Review</a>
                    <a href="#">Check Review</a>
                </div>
                <div className="cart_price">
                    <div className="cart">
                        <a href="#"><img src={cart} alt="" /> Add to Cart</a>
                    </div>
                    <div className="price">
                        <p>$ 10.99</p>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="item-image">
                    <img className="dil" src={item1} alt="" />
                    <div className="white-shade">
                        <img src={shape1} alt="" />
                    </div>
                </div>
                <div className="like">
                    <img src={heart} alt="" />
                    <p>(15)</p>
                </div>
                <div className="name">
                    <h1>Chicken Submarine Burger</h1>
                </div>
                <div className="review">
                    <a href="Write_review.html">Write Review</a>
                    <a href="#">Check Review</a>
                </div>
                <div className="cart_price">
                    <div className="cart">
                        <a href="#"><img src={cart} alt="" /> Add to Cart</a>
                    </div>
                    <div className="price">
                        <p>$ 10.99</p>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default Item