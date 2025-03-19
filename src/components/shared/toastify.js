import React from 'react';

const Toastify = ({ message, className = '' }) => {
    return (
        <div
            className={`fixed z-50 bg-green-900 text-white bottom-10 right-20 px-4 py-2 rounded-3xl shadow-md ${className}`}
        >{message}</div>
    )
}

export default Toastify;