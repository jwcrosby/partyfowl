import * as tokenService from './tokenService'

export const createEvent = async (id) => {
    try {
        console.log("HELLO")
        let EVENT_URL = '/api/events/createEvent'
        const res = await fetch(`${EVENT_URL}/${id}`, {
            method: "POST",
        }, { mode: "cors" })
        const data = await res.json()
        console.log("data",data)
        return data
    } catch (error) {
        throw error
    }
}

export const doesEventExist = async (id) => {
    try {
        let EVENT_URL = '/api/events/doesEventExist'
        const res = await fetch(`${EVENT_URL}/${id}`)
        // should return a boolean
        const data = await res.json()
        return data
    } catch (error) {
        throw error
    }
}

export const createUserAttendsEvent = async (id, profile) => {
    try {
        console.log("I'm in the eventServices function for user/event save")
        let EVENT_URL = `/api/events`
        const res = await fetch(`${EVENT_URL}/${id}/${profile}`, 
        {method: "POST",
        headers: {Authorization: `Bearer ${tokenService.getToken()}`},
        mode: 'cors'})
        console.log("LOGGING RES", res)
        const data = await res.json()
        await console.log("HOPEFULLY THE PROFILES-ATTENDING", data)
        return data

    } catch (error) {
        throw error
    }
}

