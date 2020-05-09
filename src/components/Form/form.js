import React,{ useState } from 'react';
import axios from 'axios'

const Form = ()=>{
  const [state,setState]= useState('')
 //hide before using

  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.get(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${state}&api-key=${key}`)
      .then(response=>{
        console.log(response.data.results)
      })
      .catch(error=>{
        console.log(error)
      })
      }

      const handleChange=(event)=>{
        setState(event.target.value)


      }
      return(
        <form onSubmit={handleSubmit}>
        <input type= 'text' value={state} onChange={handleChange}></input>
        <button type="submit">Search</button>
        </form>
      )

  }


export default Form
