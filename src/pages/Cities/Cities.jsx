import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import styled from "./Cities.module.css";
// import { Image } from "@chakra-ui/react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
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
    <div >
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
      {data.map((el) => {
        return (
          <div className={styled.maindiv}>
          <div className="card mb-3" style={{ maxWidth: "540px" ,justifyContent:"center"}}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={el.urlToImage}
                  className="img-fluid rounded-start"
                  alt="..."
                />
                <p>{el.author}</p>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{el.title}</h5>
                  <p className="card-text">{el.description}</p>
                  <p className="card-text">
                    <small className="text-muted">
                      {el.publishedAt}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cities;

// c9146378e4af465bacf36a65828ba9f0
