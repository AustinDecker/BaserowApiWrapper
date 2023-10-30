import axios from "axios";

export default function Baserow(api_token){
    let baserowInstance = {
        getTable,
        getRow,
        createRow,
        updateRow,
        deleteRow,
        getNextPage: async function(url){
            if(!url)
                return;
            
            let options = parseUrl(url);
            return await this.getTable(options.tableID, options)();
        }

    }
    return baserowInstance;

    //private helper functions
    function getTable(tableID, {search = "", size=100, page=1}){
        return async function(){
            try {
                let response = await axios({
                    url: `https://api.baserow.io/api/database/rows/table/${tableID}/?user_field_names=true&search=${search}&size=${size}&page=${page}`,
                    method: "get",
                    headers: {
                        "Authorization": api_token
                    },
                })
                return response.data;
            } catch (error) {
                console.log(error.message);
            }
            
        }
    }

    function getRow(tableID, rowID){
        return async function(){
            try {
                let response = await axios({
                    url: `https://api.baserow.io/api/database/rows/table/${tableID}/${rowID}/?user_field_names=true`,
                    method: "get",
                    headers: {
                        "Authorization": api_token
                    }
                })
                return response.data;
            } catch (error) {
                console.log(error.message);
            }
            
        }
    }

    function createRow(tableID, row_fields){
        return async function(){
            try {
                let response = await axios({
                    url: `https://api.baserow.io/api/database/rows/table/${tableID}/?user_field_names=true`,
                    method: "post",
                    headers: {
                        "Authorization": api_token,
                        "Content-Type": "application/json"
                    },
                    data: JSON.stringify(row_fields)
                })
                return response.data;
            } catch (error) {
                console.log(error.message);
            }
        }
    }

    function updateRow(tableID, rowID, row_fields){
        return async function(){
            try {
                let response = await axios({
                    url: `https://api.baserow.io/api/database/rows/table/${tableID}/${rowID}?user_field_names=true`,
                    method: "patch",
                    headers: {
                        "Authorization": api_token,
                        "Content-Type": "application/json"
                    },
                    data: JSON.stringify(row_fields)
                })
                return response.data;
            } catch (error) {
                console.log(error.message);
            }
        }
    }

    function deleteRow(tableID, rowID){
        return async function(){
            try {
                let response = await axios({
                    url: `https://api.baserow.io/api/database/rows/table/${tableID}/${rowID}?user_field_names=true`,
                    method: "delete",
                    headers: {
                        "Authorization": api_token,
                        "Content-Type": "application/json"
                    },
                    data: JSON.stringify(row_fields)
                })
                return response.data;
            } catch (error) {
                console.log(error.message);
            }
        }
    }

    function parseUrl(url){
        let urlParts = url.split("/")
        let query = urlParts[urlParts.length - 1].split("?")[1];
        let params = query.split("&");

        let options = {};
        options.tableID = urlParts[7];

        params.forEach(param => {
            let paramPair = param.split("=");
                options[`${paramPair[0]}`] = paramPair[1];
        })
        return options;
    }
}