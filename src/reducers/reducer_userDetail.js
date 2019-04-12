export default function(state = null, action) {
  if (action.error) {
    action.type = "switch_not_run";
  }
  switch (action.type) {
    case "info":
      console.log("received : ", action.payload);
      return action.payload;
  }
  return state;
}
