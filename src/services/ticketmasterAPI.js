

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
    let eventUrl = `https://app.ticketmaster.com/discovery/v2/events/${id}.json?apikey=HwHRmjrv9cpx06oAoP2GNE1OkQ1CAej7&=`;

    const res = await fetch(eventUrl);

    const data = await res.json();

    return data;
  } catch (error) {
    throw error;
  }
};

export { getAllEvents, getEventsByPostalCode, getEventById };
