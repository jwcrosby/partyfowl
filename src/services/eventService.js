
// const createEvent = async (id) => {
//     try {
//         console.log("I'm in the createEvent")
//         let eventUrl = `/api/events/createEvent/${id}`;
//         const res = await fetch(eventUrl);
//         const data = await res.json();
//         return data;
//     } catch (error) {
//         throw error;
//     }
// };

// export { createEvent }


export const createEvent = async (id) => {
    try {
        let EVENT_URL = '/api/events/createEvent'
        const res = await fetch(`${EVENT_URL}/${id}`, {
            method: "POST",
        }, { mode: "cors" })
        const data = await res.json()
        return data
    } catch (error) {
        throw error
    }
}