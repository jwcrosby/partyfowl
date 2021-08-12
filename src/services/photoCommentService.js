import * as tokenService from './tokenService'
const BASE_URL = '/api/events/'

export const createPhotoComment = async (eventId, photoComment) => {
    try {
        const res = await fetch(`${BASE_URL}${eventId}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${tokenService.getToken()}`
            },
            body: JSON.stringify(photoComment)
        }, { mode: 'cors' })
        const data = await res.json()
        return data
    } catch (error) {
        throw error
    }
}

export const deletePhotoComment = async (eventId, photoCommentId) => {
    try {
        const res = await fetch(`${BASE_URL}${eventId}/photoComments/${photoCommentId}`, {
            method: 'DELETE',
            headers: { 'Authorization': 'Bearer ' + tokenService.getToken() }
        }, { mode: 'cors' })
        const data = await res.json()
        return data
    } catch (error) {
        throw error
    }
}