import { MAX_HIS } from "../const/historyMax";
import { createHeaders } from "./Index";

const apiURL = process.env.REACT_APP_API_URL;
// POST - create a new record
// PATCH - update parts in an existing record
// GET - retrieve an existing record
// DELETE - delete an existing record
// PUT - update parts in an existing record

// function for shifting and execute LIFO command
const shiftArray = (user, payload) =>{
  let tmpArr = user.translations;
  tmpArr.shift();
  tmpArr.push(payload);
   return tmpArr;
}

// function for shifting and execute the shift function if user have max history
// add the sentence for translation
export const translationAdd = async (user, sentence) => {
  try {
    const response = await fetch(`${apiURL}/${user.id}`, {
      method: "PATCH",
      headers: createHeaders(),
      body: JSON.stringify({
      translations: user.translations.length < MAX_HIS ?  [...user.translations, sentence] : shiftArray(user,sentence)
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

// As the profile have the feature to apply one of the history to the translate page
// this function is to define the selected sentence to the API
export const selectedTranslationAdd = async (user, selectedHistorySentence) => {
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

// this function is to delete the whole content from translations from the API
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