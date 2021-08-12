import React from 'react'

const CommentActions = (props) => {

    return (
        <div className='actions'>
            {
                props.user &&
                props.user._id === props.comment.owner._id &&
                <button onClick={() => props.handleDeleteComment(props.comment._id)}>
                    Delete
                </button>
            }
        </div>
    )
}

export default CommentActions