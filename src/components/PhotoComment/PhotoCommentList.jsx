import React from 'react'

// component
import PhotoCommentCard from './PhotoCommentCard'


const PhotoCommentList = (props) => {
console.log('photoCommentList props', props)
    return (
        props.photoCommentsArray.map((photoComment) => (
            <PhotoCommentCard 
                key={photoComment._id}
                photoComment={photoComment}
                {...props}
            />
        ))
    )
}

export default PhotoCommentList