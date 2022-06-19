import axios from "axios";
import React, { useEffect, useState } from "react";
import Enterarticles from "./Enterarticles";

const EnterApi = () => {
  let headline = JSON.parse(localStorage.getItem("titles"));

  const [Enterapi, setEnterapi] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${headline}&from=2022-05-19&sortBy=publishedAt&apiKey=f67d94ae57ff483f87a5152f802d30da`
      )
      .then(({ data }) => {
        setEnterapi(data.articles);
      });
  }, []);

  return (
    <div>
      {Enterapi.map((data) => (
        <Enterarticles key={data.id} {...data} />
      ))}
    </div>
  );
};

export default EnterApi;
