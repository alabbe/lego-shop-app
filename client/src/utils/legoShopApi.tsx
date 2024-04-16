import ContactFormPayload from "../components/contactForm/contactFormPayload";
import LoginFormPayload from "../components/loginForm/loginFormPayload";

const contactsEndpoint = 'http://localhost:4000/api/contacts';
const usersEndpoint = 'http://localhost:4000/api/users';

const LegoShopApi = {

  async createContact(contactForm: ContactFormPayload) {
    let queryString = `${contactsEndpoint}/`;
    try {
      const response = await fetch(queryString, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ contactForm }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const json = await response.json();
      return json;
    } catch (e) {
      console.log("Unable to create the contact: ", e);
    }
  },

  async login(loginForm: LoginFormPayload) {
    let queryString = `${usersEndpoint}/login`;
    try {
      const response = await fetch(queryString, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ loginForm }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const json = await response.json();
      return json;
    } catch (e) {
      console.log("Unable to login: ", e);
    }
  },

  async getContacts() {
    let queryString = `${contactsEndpoint}/`;
    try {
      const response = await fetch(queryString);

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const json = await response.json();
      return json;
    } catch (e) {
      console.log("Unable to get contacts: ", e);
    }
  }
}

export default LegoShopApi;