import express from 'express';

const PORT = 3333;

const app = express();

app.get('/', (req, res) => {
    return res.json({message: `Hello world - NLW#`});
});

app.post('/', (req, res) => {
    return res.json({message: `Os dados foram salvos com sucesso!`})
});

app.listen(PORT, () => console.log(`Server is running! PORT: ${PORT}`));


