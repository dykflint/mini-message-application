import express from 'express';
import usersRouter from './routes/usersRouter.js';
const app = express();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

// Process all req.body requests using express.json() middleware
// app.use(express.json());
// Use express.urlencoded() to parse the form data into req.body
app.use(express.urlencoded({ extended: true }));
// Set EJS as the view engine
app.set('view engine', 'ejs');
app.use('/', usersRouter);
const PORT = process.env.PORT || 3000;
app.listen(PORT, error => {
  if (error) {
    throw error;
  }
  console.log(`Server running on https://localhost:${PORT}`);
});
