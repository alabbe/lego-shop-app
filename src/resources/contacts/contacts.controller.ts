import express from 'express';
import { ContactsService } from './contacts.service';
import { HttpError } from '../../types/httpError';

const ContactsController = express.Router();

const contactsService = new ContactsService();

ContactsController.get('/', async (req, res, next) => {
  try {
    const contacts = await contactsService.findAll();
    if (contacts) {
      res.status(200).send(contacts);
    } else {
      throw new HttpError('No contacts found', 404);
    }
  } catch (error) {
    console.error(`Error while getting users`, error);
    next(error);
  }
});

ContactsController.get('/:contactId', async (req, res, next) => {
  try {
    const contactId: number = Number(req.params.contactId);
    if (!contactId) {
      throw new HttpError('Contact id is mandatory.', 400);
    }
    const foundContact = await contactsService.findById(contactId);
    if (!foundContact) {
      throw new HttpError('Contact doesnt exist.', 404);
    }
    res.status(200).send(foundContact);
  } catch (error) {
    console.error(`Error while getting contact by Id`, error);
    next(error);
  }
});

export { ContactsController }