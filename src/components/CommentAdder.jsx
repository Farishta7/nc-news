import { useState } from "react";
import { postComment } from "../utils/api";

const CommentAdder = (props) => {
    const {article_id, setComments} = props
    const [newComment, setNewComment] = useState('')


    const handleSubmit = (event) => {
        event.preventDefault();

        setNewComment((newComment, comments) => {
            return {newComment, ...comments}
        })

        postComment(article_id, newComment)
        .then((response) => {
            setComments((currentComments) => {
                return [response, ...currentComments]
            })
            
        })

        setNewComment('')
    }

    return (
        <div class="comment-section">
            <form onSubmit={handleSubmit}>
        <label htmlFor="newComment" >Add a comment</label>
        <br />
        <textarea style={{marginTop: "10px", marginBottom: "10px"}}id="newComment" value={newComment} onChange={(event) => setNewComment(event.target.value)}/>
        <br />
        <button type="submit" className="add-comment-button">Add my comment!</button>
        </form>
        </div>
        
        
    )
    
  };
  
export default CommentAdder;
