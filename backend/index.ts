import express from 'express';
const app = express();
const port = 9001;

// define a route handler for the default home page
app.get('/', (req: express.Request, res: express.Response) => {
	res.send('Hello world!');
});

// start the Express server
app.listen(port, () => {
	console.log(`server started at http://localhost:${ port }`);
});
