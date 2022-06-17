import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "../Home/Home.module.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const [topNews, setTopNews] = useState([]);
  let i = 0;
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=b6f591e710ed4d32a7e03e9844f731ea"
      )
      .then((r) => {
        setTopNews(r.data.articles);
      })
      .catch((err) => alert(err));
  }, []);

  return (
    <div>
      {/* Top fixed section starts here */}
      <div className={styles.top}>
        <div>
          <img
            src="https://images.indianexpress.com/2022/06/judge.jpg?resize=450%2C250&w=475"
            alt="khela hobe?"
          />
        </div>
        <div>
          <div>
            <h2 style={{ fontSize: "27px" }}>
              Exclusive: I-T flagged ‘misreporting’ of Rs 1.06-cr, black money
              SIT judge opted for amnesty scheme
            </h2>
          </div>
          <p>
            Former Supreme Court judge, Justice Arijit Pasayat, Deputy Chairman
            of the two-member SIT on black money, is one of those who availed of
            the Government’s amnesty scheme after Income Tax authorities flagged
            alleged misreporting of income by him, The Indian Express has
            learnt.
          </p>
        </div>
      </div>
      {/* Top fixed section ends here */}

      {/* News with Ad section */}
      <div className={styles.mainContainer}>
        <div style={{ width: "68%" }} className={styles.leftNews}>
          <div className={styles.left}>
            <div style={{ width: "64%" }} className={styles.leftBox}>
              <h3>Oppn leaders to field a common candidate in Prez polls</h3>
              <img
                src="https://images.indianexpress.com/2022/06/mamata-2-2.jpg?w=430"
                alt=""
              />
              <p>
                The meet to decide on a common Presidential election nominee was
                organised by Mamata Banerjee and 22 regional parties were
                invited to attend it
              </p>
            </div>
            <div style={{ width: "33%", borderLeft: "1px solid grey" }}>
              <div className={styles.topNewsStoriesHead}>
                <h4 className={styles.topNewsStories}>
                  TOP NEWS STORIES{" "}
                  <i
                    class="fa-solid fa-angle-right"
                    style={{ color: "red" }}
                  ></i>
                </h4>
              </div>
              {topNews.map((news) => {
                if (i > 4) {
                  i++;
                  return;
                } else {
                  i++;
                  return <div className={styles.partition}>{news.title}</div>;
                }
              })}
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div>
            <div className={styles.logo}>
              <img
                src="https://indianexpress.com/wp-content/themes/indianexpress/microsites/brand/fb-covid-sos/images/HER-SOS-2022-Logo.png"
                alt=""
              />
            </div>
            <br />
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              fade
              controls={false}
              indicators={false}
            >
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.indianexpress.com/2022/03/block-sos-1-yashee-1200.jpg?resize=450%2C250&w=300"
                  alt="First slide"
                />
                <p className={styles.sliderCaption}>
                  Chip off an ancient block: How a Bagru artisan family stamped
                  out Covid blues
                </p>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.indianexpress.com/2022/05/SOS.jpg?resize=450%2C250&w=300"
                  alt="Second slide"
                />
                <p className={styles.sliderCaption}>
                  How a tribal woman helped her community in a Chhattisgarh
                  village during Covid-19
                </p>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.indianexpress.com/2022/05/Johanna-North.jpg?resize=450%2C250&w=300"
                  alt="Third slide"
                />
                <p className={styles.sliderCaption}>
                  From Helsinki to Payyanur, with a pandemic-induced detour into
                  vlogging
                </p>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.indianexpress.com/2022/05/Dr-Champaneria-1200.jpeg?resize=450%2C250&w=300"
                  alt="Fourth slide"
                />
                <p className={styles.sliderCaption}>
                  Meet Dr Bharat Champaneria, bringing healthcare and
                  nutritional awareness to rural Gujarat for over 40 years
                </p>
              </Carousel.Item>
            </Carousel>
            <div>
              <div className={styles.readMore}>Read More Stories</div>
            </div>
          </div>
        </div>
      </div>
      {/* News with Ad section */}

      
    </div>
  );
};

export default Home;
