import express from 'express';
import cors from 'cors';
import generate from './api.js';

const app = express();
app.use(express.json()); 

app.use(cors(
  { origin: "*" }
));
const port = process.env.PORT || 3005;

app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

app.post("/generate", async(req, res) => {
    try {
        const {queryDescription} = req.body;
        console.log(queryDescription);
        const sqlQuery = await generate(queryDescription);
        console.log(sqlQuery);
        res.json({sqlQuery: sqlQuery});
    } catch (error) {
        console.log(error);
        res.json({sqlQuery: 'Great question. Unfortunately, I have not been trained on that. Please ask me something else.'});
    }
})

app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`);
}   );