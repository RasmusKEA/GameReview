import Comments from "../components/comments/Comments"
import '../components/comments/comment.css'

export default function Review(){
    return (
    <div>
        <h1>Here goes the review and comments</h1>
        <Comments
        commentsUrl="http://localhost:3004/comments"
        currentUserId="1"
        />
    </div>
    
    )
}