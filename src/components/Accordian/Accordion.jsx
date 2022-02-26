import React, {useState} from 'react';


export default function Accordion({items }) {

  const [activeIndex, setIndex] = useState(null);

  const onTitleClick =(i)=>{
    console.log(` No. ${i} ListItem was Clicked!`);
    setIndex(i);
  }

  const itemarray = items.map((el, i)=>{
    const active = i === activeIndex ? 'active' : '';


    return <React.Fragment key={el.title}>
      <div className={`title ${active}`} onClick={()=> onTitleClick(i)}>
        <i className='dropdown icon'/>
        {el.title}
      </div>
      <div className={`content ${active}`}>
        <p>{el.content}</p>
      </div>
    </React.Fragment>
  })

  return (
    <div className='ui styled accordion' >
      {itemarray}

      <h1 style={{textAlign: 'center'}}>{activeIndex}</h1>
      
    </div>
  )
}
