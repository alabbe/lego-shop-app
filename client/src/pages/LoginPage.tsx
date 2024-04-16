import { useState } from "react";
import LoginFormPayload from "../components/loginForm/loginFormPayload";
import LoginForm from "../components/loginForm/page";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {


  const [loginFormData, setLoginFormData] = useState<LoginFormPayload>({
    username: '',
    password: ''
  });

  const navigate = useNavigate();


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginFormData(prevData => ({ ...prevData, [name]: value }));
  }

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(('/admin/contacts'));
/*     let response = LegoShopApi.login(loginFormData);
    response.then((json) => {
      console.log(json);
    });
 */  };

  return (
    <section className='mx-4 bg-slate-200'>
      <LoginForm onChange={handleChange} onSubmit={handleSubmit} formData={loginFormData}/>
    </section>
  );
}

export default LoginPage;