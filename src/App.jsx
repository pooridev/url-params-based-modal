import './App.css';
import Modal from './Modal';
import { useSearchParams } from 'react-router-dom';

function App() {
  const [searchParams, setSearchParams] = useSearchParams();

  const isModalOpen = searchParams.get('isModalOpen') === 'true';

  const openModalHandler = () => {
    setSearchParams({
      isModalOpen: true
    });
  };

  const closeModalHandler = () => {
    setSearchParams();
  };

  return (
    <main
      className='
        flex
        justify-center 
        items-center 
        h-[100vh] 
        w-[100vw]'>
      <Modal isOpen={isModalOpen} onClose={closeModalHandler} />
      <button
        onClick={openModalHandler}
        className='
          px-6 
          py-4 
          text-xl 
          font-medium 
          text-white 
          bg-red-600 
          border 
          border-transparent 
          rounded-md 
          shadow-sm 
          hover:bg-red-700 
          focus:outline-none 
          focus:ring-2 
          focus:ring-offset-2
          focus:ring-red-500'>
        Open Modal
      </button>
    </main>
  );
}

export default App;
