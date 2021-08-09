import React, { useState } from 'react'

// components
import CreateComment from '../CreateComponents/CreateComment/CreateComment'
import CommentList from './CommentList'

// services
import { createComment } from '../../services/commentService'


const CommentSection = (props) => {

    const handleCreateComment = async (formData) => {
        try {
            const newComment = await createComment(props.event._id, formData)
            newComment.owner = props.currentUser
            props.setCommentArray([...props.setCommentArray, newComment])
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

            <CommentList {...props} />
        
        </div>
    )
}

export default CommentSection