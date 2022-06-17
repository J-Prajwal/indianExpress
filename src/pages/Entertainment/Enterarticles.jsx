import React from 'react'
import styles from './Enterarticles.module.css'
const Enterarticles = ({title,content,publishedAt,urlToImage}) => {
  return (
    <div className={styles.mainarticles}>
      <div className={styles.img}>
      <img className={styles.articlesimg} src={urlToImage} alt=""/>
      </div>
      <div className={styles.articles}>
        
          <h4 className={styles.headline}>{title}</h4>
          <div style={{fontSize:'small',marginTop:'-12px'}}>{publishedAt}</div>
          
          <p className={styles.para}>{content}</p>
          <hr />
      
      </div>
    </div>
  )
}

export default Enterarticles