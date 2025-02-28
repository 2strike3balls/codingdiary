import React from 'react';
import './css/article.css'

    function Article (para) { 
        
        return(
            <>
                <article>
                    <h2>{para.text[para.id].title}</h2>
                    <p>{para.text[para.id].body}</p>
                </article>
            </>
        );
    }
    
export default Article;