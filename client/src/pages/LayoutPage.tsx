import { NavLink, Outlet } from "react-router-dom";
import LoginButton from "../components/loginButton/page";

const LayoutPage = () => {

  return (
    <div className='w-full min-w-xl'>
      <header className='bg-yellow-400 absolute w-full top-0 h-24 flex items-center'>
        <div className='grow ml-4'>
          <NavLink to='/'>
            <h1 className='font-bold text-2xl text-black text-left'>Lego Shop</h1>
          </NavLink>
        </div>
        <div className='mr-4'>
          <LoginButton />
        </div>
      </header>
      <main className='mt-32 lg:w-[650px] xl:w-[800px] mx-auto'>
        <Outlet />
      </main>
      <footer className='bg-black w-full h-20 bottom-0'></footer>
    </div>
  );

}

export default LayoutPage;