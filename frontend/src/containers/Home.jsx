import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/common/header";
import Item from "../components/common/item";
import Footer from "../components/common/footer";
import Brush from "../assets/img/Brush_1.png";
import WriteReview from "../components/pop-up/write-review";
import Check_review from "../components/pop-up/check-review";



const Home = () => {
    const [showRev, setShowRev]= useState(false)
    const [checkRev,setCheckRev]=useState(false)
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
          <a href="#">ALL</a>
          <a href="#">HOT</a>
          <a href="#">COLD</a>
          <a href="#">BAGEL</a>
        </div>
        <Item setShowRev={setShowRev} setCheckRev={setCheckRev} />
      </main>
      <Footer />
      {showRev ?  <WriteReview setShowRev={setShowRev}></WriteReview>: null }
      {checkRev ? <Check_review setCheckRev={setCheckRev}></Check_review>: null }
      {}
     
    </div>
  );
};

export default Home;
