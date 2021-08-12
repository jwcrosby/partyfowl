import React from 'react'

// components
import PhotoCommentActions from './PhotoCommentActions'


const PhotoCommentCard = (props) => {

    return (
        <div className='photo-comment-card'>
            
            <div className='card-header'>
                <PhotoCommentActions
                    {...props}
                />
            </div>

            <div className='photo-comment-content'>
                <p>
                    {props.user.name}: {/*props.comment.content*/}
                </p>
            </div>
        </div>
    )
}

export default PhotoCommentCard