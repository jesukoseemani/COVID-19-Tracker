const initState = {
  countries: [],
  all: {},
  historical: {},
  country: {},
  center: [34.80746, -40.4796],
  zoom: 2,
  caseType: "cases"
}


const covidReducers = (state= initState, action) => {

  switch(action.type){
    case "FETCH_COVID":
      return {
        ...state,
        countries: action.payload.countries,
        all: action.payload.all,
        historical: action.payload.historical
      };
    case "FETCH_COUNTRY":
      return{
        ...state,
        country: action.payload.country
      };
      case "CLEAR_COUNTRY":
        return{
        ...state,
        country: {}
        };
        case "CENTER_ZOOM":
          return{
          ...state,
          center: action.payload.center,
          zoom: action.payload.zoom
          };
          case "CASE_TYPE":
          return{
          ...state,
          caseType: action.payload.caseType,
          };
         
      default :
      return{
        ...state
      }
  }


}


export default covidReducers;