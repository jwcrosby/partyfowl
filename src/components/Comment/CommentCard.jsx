import React from 'react'

// components
import CommentActions from './CommentActions'
import './CommentCard.css'


const CommentCard = (props) => {

    return (
        <div className='comment-card'>

            <div className='comment-content'>
                <p id='content'>
                    {props.user.name}: {props.comment.content}
                </p>
            </div>

            <div className='card-button'>
                <CommentActions
                    {...props}
                />
            </div>

        </div>
    )
}

export default CommentCard