import React from "react";
import item1 from "../../assets/img/item_1.png";
import shape1 from "../../assets/img/shape-down-1.png";
import heart from "../../assets/img/heart.png";
import cart from "../../assets/img/cart.png";
import { useDispatch } from "react-redux";
import {
  addCart,
  decreaseCart,
  increaseCart,
} from "../../reducks/carts/operations";

const Item = ({ setShowRev, setCheckRev, item, selected_count, setSelectedItemId, setNameRev }) => {

  const dispatch = useDispatch();
  const clickAddCart = () => {
    dispatch(addCart(item));
  };
  const clickPlusCart = () => {
    dispatch(increaseCart(item));
  };
  const clickMinusCart = () => {
    dispatch(decreaseCart(item));
  };
  const handleClickCheck =()=>{
    setShowRev(true)
    setNameRev(item.name)
    setSelectedItemId(item.id)
  }
  const handleClickWrite = ()=>{
    setCheckRev(true)
    setNameRev(item.name)
    setSelectedItemId(item.id)
  }

  return (
    <>
      <div className="item">
        <div className="item-image">
          <img className="dil" src={item.image} alt="" />
          <div className="white-shade">
            <img src={shape1} alt="" />
          </div>
        </div>
        <div className="like">
          <img src={heart} alt="" />
          <p>(15)</p>
        </div>
        <div className="name">
          <h1>{item.name}</h1>
        </div>
        <div className="review" style={{ display: "flex" }}>
          <div onClick={handleClickCheck}>Write Review</div>
          <div onClick={handleClickWrite}>Check Review</div>
        </div>
        <div className="cart_price">
          <div className="cart">
            {selected_count == 0 ? (
              <button class="cartbutton" onClick={clickAddCart}>
                <img src={cart} onClick={clickAddCart} />
                Add to Cart
              </button>
            ) : (
              <div>
                <button class="plus" onClick={clickPlusCart}>
                  +
                </button>
                <p>{selected_count}</p>
                <button class="minus" onClick={clickMinusCart}>
                  -
                </button>
              </div>
            )}
          </div>
          <div className="price">
            <p>$ {item.PRICE}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
