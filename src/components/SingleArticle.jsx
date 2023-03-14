import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getSingleArticle } from "../utils/api";


const SingleArticle = (props) => {
    const {isLoading, setIsloading} = props
    const {article_id} = useParams();
    const [singleArticle, setSingleArticle] = useState('')

    useEffect(() => {
        setIsloading(true);

        getSingleArticle(article_id)
        .then((data) => {
            setSingleArticle(data);
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
        </>
        )
  };
  
export default SingleArticle;

