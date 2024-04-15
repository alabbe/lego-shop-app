import React, { useState } from "react";
import ContactForm from "../components/contactForm/page";
import Product from "../components/product/page";
import LegoShopApi from "../utils/legoShopApi";
import ContacFormPayload from "../components/contactForm/contactFormPayload";

const HomePage = () => {

  const [contactFormData, setContactFormData] = useState<ContacFormPayload>({
    firstname: '',
    lastname: '',
    email: '',
    birthdate: '',
    phone: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setContactFormData(prevData => ({ ...prevData, [name]: value }));
  }

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    let response = LegoShopApi.createContact(contactFormData);
    response.then((json) => {
      console.log(json);
      if (json.id) {
        setMessage('Votre demande de contact a été envoyée avec succès !');
        setContactFormData({ firstname: '', lastname: '', email: '', birthdate: '', phone: '' });
      } else {
        setMessage('Une erreur est survenue. Veuillez réessayer ultérieurement.');
      }
    });
  };

  return (
    <>
      <section className='mx-4'>
        <Product />
      </section>
      <section className='bg-slate-200'>
        <ContactForm onSubmit={handleSubmit} onChange={handleChange} formData={contactFormData} message={message} />
      </section>
    </>
  );
}

export default HomePage;