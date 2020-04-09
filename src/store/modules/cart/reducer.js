export default function cart(state = [], action) {
  let amount = 1;
  let result;

  switch (action.type) {
    case `ADD_TO_CART`:
      result = state.findIndex(obj => {
        return obj.id == action.product.id;
      });
      if (result >= 0) {
        state[result].amount++;
        return [...state];
      } else return [...state, { ...action.product, amount }];

    case `REMOVE_FROM_CART`:
      result = state.findIndex(obj => {
        return obj.id == action.id;
      });
      state.splice(result, 1);
      return [...state];

    case `SUBTRACT`:
      result = state.findIndex(obj => {
        return obj.id == action.id;
      });

      if (state[result].amount != 0) {
        state[result].amount--;
      }
      return [...state];

    case `SUM`:
      result = state.findIndex(obj => {
        return obj.id == action.id;
      });
      state[result].amount++;
      return [...state];

    default:
      return state;
  }
}
