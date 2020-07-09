import axios from "axios";

const http = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://pandemiccovid19.netlify.app"
      : "http://localhost:8080"
});

export default {
  async getAllCases() {
    //Get Overall Total Cases World Wide
    const { data } = await http.get(
      "https://disease.sh/v3/covid-19/all?yesterday=true&allowNull=true"
    );
    return data;
  },
  async getbyCountries() {
    //Get Overall Total Cases in different Countries
    const { data } = await http.get(
      "https://disease.sh/v3/covid-19/countries?yesterday=true&sort=cases&allowNull=true"
    );
    return data;
  },
  async getByCountry(iso) {
    //Get Overall Total Cases in a specific Countries by iso
    const { data } = await http.get(
      "https://disease.sh/v3/covid-19/countries/" +
        iso +
        "?yesterday=true&strict=true"
    );
    return data;
  },
  async getDailyCases() {
    //Get Daily Overall Total Cases World Wide
    const { data } = await http.get(
      "https://disease.sh/v3/covid-19/historical/all?lastdays=30"
    );
    return data;
  },
  async getDailyCasesByCountry(iso) {
    //Get Daily Cases in 30days on a specific Countries by iso
    const { data } = await http.get(
      "https://disease.sh/v3/covid-19/historical/" + iso + "?lastdays=30"
    );
    return data;
  }
};
