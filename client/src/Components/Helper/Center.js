import React from 'react';

const Center = (props) => {
    return (
        <div className="flex h-screen">
            <div className="m-auto">
                {props.children}
            </div>
        </div>
    )
}

export default Center
