import React from 'react'

export default function Accordion({items, }) {

  const onTitleClick =(i)=>{
    console.log(` No. ${i} ListItem was Clicked!`)
  }

  const itemarray = items.map((el, i)=>{
    return <React.Fragment key={el.title}>
      <div className='title active' onClick={()=> onTitleClick(i)}>
        <i className='dropdown icon'/>
        {el.title}
      </div>
      <div className='content active'>
        <p>{el.content}</p>
      </div>
    </React.Fragment>
  })

  return (
    <div className='ui styled accordion'>
      {itemarray}
    </div>
  )
}
