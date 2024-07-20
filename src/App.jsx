import './App.css'
import NavBar from './components/NavBar'
import { FiSearch } from 'react-icons/fi'
import { AiFillPlusCircle } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from "./config/firebase"
import ContactCard from './components/ContactCard'
import AddAndUpdateContact from './components/AddAndUpdateContact'
import useDisclouse from './hooks/useDisclouse'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import NotFoundContact from './components/NotFoundContact'


function App() {

  const [contacts, setContacts] = useState([]);
  const { isOpen, onClose, onOpen } = useDisclouse();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactRef = collection(db, "contacts");

        onSnapshot(contactRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            }
          }
          );
          console.log(contactLists)
          setContacts(contactLists);
          return contactLists
        })

      } catch (err) {
        console.log(err)
      }
    };
    getContacts();
  }, [])

  const filterContacts = (e) => {
    const value = e.target.value;

    const contactRef = collection(db, "contacts");

    onSnapshot(contactRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        }
      }
      );

      const filteredContacts = contactLists.filter(contact => contact.name.toLowerCase().includes(value.toLowerCase()));

      setContacts(filteredContacts);
      return filteredContacts
    })

  }

  return (
    <>
      <div className='max-w-[370px] mx-auto px-4'>
        <NavBar />
        <div className='flex gap-2'>
          <div className='flex relative items-center'>
            <FiSearch className='text-3xl text-white absolute ml-1' />
            <input onChange={filterContacts} type="text" className=' flex-grow rounded-md border border-white h-10 bg-transparent text-white pl-10 w-[290px]' />
          </div>
          <AiFillPlusCircle onClick={onOpen} className='text-5xl text-white cursor-pointer' />
        </div>
        <div className='mt-4 flex flex-col gap-4'>
          {
           contacts.length <= 0 ? <NotFoundContact/> : contacts.map(contact => (
              <ContactCard key={contact.id} contact={contact} />
            ))
          }
        </div>
        <AddAndUpdateContact onClose={onClose} isOpen={isOpen} />
        <ToastContainer />
      </div>
    </>

  )
}

export default App
