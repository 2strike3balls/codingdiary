import Article from './Article';
import React from 'react';

function Content(para){
    return(
        <>
            <Article text={para.text} id={para.num}/>
        </>
    );
}

export default Content;