import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

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
// Run the template using res.render()
app.get('/', (req, res) => {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});
// Create the route with a form to send a new message
app.get('/new', (req, res) => {
  res.render('form', { title: 'Mini Messageboard', messages: messages });
});
// Create routes for individual messages
app.get('/messages/:id', (req, res) => {
  res.render('message', { title: 'Mini Messageboard', message: messages[req.params.id] });
});

// Use the POST method to process the message
app.post('/new', express.json(), (req, res) => {
  const { messageUser, message } = req.body;
  messages.push({ text: message, user: messageUser, added: new Date() });
  res.redirect('/');
  res.send('Message processed');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
