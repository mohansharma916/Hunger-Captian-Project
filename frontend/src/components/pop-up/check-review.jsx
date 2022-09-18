import React from 'react'
import blank_heart from "../../assets/img/blank_heart.png";
import heart from "../../assets/img/heart.png";
import thumbs_down from "../../assets/img/Icon awesome-thumbs-down.png";
import cancel from "../../assets/img/close-circle.png";



function Check_review({setCheckRev}) {
  return (
    <>
    <div className="popup">
    <div className="pop-up">
        <div className="review-details">
            <div className="descriptions">
                <h3 style={{marginBottom:"30px"}}>Reviews for "Chicken Submarine Burger"</h3>
                <div className="rating">
                    <a href="#">
                        <div className="img_like">
                            <div className="img">
                                <img src={blank_heart} alt="" />
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
                                <img src={blank_heart} alt="" />
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
                                <img src="/img/heart.png" alt="" />
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
                <div className="review-input">
                    <h3>Jhon Dee</h3>
                    <p>Lorem Ipsum is simply a dummy text of the printing and typesetting industry. Lorem
                        Ipsum has been the industry’s standard dummy text ever since the 1500s when an
                        unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <h3>Jhon Dee</h3>
                        <p>Lorem Ipsum is simply a dummy text of the printing and typesetting industry. Lorem
                            Ipsum has been the industry’s standard dummy text ever since the 1500s when an
                            unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
        </div>
        <div className="close">
            <div onClick={()=> setCheckRev(false) }><img src={cancel} alt="" /></div>
        </div>
    </div>
</div>
    </>
  )
}

export default Check_review