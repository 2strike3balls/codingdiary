import React from 'react';
import './css/create.css'

    function Create () { 

        return(
            <div className="wrap">
                <form onSubmit={()=>{}}>
                    <ul className="form-wrap">
                        <li><input type="text" name="title" placeholder="title"></input></li>
                        <li><textarea name="body" placeholder="body"></textarea></li>
                    </ul>
                        <button type="submit" >submit</button>
                </form>
            </div>
        );
    }
    
export default Create;