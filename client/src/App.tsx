import Product from './components/product/page'
import ContactForm from './components/contactForm/page'
import { useState } from 'react'
import ContactFormPayload from './components/contactForm/contactFormPayload'
import LegoShopApi from './utils/legoShopApi'

function App() {

  const [contactFormData, setContactFormData] = useState<ContactFormPayload>({
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
        setContactFormData({firstname: '',lastname: '',email: '',birthdate: '',phone: ''});
      } else {
        setMessage('Une erreur est survenue. Veuillez réessayer ultérieurement.');
      }
    });
  };

  return (
      <div className='w-full min-w-xl'>
        <header className='bg-yellow-400 absolute w-full top-0 h-24 flex flex-col justify-around'>
          <h1 className='font-bold text-2xl text-black text-center'>Lego Shop</h1>
        </header>
        <main className='mt-32 flex flex-col space-y-4 gap-8'>
          <section className='mx-4'>
            <Product />
          </section>
          <section className='bg-slate-200'>
            <ContactForm onSubmit={handleSubmit} onChange={handleChange} formData={contactFormData} message={message} />
          </section>
        </main>
        <footer className='bg-black absolute w-full h-20'></footer>
      </div>
    )
  }

  export default App;
