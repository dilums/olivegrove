import axios from 'axios';
export const LoadMenu = id => dispatch => {
  dispatch({type:'MENU_LOADING'})
  axios
    .get(`http://localhost:8000/api/list`)
    .then(res =>
      dispatch({
        type: 'MENU_LOADED',
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: 'MENU_LOADED',
        payload: []
      })
    );
};