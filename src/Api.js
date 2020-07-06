import axios from "axios";

const http = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://pandemiccovid19.netlify.app"
      : "http://localhost:8080"
});

export default {
  async getAllCases() {
    const { data } = await http.get(
      "https://disease.sh/v3/covid-19/all?yesterday=true&allowNull=true"
    );
    return data;
  },
  async getbyCountries() {
    const { data } = await http.get(
      "https://disease.sh/v3/covid-19/countries?yesterday=true&sort=cases&allowNull=true"
    );
    return data;
  },
  async getDailyCases() {
    const { data } = await http.get(
      "https://disease.sh/v3/covid-19/historical/all?lastdays=30"
    );
    return data;
  }
};
