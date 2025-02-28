import Header from './components/Header';
import Nav from './components/Nav';
import Article from './components/Article'; 
import Create from './components/Create'; 
import { useState } from 'react';
import './App.css';

  function App(){
    const text=[
      {id:0, title:'react', body:'react is complicated'},
      {id:1, title:'html', body:'html is hyper something'},
      {id:2, title:'css', body:'css is cascading something'},
      {id:3, title:'js', body:'js is java something'},
    ];
    const [num, setNum] = useState(0);
    const [article, setArticle] = useState(true);
    const [create, setCreate] = useState(false);

    return(
      <>
          <Header text={text} getNum={(n)=>{setNum(Number(n));}}/>
          <Nav text={text} getNum={(n)=>{setNum(Number(n));}}/>
          {article && <Article text={text} id={num} />}
          {create && <Create getText={()=>{}}/>}
          <div className="button-wrap">
            <button type='button' onClick={(e)=>{setArticle(false); setCreate(true);}}>create</button>
            <button type='button' onClick={(e)=>{setArticle(false); setCreate(true);}}>update</button>
          </div>
      </>
    )
  }

export default App;
