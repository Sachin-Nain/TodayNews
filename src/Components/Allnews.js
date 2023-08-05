import React from 'react'
import Info from './Info';

function Allnews(props) {
  return (
    <>
      {
        props.data.map((elem) => {
          return <Info key={elem.url} title={elem.title} desc={elem.description} imgurl={elem.urlToImage} newsurl={elem.url} name={elem.source.name}/>
        })
      }
    </>
  )
}

export default Allnews;