const cds = require("@sap/cds");
const {
  GetAllPricesHistory,
  AddOnePricesHistory,
  GetAllPricesHistoryCosmos,
  AddOnePricesHistoryCosmos,
  GetByIdPricesHistoryCosmos,
  AddManyPricesHistoryCosmos,
  UpdateByIdPricesHistoryCosmos,
  DeleteByIdPricesHistoryCosmos,
} = require("../services/priceshistory.services.AzureCosmos");

const { message } = require("@sap/cds/lib/log/cds-error");

class InversionsClass extends cds.ApplicationService {
  async init() {
    //GetAll MongoDB
    this.on("getall", async (req) => {
      return await GetAllPricesHistory(req);
    });
    //POST MongoDB
    this.on("addOne", async (req) => {
      return AddOnePricesHistory(req);
    });

    //****************** PARA COSMOS DB *************************/
    //GetAll Azure Cosmos DB
    this.on("getallCosmos", async (req) => {
      try {
        const pricesHistory = await GetAllPricesHistoryCosmos(req);
        return pricesHistory; // Devolver la respuesta obtenida del servicio
      } catch (error) {
        console.error("Error al procesar la solicitud:", error);
        return { error: "Hubo un error al obtener los datos." };
      }
    });
    //GET BY ID COSMOS
    this.on("getByIdCosmos", async (req) => {
      try {
        return await GetByIdPricesHistoryCosmos(req);
      } catch (error) {
        console.error("Error al procesar la solicitud: ", error);
        return { error: "Hubo un error al obtener el dato" };
      }
    });
    // POST para Cosmos DB
    this.on("addOneCosmos", async (req) => {
      try {
        return await AddOnePricesHistoryCosmos(req);
      } catch (error) {
        req.error({
          code: 500,
          message: error.message,
        });
      }
    });
    // POST MASIVO
    this.on("addManyCosmos", async (req) => {
      try {
        return await AddManyPricesHistoryCosmos(req);
      } catch (error) {
        req.error({ code: 500, message: error.message });
      }
    });
    // Update
    this.on("updateByIdCosmos", async (req) => {
      try {
        return await UpdateByIdPricesHistoryCosmos(req);
      } catch (error) {
        req.error({ code: 500, message: error.message });
      }
    });

    //DELETE COSMOS
    this.on("deleteByIdCosmos", async (req) => {
      try {
        return await DeleteByIdPricesHistoryCosmos(req);
      } catch (error) {
        req.error({ code: 500, message: error.message });
      }
    });
    return await super.init();

  }
}

module.exports = InversionsClass;
