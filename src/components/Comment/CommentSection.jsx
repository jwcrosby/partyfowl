import React, { useState } from 'react'

// components
import CommentList from './CommentList'
import CreateComment from '../CreateComponents/CreateComment/CreateComment'

// services
import { createComment, deleteComment } from '../../services/commentService'


const CommentSection = (props) => {
    console.log('props 2', props)
    const [toggleNewComment, setToggleNewComment] = useState(true) // changed false to true props.event._id,

    const handleCreateComment = async (formData) => {
        console.log('form data', formData, 'event id', props.eventId)
        try {
            const newComment = await createComment(props.eventId, formData)
            newComment.owner = props.currentUser
            props.setCommentArray([...props.commentArray, newComment])
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

            <div className='header-btns'>
                {props.currentUser &&
                    <button onClick={() => setToggleNewComment(!toggleNewComment)}>
                        Add A Comment
                    </button>
                }
            </div>

            {toggleNewComment &&
            <CreateComment 
                    {...props}
                    handleCreateComment={handleCreateComment}
                    setToggleNewComment={setToggleNewComment}
            ></CreateComment>
            }

            <CommentList 
                {...props}
                handleDeleteComment={handleDeleteComment}
            />
        
        </div>
    )
}

export default CommentSection