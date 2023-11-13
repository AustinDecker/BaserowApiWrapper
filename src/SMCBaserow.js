import Baserow from "../src/Baserow.js";

const API_KEY = "Token TzDtpdxtxo0iUq8HKNB2Eisv433d2Auy"; //would be moved to .env later

const TableIDs = 
{
    SMCPEOPLE: 212079,
    SMCROOMS: 212080,
    SMCEVENTS: 212081,
    SMCGEARS: 212082,
    SMCMANUFACTURERS: 212083,
    SMCCLASSES: 212084
};

/**
 * 
 * @returns SMCBaseRowInstance
 * @description function which returns an object wrapping the baserowInstance object. Represents a specific database in baserow
 */
function SMCBaserow(){

    let SMCBaseRowInstance = Object.create(Baserow(API_KEY));
    SMCBaseRowInstance = Object.assign(SMCBaseRowInstance, {

        /**
         * 
         * @param {*} options 
         * @returns json data
         */
        getSMCPeopleTable: async function(options = {}){
            let data = await this.getAllPages(TableIDs.SMCPEOPLE, options);
            return data;
        },

        getAllPeopleWithRole: async function(role, options = {}){

            let roleFilter = {
                "filter_type": "AND",
                "filters":[
                    { "type":"contains", "field":"Role", "value":role }
                ],
                "groups":[]
            }

            options.filters = JSON.stringify(roleFilter);

            let data = await this.getAllPages(TableIDs.SMCPEOPLE, options);
            return data;
        },

        /**
         * 
         * @param {*} rowID 
         * @returns json data
         */
        getSMCPerson: async function(rowID){
            return await this.getRow(TableIDs.SMCPEOPLE, rowID);
        },
        
        /**
         * 
         * @param {*} options 
         * @returns json data
         */
        getRoomsTable: async function(options = {}){
            let data = await this.getAllPages(TableIDs.SMCROOMS, options);
            return data;
        },

        /**
         * gets rooms with the designated purpose, should be used for Rehearsal Spaces and Production purposes
         * @param {*} options 
         * @returns json data
         */
        getBookableRooms: async function(purpose, options = {}){
            let bookableRoomsFilter = {
                "filter_type":"AND",
                "filters":[
                    { "type":"boolean", "field":"Bookable", "value":"1" },
                    { "type":"contains", "field":"Purpose", "value":purpose }
                ],
                "groups":[]
            }
            options.filters = JSON.stringify(bookableRoomsFilter);

            let data = await this.getAllPages(TableIDs.SMCROOMS, options);
            return data;
        },

        /**
         * gets edit and collab rooms (more specific query so its in a different function)
         * @param {*} purpose 
         * @returns json object
         */
        getEditAndCollabRooms: async function(options = {}){
            let editAndCollabRoomsFilter = {
                "filter_type":"AND",
                "filters":[
                    {"type":"boolean","field":"Bookable","value":"1"}
                ],
                "groups":[{
                    "filter_type":"OR",
                    "filters":[
                        { "type":"contains", "field":"Purpose", "value":"Edit Suites" },
                        { "type":"contains", "field":"Purpose", "value":"Meeting" }
                    ],
                    "groups":[]
                }]
            }
            options.filters = JSON.stringify(editAndCollabRoomsFilter);

            let data = await this.getAllPages(TableIDs.SMCROOMS, options);
            return data;
        },
        
        /**
         * 
         * @param {*} rowID 
         * @returns json data
         */
        getRoom: async function(rowID){
            return await this.getRow(TableIDs.SMCROOMS, rowID);
        },
        
        /**
         * 
         * @param {*} options 
         * @returns json data
         */
        getEventsTable: async function(options = {}){
            let data = await this.getAllPages(TableIDs.SMCEVENTS, options);
            return data;
        },
        
        /**
         * 
         * @param {*} rowID 
         * @returns json data
         */
        getEvent: async function(rowID){
            return await this.getRow(TableIDs.SMCEVENTS, rowID);
        },
        
        /**
         * 
         * @param {*} options 
         * @returns json data
         */
        getGearsTable: async function(options = {}){
            let data = await this.getAllPages(TableIDs.SMCGEARS, options);
            return data;
        },
        
        /**
         * 
         * @param {*} rowID 
         * @returns json data
         */
        getGear: async function(rowID){
            return await this.getRow(TableIDs.SMCGEARS, rowID);
        },
        
        /**
         * 
         * @param {*} options 
         * @returns json data
         */
        getManufacturersTable: async function(options = {}){
            let data = await this.getAllPages(TableIDs.SMCMANUFACTURERS, options);
            return data;
        },
        
        /**
         * 
         * @param {*} rowID 
         * @returns json data
         */
        getManufacturer: async function(rowID){
            return await this.getRow(TableIDs.SMCMANUFACTURERS, rowID);
        },
        
        /**
         * 
         * @param {*} options 
         * @returns jjson data
         */
        getClassesTable: async function(options = {}){
            let data = await this.getAllPages(TableIDs.SMCCLASSES, options);
            return data;
        },
        
        /**
         * 
         * @param {*} rowID 
         * @returns json data
         */
        getClass: async function(rowID){
            return await this.getRow(TableIDs.SMCCLASSES, rowID);
        },
    })  
    return SMCBaseRowInstance;
}
export default SMCBaserow;
