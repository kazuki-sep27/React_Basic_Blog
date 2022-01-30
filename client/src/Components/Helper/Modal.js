import React from "react";

export default function Modal(props) {
    const [showModal, setShowModal] = React.useState(false)
    return (
        <>
            <button
                className="bg-white text-blue hover:bg-orange hover:text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
            >
                {props.name}
            </button>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >

                        <div className="relative w-auto mx-auto max-w-3xl">
                            {/*content*/}
                            <div
                                className={`bg-white px-2 float-right text-sm text-blue hover:cursor-pointer`}
                                onClick={() => setShowModal(false)}
                            >
                                Close
                            </div>
                            <div className="border-1 rounded-lg shadow-lg relative flex flex-col w-full text-blue bg-white outline-none focus:outline-none">
                                {/*body*/}
                                <div className="relative flex-auto">
                                    {props.children}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}
