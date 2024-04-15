import ContactFormPayload from "../components/contactForm/contactFormPayload";

const contactsEndpoint = 'http://localhost:4000/api/contacts';

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
  }
}

export default LegoShopApi;