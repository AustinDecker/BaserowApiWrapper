import { SmcPeopleViews, RoomsView, EventsView } from "./Views";
import SMCBaserow from "./SMCBaserow";

const smcBaserowInstance = SMCBaserow();

async function GetFaculty(){
    try {
        return await smcBaserowInstance.getSMCPeopleTable({filters: SmcPeopleViews.FACULTY});
    } catch (err) {
        console.log(err.message)
    }
}

async function GetStudents(){
    try {
        return await smcBaserowInstance.getSMCPeopleTable({filters: SmcPeopleViews.ENROLLED_STUDENT})
    } catch (err) {
        console.log(err.message)
    }
}

async function GetBookableRooms(){
    try {
        return await smcBaserowInstance.getSMCRoomsTable({filters: RoomsView.BOOKABLE_EDIT_COLLAB_ROOMS});
    } catch (err) {
        console.log(err.message);
    }
}

async function GetPeopleByRole(role){
    let roleFilter = {
        "filter_type": "AND",
        "filters":[
            { "type":"contains", "field":"Role", "value":role }
        ],
        "groups":[]
    }

    try{
        let data = await smcBaserowInstance.getSMCPeopleTable({filters: JSON.stringify(roleFilter)});
        return data;
    } catch (err){
        console.log(err.message);
    }
}

async function GetUpcomingEvents(){
    try {
        return await smcBaserowInstance.getEventsTable({filters: EventsView.UPCOMING})
    } catch (err) {
        console.log(err.message);
    }
}

export default {
    GetFaculty,
    GetPeopleByRole,
    GetStudents,
    GetBookableRooms,
    GetUpcomingEvents
}