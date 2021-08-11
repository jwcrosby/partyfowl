import React from 'react'

// component
import CommentCard from './CommentCard'


const CommentList = (props) => {

    return (
        props.commentsArray.map((comment) => (
            <CommentCard 
                key={comment._id}
                comment={comment}
                {...props}
            />
        ))
    )
}

export default CommentList