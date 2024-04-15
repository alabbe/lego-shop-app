import React, { FormEventHandler } from "react";
import ContacFormPayload from "./contactFormPayload";

const ContactForm = ({formData, message, onSubmit, onChange} : {formData: ContacFormPayload, message: string, onSubmit: FormEventHandler, onChange: FormEventHandler}) => {

  return (
    <div className='flex flex-col mx-4 my-8 gap-4'>
      <h2 className='font-semibold text-xl  text-blue-800'>Contactez-nous</h2>
      <p className='font-light text-neutral-500 italic'>Vous souhaitez être averti de la disponibilité de ce produit rare ? Envoyez ce formulaire et vous serez contacté dés que le produit sera disponible.</p>
      
      <div><p className='text-blue-600'>{message}</p></div>
      
      <form className='flex flex-col gap-2' onSubmit={onSubmit}>
        <label htmlFor='firstname' className='text-neutral-600'>Prénom*</label>
        <input type='text' name='firstname' id='firstname' className='h-8 rounded' onChange={onChange} value={formData.firstname} required></input>

        <label htmlFor='lastname' className='text-neutral-600'>Nom*</label>
        <input type='text' name='lastname' id='lastname' className='h-8 rounded' onChange={onChange} value={formData.lastname} required></input>
        
        <label htmlFor='email' className='text-neutral-600'>Email*</label>
        <input type='email' name='email' id='email' className='h-8 rounded' onChange={onChange} value={formData.email} required></input>
        
        <label htmlFor='birthdate' className='text-neutral-600'>Date de naissance</label>
        <input type='date' name='birthdate' id='birthdate' className='h-8 rounded' onChange={onChange} value={formData.birthdate}></input>

        <label htmlFor='phone' className='text-neutral-600'>Téléphone</label>
        <input type='phone' name='phone' id='phone' className='h-8 rounded' onChange={onChange} value={formData.phone}></input>
        
        <button className='bg-blue-500 rounded-md w-40 h-12 text-white text-lg hover:bg-blue-600 mt-8 mx-auto'>Envoyer</button>
      </form>
    </div>
  );
}

export default ContactForm;