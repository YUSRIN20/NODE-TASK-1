# Node-Task-1

### Express Timestamp Logger

This is a simple Express.js application that allows users to save the current timestamp to a file and retrieve it later.

### Usage

1. **Setup**: Ensure you have Node.js and npm installed.

2. **Installation**: Install the necessary dependencies by running `npm install express date-fns`.

3. **Starting the Server**: Start the server by executing `node app.js`.

4. **Endpoints**:

   - `/`: Provides instructions to visit `/write` endpoint to save the current timestamp.
   
   - `/write`: Saves the current timestamp to a file named `dd-mm-yyyy-hh-mm-ss.txt`.
   
   - `/read`: Retrieves and displays the saved timestamp.

5. **Access**: Use a web browser or an HTTP client like Postman to access the endpoints.

### Demo
Check out the [live demo](https://node-timestamp-task.onrender.com/) deployed on Render.

### Example

- Visit `/write` to save the timestamp.
  
- Access `/read` to retrieve and view the saved timestamp.

### Note

- Ensure that a directory named `TimeStamp` exists in the project root to store the timestamp files.
  