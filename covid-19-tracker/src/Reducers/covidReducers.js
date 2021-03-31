const initState = {
  countries: [],
  all: {},
  historical: {},
  country: {},
  center: [34.80746, -40.4796],
  zoom: 3,
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
        country: action.payload.country,
        center: action.payload.center,
        zoom: action.payload.zoom
      };
      case "CLEAR_COUNTRY":
        return{
        ...state,
        country: action.payload.country ,
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