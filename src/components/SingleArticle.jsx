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

    const upVote = () => {
        setIsVotingError(false);

        setSingleArticle((singleArticle) => {
            return {...singleArticle, votes: singleArticle.votes + 1}
        })

        ArticleUpVote(article_id)
        .then(() => {
        })
        .catch((err) => {
            setIsVotingError(true);
            setSingleArticle((singleArticle) => {
                return {...singleArticle, votes: singleArticle.votes - 1}
            })
        })
    }

    const downVote = (article_id) => {
        setIsVotingError(false);

        setSingleArticle((singleArticle) => {
            return {...singleArticle, votes: singleArticle.votes - 1}
        })

        ArticleDownVote(article_id)
        .then(() => {
        })
        .catch((err) => {
            setIsVotingError(true);
            setSingleArticle((singleArticle) => {
                return {...singleArticle, votes: singleArticle.votes + 1}
            })
        })
    }

    if (isLoading) return <p>Hang in there! Loading...</p>

    return (
        <div style={{margin: "3rem"}}>
        <div className="header-and-image">
            <h3 className="single-article-header">{singleArticle.title}</h3>
            <img src={singleArticle.article_img_url} className="single-article-image" alt="I am an alt."/>
             
        </div>
        <div style={{marginTop: "20px"}}>
            <p className="author-and-date">Author: {singleArticle.author} &ensp; Date posted: {new Date(singleArticle.created_at).toLocaleString().split(',')[0]}</p>
        </div>
        <div>
            <button className="voting-section" onClick={() => upVote(singleArticle.article_id)}>
                    <span aria-label="up vote for this article">👍</span>
                </button>
                <p className="voting-section" >&ensp;{singleArticle.votes}&ensp;</p>
                <button className="voting-section" onClick={() => downVote(singleArticle.article_id)}>
                <span aria-label="down vote for this article">👎</span>
                </button>
                {isVotingError && <p>Your vote was NOT processed!</p>}
        </div>
        <p className="article-body">{singleArticle.body}</p>
            <ArticleComments />
        </div>
           
            
        
        )
  };
  
export default SingleArticle;