import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";

const Home = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsloading] = useState(true);

    useEffect(() => {
        setIsloading(true);

        getArticles()
        .then((articlesData)=> {
            setArticles(articlesData)
            setIsloading(false);
        })
    }, [])

    if (isLoading) return <p>Hang in there! Articles are loading...</p>

    return (
    <div>
        <h2>Here are all articles about football, coding and cooking:</h2>
        <p>{isLoading}</p>
        <ul className="articles-list">
        {articles.map((item) => {
          return (
            <li key={item.article_id} className="each-item" >
              <img src={item.article_img_url} className="images" alt="I am an alt."/>
              <p>{item.topic}</p>
              <p>{item.title}</p>
              <p>Author: {item.author}</p>
              <p>Date posted: {new Date(item.created_at).toLocaleString().split(',')[0]}</p>
            </li>
          );
        })}
      </ul>
    </div>
    )
  };
  
export default Home;