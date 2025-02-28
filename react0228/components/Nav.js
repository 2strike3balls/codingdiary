import React from 'react';
import './css/nav.css'

function Nav(para) {
    let content = null;
    let menu = [];

    for ( let i=1; i <para.text.length; i++){
        content = <li key={para.text[i].id}><a href='/' id={para.text[i].id} onClick = {(e) => {
            e.preventDefault();
            para.getNum(e.target.id);
        }}>{para.text[i].title}</a></li>;
        menu.push(content);
    }

    return (
        <>
            <nav>
                <ul>
                    {menu}
                </ul>
            </nav>
        </>
    );
}

export default Nav;