import React, { useState, useEffect } from "react";
import axios from "axios";
import City from "./Advertisement/City";
// import { v4 as uuidv4 } from "uuid";
import styled from "./Cities.module.css";
import Addvertise from "./Advertisement/Advertise";
import Sidenews from "./Advertisement/Sidenews";
// import { Image } from "@chakra-ui/react";
const Cities = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=c9146378e4af465bacf36a65828ba9f0`
      )
      .then((res) => setData(res.data.articles))
      .catch((e) => console.log(e));
  }, []);
  console.log(data);

  return (
    <div>
      <div className={styled.add1}>
        <img
          src="https://tpc.googlesyndication.com/daca_images/simgad/17135105900879832363"
          alt=""
        />
      </div>
      <div className={styled.box1}>
        <div className={styled.rbox}>
          <p>MUST READ</p>
        </div>
        <div className={styled.wrt}>
          <marquee>
            LIMITED PERIOD OFFER/ GET THE INDIAN EXPRESS DIGITAL PREMIUM NOW
            WITH AD-LITE
          </marquee>
        </div>
      </div>

      {/* ....... */}
<div className={styled.maindiv}>
        <div className={styled.image1}>
          <img
            src="https://tpc.googlesyndication.com/simgad/4933651823984287320"
            width="160px"
            height="600px"
            alt=""
          />
        </div>


      <div className={styled.news}>
        <City/>
      </div>
<div className={styled.Sidenews}>

</div>
<Sidenews/>

      <div className={styled.add}>
      <Addvertise/>
      </div>



        <div className={styled.image1}>
          <img
            src="https://tpc.googlesyndication.com/simgad/4933651823984287320"
            width="160px"
            height="600px"
            alt=""
          />
        </div>


        </div>
    </div>
  );
};

export default Cities;

// c9146378e4af465bacf36a65828ba9f0
