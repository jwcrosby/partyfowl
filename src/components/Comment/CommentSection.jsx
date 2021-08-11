import React from 'react'

// components
import CommentList from './CommentList'
import CreateComment from '../CreateComponents/CreateComment/CreateComment'

// services
import { createComment, deleteComment } from '../../services/commentService'


const CommentSection = (props) => {
    console.log('props 2', props.user)

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
        try {
            await deleteComment(props.event._id, commentId)
            props.setCommentArray(props.commentArray.filter(comment => comment._id !== commentId))
        } catch (error) {
            throw error
        }
    }

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