import React from 'react'

// components
import PhotoCommentActions from './PhotoCommentActions'


const PhotoCommentCard = (props) => {
console.log('props', props)
// console.log('hello', props.photoCommentsArray[0][0].image)
// const image = props.photoCommentsArray[0][0].image
// const image = 'https://i.imgur.com/viKeMS4.jpg'
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