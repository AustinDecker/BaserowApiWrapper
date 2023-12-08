# BaserowApiWrapper Documentation:

## Baserow.js:

**Description:**  
contains the base object which has methods for CRUD operations on a generic Baserow database. It wraps the Axios HTTP requests for easy use. Each instance you create with the Baserow() function should connect to a different Baserow database.
It is recommended that you do not use this object directly but create a more specific object that wraps this object like how SMCBaserow is set up.

**Methods:**

- `Baserow(API_KEY)`:  
  - **API_KEY:** Your Baserow API key.
  - **Returns:** BaserowInstance.

**Note:** all functions return a promise in the format of either `[null, data]` or `[error, null]`
- `getTable(tableID, [options])`:
  - **tableID:** ID of the table in Baserow.
  - **options:** A key-value pair of optional options to manipulate the HTTP Request.
  - **Options schema:**
    ```json
    {
      "search": "String",
      "size": "Number",
      "page": "Number",
      "filters": "String",
      "include": "[String]",
      "exclude": "[String]"
    }
    ```
  - **Returns:** A Promise resolving to a JSON object with next, prev links, and data containing a list of objects, or a an error object with the format:
    ```javascript
    {
      statusText: String,
      status: Number
    }
    ```

- `getRow(tableID, rowID)`:
  - **tableID:** ID of the table in Baserow.
  - **rowID:** ID of a specific row in a table.
  - **Returns:** A Promise resolving to a JSON object of row fields or an error object.

- `createRow(tableID, rowFields)`:
  - **tableID:** ID of the table in Baserow.
  - **rowFields:** Key-value pair object corresponding to row fields.
  - **Returns:** A Promise resolving to a JSON object of the created row or an error object.

- `updateRow(tableID, rowID, rowFields)`:
  - **tableID:** ID of the table in Baserow.
  - **rowID:** ID of a specific row in the table to modify.
  - **rowFields:** Key-value pair object corresponding to row fields.
  - **Returns:** A Promise resolving to a JSON object of the modified row or an error object

- `deleteRow(tableID, rowID)`:
  - **tableID:** ID of the table in Baserow.
  - **rowID:** ID of the row to delete in the given table.
  - **Returns:** A Promise resolving to void or an error object.

- `getAllPages(tableID, [options])`:
  - **tableID:** ID of the table in Baserow.
  - **options:** A key-value pair of optional options to manipulate the HTTP Request.
  - **Returns:** A Promise resolving to a 2D array with each index representing a page, containing a list of objects or an error object.

## SMCBaserow.js:

**Description:**  
A specific implementation of the BaserowInstance object representing a specific database on Baserow for SMC. All methods are specific to manipulating the SMC database. It also inherits all methods from the BaserowInstance.

**Methods:**

- `SMCBaserow()`:
  - **Returns:** An SMCBaseRowInstance object connected to a specific Baserow database.

- `getSMCPeopleTable([options])`:
  - **options:** A key-value pair of optional options to manipulate the HTTP Request.
  - **Options schema:**
    ```json
    {
      "search": "String",
      "size": "Number",
      "page": "Number",
      "filters": "String",
      "exclude": "[String]"
    }
    ```
  - **Returns:** A Promise resolving to a 2D array with each index representing a page, containing a list of objects.
  - **throws:** A potential Error.

- `getSMCPerson(rowID)`:
  - **rowID:** ID of a specific row on the SMCPeople Table.
  - **Returns:** A Promise resolving to a JSON object of the specific row.

- `getRoomsTable([options])`:
  - **options:** A key-value pair of optional options to manipulate the HTTP Request.
  - **Options schema:**
    ```json
    {
      "search": "String",
      "size": "Number",
      "page": "Number",
      "filters": "String",
      "include": "[String]",
      "exclude": "[String]"
    }
    ```
  - **Returns:** A Promise resolving to a 2D array with each index representing a page, containing a list of objects.
  - **throws:** A potential Error.

- `getRoom(rowID)`:
  - **rowID:** ID of a specific row on the SMCRooms Table.
  - **Returns:** A Promise resolving to a JSON object of the specific row.
  - **throws:** A potential Error.

- `getEventsTable([options])`:
  - **options:** A key-value pair of optional options to manipulate the HTTP Request.
  - **Options schema:**
    ```json
    {
      "search": "String",
      "size": "Number",
      "page": "Number",
      "filters": "String",
      "include": "[String]",
      "exclude": "[String]"
    }
    ```
  - **Returns:** A Promise resolving to a 2D array with each index representing a page, containing a list of objects.
  - **throws:** A potential Error.

