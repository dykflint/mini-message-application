// controllers/usersController.js
import { insertNewMessage, queryGetMessages } from '../db/queries.js';

export const getMessages = async (req, res) => {
  const messages = await queryGetMessages('messages');
  res.render('index', { title: 'Mini Messageboard', messages: messages });
};

export const newMessageGet = (req, res) => {
  res.render('form', { title: 'Mini Messageboard' });
};

export const newMessagePost = async (req, res) => {
  const { text, username } = req.body;
  await insertNewMessage(text, username);
  console.log(text, username);
  res.send('New Message added');
};
