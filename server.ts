import express from 'express';
import adminRouter from './src/routes/adminRoutes';
import userRouter from './src/routes/userRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

console.log(".....1....."); 

app.get('/', (req,res) => {
  res.send(".....Hello world....")
})


// Routes
app.use('/admin', adminRouter);
app.use('/user', userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
