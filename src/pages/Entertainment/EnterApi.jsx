import axios from 'axios'
import React, { useEffect,useState } from 'react'
import Enterarticles from './Enterarticles'


const EnterApi = () => {


let headline=JSON.parse(localStorage.getItem('titles'))





const [Enterapi, setEnterapi] = useState([])
useEffect(() => {

axios
.get(`https://newsapi.org/v2/everything?q=${headline}&from=2022-05-18&sortBy=publishedAt&apiKey=58aa853356384f19a88049b3ce553605`)
.then(({data})=>{
    setEnterapi(data.articles)
    
    
   
})


}, [])




  return (
    <div>
   { Enterapi.map((data)=>(
    <Enterarticles key={data.id} {...data}/>
   ))
     }
    </div>
  )
}

export default EnterApi