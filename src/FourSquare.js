// Get venue ID
export const getFourSquareVenueID = (lat, lng, name) => {
  return fetch(`https://api.foursquare.com/v2/venues/search?client_id=J2NOYW00F25NAYI50DC5E2TXQNFIRZPWS3VYSYXWWED0K1TQ&client_secret=LM51AOTFMWMTME4JVGVEP3HLRQWINMS3NDEIJG1BLGMLSIL3&v=20180323&limit=1&ll=${lat},${lng}&query=${name}`)
  .then((response) => response.json())
  .then((response) => response.response.venues[0].id);
}

// Get venue info data using the venue's ID
export const getFourSquareVenueInfo = (venueId) => {
  return fetch(`https://api.foursquare.com/v2/venues/${venueId}?client_id=J2NOYW00F25NAYI50DC5E2TXQNFIRZPWS3VYSYXWWED0K1TQ&client_secret=LM51AOTFMWMTME4JVGVEP3HLRQWINMS3NDEIJG1BLGMLSIL3&v=20180323`)
  .then((response) => response.json())
  .then((response) => response.response.venue);
}
