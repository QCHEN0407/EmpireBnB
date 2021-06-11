import React from 'react';
import useConsumeContext from "../../context/LoginSignupModalContext";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "../../context/Modal";
import "./PostReviewModal.css"

const PostReviewModal = ({listing_id}) => {
    const { handleReviewModal, showReview} = useConsumeContext();
    const sessionUser = useSelector(state => state.session.user);

    const submitReview = () => {

    }

    return (
        <>
            {showReview && (
                <Modal onClose={() => handleReviewModal()}>
                    <form>
                        <div className="review_container">
                            <div className="review_title">
                                How was your stay?
                            </div>
                            <textarea id="text_area" rows="10" cols="50"></textarea>
                            <button> Submit your Review </button>
                        </div>
                    </form>
                </Modal>
            )}
        </>
    )
};

export default PostReviewModal;