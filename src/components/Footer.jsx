import React from "react";
import {
  ListItem,
  UnorderedList,
  Wrap,
  WrapItem,
  Avatar,
  Link
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
                <Link
                  href="https://indianexpress.com/section/explained/"
                  isExternal
                >
                  Explained News
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="https://indianexpress.com/section/cities/delhi/"
                  isExternal
                >
                  Delhi News
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="https://indianexpress.com/section/lifestyle/health/"
                  isExternal
                >
                  Health News
                </Link>
              </ListItem>
            </UnorderedList>
            <UnorderedList>
              <ListItem>
                <Link
                  href="https://indianexpress.com/section/india/political-pulse/"
                  isExternal
                >
                  Political Pulse
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="https://indianexpress.com/section/cities/pune/"
                  isExternal
                >
                  Pune News
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="https://indianexpress.com/section/india/"
                  isExternal
                >
                  India News
                </Link>
              </ListItem>
            </UnorderedList>
            <UnorderedList>
              <ListItem>
                <Link
                  href="https://indianexpress.com/section/opinion/"
                  isExternal
                >
                  Latest Opinion
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="https://indianexpress.com/section/cities/bangalore/"
                  isExternal
                >
                  Bangalore News
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="https://indianexpress.com/section/sports/"
                  isExternal
                >
                  Sports News
                </Link>
              </ListItem>
            </UnorderedList>
            <UnorderedList>
              <ListItem>
                <Link
                  href="https://indianexpress.com/section/cities/mumbai/"
                 isExternal
                >
                  Mumbai News
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="https://indianexpress.com/section/entertainment/bollywood/"
                  isExternal
                >
                  Bollywood News
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="https://indianexpress.com/section/lifestyle/"
                  isExternal
                >
                  Lifestyle News
                </Link>
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
                <Link
                  href="https://indianexpress.com/section/horoscope/"
                  isExternal
                >
                  Horoscope
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="https://indianexpress.com/section/horoscope/"
                  isExternal
                >
                  Horoscope
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="https://indianexpress.com/subscribe/all-access/"
                  isExternal
                >
                  Buy All-Access pass
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="https://indianexpress.com/subscribe/all-access/"
                  isExternal
                >
                  Buy All-Access pass
                </Link>
              </ListItem>
            </UnorderedList>
            <UnorderedList>
              <ListItem>
                <Link
                  href="https://indianexpress.com/section/india/"
                  isExternal
                >
                  India News
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="https://indianexpress.com/section/entertainment/"
                  isExternal
                >
                  Entertainment News
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="https://indianexpress.com/subscribe/"
                  isExternal
                >
                  Subscribe to The Indian Express
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="https://indianexpress.com/article/cities/bangalore/bengaluru-news-live-updates-bommai-weather-southwest-monsoon-covid-textbook-row-7946592/"
                  isExternal
                >
                  Bengaluru News Live
                </Link>
              </ListItem>
            </UnorderedList>
            <UnorderedList>
              <ListItem>
                <Link
                  href="https://eureka.indianexpress.com/video/art-craft/"
                  isExternal
                >
                  Art &amp; Craft Classes for Kids
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="https://indianexpress.com/section/upsc-current-affairs/"
                  isExternal
                >
                  UPSC News
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="https://indianexpress.com/subscribe/premium/"
                  isExternal
                >
                  Buy Digital Premium
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="https://indianexpress.com/article/cities/mumbai/mumbai-news-live-updates-weather-rains-ncb-traffic-covid-7946612/"
                  isExternal
                >
                  Mumbai News Live
                </Link>
              </ListItem>
            </UnorderedList>
            <UnorderedList>
              <ListItem>
                <Link
                  href="https://eureka.indianexpress.com/video/fitness/"
                  isExternal
                >
                  Fitness Classes for Kids
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="https://indianexpress.com/section/sports/ipl"
                  isExternal
                >
                  IPL 2022 News
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="https://indianexpress.com/subscribe/epaper/"
                 isExternal
                >
                  Buy Indian Express e-paper
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="https://indianexpress.com/article/cities/chennai/chennai-news-live-updates-stalin-covid-weather-dmk-aiadmk-bjp-fuel-price-7946616/"
                  isExternal
                >
                  Chennai News Live
                </Link>
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
                <Link
                  href="https://indianexpress.com/article/sports/football/england-slumps-to-historic-loss-to-hungary-in-nations-league-7970284/"
                  isExternal
                >
                  Nations League: England suffer its worst home defeat since
                  1928 with a 4-0 loss to Hungary
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="https://indianexpress.com/article/cities/chennai/chennai-news-live-updates-today-tamil-nadu-covid-weather-stalin-dmk-aiadmk-gcc-traffic-7970257/"
                  isExternal
                >
                  Chennai News Live: Fresh Covid-19 cases breach 300-mark in
                  Tamil Nadu, 171 new cases in state capital
                </Link>
              </ListItem>
            </UnorderedList>
            <UnorderedList>
              <ListItem>
                <Link
                  href="https://indianexpress.com/article/cities/jammu/two-militants-killed-in-south-kashmirs-shopian-police-say-one-of-them-killed-rajasthan-bank-manager-7970286/"
                  isExternal
                >
                  Two militants killed in South Kashmir’s Shopian, police say
                  one of them killed Rajasthan bank manager
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="https://indianexpress.com/article/sports/while-you-were-asleep-england-slump-to-historic-loss-and-afghans-complete-a-clean-sweep-7970239/"
                  isExternal
                >
                  While you were asleep: England slump to historic loss, Germany
                  crush Italy and Afghans complete a clean sweep
                </Link>
              </ListItem>
            </UnorderedList>
            <UnorderedList>
              <ListItem>
                <Link
                  href="https://indianexpress.com/article/cities/pune/pune-fire-company-basement-shivajinagar-7970288/"
                 isExternal
                >
                  Pune: Fire in company record room in building basement in
                  Shivajinagar area.
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="https://indianexpress.com/article/world/pak-army-says-defence-budget-for-2022-23-decreases-from-2-8-of-the-gdp-to-2-2-by-sajjad-hussain-7970271/"
                  isExternal
                >
                  Pak Army says defence budget for 2022-23 decreases from 2.8%
                  of the GDP to 2.2% By Sajjad Hussain
                </Link>
              </ListItem>
            </UnorderedList>
            <UnorderedList>
              <ListItem>
                <Link
                  href="https://indianexpress.com/article/sports/cricket/ranji-trophy-2022-semifinals-day-2-live-score-streaming-online-updates-7970008/"
                  isExternal
                >
                  Ranji Trophy 2022 Semifinals, Day 2 Live: MP, Mumbai look to
                  build on strong start
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="https://indianexpress.com/article/lifestyle/life-positive/you-need-discipline-and-hard-work-to-achieve-your-dreams-arvind-arora-life-positive-7965856/"
                  isExternal
                >
                  ‘You need discipline and hard work to achieve your dreams’:
                  Arvind Arora
                </Link>
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
                      <Link
                        href="https://indianexpress.com/"
                        
                        isExternal
                      >
                        The Indian Express
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.financialexpress.com/"
                        isExternal
                      >
                        The Financial Express
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.loksatta.com/"
                        isExternal
                      >
                        Loksatta
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.jansatta.com/"
                        isExternal
                      >
                        Jansatta
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://expressgroup.indianexpress.com/"
                        isExternal
                      >
                        The ExpressGroup
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://indianexpress.com/newsletters/"
                        isExternal
                      >
                        Newsletters
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://rngfoundation.com/awards/"
                        isExternal
                      >
                        Ramnath Goenka Excellence in Journalism Awards
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.lighthousejournalism.com/"
                        isExternal
                      >
                        Light House Journalism
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>
                      <Link
                        href="https://tamil.indianexpress.com/"
                        isExternal
                      >
                        ieTamil.com
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://bengali.indianexpress.com/"
                        isExternal
                      >
                        ieBangla.com
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://malayalam.indianexpress.com/"
                        isExternal
                      >
                        ieMalayalam.com
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.inuth.com/"
                        isExternal
                      >
                        inUth
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.myinsuranceclub.com/"
                        isExternal
                      >
                        MyInsuranceClub
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://indianexpress.com/26-11/"
                        isExternal
                      >
                        26/11 Stories of Strength
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://eureka.indianexpress.com/"
                        isExternal
                      >
                        Online Classes for Kids
                      </Link>
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
                  <Link
                    href="/terms-and-conditions/"
                    isExternal
                  >
                    T&amp;C
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy/" isExternal>
                    Privacy Policy
                  </Link>
                </li>

                <li>
                  <Link
                    href="https://indianexpress.com/brand-solutions/"
                    isExternal
                  >
                    Brand Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us/" isExternal>
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="http://subscribe.indianexpress.com/"
                    isExternal
                  >
                    Subscribe
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://indianexpress.com/article/what-is/what-is-the-protection-of-children-from-sexual-offences-act-2012/"
                    isExternal
                  >
                    Statutory provisions on reporting (sexual offenses)
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://indianexpress.com/article/india/code-of-ethics-for-digital-news-websites-6758543/"
                    isExternal
                  >
                    This website follows the DNPA’s code of conduct
                  </Link>
                </li>
                <li>
                  <Link
                    isExternal
                    href="https://expressgroup.indianexpress.com/corporate-social-responsibility.html"
                  >
                    CSR
                  </Link>
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
