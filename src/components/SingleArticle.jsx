import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getSingleArticle } from "../utils/api";
import ArticleComments from '../components/ArticleComments'

const SingleArticle = () => {
    const [isLoading, setIsloading] = useState(true);
    const {article_id} = useParams();
    const [singleArticle, setSingleArticle] = useState('')

    useEffect(() => {
        setIsloading(true);

        getSingleArticle(article_id)
        .then((response) => {
            setSingleArticle(response);
            setIsloading(false);
        })
    }, [article_id]);

    if (isLoading) return <p>Hang in there! Loading...</p>

    return (
        <>
            <h3 >{singleArticle.title}</h3>
            <br></br>
            <img src={singleArticle.article_img_url} className="single-article-image" alt="I am an alt."/>
            <p>Author: {singleArticle.author}</p>
            <p>Date posted: {new Date(singleArticle.created_at).toLocaleString().split(',')[0]}</p>
            <p className="article-body">{singleArticle.body}</p>
            <ArticleComments />
            
        </>
        )
  };
  
export default SingleArticle;

