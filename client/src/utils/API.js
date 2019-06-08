
import axios from "axios";


export default {
  // Gets all loadss
  /* getLoads: function () {
    return axios.get("/api/loads");
  }, */

  //Get the loads with given ids
  getLoads: function (equipment, distance, rate) {
    return axios.get("http://localhost:3001/loads/" + equipment + "/" + distance + "/" + rate);
  },
  // Gets the load with the given id
  getLoad: function (id) {
    return axios.get("/loads/");
  },
  // Deletes the load with the given id
  deleteLoad: function (id) {
    return axios.delete("/loads/");
  },
  // Saves a load to the database
  saveLoad: function (LoadData) {
    return axios.post("/loads/");
  }
};

//=================================================

/*import axios from "axios";


export default {
  // Gets all loadss
  /* getLoads: function () {
    return axios.get("/api/loads");
  }, */

  //Get the loads with given ids
/*getLoads: function (equipment, distance, rate) {
  return axios.get("/loads/" + equipment + "/" + distance + "/" + rate);
},
// Gets the load with the given id
getLoad: function (id) {
  return axios.get("/loads/");
},
// Deletes the load with the given id
deleteLoad: function (id) {
  return axios.delete("/loads/");
},
// Saves a load to the database
saveLoad: function (LoadData) {
  return axios.post("/loads/");
}
};*/

