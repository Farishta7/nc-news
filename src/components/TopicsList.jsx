import { Link } from "react-router-dom";

const TopicsList = () => {
    return (
        <div>
            <p style={{margin: "3rem"}}>Please select a topic to read articles about:</p>
            <div className="all-topics-images">
                <Link to={'/topics/football'} >
                    <img src="https://m.media-amazon.com/images/I/71wh6WUTXxL.jpg" alt="I am an alt" className="each-topic-image" />
                </Link>
                <Link to={'/topics/coding'}>
                    <img src="https://www.exeter.ac.uk/media/universityofexeter/careersandemployability/1.png" alt="I am an alt" className="each-topic-image"/>
                </Link>
                <Link to={'/topics/cooking'}>
                    <img src="https://thumbs.dreamstime.com/b/colourful-various-herbs-spices-cooking-dark-background-herbs-spices-cooking-dark-background-113655482.jpg" alt="I am an alt" className="each-topic-image"/>
                </Link>
            </div>
            
        </div>
        )
  };
  
export default TopicsList;