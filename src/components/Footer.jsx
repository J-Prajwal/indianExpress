import React from "react";
import {
  ListItem,
  UnorderedList,
  Wrap,
  WrapItem,
  Avatar,
} from "@chakra-ui/react";

import style from "../NAVBAR_CSS/FOOTER_CSS/Footer.module.css";

const Footer = () => {
  let d = new Date();
  const FullYear = d.getFullYear();
  // console.log('FullYear:', FullYear)

  return (
    <div className={style.MainContainerForFooter}>
      <div className={style.WidthDeciderFor_footer}>
        <div className={style.FooterContainer}>
          <div className={style.FooterSubHeadings}>
            <h2>TOP CATEGORIES</h2>
          </div>
          <center>
            <hr />
          </center>
          <div className={style.FooterDivSection}>
            <UnorderedList>
              <ListItem>
                <a
                  href="https://indianexpress.com/section/explained/"
                  target="_blank"
                  rel="noopener"
                >
                  Explained News
                </a>
              </ListItem>
              <ListItem>
                <a
                  href="https://indianexpress.com/section/cities/delhi/"
                  target="_blank"
                  rel="noopener"
                >
                  Delhi News
                </a>
              </ListItem>
              <ListItem>
                <a
                  href="https://indianexpress.com/section/lifestyle/health/"
                  target="_blank"
                  rel="noopener"
                >
                  Health News
                </a>
              </ListItem>
            </UnorderedList>
            <UnorderedList>
              <ListItem>
                <a
                  href="https://indianexpress.com/section/india/political-pulse/"
                  target="_blank"
                  rel="noopener"
                >
                  Political Pulse
                </a>
              </ListItem>
              <ListItem>
                <a
                  href="https://indianexpress.com/section/cities/pune/"
                  target="_blank"
                  rel="noopener"
                >
                  Pune News
                </a>
              </ListItem>
              <ListItem>
                <a
                  href="https://indianexpress.com/section/india/"
                  target="_blank"
                  rel="noopener"
                >
                  India News
                </a>
              </ListItem>
            </UnorderedList>
            <UnorderedList>
              <ListItem>
                <a
                  href="https://indianexpress.com/section/opinion/"
                  target="_blank"
                  rel="noopener"
                >
                  Latest Opinion
                </a>
              </ListItem>
              <ListItem>
                <a
                  href="https://indianexpress.com/section/cities/bangalore/"
                  target="_blank"
                  rel="noopener"
                >
                  Bangalore News
                </a>
              </ListItem>
              <ListItem>
                <a
                  href="https://indianexpress.com/section/sports/"
                  target="_blank"
                  rel="noopener"
                >
                  Sports News
                </a>
              </ListItem>
            </UnorderedList>
            <UnorderedList>
              <ListItem>
                <a
                  href="https://indianexpress.com/section/cities/mumbai/"
                  target="_blank"
                  rel="noopener"
                >
                  Mumbai News
                </a>
              </ListItem>
              <ListItem>
                <a
                  href="https://indianexpress.com/section/entertainment/bollywood/"
                  target="_blank"
                  rel="noopener"
                >
                  Bollywood News
                </a>
              </ListItem>
              <ListItem>
                <a
                  href="https://indianexpress.com/section/lifestyle/"
                  target="_blank"
                  rel="noopener"
                >
                  Lifestyle News
                </a>
              </ListItem>
            </UnorderedList>
          </div>
        </div>
        <div className={style.FooterContainer}>
          <div className={style.FooterSubHeadings}>
            <h2>TRENDING NEWS</h2>
          </div>
          <center>
            <hr />
          </center>
          <div className={style.FooterDivSection}>
            <UnorderedList>
              <ListItem>
                <a
                  href="https://indianexpress.com/section/horoscope/"
                  target="_blank"
                  rel="noopener"
                >
                  Horoscope
                </a>
              </ListItem>
              <ListItem>
                <a
                  href="https://indianexpress.com/section/horoscope/"
                  target="_blank"
                  rel="noopener"
                >
                  Horoscope
                </a>
              </ListItem>
              <ListItem>
                <a
                  href="https://indianexpress.com/subscribe/all-access/"
                  target="_blank"
                  rel="noopener"
                >
                  Buy All-Access pass
                </a>
              </ListItem>
              <ListItem>
                <a
                  href="https://indianexpress.com/subscribe/all-access/"
                  target="_blank"
                  rel="noopener"
                >
                  Buy All-Access pass
                </a>
              </ListItem>
            </UnorderedList>
            <UnorderedList>
              <ListItem>
                <a
                  href="https://indianexpress.com/section/india/"
                  target="_blank"
                  rel="noopener"
                >
                  India News
                </a>
              </ListItem>
              <ListItem>
                <a
                  href="https://indianexpress.com/section/entertainment/"
                  target="_blank"
                  rel="noopener"
                >
                  Entertainment News
                </a>
              </ListItem>
              <ListItem>
                <a
                  href="https://indianexpress.com/subscribe/"
                  target="_blank"
                  rel="noopener"
                >
                  Subscribe to The Indian Express
                </a>
              </ListItem>
              <ListItem>
                <a
                  href="https://indianexpress.com/article/cities/bangalore/bengaluru-news-live-updates-bommai-weather-southwest-monsoon-covid-textbook-row-7946592/"
                  target="_blank"
                  rel="noopener"
                >
                  Bengaluru News Live
                </a>
              </ListItem>
            </UnorderedList>
            <UnorderedList>
              <ListItem>
                <a
                  href="https://eureka.indianexpress.com/video/art-craft/"
                  target="_blank"
                  rel="noopener"
                >
                  Art &amp; Craft Classes for Kids
                </a>
              </ListItem>
              <ListItem>
                <a
                  href="https://indianexpress.com/section/upsc-current-affairs/"
                  target="_blank"
                  rel="noopener"
                >
                  UPSC News
                </a>
              </ListItem>
              <ListItem>
                <a
                  href="https://indianexpress.com/subscribe/premium/"
                  target="_blank"
                  rel="noopener"
                >
                  Buy Digital Premium
                </a>
              </ListItem>
              <ListItem>
                <a
                  href="https://indianexpress.com/article/cities/mumbai/mumbai-news-live-updates-weather-rains-ncb-traffic-covid-7946612/"
                  target="_blank"
                  rel="noopener"
                >
                  Mumbai News Live
                </a>
              </ListItem>
            </UnorderedList>
            <UnorderedList>
              <ListItem>
                <a
                  href="https://eureka.indianexpress.com/video/fitness/"
                  target="_blank"
                  rel="noopener"
                >
                  Fitness Classes for Kids
                </a>
              </ListItem>
              <ListItem>
                <a
                  href="https://indianexpress.com/section/sports/ipl"
                  target="_blank"
                  rel="noopener"
                >
                  IPL 2022 News
                </a>
              </ListItem>
              <ListItem>
                <a
                  href="https://indianexpress.com/subscribe/epaper/"
                  target="_blank"
                  rel="noopener"
                >
                  Buy Indian Express e-paper
                </a>
              </ListItem>
              <ListItem>
                <a
                  href="https://indianexpress.com/article/cities/chennai/chennai-news-live-updates-stalin-covid-weather-dmk-aiadmk-bjp-fuel-price-7946616/"
                  target="_blank"
                  rel="noopener"
                >
                  Chennai News Live
                </a>
              </ListItem>
            </UnorderedList>
          </div>
        </div>
        <div className={style.FooterContainer}>
          <div className={style.FooterSubHeadings}>
            <h2>LATEST STORIES</h2>
          </div>
          <center>
            <hr />
          </center>
          <div className={style.FooterContainer_one}>
            <UnorderedList>
              <ListItem>
                <a
                  href="https://indianexpress.com/article/sports/football/england-slumps-to-historic-loss-to-hungary-in-nations-league-7970284/"
                  target="_blank"
                  rel="noopener"
                >
                  Nations League: England suffer its worst home defeat since
                  1928 with a 4-0 loss to Hungary
                </a>
              </ListItem>
              <ListItem>
                <a
                  href="https://indianexpress.com/article/cities/chennai/chennai-news-live-updates-today-tamil-nadu-covid-weather-stalin-dmk-aiadmk-gcc-traffic-7970257/"
                  target="_blank"
                  rel="noopener"
                >
                  Chennai News Live: Fresh Covid-19 cases breach 300-mark in
                  Tamil Nadu, 171 new cases in state capital
                </a>
              </ListItem>
            </UnorderedList>
            <UnorderedList>
              <ListItem>
                <a
                  href="https://indianexpress.com/article/cities/jammu/two-militants-killed-in-south-kashmirs-shopian-police-say-one-of-them-killed-rajasthan-bank-manager-7970286/"
                  target="_blank"
                  rel="noopener"
                >
                  Two militants killed in South Kashmir’s Shopian, police say
                  one of them killed Rajasthan bank manager
                </a>
              </ListItem>
              <ListItem>
                <a
                  href="https://indianexpress.com/article/sports/while-you-were-asleep-england-slump-to-historic-loss-and-afghans-complete-a-clean-sweep-7970239/"
                  target="_blank"
                  rel="noopener"
                >
                  While you were asleep: England slump to historic loss, Germany
                  crush Italy and Afghans complete a clean sweep
                </a>
              </ListItem>
            </UnorderedList>
            <UnorderedList>
              <ListItem>
                <a
                  href="https://indianexpress.com/article/cities/pune/pune-fire-company-basement-shivajinagar-7970288/"
                  target="_blank"
                  rel="noopener"
                >
                  Pune: Fire in company record room in building basement in
                  Shivajinagar area.
                </a>
              </ListItem>
              <ListItem>
                <a
                  href="https://indianexpress.com/article/world/pak-army-says-defence-budget-for-2022-23-decreases-from-2-8-of-the-gdp-to-2-2-by-sajjad-hussain-7970271/"
                  target="_blank"
                  rel="noopener"
                >
                  Pak Army says defence budget for 2022-23 decreases from 2.8%
                  of the GDP to 2.2% By Sajjad Hussain
                </a>
              </ListItem>
            </UnorderedList>
            <UnorderedList>
              <ListItem>
                <a
                  href="https://indianexpress.com/article/sports/cricket/ranji-trophy-2022-semifinals-day-2-live-score-streaming-online-updates-7970008/"
                  target="_blank"
                  rel="noopener"
                >
                  Ranji Trophy 2022 Semifinals, Day 2 Live: MP, Mumbai look to
                  build on strong start
                </a>
              </ListItem>
              <ListItem>
                <a
                  href="https://indianexpress.com/article/lifestyle/life-positive/you-need-discipline-and-hard-work-to-achieve-your-dreams-arvind-arora-life-positive-7965856/"
                  target="_blank"
                  rel="noopener"
                >
                  ‘You need discipline and hard work to achieve your dreams’:
                  Arvind Arora
                </a>
              </ListItem>
            </UnorderedList>
          </div>
          <center>
            <hr />
          </center>
        </div>

        <div className={style.FooterMidDIv}>
          <div className={style.FooterMidDIv_first}>
            <div className={style.FooterMidDIv_first_subA}>
              <div>
                <h1>FOLLOW US</h1>
                <Wrap>
                  <WrapItem>
                    <Avatar
                      size="sm"
                      name="Facebook"
                      src="	https://indianexpress.com/wp-content/themes/indianexpress/images/icons/icon-facebook.svg"
                    />
                  </WrapItem>
                  <WrapItem>
                    <Avatar
                      size="sm"
                      name="Twitter"
                      src="	https://indianexpress.com/wp-content/themes/indianexpress/images/icons/icon-twitter.svg"
                    />
                  </WrapItem>
                  <WrapItem>
                    <Avatar
                      size="sm"
                      name="Linkedin"
                      src="	https://indianexpress.com/wp-content/themes/indianexpress/images/icons/icon-linkedin.svg"
                    />
                  </WrapItem>
                  <WrapItem>
                    <Avatar
                      size="sm"
                      name="Instagram"
                      src="https://indianexpress.com/wp-content/themes/indianexpress/images/icons/icon-instagram.svg"
                    />
                  </WrapItem>
                </Wrap>
              </div>
              <div>
                <h1>DOWNLOAD APPS</h1>
                <Wrap>
                  <WrapItem>
                    <Avatar
                      size="sm"
                      name="Android"
                      src="	https://indianexpress.com/wp-content/themes/indianexpress/images/icons/icon-android.svg"
                    />
                  </WrapItem>
                  <WrapItem>
                    <Avatar
                      size="sm"
                      name="iOS"
                      src="	https://indianexpress.com/wp-content/themes/indianexpress/images/icons/icon-apple.svg"
                    />
                  </WrapItem>
                </Wrap>
              </div>
            </div>

            <div className={style.FooterMidDIv_first_subB}>
              <div className={style.Sub_a}>
                <img
                  src="https://indianexpress.com/wp-content/themes/indianexpress/images/newsguard-logo-w.svg"
                  width="120px"
                  height="18px"
                  alt="Newsguard"
                />
              </div>
              <div className={style.FooterMidDIv_NewsGuard}>
                <div>
                  <img
                    src="https://indianexpress.com/wp-content/themes/indianexpress/images/newsguard-check.svg"
                    width="20px"
                    height="26px"
                    alt="Newsguard"
                  />
                </div>
                <div>
                  <p>
                    The Indian Express website has been rated GREEN for its
                    credibility and trustworthiness by Newsguard, a global
                    service that rates news sources for their journalistic
                    standards.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={style.FooterMidDIv_Second}>
            <div>
              <h1>EXPRESS GROUP</h1>
              <div className={style.ExpressGrpLinks_container}>
                <div>
                  <ul>
                    <li>
                      <a
                        href="https://indianexpress.com/"
                        aria-current="page"
                        target="_blank"
                        rel="noopener"
                      >
                        The Indian Express
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.financialexpress.com/"
                        target="_blank"
                        rel="noopener"
                      >
                        The Financial Express
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.loksatta.com/"
                        target="_blank"
                        rel="noopener"
                      >
                        Loksatta
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.jansatta.com/"
                        target="_blank"
                        rel="noopener"
                      >
                        Jansatta
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://expressgroup.indianexpress.com/"
                        target="_blank"
                        rel="noopener"
                      >
                        The ExpressGroup
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://indianexpress.com/newsletters/"
                        target="_blank"
                        rel="noopener"
                      >
                        Newsletters
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://rngfoundation.com/awards/"
                        target="_blank"
                        rel="noopener"
                      >
                        Ramnath Goenka Excellence in Journalism Awards
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.lighthousejournalism.com/"
                        target="_blank"
                        rel="noopener"
                      >
                        Light House Journalism
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>
                      <a
                        href="https://tamil.indianexpress.com/"
                        target="_blank"
                        rel="noopener"
                      >
                        ieTamil.com
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://bengali.indianexpress.com/"
                        target="_blank"
                        rel="noopener"
                      >
                        ieBangla.com
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://malayalam.indianexpress.com/"
                        target="_blank"
                        rel="noopener"
                      >
                        ieMalayalam.com
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.inuth.com/"
                        target="_blank"
                        rel="noopener"
                      >
                        inUth
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.myinsuranceclub.com/"
                        target="_blank"
                        rel="noopener"
                      >
                        MyInsuranceClub
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://indianexpress.com/26-11/"
                        target="_blank"
                        rel="noopener"
                      >
                        26/11 Stories of Strength
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://eureka.indianexpress.com/"
                        target="_blank"
                        rel="noopener"
                      >
                        Online Classes for Kids
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className={style.FooterMidDIv_third}>
            <h1>QUICK LINKS</h1>
            <div>
              <ul>
                <li>
                  <a
                    href="/terms-and-conditions/"
                    target="_blank"
                    rel="noopener"
                  >
                    T&amp;C
                  </a>
                </li>
                <li>
                  <a href="/privacy-policy/" target="_blank" rel="noopener">
                    Privacy Policy
                  </a>
                </li>

                <li>
                  <a
                    href="https://indianexpress.com/brand-solutions/"
                    target="_blank"
                    rel="noopener"
                  >
                    Brand Solutions
                  </a>
                </li>
                <li>
                  <a href="/contact-us/" target="_blank" rel="noopener">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="http://subscribe.indianexpress.com/"
                    target="_blank"
                    rel="noopener"
                  >
                    Subscribe
                  </a>
                </li>
                <li>
                  <a
                    href="https://indianexpress.com/article/what-is/what-is-the-protection-of-children-from-sexual-offences-act-2012/"
                    target="_blank"
                    rel="noopener"
                  >
                    Statutory provisions on reporting (sexual offenses)
                  </a>
                </li>
                <li>
                  <a
                    href="https://indianexpress.com/article/india/code-of-ethics-for-digital-news-websites-6758543/"
                    target="_blank"
                    rel="noopener"
                  >
                    This website follows the DNPA’s code of conduct
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener"
                    href="https://expressgroup.indianexpress.com/corporate-social-responsibility.html"
                  >
                    CSR
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <center>
          <hr />
        </center>

        <div className={style.FooterBtmDiv}>
          <div>
            <p>
              Copyright © {FullYear} The Indian Express [P] Ltd. All Rights
              Reserved
            </p>
          </div>
          <div>
            <p>
              <a
                href="https://vip.wordpress.com/?utm_source=vip_powered_wpcom&amp;utm_medium=web&amp;utm_campaign=VIP%20Footer%20Credit&amp;utm_term=indianexpress.com"
                rel="noopener"
                class="powered-by-wpcom"
                target="_blank"
                aria-label="Powered by WordPress.com VIP"
              >
                <img
                  src="https://indianexpress.com/wp-content/themes/indianexpress/images/vip-powered-logo.png"
                  alt="Powered by WordPress.com VIP"
                  width="187"
                  height="26"
                />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
