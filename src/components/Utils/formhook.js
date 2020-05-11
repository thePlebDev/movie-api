import { useState, useEffect } from 'react'
import axios from 'axios'

const useMovieReviewApi=()=>{

  const [info,setInfo] = useState([]) // will be used for the info we get back from the respnse
 //hide before using
  const [url,setUrl] = useState(``);
  const [isLoading,setLoading] = useState(false);
  const [isError,setIsError] = useState(false)


  useEffect(()=>{
  async function fetchData(){
      setIsError(false);
      setLoading(true);
      try {
        const response = await axios.get(url)
        setInfo(response.data.results)


    } catch (error){
      setIsError(true)
    }

    setLoading(false)

  }

    fetchData()

  }, [url])


  return [{ info, isLoading,isError },setUrl]
}

export default useMovieReviewApi
