import React from "react";
import { useSelector } from "react-redux";

function Pending() {
  const pending = useSelector(state => state.pending)
  const style = {
    margin: '0 5px 0 5px',
    width: '40px',
    height: '40px'
  }

  return pending 
  ? <div> <img style={style} src='/images/escaping_ball.gif' alt="animated loading gif"/></div>
  : null

  }

export default Pending;