import React,{useEffect, useState} from 'react'
import './NewCollections.css'
import new_collections from '../Assets/new_collections'
import Item from '../Item/Item'
import { useSearchParams } from 'react-router-dom'
const NewCollections = () => {
  const [new_collections,setNew_collection]=useState([]);
  useEffect(()=>{
    fetch ('https://backend-1-e20z.onrender.com/newcollections')
    .then((response)=>response.json())
    .then((data)=>setNew_collection(data));
  },[])
  return (
    <div className='new-collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="collections">
            {new_collections.map((item,i)=>{
                return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} />
            })}
        </div>
    </div>
  )
}

export default NewCollections