const convertSearchQueryToLatLong = async (size, postalCode) => {
  try {
    let geocodioURL = `https://api.geocod.io/v1.6/geocode?q=${size}&api_key=14b272d467d557661b577666177d1425b614771`

    const res = await fetch(geocodioURL);

    const data = await res.json();

    return data;
  } catch (error) {
    throw error;
  }
};

export { convertSearchQueryToLatLong };
