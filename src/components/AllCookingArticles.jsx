 import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import { Link } from "react-router-dom";


const AllCookingArticles = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getArticles()
        .then((articlesData)=> {
            const onlyFootballArticles = articlesData.filter((item) => {
                return item.topic === "cooking"
            })
            
            setArticles(onlyFootballArticles)
        })
    }, [])

    return (
        <>
        <p style={{margin: "3rem"}}>Here are all the cooking articles:</p>
        <ul className="articles-list">
        {articles.map((item) => {
          return (
            <li key={item.article_id} className="each-article" >
              <Link to={`/articles/${item.article_id}` }>
              <img src={item.article_img_url} className="images" alt="I am an alt."/>
              <p>{item.topic.charAt(0).toUpperCase() + item.topic.slice(1)}</p>
              <p className="article-title">{item.title}</p>
              </Link>
              <p>Author: {item.author}</p>
              <p>Date posted: {new Date(item.created_at).toLocaleString().split(',')[0]}</p>
            </li>
          );
        })}
        </ul>
        </>
    )
  };
  
export default AllCookingArticles;