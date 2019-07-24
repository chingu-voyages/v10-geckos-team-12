import uuid from "uuid";

const addNewTrip = ({
    tripName = "Trip to Anonymous Land",
    travellers = []
  } = {}) => ({
    type: "ADD_NEW_TRIP",
    trip: {
      tripId: uuid(),
      tripName,
      travellers
    }
  });

export default addNewTrip;