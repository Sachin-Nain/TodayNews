import React from 'react'
import { NavLink } from 'react-router-dom';
import './Info.css';

function Headername(props) {
  return (
    <>
      <ol>
        <NavLink to={props.link} style={({ isActive }) => isActive ? {borderBottom:'3px solid rgb(110, 89, 198)'} : {}}  className="headerlink">{props.page}</NavLink>
      </ol>
    </>
  )
}

export default Headername
