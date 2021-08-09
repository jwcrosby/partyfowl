

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

const getEventsByPostalCode = async (size, postalCode) => {
  try {
    let eventUrl = `/api/events/getByPostal/${size}/${postalCode}`

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


export { getAllEvents, getEventsByPostalCode, getEventById };
