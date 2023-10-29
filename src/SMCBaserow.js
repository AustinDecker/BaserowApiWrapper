import Baserow from "../src/Baserow.js";

const API_KEY = "Token TzDtpdxtxo0iUq8HKNB2Eisv433d2Auy";

function SMCBaserow(){
    let SMCBaseRowInstance = Object.assign(Baserow(API_KEY), {
        getSMCPeopleTable: async function(options = {}){
            return await this.getTable(212079, options)();
        },

        getSMCPerson: async function(rowID){
            return await this.getTable(212079, options)();
        },
        
        getRoomsTable: async function(options = {}){
            return await this.getTable(212080, options)();
        },
        
        getRoom: async function(rowID){
            return await this.getRow(212080, rowID)();
        },
        
        getEventsTable: async function(options = {}){
            return await this.getTable(212081, options)();
        },
        
        getEvent: async function(rowID){
            return await this.getRow(212081, rowID)();
        },
        
        getGearsTable: async function(options = {}){
            return await this.getTable(212082, options)();
        },
        
        getGear: async function(rowID){
            return await this.getRow(212082, rowID)();
        },
        
        getManufacturersTable: async function(options = {}){
            return await this.getTable(212083, options)();
        },
        
        getManufacturer: async function(rowID){
            return await this.getRow(212083, rowID)();
        },
        
        getClassesTable: async function(options = {}){
            return await this.getTable(212084, options)();
        },
        
        getClass: async function(rowID){
            return await this.getRow(212084, rowID)();
        },
    })
    return SMCBaseRowInstance;
}

export default SMCBaserow;
