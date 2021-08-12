import * as tokenService from './tokenService'
const BASE_URL = '/api/events/'

export const createComment = async (eventId, comment) => {
    try {
        const res = await fetch(`${BASE_URL}${eventId}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${tokenService.getToken()}`
            },
            body: JSON.stringify(comment)
        }, { mode: 'cors' })
        const data = await res.json()
        return data
    } catch (error) {
        throw error
    }
}

export const deleteComment = async (eventId, commentId) => {
    try {
        const res = await fetch(`${BASE_URL}${eventId}/comments/${commentId}`, {
            method: 'DELETE',
            headers: { 'Authorization': 'Bearer ' + tokenService.getToken() }
        }, { mode: 'cors' })
        const data = await res.json()
        return data
    } catch (error) {
        throw error
    }
}