

const getAllEvents = async () => {
  try {
    let eventUrl = `/api/events/getAll`;
    
    const res = await fetch(eventUrl);
    
    const data = await res.json();
    
    return data;
  } catch (error) {
    throw error;
  }
};

const getEventsByGeoHash = async (size, geoHash) => {
  try {
    let eventUrl = `/api/events/getByGeoHash/${size}/${geoHash}`

    const res = await fetch(eventUrl);

    const data = await res.json();

    return data;
  } catch (error) {
    throw error;
  }
};

const getEventById = async (id) => {
  try {
    let eventUrl = `/api/events/getEvent/${id}`;

    const res = await fetch(eventUrl);

    const data = await res.json();

    return data;
  } catch (error) {
    throw error;
  }
};

export { getAllEvents, getEventsByGeoHash, getEventById };
