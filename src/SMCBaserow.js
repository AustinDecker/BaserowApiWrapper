import Baserow from "../src/Baserow.js";

const API_KEY = ""; //would be moved to .env later

const TableIDs = 
{
    SMCPEOPLE: 212079,
    SMCROOMS: 212080,
    SMCEVENTS: 212081,
    SMCGEARS: 212082,
    SMCMANUFACTURERS: 212083,
    SMCCLASSES: 212084
};
Object.freeze(TableIDs);

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
         * @throws error
         */
        getSMCPeopleTable: async function(options = {}){
            let data = await this.getAllPages(TableIDs.SMCPEOPLE, options);

            if(data[0]){
                throw new Error(`Bad arguments: ${data[0].statusText}`);
            }
            return data[1];
        },

        /**
         * 
         * @param {*} rowID 
         * @returns json data
         * @throws error
         */
        getSMCPerson: async function(rowID){

            data =  await this.getRow(TableIDs.SMCPEOPLE, rowID);

            if(data[0]){
                throw new Error(`Bad arguments: ${data[0].statusText}`);
            }
            return data[1];
        },
        
        /**
         * 
         * @param {*} options 
         * @returns json data
         * @throws error
         */
        getRoomsTable: async function(options = {}){
            let data = await this.getAllPages(TableIDs.SMCROOMS, options);

            if(data[0]){
                throw new Error(`Bad arguments: ${data[0].statusText}`);
            }
            return data[1];
        },
        
        /**
         * 
         * @param {*} rowID 
         * @returns json data
         * @throws error
         */
        getRoom: async function(rowID){
            let data = await this.getRow(TableIDs.SMCROOMS, rowID);

            if(data[0]){
                throw new Error(`Bad arguments: ${data[0].statusText}`);
            }
            return data[1];
        },
        
        /**
         * 
         * @param {*} options 
         * @returns json data
         * @throws error
         */
        getEventsTable: async function(options = {}){
            let data = await this.getAllPages(TableIDs.SMCEVENTS, options);

            if(data[0]){
                throw new Error(`Bad arguments: ${data[0].statusText}`);
            }
            return data[1];
        },
        
        /**
         * 
         * @param {*} rowID 
         * @returns json data
         * @throws error
         */
        getEvent: async function(rowID){
            let data = await this.getRow(TableIDs.SMCEVENTS, rowID);

            if(data[0]){
                throw new Error(`Bad arguments: ${data[0].statusText}`);
            }
            return data[1];
        },
        
        /**
         * 
         * @param {*} options 
         * @returns json data
         * @throws error
         */
        getGearsTable: async function(options = {}){
            let data = await this.getAllPages(TableIDs.SMCGEARS, options);
            
            if(data[0]){
                throw new Error(`Bad arguments: ${data[0].statusText}`);
            }
            return data[1];
        },
        
        /**
         * 
         * @param {*} rowID 
         * @returns json data
         * @throws error
         */
        getGear: async function(rowID){
            let data = await this.getRow(TableIDs.SMCGEARS, rowID);

            if(data[0]){
                throw new Error(`Bad arguments: ${data[0].statusText}`);
            }
            return data[1];
        },
        
        /**
         * 
         * @param {*} options 
         * @returns json data
         * @throws error
         */
        getManufacturersTable: async function(options = {}){
            let data = await this.getAllPages(TableIDs.SMCMANUFACTURERS, options);
            
            if(data[0]){
                throw new Error(`Bad arguments: ${data[0].statusText}`);
            }
            return data[1];
        },
        
        /**
         * 
         * @param {*} rowID 
         * @returns json data
         * @throws error
         */
        getManufacturer: async function(rowID){
            let data = await this.getRow(TableIDs.SMCMANUFACTURERS, rowID);

            if(data[0]){
                throw new Error(`Bad arguments: ${data[0].statusText}`);
            }
            return data[1];
        },
        
        /**
         * 
         * @param {*} options 
         * @returns json data
         * @throws error
         */
        getClassesTable: async function(options = {}){
            let data = await this.getAllPages(TableIDs.SMCCLASSES, options);
            
            if(data[0]){
                throw new Error(`Bad arguments: ${data[0].statusText}`);
            }
            return data[1];
        },
        
        /**
         * 
         * @param {*} rowID 
         * @returns json data
         * @throws error
         */
        getClass: async function(rowID){
            let data = await this.getRow(TableIDs.SMCCLASSES, rowID);

            if(data[0]){
                throw new Error(`Bad arguments: ${data[0].statusText}`);
            }
            return data[1];
        },
    })  
    return SMCBaseRowInstance;
}
export {SMCBaserow, TableIDs};