- `getEvent(rowID)`:
  - **rowID:** ID of a specific row on the SMCEvents Table.
  - **Returns:** A Promise resolving to a JSON object of the specific row or an error object.
  - **throws:** A potential Error.

- `getGearsTable([options])`:
  - **options:** A key-value pair of optional options to manipulate the HTTP Request.
  - **Options schema:**
    ```json
    {
      "search": "String",
      "size": "Number",
      "page": "Number",
      "filters": "String",
      "include": "[String]",
      "exclude": "[String]"
    }
    ```
  - **Returns:** A Promise resolving to a 2D array with each index representing a page, containing a list of objects.
  - **throws:** A potential Error.

- `getGear(rowID)`:
  - **rowID:** ID of a specific row on the SMCGears Table.
  - **Returns:** A Promise resolving to a JSON object of the specific row.
  - **throws:** A potential Error.

- `getManufacturersTable([options])`:
  - **options:** A key-value pair of optional options to manipulate the HTTP Request.
  - **Options schema:**
    ```json
    {
      "search": "String",
      "size": "Number",
      "page": "Number",
      "filters": "String",
      "include": "[String]",
      "exclude": "[String]"
    }
    ```
  - **Returns:** A Promise resolving to a 2D array with each index representing a page, containing a list of objects.
  - **throws:** A potential Error.

- `getManufacturer(rowID)`:
  - **rowID:** ID of a specific row on the SMCManufacturers Table.
  - **Returns:** A Promise resolving to a JSON object of the specific row.
  - **throws:** A potential Error.

- `getClassesTable([options])`:
  - **options:** A key-value pair of optional options to manipulate the HTTP Request.
  - **Options schema:**
    ```json
    {
      "search": "String",
      "size": "Number",
      "page": "Number",
      "filters": "String",
      "include": "[String]",
      "exclude": "[String]"
    }
    ```
  - **Returns:** A Promise resolving to a 2D array with each index representing a page, containing a list of objects.
  - **throws:** A potential Error.

- `getClass(rowID)`:
  - **rowID:** ID of a specific row on the SMCClasses Table.
  - **Returns:** A Promise resolving to a JSON object of the specific row.
  - **throws:** A potential Error.
 
**Constants:**
- `TableIDs`
  - `SMCPEOPLE` - Table ID for the SMCPeople table
  - `SMCROOMS`  - Table ID for the SMCRooms table
  - `SMCEVENTS` - Table ID for the Events table
  - `SMCGEARS`  - Table ID for the Gears table
  - `SMCMANUFACTURERS` - Table ID for the Manufacturers table 
  - `SMCCLASSES` - Table ID for the Classes table

## SMCBaserowUtils.js:

**Description:**  
Utility functions for interacting with the SMCBaserow database. These functions provide high-level abstractions for common tasks.

**Methods:**
- `GetPeople()`: 
  - **Returns:** A Promise resolving to an array of all people in the SMCPeople table
  
- `GetFaculty()`:  
  - **Returns:** A Promise resolving to an array of faculty members.

- `GetPeopleByRole(role)`:  
  - **role:** The role to filter people by.
  - **Returns:** A Promise resolving to an array of people with the specified role.

- `GetStudents()`:  
  - **Returns:** A Promise resolving to an array of students.

- `GetBookableRooms()`:  
  - **Returns:** A Promise resolving to an array of bookable rooms.

- `GetUpcomingEvents()`:  
  - **Returns:** A Promise resolving to an array of upcoming events.

## Views.js:

**Description:**  
Views.js holds predefined filters for the SMCBaserow object. These filters are created using the filters builder on Baserow.

**Constants:**

- **SmcPeopleViews:**  
  - **FACULTY:** Filters for retrieving faculty members.
  - **ENROLLED_STUDENT:** Filters for retrieving enrolled students.
  - **SMC_STUDENT_WORKERS:** Filters for retrieving SMC student workers.
  - **RFC_STUDENT_WORKERS:** Filters for retrieving RFC student workers.
  - **GEAR_ACCESS_1 to GEAR_ACCESS_4:** Filters for different gear access levels.
  - **GUITAR_SIGNOUTS:** Filters for retrieving guitar signouts.
  - **FULL_SMC_ACCESS:** Filters for retrieving users with full SMC access.
  - **EDIT_REHERSAL_ACCESS:** Filters for retrieving users with edit rehearsal access.
  - **EDIT_SUITE_COLLAB_ACCESS:** Filters for retrieving users with edit suite collaboration access.

