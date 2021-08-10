
const createEvent = async (id) => {
    try {
      let eventUrl = `/api/events/getEvent/${id}`;
  
      const res = await fetch(eventUrl);
  
      const data = await res.json();
  
      return data;
    } catch (error) {
      throw error;
    }
  };


export { createEvent }