import React from "react";

const getAllEvents = async (size) => {
  try {
    let eventUrl = `https://app.ticketmaster.com/discovery/v2/events.json?size=${size}&apikey=HwHRmjrv9cpx06oAoP2GNE1OkQ1CAej7`;

    const res = await fetch(eventUrl);

    const data = await res.json();

    return data;
  } catch (error) {
    throw error;
  }
};

const getEventsByPostalCode = async (size, postalCode) => {
  try {
    let eventUrl = `https://app.ticketmaster.com/discovery/v2/events.json?size=${size}&postalCode=${postalCode}&apikey=HwHRmjrv9cpx06oAoP2GNE1OkQ1CAej7`;

    const res = await fetch(eventUrl);

    const data = await res.json();

    return data;
  } catch (error) {
    throw error;
  }
};

export { getAllEvents, getEventsByPostalCode };