- **RoomsView:**  
  - **BOOKABLE_EDIT_COLLAB_ROOMS:** Filters for retrieving bookable and non-purpose-collaboration rooms.
  - **BOOKABLE_REHEARSAL_ROOMS:** Filters for retrieving bookable rehearsal rooms.
  - **BOOKABLE_STUDIO_ROOMS:** Filters for retrieving bookable studio rooms.

- **EventsView:**  
  - **UPCOMING:** Filters for retrieving upcoming events.

**Note:**  
If unsure about the filters' functionality, use Postman to test them and verify they are filtering the correct rows.

Refer to your Generated Baserow API docs that are provided for you by Baserow. They have example HTTP requests, response structure examples, error code examples, and provide an easy-to-understand layout of how to use their API. The BaserowApiWrapper uses this API and it's recommended you refer to both our docs and Baserow’s docs to use the wrapper effectively.

## Examples
`Here are a few examples using the SMCBaserowInstance object.`
```javascript
import {smcPeopleViews} from "Views.js"
import {SMCBaserow, TableIDs} from "SMCBaserow.js"

//getting all people
//option defaults: page:1, size: 100, search: null, filters: null, include: null, exclude: null
const smcBaserowInstance = SMCBaserow();

//it's recommended you wrap this code in its own function.
smcBaserowInstance.getSMCPeopleTable()
    .then((pages) => {
        let people = [];
        //pages is a 2d array. Each index represents a single page with at most 100 people per page.
        pages.forEach(page =>{
            page.forEach(person =>{
                people.push(person);
            }
        });
        console.log(people);
    }

//getting faculty members only, setting custom options
let facultyFilter = JSON.stringify(SMCPeopleViews.FACULTY);
smcBaserowInstance.getSMCPeopleTable({filters: facultyFilter, size: 50})
    .then(pages => {
        let faculty = [];
        pages.forEach(page => {
            page.forEach(person => {
                faculty.push(person);
            });
        });
        console.log(faculty);
    })

//use the search option param for very simple filtering.
//gets all rows that contain "john smith" in any of the row fields
smcBaserowInstance.getSMCPeopleTable({search: "John Smith"})
    .then(pages => {
        let people = [];
        pages.forEach(page => {
            page.forEach(person =>{
                people.push(person);
            });
        });
        console.log(people);
    });

//to get a specific row from a specific table, use getSMCPerson or similar methods.
//gets the row with the row id of 1.
smcBaserowInstance.getSMCPerson(1)
    .then((person) =>{
        console.log(person);
    });

//To add a new row to baserow
//row fields are specific to the database. Refer to your generated Baserow Database API
smcBaserowInstance.createRow(TableIDs.SMCPEOPLE, {
    "First Name": "Bill",
    "Last Name": "Gates",
    "Email": "BGates@gmail.com",
    "Phone": "+1-260-123-4567",
    "Role": ["Guest 👥"],
    "Gear Access": "Gear Level 3",
    "Room Access": "Room Access 3"
})
```
`Its recommended you make a utilities javascript file that does all of the above things for you.`

## Baserow.js Examples
```javascript
import Baserow from "./Baserow.js"
const API_KEY //fill using .env or have a constant
const TABLE_ID = 1234;
const ROW_ID = 5;

//create BaserowInstance Object
const myBaserowDatabase = Baserow(API_KEY);

//You can now manipulate your baserow database. the BaserowInstance object has basic methods for creating, reading, updating, and deleting rows and tables.
//get page of data
//pass an empty object '{}' if you want to use the default options which are: size: null, page: 1, filters: null, size:100, search: null, exclude: null, include: null

//res will either be the page of data on the given table with the TABLE_ID or an error object that signifies bad data being sent to the function.
let res = await myBaserowDatabase.getTable(TABLE_ID, {});

//you can also use the function in this format:
// res is an array that may contain either an error or data in the format [error, data].
//If the data returns successfully the array will be [null, data], otherwise [error, null];
myBaserowDatabase.getTable(TABLE_ID, {})
    .then(res =>{
        console.log(res[1]);
    });

//to get a specific row
myBaserowDatabase.getRow(TABLE_ID, ROW_ID, {})
    .then(res =>{
        console.log(res[1]);
    });


```
