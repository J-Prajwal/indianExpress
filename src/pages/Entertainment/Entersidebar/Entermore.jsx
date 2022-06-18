import axios from 'axios'
import React,{useEffect,useState} from 'react'
import styles from '../Entersidebar/Entermore.module.css'
import MovieReview from './MovieReview'
const Entermore = () => {
  const [Moreenter, setMoreenter] = useState([])

  useEffect(() => {
   
    axios
    .get(`https://newsapi.org/v2/everything?q=bollywood&from=2022-05-17&apiKey=cc3256391f47466b93db6bbd192db4a4`)
    .then(({data})=>{
      setMoreenter(data.articles)
    })
  
  
  }, [])


  


  return (
    <div>
        <h3>MORE ENTERTAINMENT</h3>
        <div>
           {Moreenter.map((data)=>(
            
             <div className={styles.moreent}>
             <img src={data.urlToImage} style={{height:"83px",width:"150px"}} alt="" />
             <div className={styles.sidenews}>
                 <p className={styles.moreentred}>Entertainment</p>
                 <p className={styles.content}>{data.content}</p>
                 <hr />
             </div>
           
         </div>
           ))}
        </div>
        <MovieReview/>
    </div>
   
  )
}

export default Entermore


