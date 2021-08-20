import axios from 'axios';

const url = "https://contact-me-resume.herokuapp.com/message";

export const createMessage = newMessage => axios.post(url, newMessage);