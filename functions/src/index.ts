import { HttpsError, onCall } from 'firebase-functions/v2/https';
import axios from 'axios';
import { logger } from 'firebase-functions';
exports.submitFlightDetails = onCall((request) => {
  if (!request.auth) {
    throw new HttpsError(
      'unauthenticated',
      'You must be authenticated to use this endpoint'
    );
  }

  const {
    airline = '',
    arrivalDate = '',
    arrivalTime = '',
    flightNumber = '',
    numOfGuests = 1,
    comments = '',
  } = request.data;

  let data = JSON.stringify({
    airline,
    arrivalDate,
    arrivalTime,
    flightNumber,
    numOfGuests,
    comments,
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: process.env.MONSTER_FLIGHTS_API_TOKEN,
    headers: {
      candidate: 'Akseli Palmer',
      token: process.env.MONSTER_FLIGHTS_API_URL,
    },
    data: data,
  };

  return axios
    .request(config)
    .then((response) => {
      logger.log(response.data);
      return JSON.stringify(response.data);
    })
    .catch((error) => {
      return error;
    });
});
