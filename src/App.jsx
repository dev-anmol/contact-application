import './App.css'
import NavBar from './components/NavBar'
import { FiSearch } from 'react-icons/fi'
import { AiFillPlusCircle } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import {collection, getDocs} from 'firebase/firestore'
import {db} from "./config/firebase"

function App() {

  const [contacts, setContacts] = useState([]);
  
  useEffect(()=>{
    const getContacts = async () => {
      try{
        const contactRef = collection(db, "contacts");
        const contactsSnapShot = await getDocs(contactRef);
        const contactLists = contactsSnapShot.docs.map((doc)=>{
          return{
            id:doc.id,
            ...doc.data(),
          }
        }
        );
        console.log(contactLists)
        setContacts(contactLists);
      }catch(err){
        console.log(err)
      }
    };
    getContacts();
  },[])

  return (
    <div className='max-w-[370px] mx-auto px-4'>
      <NavBar />
      <div className='flex gap-2'>
        <div className='flex relative items-center'>
          <FiSearch className='text-3xl text-white absolute ml-1' />
          <input type="text" className=' flex-grow rounded-md border border-white h-10 bg-transparent text-white pl-10 w-[290px]' />
        </div>
        <AiFillPlusCircle className='text-5xl text-white cursor-pointer' />
      </div>

    </div>
  )
}

export default App
