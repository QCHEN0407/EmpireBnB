import React from "react"
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoginFormModal from '../../auth/LoginFormModal';
import SignUpFormModal from "../../auth/SignUpFormModal";
import useConsumeContext from "../../../context/LoginSignupModalContext";
import {logout} from "../../../store/session"

const DropdownMenu = ({ dark, isLoaded }) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const {setShowMenu} = useConsumeContext();
    const history = useHistory();

    const onlogout = async (e) => {
        await dispatch(logout());
        setShowMenu(false);
    };

    // What to show on the dropdown menu
    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <>
                <li>
                    <NavLink to={`/profile`} onClick={()=> {setShowMenu(false)}}>Profile</NavLink>
                </li>
                <li>
                    <NavLink to="/" onClick={onlogout}>Log Out</NavLink>
                </li>
            </>
        );
    } else {
        sessionLinks = (
            <>
                <li className={`modal__buttons ${dark}`}>
                    <LoginFormModal />
                </li>
                <li className={`modal__buttons ${dark}`}>
                    <SignUpFormModal />
                </li>
            </>
        );
    }

    return (
        // TODO: add to the right place: onMouseLeave={()=>{setShowMenu(prevState => !prevState)}}
        <div className={`menu__dropdown-container ${dark}`}>
            <ul className={`dropdown__list ${dark}`}>
                <li className="dropdown__welcome">
                    {sessionUser ? <p>{`Welcome, ${sessionUser.firstName}!`}</p> : <p>{`Welcome!`}</p>}
                </li>
                {sessionLinks}
            </ul>
        </div>
    );
};

export default DropdownMenu;
