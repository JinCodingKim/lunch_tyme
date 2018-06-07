import axios from "axios";

const GET_RESTAURANTS = "GET_RESTAURANTS";
const GET_LOCATION = "GET_LOCATION";
const SWITCHER = "SWITCHER";
const CURRENT_LOCATION = "CURRENT_LOCATION";

const initialState = {
  nomList: [],
  nomDetail: {},
  nomHolder: {},
  show: false,
  loading: false,
  error: []
};

export function getRestaurants() {
  return {
    type: GET_RESTAURANTS,
    payload: axios.get("/api/restaurants")
  };
}

export function getLocation(name) {
  return {
    type: GET_LOCATION,
    payload: axios.get(`/api/restaurant/${name}`)
  };
}

export function switcher(val) {
  return {
    type: SWITCHER,
    payload: val.target.name
  };
}

export function currentLocation(location) {
  return {
    type: CURRENT_LOCATION,
    payload: { name: "Current Location", location }
  };
}

export default function restaurant(state = initialState, action) {
  switch (action.type) {
    case `${GET_RESTAURANTS}_PENDING`:
    case `${GET_LOCATION}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_RESTAURANTS}_FULFILLED`:
      return {
        ...state,
        nomList: action.payload.data,
        loading: false
      };
    case `${GET_LOCATION}_FULFILLED`:
      return {
        ...state,
        nomDetail: action.payload.data[0],
        show: true,
        loading: false
      };
    case `${GET_RESTAURANTS}_REJECTED`:
      return {
        ...state,
        error: action.payload.data,
        loading: false
      };
    case SWITCHER:
      if (action.payload === "back") {
        return {
          ...state,
          show: false,
          nomDetail: {},
          nomHolder: { ...state.nomDetail }
        };
      } else {
        return {
          ...state,
          show: true,
          nomDetail: { ...state.nomHolder },
          nomHolder: {}
        };
      }
    case CURRENT_LOCATION:
      return {
        ...state,
        show: true,
        nomDetail: action.payload
      };
    default:
      return state;
  }
}
