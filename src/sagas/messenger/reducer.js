
const initialState = {
  allMessages: [],
  messages: []
};

export default function (state = initialState, action) {

  const { type, payload } = action;

  switch (type) {
    case "GETED_ALL_MESSAGES":
      return {
        ...state,
        allMessages: payload
      }
    case "GETED_MESSAGES":
      return {
        ...state,
        messages: payload
      }
    default:
      return state;
  }
}