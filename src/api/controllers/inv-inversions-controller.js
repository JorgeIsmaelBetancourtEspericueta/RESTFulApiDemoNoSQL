//Import libraries

const cds = require("@sap/cds");
//Neo4j
/* const {N4GetALL} = require('../services/inv-neo4j-pricehistory-service');
//Neo4j
const {N4GetALL, AddOneNode} = require('../services/inv-neo4j-pricehistory-service'); */

const {
  GetAllPricesHistory,
  AddOnePricesHistory,
  UpdateOnePriceHistory,
  DeleteOnePriceHistory,
  GetRedis,
  AddOnePricesHistoryRedis,
  UpdateOnePriceHistoryRedis,
  DeleteOnePricesHistoryRedis,
  GetLabelsWithValues,
  N4GetALL,
  AddOneNode,
  UpdateNode,
  DeleteNode,
} = require("../services/inv-pricehistory-services");
//Principal structure controller class

class InversionsClass extends cds.ApplicationService {
  //Constructor
  async init() {
    //Call method handler the parent constructor
    this.on("getall", async (req) => {
      // call the service method and return the result to route.
      return GetAllPricesHistory(req);
    });

    //Agregar una
    this.on("addOne", async (req) => {
      // call the service method and return the result to route.
      return AddOnePricesHistory(req);
    });

    //Actualizar una
    this.on("updateOne", async (req) => {
      return UpdateOnePriceHistory(req);
    });

    this.on("deleteOne", async (req) => {
      // call the service method and return the result to route.
      return DeleteOnePriceHistory(req);
    });

    this.on("getCatalog", async (req) => {
      // call the service method and return the result to route.
      return GetLabelsWithValues(req);
    });

    //-------------------------------------------------Redis---------------------------------------------------
    this.on("getRedis", async (req) => {
      // call the service method and return the result to route.
      return GetRedis(req);
    });

    this.on("addOneRedis", async (req) => {
      // call the service method and return the result to route.
      return AddOnePricesHistoryRedis(req);
    });

    this.on("updateOneRedis", async (req) => {
      // call the service method and return the result to route.
      return UpdateOnePriceHistoryRedis(req);
    });

    this.on("deleteOneRedis", async (req) => {
      // call the service method and return the result to route.
      return DeleteOnePricesHistoryRedis(req);
    });

    //If not execute any method, the system will return the defsult CSV data model.
    //gets local data and returns the metadata with the route localhost:3333/api/inv/priceshistory
    //Note: the file name with extension .csv must called equal than the data model;
    //otherwhise, it will not be found

    return await super.init();

    //NEO4j
    //Controller for GET method
    this.on("N4GetALL", async (req) => {
      return N4GetALL(req);
    });

    //Controller for POST method
    this.on("addnode", async (req) => {
      return AddOneNode(req);
    });

    //Controller for PUT method
    this.on('updatenode',async (req) => {
      return UpdateNode(req);            
    });
    
    //Controller for DELETE method
    this.on('deletenode',async (req) => {
      return DeleteNode(req);
    });

  }
}

// Export the controller class
module.exports = InversionsClass;
