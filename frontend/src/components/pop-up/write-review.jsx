import React, {useState} from 'react';
import blank_img from "../../assets/img/blank_heart.png";
import heart from "../../assets/img/heart.png";
import thumbs_down from "../../assets/img/Icon awesome-thumbs-down.png";
import cancel from "../../assets/img/close-circle.png";
import API from "../../API";






function WriteReview({setShowRev, selectedItemId, nameRev}) {

    const api= new API();

    const[likeCount,setLikeCount]=useState(1),
    [name,setName]=useState(""),
    [body,setBody]=useState("");


    // const inputName=(event)=>{
    //     setName(event.target.value);
    // };
    // const inputBody=(event)=>{
    //     setBody(event.target.value);
    // };


    const sendReviewButton=()=>{
        api.writeReview(selectedItemId,name,body,likeCount)
        .then(review=>{
            alert("Your Review has been sent. Thank you For your Valuable Review!");
            setName("")}

        )}
    
  return (
    <>
    <div className="popup">
    <div className="pop-up">
        <div className="review-details">
            <div className="descriptions">
                <h3>Write Review for {nameRev}</h3>
                <p>Choose Your Thoughts</p>
                <div className="rating">
                    <a href="#">
                        <div className="img_like">
                            <div className="img">
                                <img src={blank_img} alt="" />
                            </div>
                            <div className="text" onClick={()=>setLikeCount(15)}>
                                <h6>GOOD</h6><br />
                                <p>(15 Likes)</p>
                            </div>
                        </div>
                    </a>
                    <a href="#">
                        <div className="img_like">
                            <div className="img">
                                <img src={blank_img} alt="" />
                            </div>
                            <div className="text" onClick={()=>setLikeCount(25)}>
                                <h6>VERY GOOD</h6><br />
                                <p>(25 Likes)</p>
                            </div>
                        </div>
                    </a>
                    <a href="#">
                        <div className="img_like">
                            <div className="img">
                                <img src={heart} alt="" />
                            </div>
                            <div className="text" onClick={()=>setLikeCount(55)}>
                                <h6>EXCELLENT</h6><br />
                                <p>(55 Likes)</p>
                            </div>
                        </div>
                    </a>
                    <a href="#">
                        <div className="img_like">
                            <div className="img">
                                <img src={thumbs_down} alt="" />
                            </div>
                            <div className="text" onClick={()=>setLikeCount(9)}>
                                <h6>NOT GOOD</h6><br />
                                <p>(09 Likes)</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="input-field">
                    <input type="text" placeholder="Enter Your Name" onChange={(e)=>setName(e.target.value)} />
                    <input type="text" placeholder="Enter Your Feedback/Review" onChange={(e)=>setBody(e.target.value)} />
                </div>
                <div className="review-button">
                    <a onClick={sendReviewButton}>Send Review</a>
                </div>
            </div>
        </div>
        <div className="close">
            <div onClick={()=> {setShowRev(false)} }><img src={cancel} alt="" /></div>
        </div>
    </div>
    </div>
    </>
  )
}

export default WriteReview