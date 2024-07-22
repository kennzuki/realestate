import express from 'express';

const app = express();
console.log('test');
app.listen(5000, () => {
    console.log('server running');
})