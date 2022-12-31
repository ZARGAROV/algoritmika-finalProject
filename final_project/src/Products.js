import './Main.css';
import list from './data';
import React,{useState} from 'react';
import Cards from './card';
import "./Product.css";
const Products=()=>{
    const[cart,setCart]=useState([]);
    const handleClick=(item)=>{
        setCart([...cart,item]);
        console.log(alert)
    }
    
    return(
    <section>
        {
            list.map((item)=>(
            <Cards key={item.id} item={item} handleClick={handleClick}/>
            ))

            }
    </section>
        );
}
export default Products;