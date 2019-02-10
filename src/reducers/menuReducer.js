const initialState = {
  data:[],
  loading:true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'MENU_LOADING':
      return initialState
    case 'MENU_LOADED':
      return {loading:false, data: action.payload}
    default:
      return state;
  }
}