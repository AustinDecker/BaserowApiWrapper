import Baserow from "../src/Baserow.js";

const API_KEY = "Token TzDtpdxtxo0iUq8HKNB2Eisv433d2Auy";

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
    let SMCBaseRowInstance = Object.assign(Baserow(API_KEY), {
        getSMCPeopleTable: async function(options = {}){
            return await this.getTable(TableIDs.SMCPEOPLE, options)();
        },

        getSMCPerson: async function(rowID){
            return await this.getTable(TableIDs.SMCPEOPLE, options)();
        },
        
        getRoomsTable: async function(options = {}){
            return await this.getTable(TableIDs.SMCROOMS, options)();
        },
        
        getRoom: async function(rowID){
            return await this.getRow(TableIDs.SMCROOMS, rowID)();
        },
        
        getEventsTable: async function(options = {}){
            return await this.getTable(TableIDs.SMCEVENTS, options)();
        },
        
        getEvent: async function(rowID){
            return await this.getRow(TableIDs.SMCEVENTS, rowID)();
        },
        
        getGearsTable: async function(options = {}){
            return await this.getTable(TableIDs.SMCGEARS, options)();
        },
        
        getGear: async function(rowID){
            return await this.getRow(TableIDs.SMCGEARS, rowID)();
        },
        
        getManufacturersTable: async function(options = {}){
            return await this.getTable(TableIDs.SMCMANUFACTURERS, options)();
        },
        
        getManufacturer: async function(rowID){
            return await this.getRow(TableIDs.SMCMANUFACTURERS, rowID)();
        },
        
        getClassesTable: async function(options = {}){
            return await this.getTable(TableIDs.SMCCLASSES, options)();
        },
        
        getClass: async function(rowID){
            return await this.getRow(TableIDs.SMCCLASSES, rowID)();
        },
    })
    return SMCBaseRowInstance;
}

export default SMCBaserow;
