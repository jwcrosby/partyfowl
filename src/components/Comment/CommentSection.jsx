import React from 'react'

// components
import CommentList from './CommentList'
import CreateComment from '../CreateComponents/CreateComment/CreateComment'

// services
import { createComment, deleteComment } from '../../services/commentService'


const CommentSection = (props) => {
    console.log('props 2', props)

    const handleCreateComment = async (formData) => {
        console.log('form data', formData, 'event id', props.eventId, 'owner', props.user)
        try {
            const newComment = await createComment(props.eventId, formData)
            newComment.owner = props.user
            props.setCommentsArray([newComment, ...props.commentsArray])
        } catch (error) {
            throw error
        }
    }

    const handleDeleteComment = async (commentId) => {
        console.log('commentId', commentId)
        try {
            await deleteComment(props.eventId, commentId)
            props.setCommentsArray(props.commentsArray.filter(comment => comment._id !== commentId))
        } catch (error) {
            throw error
        }
    }
    console.log('props.comment.arry', props.commentsArray)
    return (
        <div className='comment-section'>

            <div className='header'>
                <h3>Comment Section</h3>
            </div>

            <CreateComment 
                {...props}
                handleCreateComment={handleCreateComment}
            ></CreateComment>

            <CommentList 
                {...props}
                handleDeleteComment={handleDeleteComment}
            />
        
        </div>
    )
}

export default CommentSection