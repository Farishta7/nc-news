import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getSingleArticle, ArticleUpVote, ArticleDownVote } from "../utils/api";
import ArticleComments from '../components/ArticleComments'

const SingleArticle = () => {
    const [isLoading, setIsloading] = useState(true);
    const {article_id} = useParams();
    const [singleArticle, setSingleArticle] = useState('')
    const [isVotingError, setIsVotingError] = useState(false);

    useEffect(() => {
        setIsloading(true);

        getSingleArticle(article_id)
        .then((response) => {
            setSingleArticle(response);
            setIsloading(false);
        })
    }, [article_id]);

    const upVote = (article_id) => {
        setIsVotingError(false);

        ArticleUpVote(article_id)
        .then((response) => {
            setSingleArticle(response);
        })
        .catch((err) => {
            setIsVotingError(true);
        })
    }

    const downVote = (article_id) => {
        setIsVotingError(false);

        ArticleDownVote(article_id)
        .then((response) => {
            setSingleArticle(response);
        })
        .catch((err) => {
            setIsVotingError(true);
        })
    }

    if (isLoading) return <p>Hang in there! Loading...</p>

    return (
        <>
            <h3 >{singleArticle.title}</h3>
            <br></br>
            <img src={singleArticle.article_img_url} className="single-article-image" alt="I am an alt."/>
            <p>Author: {singleArticle.author}</p>
            <p>Date posted: {new Date(singleArticle.created_at).toLocaleString().split(',')[0]}</p>
            <button onClick={() => upVote(singleArticle.article_id)}>
                <span aria-label="up vote for this article">👍</span>
            </button>
            <p>{singleArticle.votes}</p>
            <button onClick={() => downVote(singleArticle.article_id)}>
                <span aria-label="down vote for this article">👎</span>
            </button>
            {isVotingError && <p>Your vote was NOT processed!</p>}
            <p className="article-body">{singleArticle.body}</p>
            <ArticleComments />
            
        </>
        )
  };
  
export default SingleArticle;