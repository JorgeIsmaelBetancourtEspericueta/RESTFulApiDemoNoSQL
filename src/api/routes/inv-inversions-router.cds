// 1. Import the data model
// using {inv as myph} from '../models/inv-priceshistory';

using {inv as myinv} from '../models/inv-inversions';

// 2. Import the controller to implement the Logic

@impl: 'src/api/controllers/inv-inversions-controller.js'

// 3. Define the method to expose the routes
// for all APIs of prices history

service PricesHistoryRouter @(path: '/api/inv') {

    // 4. Instance the prices history entity
    //entity priceshistory as projection on myph.priceshistory;
    entity strategies    as projection on myinv.strategies;
    entity priceshistory as projection on myinv.priceshistory;

    // 5. Define the route for API Get All Prices History
    // Important: Don't forget that function name must be the same as the path

    @Core.Description: 'get-all-prices-history'
    @path            : 'getall'
    function getall()                               returns array of priceshistory;

    @Core.Description: 'add-one-prices-history'
    @path            : 'addOne'
    action   addOne(prices : priceshistory)         returns array of priceshistory;

    @Core.Description: 'update-one-prices-history'
    @path            : 'updateOne'
    action   updateOne(prices : priceshistory)      returns array of priceshistory;

    @Core.Description: 'delete-one-prices-history'
    @path            : 'deleteOne'
    action   deleteOne()                            returns array of priceshistory;


    @Core.Description: 'get-Catalog'
    @path            : 'getCatalog'
    function getCatalog()                           returns array of priceshistory;
    //------------------Redis-----------------------------------------------

    @Core.Description: 'get-prices-history-redis'
    @path            : 'getRedis'
    function getRedis()                             returns array of priceshistory;

    @Core.Description: 'add-one-id-prices-history-redis'
    @path            : 'addOneRedis'
    action   addOneRedis(prices : priceshistory)    returns array of priceshistory;

    @Core.Description: 'update-one-id-prices-history-redis'
    @path            : 'updateOneRedis'
    action   updateOneRedis(prices : priceshistory) returns array of priceshistory;

    @Core.Description: 'delete-one-prices-history-redis'
    @path            : 'deleteOneRedis'
    action   deleteOneRedis()                       returns array of priceshistory;

    //-------------------NEO4j----------------------------------------------------
    //Get All
    @Core.Description: 'get-all-prices-history-Neo4j'
    @path: 'N4GetALL'
    function N4GetALL()                                             
    returns array of LargeString;//Indica que devolverá múltiples registros en formato JSON stringificado

    //POST
    @Core.Description: 'add-one-node-4j'
    @path: 'addnode'
    function addnode(body:priceshistory)
    returns array of LargeString;

    //PUT
    @Core.Description: 'update-one-node-4j'
    @path: 'updatenode'
    function updatenode(body:priceshistory)
    returns array of LargeString;

    //DELETE
    @Core.Description: 'delete-one-node-4j'
    @path: 'deletenode'
    function deletenode()
    returns array of LargeString;

};
