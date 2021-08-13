import React from 'react'

// components
import PhotoCommentActions from './PhotoCommentActions'


const PhotoCommentCard = (props) => {

    return (
        <div className='photo-comment-card'>
            <div className='photo-comment-content'>
                <p>
                    {props?.user?.name}:
                </p>
                <img src={props.photoComment.image} alt='alt' />  
            </div>
            
            <div className='card-header'>
                <PhotoCommentActions
                    {...props}
                />
            </div> 
        </div>
    )
}

export default PhotoCommentCard