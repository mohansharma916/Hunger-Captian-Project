import React from 'react';
import blank_img from "../../assets/img/blank_heart.png";
import heart from "../../assets/img/heart.png";
import thumbs_down from "../../assets/img/Icon awesome-thumbs-down.png";
import cancel from "../../assets/img/close-circle.png";


function WriteReview({setShowRev}) {
  return (
    <>
    <div className="popup">
    <div className="pop-up">
        <div className="review-details">
            <div className="descriptions">
                <h3>Write Review</h3>
                <p>Choose Your Thoughts</p>
                <div className="rating">
                    <a href="#">
                        <div className="img_like">
                            <div className="img">
                                <img src={blank_img} alt="" />
                            </div>
                            <div className="text">
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
                            <div className="text">
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
                            <div className="text">
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
                            <div className="text">
                                <h6>NOT GOOD</h6><br />
                                <p>(09 Likes)</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="input-field">
                    <input type="text" placeholder="Enter Your Name" />
                    <input type="text" placeholder="Enter Your Feedback/Review" />
                </div>
                <div className="review-button">
                    <a href="review-details.html">Send Review</a>
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