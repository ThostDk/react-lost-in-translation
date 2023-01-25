//this script is to help handle the API

// get the API key from the .env file
const apiKey = process.env.REACT_APP_API_KEY;

export const createHeaders = () => {
  return {
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
    },
  };
};