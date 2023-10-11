import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getSingleArticle, ArticleUpVote, ArticleDownVote } from "../utils/api";
import ArticleComments from "../components/ArticleComments";
import authorIcon from "../images/article-author-icon.png";
import articleTimeIcon from "../images/article-time-icon.png";
import thumbsUp from '../images/thumbs-up.png';
import thumbsDown from "../images/thumbs-down.png";


const SingleArticle = () => {
  const [isLoading, setIsloading] = useState(true);
  const { article_id } = useParams();
  const [singleArticle, setSingleArticle] = useState("");
  const [isVotingError, setIsVotingError] = useState(false);

  useEffect(() => {
    setIsloading(true);

    getSingleArticle(article_id).then((response) => {
      setSingleArticle(response);
      setIsloading(false);
    });
  }, [article_id]);

  const upVote = () => {
    setIsVotingError(false);

    setSingleArticle((singleArticle) => {
      return { ...singleArticle, votes: singleArticle.votes + 1 };
    });

    ArticleUpVote(article_id)
      .then(() => {})
      .catch((err) => {
        setIsVotingError(true);
        setSingleArticle((singleArticle) => {
          return { ...singleArticle, votes: singleArticle.votes - 1 };
        });
      });
  };

  const downVote = (article_id) => {
    setIsVotingError(false);

    setSingleArticle((singleArticle) => {
      return { ...singleArticle, votes: singleArticle.votes - 1 };
    });

    ArticleDownVote(article_id)
      .then(() => {})
      .catch((err) => {
        setIsVotingError(true);
        setSingleArticle((singleArticle) => {
          return { ...singleArticle, votes: singleArticle.votes + 1 };
        });
      });
  };

  if (isLoading) return <p>Hang in there! Loading...</p>;

  return (
    <div className="main-body" id="single-article-main-body">
      <div className="body-content">
        <div className="header-and-image">
          <h3 className="single-article-header" id="single-article-header">
            {singleArticle.title}
          </h3>
          <img
            src={singleArticle.article_img_url}
            className="single-article-image"
            alt="I am an alt."
          />
        </div>
        <div className="single-article-author">
          <img src={authorIcon} alt="Author icon" className="author-icon" />
          {"  "}
          <div className="author-and-company">
            <p className="author-name">{singleArticle.author} </p>
            <p className="author-company-name">
              Experienced Author{" "}
              <span style={{ color: "#4a53ba" }}>@CompanyMedia</span>
            </p>
          </div>
        </div>
        <div className="single-article-time">
          <img
            src={articleTimeIcon}
            alt="Time icon"
            height={15}
            className="article-time-icon"
          />
          {"  "}
          <p>{new Date(singleArticle.created_at).toDateString()}</p>
        </div>

        <div className="voting-section">
          <img
            src={thumbsUp}
            alt="thumbs up icon"
            className="hithere thumbs"
            onClick={() => upVote(singleArticle.article_id)}
          />

          <p className="voting-section">&ensp;{singleArticle.votes}&ensp;</p>
          <img
            src={thumbsDown}
            alt="Thumbs down icon"
            className="thumbs"
            onClick={() => downVote(singleArticle.article_id)}
          />
          {isVotingError && <p>Your vote was NOT processed!</p>}
        </div>

        <p className="article-body">{singleArticle.body}</p>
        <ArticleComments />
      </div>
    </div>
  );
};

export default SingleArticle;
