import Product from './components/product/page'
import ContactForm from './components/contactForm/page'

function App() {

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
          <ContactForm/>
        </section>
      </main>
      <footer className='bg-black absolute w-full h-20'></footer>
    </div>
  )
}

export default App
