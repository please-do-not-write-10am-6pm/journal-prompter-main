import React from "react";
import {useSelector} from 'react-redux'

function ErrorMessage() {
  const errMessage = useSelector(state => state.errMessage)

  return ( 
   <p>{errMessage}</p>
   );
}

export default ErrorMessage;
