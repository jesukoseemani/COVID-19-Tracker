
export const getCountries = () => "https://disease.sh/v3/covid-19/countries"

export const  getAllCountry = () => "https://disease.sh/v3/covid-19/all";

export const getSpecificCountry = (country) => `https://disease.sh/v3/covid-19/countries/${country}?strict=true`;

export const getHistoricalData = () => "https://disease.sh/v3/covid-19/historical/all?lastdays=120";

