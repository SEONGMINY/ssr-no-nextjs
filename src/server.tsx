import express from 'express';
import { renderToPipeableStream } from 'react-dom/server';
import App from './App';

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  const { pipe } = renderToPipeableStream(<App />, {
    bootstrapScripts: ['client.js'],
    onShellReady() {
      res.statusCode = 200;
      res.setHeader('Content-type', 'text/html; charset=utf-8');
      pipe(res);
    },
    onError(err) {
      console.log('ERROR: ', err);
    },
  });
});

app.listen(3000, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
