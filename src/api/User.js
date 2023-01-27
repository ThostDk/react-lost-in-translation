import { createHeaders } from "./Index";
// get the API url from the .env file
const apiUrl = process.env.REACT_APP_API_URL;

//check if given username is in the database
const checkForUser = async (username) => {
  try {
    const response = await fetch(`${apiUrl}?username=${username}`);
    if (!response.ok) {
      throw new Error("Could not complete request");
    }
    const data = await response.json();
    return [null, data];
  } catch (error) {
    return [error.message, []];
  }
};


//try to create a new user in the database with POST request
const createUser = async (username) => {
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: createHeaders(),
      body: JSON.stringify({
        username,
        translations: [],
        selectedTranslation: ""
      })
    });
    if (!response.ok) {
      throw new Error("Could not create user with given username " + username);
    }
    const data = await response.json();
    return [null, data];
  } 
  catch (error) {
    return [error.message, []];
  }
};
// will pop the username if it exists in the database
// otherwise it will run create user
export const loginUser = async (username) => {
  const [checkError, user] = await checkForUser(username);
  if (checkError !== null) {
    return [checkError, null];
  }

  if (user.length > 0) {
    return [null, user.pop()];
  }

  return await createUser(username);
};
