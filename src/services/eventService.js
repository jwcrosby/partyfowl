
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

