export function initOrder (initialCount) {
  return { count: initialCount };
}

export function OrderReducer (state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1}
    case "decrement":
      return { count: state.count - 1}
    case "reset":
      return initOrder(action.payload ? action.payload : 0)
    default:
      throw new Error();
  }
}
