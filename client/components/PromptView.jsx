import React, {useEffect} from "react";
import {useSelector, useDispatch } from 'react-redux'
import { setPrompt } from "../actions/prompts";



function PromptView(props) { //props should be id
  const prompt = useSelector(state => state.prompt)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setPrompt(props.id))
  })

  //this prompt dispatches setPrompt based on idea. It is child to Prompts. 
  //It should display one single prompt view as well as the update and delete buttons underneath the prompt.
  //Another idea is to add the ability for a user to favourite a prompt to come back to.

  return ( 
    <>
      <h2>Get your journal on &#128394;</h2>
      <p>{prompt.prompt}</p>
      <p>{prompt.category}</p>
      {/* Migrate buttons to edit and delete here */}
    </>
    
   );
}

export default PromptView;