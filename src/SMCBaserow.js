import Baserow from "./Baserow";

const API_KEY = "dummy key";

const SMCBaserow = Baserow(API_KEY);

SMCBaserow.getSMCPeopleTable = async function(options){
    return await this.getTable(212079, options)();
}

SMCBaserow.getSMCPerson = async function(rowID){
    return await this.getRow(212079, rowID)();
}

SMCBaserow.getRoomsTable = async function(options){
    return await this.getTable(212080, options)();
}

SMCBaserow.getRoom = async function(rowID){
    return await this.getRow(212080, rowID)();
}

SMCBaserow.getEventsTable = async function(options){
    return await this.getTable(212081, options)();
}

SMCBaserow.getEvent = async function(rowID){
    return await this.getRow(212081, rowID)();
}

SMCBaserow.getGearsTable = async function(options){
    return await this.getTable(212082, options)();
}

SMCBaserow.getGear = async function(rowID){
    return await this.getRow(212082, rowID)();
}

SMCBaserow.getManufacturersTable = async function(options){
    return await this.getTable(212083, options)();
}

SMCBaserow.getManufacturer = async function(rowID){
    return await this.getRow(212083, rowID)();
}

SMCBaserow.getClassesTable = async function(options){
    return await this.getTable(212084, options)();
}

SMCBaserow.getClass = async function(rowID){
    return await this.getRow(212084, rowID)();
}

export default SMCBaserow;
