export const addToOrder = id => dispatch => {
  dispatch({type:'ORDER_ADD', payload:id})
};
export const removeFromOrder = id => dispatch => {
  dispatch({type:'ORDER_REMOVE', payload:id})
};
export const removeALLFromOrder = id => dispatch => {
  dispatch({type:'ORDER_REMOVE_ALL', payload:id})
};