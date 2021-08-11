import React from 'react'

const CommentActions = (props) => {
    console.log('comment action props', props)
// ?
    return (
        <div className='actions'>
            {
                props.user &&
                props.user._id === props.comment.owner &&
                <button onClick={() => props.handleDeleteComment(props.comment._id)}>
                    Delete
                </button>
            }
        </div>
    )
}

export default CommentActions