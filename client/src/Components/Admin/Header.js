import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthContext from '../../Store/auth-context';

const Header = (props) => {
    const authCtx = useContext(AuthContext)
    const navigate = useNavigate();

    console.log(authCtx.token)

    const logoutHandler = () => {
        localStorage.removeItem('token')
        navigate('/admin/login')
    };

    return (
        <>
            <nav className="grid grid-cols-2 gap-4 items-center text-white bg-blue p-3">
                <div>
                    <span className=" text-xl tracking-tight">Admin</span>
                </div>
                <div className='float-right'>
                    <button
                        className="bg-white text-sm float-right hover:bg-blue text-blue hover:text-white py-2 px-4 border border-blue hover:border-white rounded"
                        onClick={logoutHandler}>
                        Logout
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Header
