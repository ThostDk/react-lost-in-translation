
import { createHeaders } from "./Index";
const apiURL = process.env.REACT_APP_API_URL;
// POST - create a new record
// PATCH - update parts in an existing record
// GET - retrieve an existing record
// DELETE - delete an existing record
// PUT - update parts in an existing record

export const translationAdd = async (user, sentence) => {
  try {
    const response = await fetch(`${apiURL}/${user.id}`, {
      method: "PATCH",
      headers: createHeaders(),
      body: JSON.stringify({
        translations: [...user.translations, sentence]
      }),
    });
    if (!response.ok) {
      throw new Error("could not update the order");
    }
    const result = await response.json();
    return [null, result];
  } catch (error) {
    return [error.message, null];
  }
};
export const selectedtranslationAdd = async (user, selectedHistorySentence) => {
  try {
    const response = await fetch(`${apiURL}/${user.id}`, {
      method: "PATCH",
      headers: createHeaders(),
      body: JSON.stringify({
        selectedTranslation: selectedHistorySentence
      }),
    });
    if (!response.ok) {
      throw new Error("could not update the order");
    }
    const result = await response.json();
    return [null, result];
  } catch (error) {
    return [error.message, null];
  }
};
export const translationClearHistory = async (userId) => {
  try {
    const response = await fetch(`${apiURL}/${userId}`, {
      method: "PATCH",
      headers: createHeaders(),
      body: JSON.stringify({
        translations: [],
      }),
    });
    if (!response.ok) {
      throw new Error("could not update the order");
    }
    const result = await response.json();
    return [null, result];
  } catch (error) {
    return [error.message, null];
  }
};
