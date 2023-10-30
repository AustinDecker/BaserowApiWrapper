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
    let SMCBaseRowInstance = Object.assign({}, Baserow(API_KEY), {
        next: null,
        prev: null,

        getSMCPeopleTable: async function(options = {}){
            let data = await this.getTable(TableIDs.SMCPEOPLE, options)();
            setNext(data.next);
            setPrev(data.prev);
            return data;
        },

        getSMCPerson: async function(rowID){
            return await this.getRow(TableIDs.SMCPEOPLE, rowID)();
        },
        
        getRoomsTable: async function(options = {}){
            let data = await this.getTable(TableIDs.SMCROOMS, options)();
            setNext(data.next);
            setPrev(data.prev);

            return data;
        },
        
        getRoom: async function(rowID){
            return await this.getRow(TableIDs.SMCROOMS, rowID)();
        },
        
        getEventsTable: async function(options = {}){
            let data = await this.getTable(TableIDs.SMCEVENTS, options)();
            setNext(data.next);
            setPrev(data.prev);

            return data;
        },
        
        getEvent: async function(rowID){
            return await this.getRow(TableIDs.SMCEVENTS, rowID)();
        },
        
        getGearsTable: async function(options = {}){
            let data = await this.getTable(TableIDs.SMCGEARS, options)();
            setNext(data.next);
            setPrev(data.prev);

            return data;
        },
        
        getGear: async function(rowID){
            return await this.getRow(TableIDs.SMCGEARS, rowID)();
        },
        
        getManufacturersTable: async function(options = {}){
            let data = await this.getTable(TableIDs.SMCMANUFACTURERS, options)();
            setNext(data.next);
            setPrev(data.prev);

            return data;
        },
        
        getManufacturer: async function(rowID){
            return await this.getRow(TableIDs.SMCMANUFACTURERS, rowID)();
        },
        
        getClassesTable: async function(options = {}){
            let data = await this.getTable(TableIDs.SMCCLASSES, options)();
            setNext(data.next);
            setPrev(data.prev);

            return data;
        },
        
        getClass: async function(rowID){
            return await this.getRow(TableIDs.SMCCLASSES, rowID)();
        },
    })
    return SMCBaseRowInstance;

    //private helper functions
    function setNext(url){
        SMCBaseRowInstance.next = url;
    }
    function setPrev(url){
        SMCBaseRowInstance.prev = url
    }
}

export default SMCBaserow;
