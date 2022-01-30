import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { loginActions } from '../../Store/login';

const Header = (props) => {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

    const logoutHandler = () => {
        dispatch(loginActions.logout())
        navigate('/admin/login')
    };

    return (
        <>
            <nav className="grid grid-cols-2 gap-4 items-center text-white bg-blue p-3">
                <div>
                    <span className=" text-xl tracking-tight">Admin</span>
                </div>
                {isLoggedIn && (
                    <div className='float-right'>
                        <button
                            className="bg-white text-sm float-right hover:bg-blue text-blue hover:text-white py-2 px-4 border border-blue hover:border-white rounded"
                            onClick={logoutHandler}>
                            Logout
                        </button>
                    </div>
                )}
            </nav>
        </>
    )
}

export default Header
