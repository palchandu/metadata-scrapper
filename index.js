import express from 'express';
import bodyParser from 'body-parser'
const app = express();
import router from './src/routes/index.js';
import connect from './src/config/db-connect.js'
import {checkToken} from './src/middleware/index.js'
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.get('/', (req, res) => {
  res.send(`<h1>Meta Web Scraping API</h1>
						 <p>Author: Chandra</p>`);
});
app.use(checkToken);
app.use('/v1',router);

app.listen(3000, async () => {
	await connect();
  console.log('Express server initialized');
});