import React, { useState } from 'react'

const CreateComment = (props) => {

    return (
        <form className='create-form'>
            <label>Enter Your Comment Here</label>
            <input 
                required
                type="text"
                autoComplete='off'
                placeholder='Comment'
                name='comment-content'
            ></input>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default CreateComment