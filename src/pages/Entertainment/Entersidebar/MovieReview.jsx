import React from 'react'
import styles from '../Entersidebar/Movie.module.css'
import Morenews from './Morenews'


const MovieReview = () => {
  return (
    <div>
       
        <h3>Movie Review</h3>
        <hr className={styles.hrline}/>
    <div className={styles.moviemaindiv}>
       
        <div>
            <img src="https://images.indianexpress.com/2022/06/nani-movie.jpg?resize=450,250"  height={80} width={144} alt="" />
            <p>ANTE</p>
            <div>
                <img src="https://indianexpress.com/wp-content/themes/indianexpress/images/star-one.gif" alt="" height={9} width={10} />
                <img src="https://indianexpress.com/wp-content/themes/indianexpress/images/star-one.gif" alt="" height={9} width={10} />
                <img src="https://indianexpress.com/wp-content/themes/indianexpress/images/star-one.gif" alt="" height={9} width={10} />
                <img src="https://indianexpress.com/wp-content/themes/indianexpress/images/star-one.gif" alt="" height={9} width={10} />
                <img src="	https://indianexpress.com/wp-content/themes/indianexpress/images/star-no.gif" alt=""height={9} width={10}  />
            </div>
        </div>
        <div>
            <img src="https://images.indianexpress.com/2022/06/Ghode-Ko-Jalebi-Khilane-Le-Ja-Riya-Hoon-review-1200.jpg?resize=450,250"  height={80} width={144} alt="" />
            <p>ANTE</p>
            <div>
                <img src="https://indianexpress.com/wp-content/themes/indianexpress/images/star-one.gif" alt="" height={9} width={10} />
                <img src="https://indianexpress.com/wp-content/themes/indianexpress/images/star-one.gif" alt="" height={9} width={10} />
                <img src="https://indianexpress.com/wp-content/themes/indianexpress/images/star-one.gif" alt="" height={9} width={10} />
                <img src="	https://indianexpress.com/wp-content/themes/indianexpress/images/star-no.gif" alt=""height={9} width={10}  />
                <img src="	https://indianexpress.com/wp-content/themes/indianexpress/images/star-no.gif" alt=""height={9} width={10}  />
            </div>
        </div>
        <div>
            <img src="https://images.indianexpress.com/2022/06/777-charlie-1200.jpg?resize=450,250"  height={80} width={144} alt="" />
            <p>ANTE</p>
            <div>
                <img src="https://indianexpress.com/wp-content/themes/indianexpress/images/star-one.gif" alt="" height={9} width={10} />
                <img src="https://indianexpress.com/wp-content/themes/indianexpress/images/star-one.gif" alt="" height={9} width={10} />
                <img src="https://indianexpress.com/wp-content/themes/indianexpress/images/star-one.gif" alt="" height={9} width={10} />
                <img src="	https://indianexpress.com/wp-content/themes/indianexpress/images/star-no.gif" alt=""height={9} width={10}  />
                <img src="	https://indianexpress.com/wp-content/themes/indianexpress/images/star-no.gif" alt=""height={9} width={10}  />
                
            </div>
        </div>
        <div>
            <img src="https://images.indianexpress.com/2022/06/janhit-mein-jaari-1200.jpg?resize=450,250"  height={80} width={144} alt="" />
            <p>ANTE</p>
            <div>
                <img src="https://indianexpress.com/wp-content/themes/indianexpress/images/star-one.gif" alt="" height={9} width={10} />
                <img src="https://indianexpress.com/wp-content/themes/indianexpress/images/star-one.gif" alt="" height={9} width={10} />
                <img src="https://indianexpress.com/wp-content/themes/indianexpress/images/star-one.gif" alt="" height={9} width={10} />
                <img src="	https://indianexpress.com/wp-content/themes/indianexpress/images/star-no.gif" alt=""height={9} width={10}  />
                <img src="	https://indianexpress.com/wp-content/themes/indianexpress/images/star-no.gif" alt=""height={9} width={10}  />
            </div>
        </div>
       
    </div>
    <Morenews/>
    </div>
  )
}

export default MovieReview