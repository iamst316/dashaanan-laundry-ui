import Footer from './Footer'
import Navbar from './Navbar'
import SideNav from './SideNav'
import '../css/CreateOrder.css'

import jeans from '../assets/img/products/jeans.svg'
import shirt from '../assets/img/products/shirt.svg'
import tshirt from '../assets/img/products/tshirt.svg'
import trouser from '../assets/img/products/trouser.svg'
import jogger from '../assets/img/products/jogger.svg'
import boxers from '../assets/img/products/boxer.svg'
import sIron from '../assets/img/wash-btn/selected/iron.svg'
import uIron from '../assets/img/wash-btn/unselected/iron.svg'
import sWash from '../assets/img/wash-btn/selected/wash.svg'
import uWash from '../assets/img/wash-btn/unselected/wash.svg'
import sTowel from '../assets/img/wash-btn/selected/towel.svg'
import uTowel from '../assets/img/wash-btn/unselected/towel.svg'
import sBleach from '../assets/img/wash-btn/selected/bleach.svg'
import uBleach from '../assets/img/wash-btn/unselected/bleach.svg'

import { useEffect, useState } from 'react'

export default function() {
  const [products, setProducts] = useState([])
  const [imgArr, setImgArr] = useState([jeans,shirt,tshirt,trouser,boxers,jogger])
  const [statusWash, setStatus] = useState([false,false,false,false])
  const [selectedWash, setSelected] = useState([sWash,sIron,sTowel,sBleach])
  const [unSelectedWash, setUnSelected] = useState([uWash.uIron,uTowel,uBleach])

  useEffect(()=>{
    fetch("http://localhost:5000/products")
    .then(res=>res.json())
    .then(data=>setProducts(data))

  },[])
  console.log(products);

  function ToggleWash(idx){
    setStatus([
      ...statusWash.slice(0,idx),
      !statusWash[idx],
      ...statusWash.slice(idx+1,statusWash.length)
    ])
  }

  return (
    <>
      <Navbar />
      <SideNav />
      <div id="create-order-main">
        <p id="create-title">Create Order</p>
        <p id="create-description"></p>
        <div id="create-order-area">
          {products.map((item)=>{
            return <div id="item-row">
              <img className='item-img' src={imgArr[item.iconurl]} alt='icon'/>
              <p id="item-name">{item.productName}</p>
              <p id="item-description">{item.description}</p>
              <input type="number" id="item-quant" />
              <span id="wash-btns">
                {statusWash.map((e,idx)=>{
                  return e==false ? <img onClick={(idx)=> ToggleWash(idx)} src={unSelectedWash[idx]} />: <img onClick={(idx)=> ToggleWash(idx)} src={selectedWash[idx]} />
                })}
              </span>
              <p id="item-price">{item.price}</p>
              <button id="add-item-btn">Add</button>
            </div>
          })}
        </div>
      </div>
      <Footer />
    </>
  )
}