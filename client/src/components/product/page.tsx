import React from "react";

const Product = () => {

  return (
    <>
      <div className='flex flex-col bg-slate-100 shadow-xl rounded-lg overflow-hidden'>
        <div>
          <img src="./viking-ship.jpg" className='max-w-full h-auto'></img>
          <h2 className='font-bold text-xl text-blue-800 m-4'>Le bateau viking et le serpent de Midgard</h2>
          <div className='m-4'>
            <p className='text-neutral-700'>3 aventures de vikings avec des briques LEGO®
              Les fans de LEGO® peuvent choisir parmi 3 fantastiques expériences de construction et de jeu avec ce set 3 en 1.
              Ils peuvent construire un bateau viking avec un serpent de mer, le transformer en maison viking avec un dragon ou 
              en scène incluant 4 vikings et un loup.</p>
            <p className='my-2 text-neutral-900 font-semibold text-right'>134,99 €</p>
          </div>
          <div className='bg-red-600 h-12 flex flex-col justify-around'>
            <p className='text-white text-center'>Coming soon</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;