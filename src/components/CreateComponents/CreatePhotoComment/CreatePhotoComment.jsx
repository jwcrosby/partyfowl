import React, { useState } from 'react'

const CreatePhotoComment = (props) => {
    const [imageUrlText, setImageUrlText] = useState('')
    const [captionText, setCaptionText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = { 
            image: imageUrlText,
            title: captionText,
            eventId: props.eventId,
            owner: props.user._id,
        }
        props.handleCreatePhotoComment(formData)
        setImageUrlText('')
        setCaptionText('')
    }

    return (
        <form onSubmit={handleSubmit} className='create-form'>
            <label>Add Your Photo Here!</label>
            <input 
                required
                autoComplete='off'
                placeholder='ImageUrl'
                name='image'
                value={imageUrlText}
                onChange={(e) => setImageUrlText(e.target.value)}
            ></input>
            <input 
                required
                autoComplete='off'
                placeholder='Caption'
                name='title'
                value={captionText}
                onChange={(e) => setCaptionText(e.target.value)}
            ></input>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default CreatePhotoComment