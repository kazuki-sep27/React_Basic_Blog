import React from 'react';

const Header = (props) => {

    return (
        <>
            <nav className="grid grid-cols-2 gap-4 items-center text-white bg-blue p-3">
                <div>
                    <span className=" text-xl tracking-tight">{props.pageName}</span>
                </div>
            </nav>
        </>
    )
}

export default Header
