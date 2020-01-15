export const setName = name => {
  return {
    type: "SET_NAME",
    payload: name
  };
};

export const incremenet = () => {
  return {
    type: "INCREMENT"
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT"
  };
};

export const setQuestion = question => {
  return {
    type: "SET_QUESTION",
    payload: question
  };
};
