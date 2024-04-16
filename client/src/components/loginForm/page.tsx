import { FormEventHandler } from "react";
import LoginFormPayload from "./loginFormPayload";

const LoginForm = ({onSubmit, onChange, formData} : {onSubmit: FormEventHandler, onChange: FormEventHandler, formData: LoginFormPayload}) => {

  return (
    <div className='flex flex-col mx-4 my-8 gap-4'>
      <h2 className='font-semibold text-xl  text-blue-800'>Connexion à l'administration</h2>
    <form className='flex flex-col gap-2' onSubmit={onSubmit}>
      <label htmlFor='username' className='text-neutral-600'>Nom d'utilisateur*</label>
      <input type='text' name='username' id='username' className='h-8 rounded' required onChange={onChange} value={formData.username}></input>

      <label htmlFor='password' className='text-neutral-600'>Mot de passe*</label>
      <input type='password' name='password' id='password' className='h-8 rounded' required onChange={onChange}  value={formData.password}></input>

      <button className='bg-blue-500 rounded-md w-40 h-12 text-white text-lg hover:bg-blue-600 mt-8 mx-auto'>Se connecter</button>
    </form>
    </div>
  );
}


export default LoginForm;