import React from 'react'

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
                    {props.CommentActions.comment_content}
                </p>
            </div>
        </div>
    )
}

export default CommentCard