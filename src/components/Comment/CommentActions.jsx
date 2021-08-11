import React from 'react'

const CommentActions = (props) => {
    
// ?
    return (
        <div className='actions'>
            {
                props.currentUser &&
                props.currentUser._id === props.CommentActions.commenter._id &&
                <button onClick={() => props.handleDeleteComment(props.commenter._id)}>
                    Delete
                </button>
            }
        </div>
    )
}

export default CommentActions