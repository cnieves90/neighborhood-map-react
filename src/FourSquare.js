// Get venue ID
export const getFourSquareVenueID = (lat, lng, name) => {
  return fetch(`https://api.foursquare.com/v2/venues/search?client_id=MC5FWMH2NH2QH53VZS3OPLIQKZ2SJVT0FNKPG02JTV2H2EL2&client_secret=F3LSS0H0YGGFCNX3D1DIBIJJ2RMVEDUN05W4ZHY5OQOEAO0H&v=20180323&limit=1&ll=${lat},${lng}&query=${name}`)
  .then((response) => response.json())
  .then((response) => response.response.venues[0].id);
}

// Get venue info data using the venue's ID
export const getFourSquareVenueInfo = (venueId) => {
  return fetch(`https://api.foursquare.com/v2/venues/${venueId}?client_id=MC5FWMH2NH2QH53VZS3OPLIQKZ2SJVT0FNKPG02JTV2H2EL2&client_secret=F3LSS0H0YGGFCNX3D1DIBIJJ2RMVEDUN05W4ZHY5OQOEAO0H&v=20180323`)
  .then((response) => response.json())
  .then((response) => response.response.venue);
}
