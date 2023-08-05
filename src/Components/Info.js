import React from 'react'
import './Info.css';

function Info(props) {
  return (
    <>
      <ol className='Infoblock'>
        <button className='bychannel'>{props.name}</button>
        <img src={!props.imgurl?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3K8wOCr0yNhBSiZBL_6eiSscY3Hh2sPAy8xDQQo_O6w&s":props.imgurl} className="Newsimg" alt="NewsImage"/>
        <p className='newstitle'>{props.title.slice(0,50)} ...</p>
        <p className='newsdesc'>{props.desc?props.desc.slice(0,70):"Oopssssss! We are really-really {Sorry} there is no Descripition for this news."} ...</p>
        <button className='rdmore'><a href={props.newsurl} className="Readmore">Read More</a></button>
      </ol>
    </>
  )
}

export default Info
