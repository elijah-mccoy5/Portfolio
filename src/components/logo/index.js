import React from 'react';
import './index.css'
import {Link} from 'react-router-dom'

const Logo = () => {
    return (
        <div className="logo-container" >
            <Link to="/" style={{textDecoration: "none", color:"#515151"}}>
        <span className="logo-e"  >ECM</span><span className="logo-m">Productions</span>
        </Link>
        </div>
    );
};

export default Logo;