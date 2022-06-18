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
  const [latestNews, setLatestNews] = useState([]);

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

  useEffect(() => {
    axios
      .get(
        "https://newsdata.io/api/1/news?apikey=pub_8388f9e9492da67b017e34d4bdd4eca23d1b&country=in&language=en&category=top"
      )
      .then((r) => {
        setLatestNews(r.data.results);
      });
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

      {/* main section starts here */}
      <div className={styles.main}>
        {" "}
        {/* main container - parent */}
        <div className={styles.mainLeft}>
          <div className={styles.mainLeft_left}>
            {/* showing all the news with picture here */}
            {topNews.map((news) => {
              return (
                <div className={styles.newsContainer}>
                  <div className={styles.newsImg}>
                    <img src={news.urlToImage} alt="" />
                  </div>
                  <div className={styles.newsTitle}>
                    <h6>{news.title}</h6>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.mainLeft_right}>
            <div style={{ paddingLeft: "5px" }}>
              <h4>
                LATEST NEWS{" "}
                <i class="fa-solid fa-angle-right" style={{ color: "red" }}></i>
              </h4>
            </div>
            {latestNews.map((news) => {
              return (
                <div className={styles.partition}>
                  <a
                    href={news.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    {news.title}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.mainRight}>
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
                src="https://images.indianexpress.com/2021/08/MSME_300x100-Updated.png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.indianexpress.com/2021/08/300X100-story-1-1.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
          </Carousel>
          <div className={styles.mainRight_partition}>
            <div style={{ borderBottom: "1px solid grey" }}>
              <h4>
                EDITORIALS{" "}
                <i class="fa-solid fa-angle-right" style={{ color: "red" }}></i>
              </h4>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <div style={{ width: "500%", fontSize: "15px" }}>
                <img
                  src="https://images.indianexpress.com/2022/06/edit.jpg?w=210"
                  alt=""
                />
                What is needed is employment in manufacturing, especially for
                low and semi-skilled workers. Private sector must lead the way
              </div>
            </div>
          </div>
          <div className={styles.mainRight_partition}>
            <div style={{paddingLeft: "5px"}}>
              <h5>OPINION</h5>
            </div>
            <div className={styles.flexBox}>
              <div className={styles.opinionImg}>
                <img
                  src="https://images.indianexpress.com/2013/12/volumn.jpg?w=210"
                  alt=""
                />
              </div>
              <div className={styles.opinionData}>
                <p className={styles.names}>Suhas Palshikar</p>
                <p className={styles.titles}>Congress in its labyrinth</p>
              </div>
            </div>
            <div className={styles.flexBox}>
              <div className={styles.opinionImg}>
                <img
                  src="https://images.indianexpress.com/2020/07/author1.jpg?w=210"
                  alt=""
                />
              </div>
              <div className={styles.opinionData}>
                <p className={styles.names}>Deepika Saraswat</p>
                <p className={styles.titles}>
                  Iran foreign minister’s visit reaffirms resolve of two
                  countries to strengthen ties
                </p>
              </div>
            </div>
            <div className={styles.flexBox}>
              <div className={styles.opinionImg}>
                <img
                  src="https://images.indianexpress.com/2015/01/anup-surendranath1.jpg?w=210"
                  alt=""
                />
              </div>
              <div className={styles.opinionData}>
                <p className={styles.names}>Anup Surendranath</p>
                <p className={styles.titles}>
                  There is a concerted effort to plug procedural gaps in death
                  penalty sentencing
                </p>
              </div>
            </div>
            <div className={styles.flexBox}>
              <div className={styles.opinionImg}>
                <img
                  src="https://images.indianexpress.com/2015/02/untitled-41.jpg?w=210"
                  alt=""
                />
              </div>
              <div className={styles.opinionData}>
                <p className={styles.names}>Kapil Sibal</p>
                <p className={styles.titles}>
                  Lawmakers become law breakers, there is no one to appeal to
                </p>
              </div>
            </div>
            <div className={styles.flexBox}>
              <div className={styles.opinionImg}>
                <img
                  src="https://images.indianexpress.com/2015/01/rakhshanda-jalil-1.jpg?w=210"
                  alt=""
                />
              </div>
              <div className={styles.opinionData}>
                <p className={styles.names}>Rakhshanda Jalil</p>
                <p className={styles.titles}>Scholar and teacher Gopichand Narang believed in Urdu’s ability to build bridges</p>
              </div>
            </div>
            <div className={styles.flexBox}>
              <div className={styles.opinionImg}>
                <img
                  src="https://images.indianexpress.com/2013/12/chris.jpg?w=210"
                  alt=""
                />
              </div>
              <div className={styles.opinionData}>
                <p className={styles.names}>Christophe Jaffrelot</p>
                <p className={styles.titles}>Inflation's uneven toll</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* main section ends here */}
    </div>
  );
};

export default Home;
