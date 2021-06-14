import React, {useState, useEffect} from 'react';
import useConsumeContext from "../../context/LoginSignupModalContext";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "../../context/Modal";
import "./PostReviewModal.css"
import { addSingleReview } from "../../store/review"

const PostReviewModal = ({ listing_id }) => {
    const { handleReviewModal, showReview } = useConsumeContext();
    const sessionUser = useSelector(state => state.session.user);
    const [reviewText, setReviewText] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();
    const [rating, setRating] = useState(0);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://kit.fontawesome.com/d6e97cbe72.js";
        script.crossorigin="anonymous";
        script.async = true;
        document.body.appendChild(script);
        return () => {
          document.body.removeChild(script);
        }
    }, []);

    const submitReview = () => {
        handleReviewModal();
        dispatch(addSingleReview(sessionUser?.id, listing_id, reviewText));
        history.push(`/listings/${listing_id}`);
    }

    const ratingText = () =>{
        const options = ["", "Terrible", "Bad", "OK", "Good", "Great"];
        return options[rating];
      }

    const setRatingFunc = (num) => {
        setRating(num)
      }



    const radioButtons = () => {
        return [5, 4, 3, 2, 1].map(i => (
          <>
          <input type="radio" key={`radio-${i}`} id={`radio-${i}`} value={i} checked={i === rating}
            onClick={() => setRatingFunc(i)} />
          <label htmlFor={`radio-${i}`} key={`label-${i}`}><i className="fas fa-star fa-2x fa-color"></i></label>
          </>
          )
        )
      }

    return (
        <>
            {showReview && (
                <Modal onClose={() => handleReviewModal()}>
                    <form className="review_form" onSubmit={submitReview}>
                        <div className="review_container">
                            <div className="review_title">
                                <h1>How was your stay?</h1>
                                <h3 className="rating-text">{ratingText()}</h3>
                                <div className="review-rating">{radioButtons()}</div>
                            </div>
                            <div className="review_textarea">
                                <h2>Write a public review</h2>
                                <p>Tell future travelers about what they can expect at this place.</p>

                                <textarea id="text_area" rows="10" cols="50" onChange={(e)=>{setReviewText(e.target.value)}}></textarea>
                            </div>
                            <div className="review_button">
                                <button type="submit"> Done </button>
                            </div>

                        </div>
                    </form>
                </Modal>
            )}
        </>
    )
};

export default PostReviewModal;
