import React from 'react'

// components
import PhotoCommentActions from './PhotoCommentActions'


const PhotoCommentCard = (props) => {
console.log('props', props)
    return (
        <div className='photo-comment-card'>

            <div className='photo-comment-content'>
                <p>
                    {props.user.name}:
                </p>
                <img src={props.photoCommentsArray[0]?.image} alt='alt'/>
                
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