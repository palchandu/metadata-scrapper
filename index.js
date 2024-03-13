import express from 'express';
import bodyParser from 'body-parser'
const app = express();
import router from './src/routes/index.js';
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.get('/', (req, res) => {
  res.send(`<h1>Meta Web Scraping API</h1>
						 <p>Use /api/scrap</p>
						 <p>Author: Chandra</p>`);
});
app.use('/v1',router);

app.listen(3000, () => {
  console.log('Express server initialized');
});