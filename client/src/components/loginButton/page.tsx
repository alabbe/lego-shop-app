import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";

const LoginButton = () => {

  const navigate = useNavigate();

  const handleClick = (event: MouseEvent) => {
    event.preventDefault();
    navigate('/login');
  }

  return (
    <div>
      <button className='bg-blue-400 rounded-md w-40 h-12 text-white text-lg hover:bg-blue-600' onClick={handleClick}>S'identifier</button>
    </div>
  );
}

export default LoginButton;