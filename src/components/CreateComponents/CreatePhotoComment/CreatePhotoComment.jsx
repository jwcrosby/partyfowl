import React, { useState } from 'react'

const CreatePhotoComment = (props) => {
    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = { 
            content: text,
            eventId: props.eventId,
            owner: props.user._id,
        }
        props.handleCreatePhotoComment(formData)
        setText('')
    }

    return (
        <form onSubmit={handleSubmit} className='create-form'>
            <label>Enter Your Comment Here</label>
            <input 
                required
                autoComplete='off'
                placeholder='Photo Comment'
                name='content'
                value={text}
                onChange={(e) => setText(e.target.value)}
            ></input>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default CreatePhotoComment