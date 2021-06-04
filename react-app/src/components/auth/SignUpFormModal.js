import React from 'react';
import useConsumeContext from "../../context/LoginSignupModalContext"
import { Modal } from "../../context/Modal";
import SignUpForm from "./SignUpForm";


const SignUpFormModal = () => {
    const { handleSignupModal, showSignUp } = useConsumeContext();

    return (
        <>
            <button onClick={handleSignupModal}>Sign Up</button>
            {showSignUp && (
                <Modal onClose={() => handleSignupModal()}>
                    <SignUpForm />
                </Modal>
            )}
        </>
    )
};

export default SignUpFormModal;
