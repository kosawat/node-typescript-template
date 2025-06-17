## TODO List API
This is an unfinished TODO list API. To finish it, there are 3 new endpoints to create. The endpoints should all be created under the /todo/* route. The data for this API comes from a JSON file (./src/data/static-data.json), which has already been imported (see ./src/routes/todo.ts).

# Requirements:
1. /todo - a GET request to get all TODO items, sorted by ID in ascending order. The server should respond with status code 200. If no TODO items are found, a blank array should be returned (with a 200 status code).

2. /todo/:id - a GET request to get a single TODO item by ID. Return a single object, which matches the ID passed in the URL. The server should respond with status code 200. If no matching TODO items are found, return the status code 404 and the JSON message: {"message": "TODO Item Not Found"}.

3. /todo/active - a GET request to only get the active TODO items. Return an array of all matching items, sorted by ID in ascending order. The server should respond with status code 200. If no TODO items are found, return an empty array with the same status code.