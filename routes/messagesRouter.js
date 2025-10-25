import { Router } from 'express';
import { getMessages, newMessageGet, newMessagePost } from '../controllers/messagesController.js';
import { validateMessage, checkValidation } from '../middleware/validation.js';
const usersRouter = Router();

usersRouter.get('/', getMessages);
usersRouter.get('/new', newMessageGet);
usersRouter.post('/new', validateMessage, checkValidation, newMessagePost);
// Run the template using res.render()
// // Create routes for individual messages
// app.get('/messages/:id', (req, res) => {
//   res.render('message', { title: 'Mini Messageboard', message: messages[req.params.id] });
// });

// // Use the POST method to process the message
// app.post('/new', express.json(), (req, res) => {
//   const { messageUser, message } = req.body;
//   messages.push({ text: message, user: messageUser, added: new Date() });
//   res.redirect('/');
//   // res.send('Message processed');
// });

export default usersRouter;
