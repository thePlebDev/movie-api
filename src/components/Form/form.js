import React,{ useState } from 'react';


import useMovieReviewApi from '../Utils/formhook'
import Book from '../Books/book'

const Form = ()=>{
  const [state,setState]= useState() // getting updated on every form change
  
  const [{info, isLoading,isError}, doFetch] = useMovieReviewApi();


  // data.push({title:display_title,headline,link:link.url})
  const handleSubmit=(e)=>{
    e.preventDefault()
     doFetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${state}&api-key=${key}`)
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
            {isError && <div>Something went wrong. Please try again</div>}
            {isLoading? (
              <div>Loading...

              </div>

            ):(
                <div><Book data={info}/></div>
            )
            }

        </div>
      )

  }


export default Form
