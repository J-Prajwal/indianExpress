import React from "react";
import { ListItem, UnorderedList } from "@chakra-ui/react";

import style from "../NAVBAR_CSS/FOOTER_CSS/Footer.module.css";

const Footer = () => {
  return (
    <div className={style.MainContainerForFooter}>
      <div className={style.FooterContainer}>
        <div className={style.FooterSubHeadings}>
          <h2>TOP CATEGORIES</h2>
        </div>
        <center><hr /></center>
        <div className={style.FooterDivSection}>
          <UnorderedList>
            <ListItem>Explained News</ListItem>
            <ListItem>Delhi News</ListItem>
            <ListItem>Health News</ListItem>
          </UnorderedList>
          <UnorderedList>
            <ListItem>Political Pulse</ListItem>
            <ListItem>Pune News</ListItem>
            <ListItem>India News</ListItem>
          </UnorderedList>
          <UnorderedList>
            <ListItem>Latest Options</ListItem>
            <ListItem>Banglore News</ListItem>
            <ListItem>Sports News</ListItem>
          </UnorderedList>
          <UnorderedList>
            <ListItem>Mumbai News</ListItem>
            <ListItem>Bollywood News</ListItem>
            <ListItem>Lifestyle News</ListItem>
          </UnorderedList>
        </div>
      </div>
      <div className={style.FooterContainer}>
        <div className={style.FooterSubHeadings}>
          <h2>TOP CATEGORIES</h2>
        </div>
        <center><hr /></center>
        <div className={style.FooterDivSection}>
          <UnorderedList>
            <ListItem>Explained News</ListItem>
            <ListItem>Delhi News</ListItem>
            <ListItem>Health News</ListItem>
          </UnorderedList>
          <UnorderedList>
            <ListItem>Political Pulse</ListItem>
            <ListItem>Pune News</ListItem>
            <ListItem>India News</ListItem>
          </UnorderedList>
          <UnorderedList>
            <ListItem>Latest Options</ListItem>
            <ListItem>Banglore News</ListItem>
            <ListItem>Sports News</ListItem>
          </UnorderedList>
          <UnorderedList>
            <ListItem>Mumbai News</ListItem>
            <ListItem>Bollywood News</ListItem>
            <ListItem>Lifestyle News</ListItem>
          </UnorderedList>
        </div>
      </div>
      <div className={style.FooterContainer}>
        <div className={style.FooterSubHeadings}>
          <h2>TOP CATEGORIES</h2>
        </div>
        <center><hr /></center>
        <div className={style.FooterDivSection}>
          <UnorderedList>
            <ListItem>Explained News</ListItem>
            <ListItem>Delhi News</ListItem>
            <ListItem>Health News</ListItem>
          </UnorderedList>
          <UnorderedList>
            <ListItem>Political Pulse</ListItem>
            <ListItem>Pune News</ListItem>
            <ListItem>India News</ListItem>
          </UnorderedList>
          <UnorderedList>
            <ListItem>Latest Options</ListItem>
            <ListItem>Banglore News</ListItem>
            <ListItem>Sports News</ListItem>
          </UnorderedList>
          <UnorderedList>
            <ListItem>Mumbai News</ListItem>
            <ListItem>Bollywood News</ListItem>
            <ListItem>Lifestyle News</ListItem>
          </UnorderedList>
        </div>
      <center><hr /></center>
      </div>

      <div className={style.FooterMidDIv}>
        <div>
          <div>
            <div>
              <h1>FOLLOW US</h1>

            </div>
            <div>
              <h1>DOWNLOAD APPS</h1>
            </div>
          </div>
          <div></div>
        </div>


        <div>
          <h1>EXPRESS GROUP</h1>
        </div>
        <div>
          <h1>QUICK LINKS</h1>
        </div>
      </div>
      
      
    </div>
  );
};

export default Footer;
