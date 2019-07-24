const deleteTrip = ({ tripId = {} }) => ({
    type: "DELETE_TRIP",
    tripId
  });

  export default deleteTrip;