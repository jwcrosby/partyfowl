import React, { useState } from 'react'

const CreateComment = (props) => {
    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            comment_content: text,
            event_id: props.event._id,
            owner: props.currentUser._id,
        }
        props.handleCreateComment(formData)
        props.setToggleNewComment(false)
    }

    return (
        <form onSubmit={handleSubmit} className='create-form'>
            <label>Enter Your Comment Here</label>
            <input 
                required
                autoComplete='off'
                placeholder='Comment'
                name='comment_content'
                value={text}
                onChange={(e) => setText(e.target.value)}
            ></input>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default CreateComment