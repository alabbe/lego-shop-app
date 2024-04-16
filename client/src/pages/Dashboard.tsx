import { useEffect, useState } from "react";
import LegoShopApi from "../utils/legoShopApi";
import ContactModel from "../model/ContactModel";
import ContactsList from "../components/contactsList/page";

const Dashboard = () => {

  const [contacts, setContacts] = useState<Array<ContactModel>>([]);

  useEffect(() => {
    let jsonContacts = LegoShopApi.getContacts();
    let contactsList: ContactModel[];
    jsonContacts.then((json) => {
      contactsList = json.map((contact: ContactModel) => ({
        id: contact.id,
        firstname: contact.firstname,
        lastname: contact.lastname,
        email: contact.email,
        birthdate: contact.birthdate ? new Date(contact.birthdate).toLocaleDateString() : "",
        phone: contact.phone
      }));
      setContacts([...contactsList]);
    });
    }, []);

    return (
      <section className='mx-4 flex flex-col space-y-4 my-8'>
        <h2 className='font-semibold text-xl  text-blue-800'>Liste des contacts</h2>
        <ContactsList contacts={contacts} />
      </section>
    );
  }

export default Dashboard;