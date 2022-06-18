import axios from "axios";
import React, { useEffect, useState } from "react";
import Enterarticles from "./Enterarticles";

const EnterApi = () => {
  let headline = JSON.parse(localStorage.getItem("titles"));

  const [Enterapi, setEnterapi] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${headline}&from=2022-05-17&apiKey=cc3256391f47466b93db6bbd192db4a4`
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
