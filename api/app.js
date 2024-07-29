import express from 'express';
import postRoute from "./routes/post.route.js"

const app = express();
console.log('test');

app.use("/api/posts",postRoute)

app.listen(5000, () => {
  console.log('server running');
});
