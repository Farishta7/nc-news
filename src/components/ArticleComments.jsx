import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {getComments} from '../utils/api'

const ArticleComments = () => {
    const [comments, setComments] = useState([]);
    const {article_id} = useParams();

    useEffect(() => {
        getComments(article_id)
        .then((commentsFromApi) => {
            setComments(commentsFromApi);
        })
    }, [article_id])

    return (
        <>
            <h4>Comments</h4>
            <ul className="comments-list">
                {comments.map((item) => {
                    return (
                    <li key={item.comment_id} className="each-comment" >
                    <img src="https://yt3.googleusercontent.com/ZJGwKd4H-lsmPo6cZ2WJ7aaU6uRJYOAmj-MDIDy_Se0sUu3iM41hG3KXgVz690DeEPRqxaKx=s900-c-k-c0x00ffffff-no-rj" alt="I am an alt" className="comment-image" />
                    <p className="comment-author">{item.author}</p>
                    <p className="comment-body"> {item.body}</p>
                    
                    </li>
                    );
                })}
            </ul>  
        </>
    )
  };
  
export default ArticleComments;

