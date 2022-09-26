import React from 'react';
import "./EmaJhonHeader.css";
import logo from "../img/Logo.svg"
const EmaJhonHeader = () => {
    return (
        <div>
            <nav className='mb-0'>
            <div className="navbar bg-[#1C2B35]">
            <div className='container mx-auto'>
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl"><img src={logo} alt="" /></a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0 text-white">
                <li><a>Order</a></li>
                <li tabIndex={0}>
                    <a>Order Review</a>
                </li>
                <li><a>Manage Inventory</a></li>
                <li><a>Login</a></li>
                </ul>
            </div>
            </div>
</div>
            </nav>
        </div>
    );
};

export default EmaJhonHeader;