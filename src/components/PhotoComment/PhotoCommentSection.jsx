import React from 'react'

// components
import PhotoCommentList from './PhotoCommentList'
import CreatePhotoComment from '../CreateComponents/CreatePhotoComment/CreatePhotoComment'

// services
import { createPhotoComment, deletePhotoComment } from '../../services/photoCommentService'

const PhotoCommentSection = (props) => {
    console.log(props, "photoCommentSection")
    const handleCreatePhotoComment = async (formData) => {
        try {
            const newPhotoComment = await createPhotoComment(props.eventId, formData)
            console.log('photo', newPhotoComment)
            newPhotoComment.owner = props.user
            props.setPhotoCommentsArray([newPhotoComment])
        } catch (error) {
            throw error
        }
    }
    console.log(props, "photoCommentSectionQQQQ")
    const handleDeletePhotoComment = async (photoCommentId) => {
        try {
            await deletePhotoComment(props.eventId, photoCommentId)
            props.setPhotoCommentsArray(props.photoCommentsArray.filter(photoComment => photoComment._id !== photoCommentId))
        } catch (error) {
            throw error
        }
    }

    return (
        <div className='photo-comment-section'>

            <div className='header'>
                <h3>Photo Section</h3>
            </div>

            <CreatePhotoComment 
                {...props}
                handleCreatePhotoComment={handleCreatePhotoComment}
            ></CreatePhotoComment>

            <PhotoCommentList 
                {...props}
                handleDeletePhotoComment={handleDeletePhotoComment}
            />
        
        </div>
    )
}

export default PhotoCommentSection