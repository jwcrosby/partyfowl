import React, { useState } from 'react'

// components
import CreateComment from '../CreateComponents/CreateComment/CreateComment'
import CommentList from './CommentList'

// services
import { createComment, deleteComment } from '../../services/commentService'


const CommentSection = (props) => {
    const [toggleNewComment, setToggleNewComment] = useState(false)

    const handleCreateComment = async (formData) => {
        try {
            const newComment = await createComment(props.event._id, formData)
            newComment.owner = props.currentUser
            props.setCommentArray([...props.setCommentArray, newComment])
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