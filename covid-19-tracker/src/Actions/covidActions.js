import axios from "axios";
import {
  getCountries,
  getSpecificCountry,
  getAllCountry,
  getHistoricalData
} from "../Api";


export const loadData = () => async (dispatch) => {
  //FETCH AXIOS
  const countriesData = await axios.get(getCountries());
  const allData = await axios.get(getAllCountry());
  const historicalData = await axios.get(getHistoricalData());
  dispatch({
    type: "FETCH_COVID",
    payload: {
      countries: countriesData.data,
      all: allData.data,
      historical: historicalData.data,
    },
  });
};
// 

// country: countryData,

export const loadCountry = (country) => async (dispatch) => {

  const countryData = await axios.get(getSpecificCountry(country));
  dispatch({
    type: "FETCH_COUNTRY",
    payload: {
      country: countryData.data,
      
    },
  });

}