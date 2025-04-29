using {inv as myinv} from '../models/inv-inversions';

@impl: 'src/api/controllers/priceshistory.controllers.js'

service inversionsRoute @(path: '/api/inv') {
    entity priceshistory as projection on myinv.priceshistory;
    entity inversions    as projection on myinv.strategies;

    //ruta GetAll AzureCosmosDB
    @Core.Description: 'get-all-prices-inversions'
    @path            : 'getallCosmos'
    function getallCosmos()                        returns array of inversions;

    @Core.Description: 'get-by-id-prices-inversions'
    @path            : 'getByIdCosmos'
    function getByIdCosmos(id : String)            returns inversions;


    //ruta POST AzureCosmosDB
    @Core.Description: 'addOne-prices-history-cosmos'
    @path            : 'addOneCosmos'
    action   addOneCosmos(prices : priceshistory)  returns array of priceshistory;

    @Core.Description: 'addManys-prices-history-cosmos'
    @path            : 'addManyCosmos'
    action   addManyCosmos(prices : priceshistory) returns array of priceshistory;

    @Core.Description: 'update-by-id-prices-inversions'
    @path            : 'updateByIdCosmos'
    action   updateByIdCosmos(ID : Integer,
                              DATE : String,
                              OPEN : Decimal,
                              HIGH : Decimal,
                              LOW : Decimal,
                              CLOSE : Decimal,
                              VOLUME : Integer)    returns priceshistory;


    @Core.Description: 'delete-by-id-prices-inversions'
    @path            : 'deleteByIdCosmos'
    action   deleteByIdCosmos(ID : Integer)        returns Boolean

}
