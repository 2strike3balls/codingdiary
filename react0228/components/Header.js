import React from 'react';
import './css/header.css';

function Header(para){
    return(
        <>
            <header>
                <h1>
                    <a href='/' onClick={(e)=>{
                        e.preventDefault();
                        para.getNum(0);
                        }}>{para.text[0].title}</a>
                </h1>
            </header>
        </>
    );
}

export default Header;