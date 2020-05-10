import React,{ useState,useEffect } from 'react';
import axios from 'axios'

const Form = ()=>{
  const [state,setState]= useState('')
  const [info,setInfo] = useState({})
  const [loading,setLoading]= useState(false)
   //hide before using
  let data; // ask someone about this, because I can't use a hook inside a promise, because its a conditiional.

  const handleSubmit=(e)=>{

    e.preventDefault()
    axios.get(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${state}&api-key=${key}`)
      .then(response=>{
        data=[]
        const responseObj = response.data.results
        responseObj.forEach(element =>{
          const {display_title, headline,link}  = element
          data.push({title:display_title,headline,link:link.url})
        })
        console.log(data)

      })
      .catch(error=>{
        console.log(error)
      })

      }



      const handleChange=(event)=>{
        setState(event.target.value)

      }
      return(
        <div>
            <form onSubmit={handleSubmit}>
            <input type= 'text' value={state} onChange={handleChange}></input>
            <button type="submit">Search</button>
            </form>
            {loading? <h2>data is here</h2>:<h2>loading</h2>}
        </div>
      )

  }


export default Form
