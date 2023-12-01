# BaserowApiWrapper Documentation:

## Baserow.js:

**Description:**  
The base JavaScript object, which contains methods for CRUD operations on a generic Baserow database. It wraps the Axios HTTP requests for easy use.

**Methods:**

- `Baserow(API_KEY)`:  
  - **API_KEY:** Your Baserow API key.
  - **Returns:** BaserowInstance.

- `getTable(tableID, [options])`:
  - **tableID:** ID of the table in Baserow.
  - **options:** A key-value pair of optional options to manipulate the HTTP Request.
  - **Options schema:**
    ```json
    {
      "search": "String",
      "size": "Number",
      "page": "Number",
      "filters": "String"
    }
    ```
  - **Returns:** A JSON object with next, prev links, and data containing a list of objects.

- `getRow(tableID, rowID)`:
  - **tableID:** ID of the table in Baserow.
  - **rowID:** ID of a specific row in a table.
  - **Returns:** JSON object of row fields.

- `createRow(tableID, rowFields)`:
  - **tableID:** ID of the table in Baserow.
  - **rowFields:** Key-value pair object corresponding to row fields.
  - **Returns:** JSON object of the created row.

- `updateRow(tableID, rowID, rowFields)`:
  - **tableID:** ID of the table in Baserow.
  - **rowID:** ID of a specific row in the table to modify.
  - **rowFields:** Key-value pair object corresponding to row fields.
  - **Returns:** JSON object of the modified row.

- `deleteRow(tableID, rowID)`:
  - **tableID:** ID of the table in Baserow.
  - **rowID:** ID of the row to delete in the given table.
  - **Returns:** void.

- `getAllPages(tableID, [options])`:
  - **tableID:** ID of the table in Baserow.
  - **options:** A key-value pair of optional options to manipulate the HTTP Request.
  - **Returns:** A 2D array with each index representing a page, containing a list of objects.

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
      "filters": "String"
    }
    ```
  - **Returns:** A 2D array with each index representing a page, containing a list of objects.

- `getSMCPerson(rowID)`:
  - **rowID:** ID of a specific row on the SMCPeople Table.
  - **Returns:** JSON object of the specific row.

- `getRoomsTable([options])`:
  - **options:** A key-value pair of optional options to manipulate the HTTP Request.
  - **Options schema:**
    ```json
    {
      "search": "String",
      "size": "Number",
      "page": "Number",
      "filters": "String"
    }
    ```
  - **Returns:** A 2D array with each index representing a page, containing a list of objects.

- `getRoom(rowID)`:
  - **rowID:** ID of a specific row on the SMCRooms Table.
  - **Returns:** JSON object of the specific row.

- `getEventsTable([options])`:
  - **options:** A key-value pair of optional options to manipulate the HTTP Request.
  - **Options schema:**
    ```json
    {
      "search": "String",
      "size": "Number",
      "page": "Number",
      "filters": "String"
    }
    ```
  - **Returns:** A 2D array with each index representing a page, containing a list of objects.

- `getEvent(rowID)`:
  - **rowID:** ID of a specific row on the SMCEvents Table.
  - **Returns:** JSON object of the specific row.

- `getGearsTable([options])`:
  - **options:** A key-value pair of optional options to manipulate the HTTP Request.
  - **Options schema:**
    ```json
    {
      "search": "String",
      "size": "Number",
      "page": "Number",
      "filters": "String"
    }
    ```
  - **Returns:** A 2D array with each index representing a page, containing a list of objects.

- `getGear(rowID)`:
  - **rowID:** ID of a specific row on the SMCGears Table.
  - **Returns:** JSON object of the specific row.

- `getManufacturersTable([options])`:
  - **options:** A key-value pair of optional options to manipulate the HTTP Request.
  - **Options schema:**
    ```json
    {
      "search": "String",
      "size": "Number",
      "page": "Number",
      "filters": "String"
    }
    ```
  - **Returns:** A 2D array with each index representing a page, containing a list of objects.

- `getManufacturer(rowID)`:
  - **rowID:** ID of a specific row on the SMCManufacturers Table.
  - **Returns:** JSON object of the specific row.

- `getClassesTable([options])`:
  - **options:** A key-value pair of optional options to manipulate the HTTP Request.
  - **Options schema:**
    ```json
    {
      "search": "String",
      "size": "Number",
      "page": "Number",
      "filters": "String"
    }
    ```
  - **Returns:** A 2D array with each index representing a page, containing a list of objects.

- `getClass(rowID)`:
  - **rowID:** ID of a specific row on the SMCClasses Table.
  - **Returns:** JSON object of the specific row.

## SMCBaserowUtils.js:

**Description:**  
Utility functions for interacting with the SMCBaserow database. These functions provide high-level abstractions for common tasks.

**Methods:**

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
If unsure about the filters' functionality, use Postman to test them and verify they are filtering the correct
