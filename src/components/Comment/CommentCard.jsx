import React from 'react'

// components
import CommentActions from './CommentActions'


const CommentCard = (props) => {

    return (
        <div className='comment-card'>
            
            <div className='card-header'>
                <CommentActions
                    {...props}
                />
            </div>

            <div className='comment-content'>
                <p>
                    {props.user.name}: {props.comment.content}
                </p>
            </div>
        </div>
    )
}

export default CommentCard