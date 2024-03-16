import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import Recipes from './components/Recipes/Recipes'
import Sidebar from './components/Sidebar/Sidebar'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  
   const [wantToCook, setWantToCook] = useState([]);

   const handleAddToSidebar = (recipe) => {
       
       const isExist=wantToCook.find(item => item.recipe_id == recipe.recipe_id );
       if(!isExist){
        
           setWantToCook([...wantToCook,recipe]);
       }else{
        toast('Already Exist');
       }
       
   }

  return (
    <>
      <Header></Header> 
      <Banner></Banner>
      <div className='container mx-auto my-8 lg:my-24'>
          <div className='text-center'>
            <h1 className='title-color text-4xl font-semibold mb-6'>Our Recipes</h1>
            <p className='secondary-color font-normal'>Explore our diverse collection of delicious recipes crafted <br /> to satisfy every palate and culinary craving. <br /> Bon appétit awaits!</p>
          </div>
          <div className='mt-10 lg:flex'>
            <Recipes handleAddToSidebar={handleAddToSidebar}></Recipes>
            <Sidebar wantToCook={wantToCook}></Sidebar>
          </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default App
