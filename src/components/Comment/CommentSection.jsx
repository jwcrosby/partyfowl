import React, { useState } from 'react'

// components
import CreateComment from '../CreateComponents/CreateComment/CreateComment'
import CommentList from './CommentList'


const CommentSection = (props) => {

    return (
        <div className='comment-section'>

            <div className='header'>
                <h3>Comment Section</h3>
            </div>

            <CreateComment />

            <CommentList />
        
        </div>
    )
}

export default CommentSection