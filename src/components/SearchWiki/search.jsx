import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Search =() => {
  const [term, setTerm] = useState('');

  const [results, setResults] = useState([]);

  useEffect(()=>{
    
    (async ()=>{
      
      const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
        params:{
          action: 'query',
          list:'search',
          origin:'*',
          inprop:'url',
          format:'json',
          srsearch:term
        }
      })


      if(term !== ''){
       setResults(data.query.search);
       
      }
    })();
    
    

  }, [term]);

 
  const resarray = results.map((el, i)=>{

    if(term===''){
      return;
    }
  
    return <div className="ui inverted segment container" bis_skin_checked="1" key={el.pageid}>
      
      
      <a className="ui inverted right floated button" href={`https://en.wikipedia.org?curid=${el.pageid}`}>Go</a>
    <h3 className='left floated content'>{`${i+1}. ${el.title}`}</h3>
    
    <div className="ui inverted divider" bis_skin_checked="1"></div>
    
    <div id="terms-content" dangerouslySetInnerHTML={{__html: el.snippet}} style={{textTransform: 'capitalize', color: '#a4a4a5'}}/>
    
    </div>
  })
  
  

  return (
    <>
    <div className='ui container'>
      <div className="ui inverted segment form" bis_skin_checked="1">
        <label>Wiki Search</label>
      <div className="ui inverted left fluid icon input" bis_skin_checked="1">
          <input type="text" placeholder="Search..." value={term} onChange={(e=>setTerm(e.target.value))}/>
          <i className="search icon"></i>
      </div>
      <div className="ui inverted divider" bis_skin_checked="1"></div>
      </div>
      
    </div>
    {
      resarray
    }
    </>
  )
}

export default Search;