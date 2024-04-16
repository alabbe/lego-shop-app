import { useState } from "react";
import LoginFormPayload from "../components/loginForm/loginFormPayload";
import LoginForm from "../components/loginForm/page";
import { useNavigate } from "react-router-dom";
import LegoShopApi from "../utils/legoShopApi";

const LoginPage = () => {


  const [loginFormData, setLoginFormData] = useState<LoginFormPayload>({
    username: '',
    password: ''
  });

  const navigate = useNavigate();
  const [message, setMessage] = useState('');


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginFormData(prevData => ({ ...prevData, [name]: value }));
  }

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
     let response = LegoShopApi.login(loginFormData);
    response.then((json) => {
      if (json) {
        navigate(('/admin/contacts'));
      } else {
        setMessage('Les identifiants sont incorrects.');
      }
    });
  };

  return (
    <section className='mx-4 bg-slate-200'>
      <LoginForm onChange={handleChange} onSubmit={handleSubmit} formData={loginFormData} message={message}/>
    </section>
  );
}

export default LoginPage;