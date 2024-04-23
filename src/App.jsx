
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';

function App() {
  
  const loadedcoffees = useLoaderData();
  const [coffees, setcoffees] = useState(loadedcoffees)

  return (
    <div className='m-20'>
     <h1 className='text-6xl text-center text-amber-900'>Coffees are added {coffees.length}</h1>
     <div className='grid md:grid-cols-2 gap-4'>
     {
      coffees.map(coffee => <CoffeeCard
      key={coffee._id}
      coffee={coffee}
      coffees={coffees}
      setcoffees={setcoffees}
      ></CoffeeCard>)
     }
     </div>
    </div>
  )
}

export default App
