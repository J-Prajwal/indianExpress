import React from 'react'
import City from './City';

const NewPage = () => {
let fullNews = JSON.parse(localStorage.getItem("new"))


const [detail, setDetail] = useState([]);
useEffect(() => {
  axios
    .get(
      `https://newsapi.org/v2/top-headlines?q=${fullNews}&country=in&apiKey=c9146378e4af465bacf36a65828ba9f0`
    )
    
    .then(({ data }) => {
      setDetail(data.articles);
    });
}, []);
  return (
    <div>
  {detail.map((data) => (
        <City key={data.id} {...data} />
      ))}
    </div>
  )
}

export default NewPage