import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/common/header";
import Item from "../components/common/item";
import Footer from "../components/common/footer";
import Brush from "../assets/img/Brush_1.png";
import WriteReview from "../components/pop-up/write-review";
import Check_review from "../components/pop-up/check-review";
import { fetchItem } from "../reducks/items/operations";
import { getItem } from "../reducks/items/selectors";
import { getCarts, getSubtotal } from "../reducks/carts/selectors";
import { fetchFromLocalStorage } from "../reducks/carts/operations";
// import line from "../assets/img/line.png";

const Home = () => {
  const [nameRev, setNameRev] = useState('')
  const dispatch = useDispatch();
  const [showRev, setShowRev] = useState(false);
  const [checkRev, setCheckRev] = useState(false);
  const [showCartList, setShowCartList] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState();
  const selector = useSelector((state) => state);
  // const items= useSelector(getItem);
  const items = getItem(selector);
  // const items= useSelector((state)=>state.items)
  console.log('items', items);
  const carts = getCarts(selector)

  const subtotal = useSelector((state) => state.carts.subtotal)
  const [category, setCategory]= useState('')

  useEffect(() => {
    dispatch(fetchItem(category));
    dispatch(fetchFromLocalStorage());
  }, [category])
  const handleClick= (param)=>{
    if(param == 1){
      setCategory('')
    }
    else if(param == 2){
      setCategory('hot')
    }
    else if(param == 3){
      setCategory('cold')
    }else{
      setCategory('bagel')

    }
  }

  const showItem = (item) => {
    let selected_count = 0;
    if (carts[item.id] && carts[item.id].selected_count) {
      selected_count = carts[item.id].selected_count;

    }

    if (showCartList && carts[item.id] == undefined) {
      // if the page is cart page and item is not slected, show nothing.
      return;
    }

    return (
      <li>
        <Item
          key={item.id}
          item={item}
          selected_count={selected_count}
          setCheckRev={setCheckRev}
          setShowRev={setShowRev}
          setSelectedItemId={setSelectedItemId}
          setNameRev={setNameRev}
        />
      </li>
    );
  };


  return (
    <div>
      <Header />
      <main>
        <div className="mid_part">
          <h2>Our Most Popular Recipes</h2>
          <img src={Brush} alt="" />
          <p>
            Try our Most Delicious food and it usually Take minutes to deliver
          </p>
        </div>
        <div className="food_type">
          <a onClick={()=>handleClick(1)} >ALL</a>
          <a onClick={()=>handleClick(2)} >HOT</a>
          <a onClick={()=>handleClick(3)} >COLD</a>
          <a onClick={()=>handleClick(4)} >BAGEL</a>
        </div>
        <div className="items">

          {items && items.results && items.results.length > 0 && items.results.map((item) => showItem(item)
            // <Item key={item.id} item={item} setShowRev={setShowRev} setCheckRev={setCheckRev} />

          )}
        </div>
      </main>
      <div className="subtotal">
      <p>{subtotal}</p>
      </div>
      <Footer />
      {showRev ? <WriteReview setShowRev={setShowRev} selectedItemId={selectedItemId} nameRev={nameRev}></WriteReview > : null}
      {checkRev ? <Check_review setCheckRev={setCheckRev} selectedItemId={selectedItemId} nameRev={nameRev}></Check_review> : null}
      { }

    </div>
  );
};

export default Home;
