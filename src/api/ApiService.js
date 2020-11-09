import axios from "axios";
const BASE_URL =
  "https://api.spaceXdata.com/v3/launches?limit=100";

// super admin end points

const SEARCH_LIST = "/user/search";
const GENERATE_CODE = "/referrals/generate/code";
class ApiService {  
  filterAllData(data) {
    let url = `${BASE_URL}&${data}`;
    console.log(url);
    return axios.get(url);
  }
  
  fetchAllData() {
    return axios.get(BASE_URL);
  }
}

export default new ApiService();
