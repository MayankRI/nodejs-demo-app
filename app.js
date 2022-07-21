import { OnePasswordConnect, ItemBuilder } from "@1password/connect";

// Create new connector with HTTP Pooling
const op = OnePasswordConnect({
	serverURL: "0.0.0.0:8080",
	token: "eyJhbGciOiJFUzI1NiIsImtpZCI6ImlzZzVrajQydmczaGN0emFnZXlqNG93ZzNlIiwidHlwIjoiSldUIn0.eyIxcGFzc3dvcmQuY29tL2F1dWlkIjoiRE5ISURMNUFLUkNZSkNBQlU3T1BHVjVPTVUiLCIxcGFzc3dvcmQuY29tL3Rva2VuIjoiWkhwYWtxVlZBOERWSkhpQmlnOFA3TDJFbmtjNXdQemQiLCIxcGFzc3dvcmQuY29tL2Z0cyI6WyJ2YXVsdGFjY2VzcyJdLCIxcGFzc3dvcmQuY29tL3Z0cyI6W3sidSI6IjV0eWx3Z3N2bHNoN2NwZjZtZW93cnp3NGttIiwiYSI6NDh9XSwiYXVkIjpbImNvbS4xcGFzc3dvcmQuY29ubmVjdCJdLCJzdWIiOiJJRllZU1RSTDY1QU5GREZRNERIVlBPVE9GRSIsImlhdCI6MTY1ODM5ODYwOCwiaXNzIjoiY29tLjFwYXNzd29yZC5iNSIsImp0aSI6IndrN2d6bTJ5ZDZob2l1ZmZoYm1ob25vaGdxIn0.E5HwbJ1qxLOF44bjN1O1vYddPUac66uSbN345fo4neIJ3y0DDHbzvMzkqGSMA3m_pBxGZ62PsQxIh9dVIkgQ6w",
	keepAlive: true,
});




// import Express and routes
import express from 'express';
import routes from './source/routes/route.js'
// constant variables 
const app = express();
const PORT = 3000;
const HOST = '0.0.0.0';
// body parser setup for Express v4.16.0 and higher
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// We'll use our routes function that we setup and imported above
// and then pass it to our app Express 
routes(app);
// Setting the server to listen at port 3000
app.listen(PORT, HOST, function () {
  console.log(`Server started on http://${HOST}:${PORT}`);
});
