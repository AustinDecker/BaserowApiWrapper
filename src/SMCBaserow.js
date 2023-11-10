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

function SMCBaserow(){

    let SMCBaseRowInstance = Object.create(Baserow(API_KEY));
    SMCBaseRowInstance = Object.assign(SMCBaseRowInstance, {

        getSMCPeopleTable: async function(options = {}){
            let data = await this.getAllPages(TableIDs.SMCPEOPLE, options);
            return data;
        },

        getSMCPerson: async function(rowID){
            return await this.getRow(TableIDs.SMCPEOPLE, rowID)();
        },
        
        getRoomsTable: async function(options = {}){
            let data = await this.getAllPages(TableIDs.SMCROOMS, options);
            return data;
        },
        
        getRoom: async function(rowID){
            return await this.getRow(TableIDs.SMCROOMS, rowID)();
        },
        
        getEventsTable: async function(options = {}){
            let data = await this.getAllPages(TableIDs.SMCEVENTS, options);
            return data;
        },
        
        getEvent: async function(rowID){
            return await this.getRow(TableIDs.SMCEVENTS, rowID)();
        },
        
        getGearsTable: async function(options = {}){
            let data = await this.getAllPages(TableIDs.SMCGEARS, options);
            return data;
        },
        
        getGear: async function(rowID){
            return await this.getRow(TableIDs.SMCGEARS, rowID)();
        },
        
        getManufacturersTable: async function(options = {}){
            let data = await this.getAllPages(TableIDs.SMCMANUFACTURERS, options);
            return data;
        },
        
        getManufacturer: async function(rowID){
            return await this.getRow(TableIDs.SMCMANUFACTURERS, rowID)();
        },
        
        getClassesTable: async function(options = {}){
            let data = await this.getAllPages(TableIDs.SMCCLASSES, options);
            return data;
        },
        
        getClass: async function(rowID){
            return await this.getRow(TableIDs.SMCCLASSES, rowID)();
        },
    })  
    return SMCBaseRowInstance;
}
export default SMCBaserow;
