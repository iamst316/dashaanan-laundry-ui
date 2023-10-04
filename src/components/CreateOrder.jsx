import Footer from "./Footer";
import Navbar from "./Navbar";
import SideNav from "./SideNav";
import "../css/CreateOrder.css";

//images
import jeans from "../assets/img/products/jeans.svg";
import shirt from "../assets/img/products/shirt.svg";
import tshirt from "../assets/img/products/tshirt.svg";
import trouser from "../assets/img/products/trouser.svg";
import jogger from "../assets/img/products/jogger.svg";
import boxers from "../assets/img/products/boxer.svg";
import sIron from "../assets/img/wash-btn/selected/iron.svg";
import uIron from "../assets/img/wash-btn/unselected/iron.svg";
import sWash from "../assets/img/wash-btn/selected/wash.svg";
import uWash from "../assets/img/wash-btn/unselected/wash.svg";
import sTowel from "../assets/img/wash-btn/selected/towel.svg";
import uTowel from "../assets/img/wash-btn/unselected/towel.svg";
import sBleach from "../assets/img/wash-btn/selected/bleach.svg";
import uBleach from "../assets/img/wash-btn/unselected/bleach.svg";
//images-end

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";
import { checkoutOrder } from "../redux/slices/orderSlice";

export default function() {
  const [products, setProducts] = useState([]);
  const [imgArr, setImgArr] = useState([
    jeans,
    shirt,
    tshirt,
    trouser,
    boxers,
    jogger,
  ]);

  const [quantArr, setQuant] = useState([0, 0, 0, 0, 0, 0]);
  const [isWash, setWash] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [isIron, setIron] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [isTowel, setTowel] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [isBleach, setBleach] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [cancelShowBtn, setToggle] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [addOnPrice, setAddOn] = useState([0, 0, 0, 0, 0, 0]);
  const [totalPrice, setTotalPrice] = useState([0, 0, 0, 0, 0, 0]);
  const [itemSummary, setItemSummary] = useState([]);
  const [billTotal, setBillTotal] = useState(0);

  const navigate = useNavigate();
  //Side Effects
  useEffect(() => {
    fetch("https://dashaanan-laundry-server.onrender.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      }
    );

    const interval = 30*60*1000;
    const timer = setTimeout(() => {
      localStorage.removeItem('token')
      console.log('Item removed from localStorage.');
    }, interval);


  }, []);
  useEffect(() => {
    console.log(itemSummary);
  }, [itemSummary]);
  useEffect(() => {
    console.log(billTotal);
  }, [billTotal]);
  // console.log(products);
  //side effects end

  function ToggleWash(idx) {
    setWash([
      ...isWash.slice(0, idx),
      !isWash[idx],
      ...isWash.slice(idx + 1, 6),
    ]);
  }
  function ToggleIron(idx) {
    setIron([
      ...isIron.slice(0, idx),
      !isIron[idx],
      ...isIron.slice(idx + 1, 6),
    ]);
  }
  function ToggleBleach(idx) {
    setBleach([
      ...isBleach.slice(0, idx),
      !isBleach[idx],
      ...isBleach.slice(idx + 1, 6),
    ]);
  }
  function ToggleTowel(idx) {
    setTowel([
      ...isTowel.slice(0, idx),
      !isTowel[idx],
      ...isTowel.slice(idx + 1, 6),
    ]);
  }
  function AddItem(idx) {
    let itemEntry = {};
    itemEntry.name = products[idx].productName;
    itemEntry.total = (products[idx].price + addOnPrice[idx]) * quantArr[idx];
    itemEntry.addOn = [isWash[idx], isIron[idx], isBleach[idx], isTowel[idx]]; //code - wibt
    itemEntry.quantity = quantArr[idx];
    itemEntry.price = products[idx].price + addOnPrice[idx];
    setBillTotal((billTotal) => billTotal + itemEntry.total);
    setItemSummary([...itemSummary, itemEntry]);
    setToggle([
      ...cancelShowBtn.slice(0, idx),
      !cancelShowBtn[idx],
      ...cancelShowBtn.slice(idx + 1, 6),
    ]);

    // alert('Item Added To Cart')
  }

  function RemoveItem(idx) {
    for (let i = 0; i < itemSummary.length; i++) {
      if (itemSummary[i].name == products[idx].productName) {
        setItemSummary([
          ...itemSummary.slice(0, i),
          ...itemSummary.slice(i + 1, 6),
        ]);
        setBillTotal((billTotal) => billTotal - itemSummary[i].total);

        break;
      }
    }
    setToggle([
      ...cancelShowBtn.slice(0, idx),
      !cancelShowBtn[idx],
      ...cancelShowBtn.slice(idx + 1, 6),
    ]);
  }
  const dispatch = useDispatch()

  function CheckOut() {
    dispatch(checkoutOrder(itemSummary))
    navigate("/checkout");
  }


  return (
    <>
      {/* <Navbar />
      <SideNav /> */}
      <div id="create-order-main">
        <p id="create-title">Create Order</p>
        <p id="create-description">
          You can order a laundry service by selecting the quantity of each type
          of clothing and the type of wash desired.
        </p>
        <div id="create-order-area">
          {products.map((item) => {
            return (
              <div id="item-row">
                <img
                  className="item-img"
                  src={imgArr[item.iconurl]}
                  alt="icon"
                />
                <div id="name-desc">
                  <p id="item-name">{item.productName}</p>
                  <p id="item-description">{item.description}</p>
                </div>

                <input
                  type="number"
                  onChange={(e) =>
                    setQuant([
                      ...quantArr.slice(0, item.iconurl),
                      e.target.value,
                      ...quantArr.slice(item.iconurl + 1, 6),
                    ])
                  }
                  id="item-quant"
                />

                <span id="wash-btns">
                  {!isWash[item.iconurl] ? (
                    <img
                      src={uWash}
                      onClick={() => {
                        ToggleWash(item.iconurl);
                        setAddOn([
                          ...addOnPrice.slice(0, item.iconurl),
                          addOnPrice[item.iconurl] + item.addOn[0].price,
                          ...addOnPrice.slice(item.iconurl + 1, 6),
                        ]);
                      }}
                    />
                  ) : (
                    <img
                      src={sWash}
                      onClick={() => {
                        ToggleWash(item.iconurl);
                        setAddOn([
                          ...addOnPrice.slice(0, item.iconurl),
                          addOnPrice[item.iconurl] - item.addOn[0].price,
                          ...addOnPrice.slice(item.iconurl + 1, 6),
                        ]);
                      }}
                    />
                  )}
                  {!isIron[item.iconurl] ? (
                    <img
                      src={uIron}
                      onClick={() => {
                        ToggleIron(item.iconurl);
                        setAddOn([
                          ...addOnPrice.slice(0, item.iconurl),
                          addOnPrice[item.iconurl] + item.addOn[2].price,
                          ...addOnPrice.slice(item.iconurl + 1, 6),
                        ]);
                      }}
                    />
                  ) : (
                    <img
                      src={sIron}
                      onClick={() => {
                        ToggleIron(item.iconurl);
                        setAddOn([
                          ...addOnPrice.slice(0, item.iconurl),
                          addOnPrice[item.iconurl] - item.addOn[2].price,
                          ...addOnPrice.slice(item.iconurl + 1, 6),
                        ]);
                      }}
                    />
                  )}
                  {!isBleach[item.iconurl] ? (
                    <img
                      src={uBleach}
                      onClick={() => {
                        ToggleBleach(item.iconurl);
                        setAddOn([
                          ...addOnPrice.slice(0, item.iconurl),
                          addOnPrice[item.iconurl] + item.addOn[1].price,
                          ...addOnPrice.slice(item.iconurl + 1, 6),
                        ]);
                      }}
                    />
                  ) : (
                    <img
                      src={sBleach}
                      onClick={() => {
                        ToggleBleach(item.iconurl);
                        setAddOn([
                          ...addOnPrice.slice(0, item.iconurl),
                          addOnPrice[item.iconurl] - item.addOn[1].price,
                          ...addOnPrice.slice(item.iconurl + 1, 6),
                        ]);
                      }}
                    />
                  )}
                  {!isTowel[item.iconurl] ? (
                    <img
                      src={uTowel}
                      onClick={() => {
                        ToggleTowel(item.iconurl);
                        setAddOn([
                          ...addOnPrice.slice(0, item.iconurl),
                          addOnPrice[item.iconurl] + item.addOn[3].price,
                          ...addOnPrice.slice(item.iconurl + 1, 6),
                        ]);
                      }}
                    />
                  ) : (
                    <img
                      src={sTowel}
                      onClick={() => {
                        ToggleTowel(item.iconurl);
                        setAddOn([
                          ...addOnPrice.slice(0, item.iconurl),
                          addOnPrice[item.iconurl] - item.addOn[3].price,
                          ...addOnPrice.slice(item.iconurl + 1, 6),
                        ]);
                      }}
                    />
                  )}
                </span>

                <p id="item-price">
                  Rs. {item.price + addOnPrice[item.iconurl]}
                </p>
                <p id="item-total">
                  Rs.{" "}
                  {(item.price + addOnPrice[item.iconurl]) *
                    quantArr[item.iconurl]}
                </p>

                {!cancelShowBtn[item.iconurl] ? (
                  quantArr[item.iconurl]>0 && <button
                    onClick={() => AddItem(item.iconurl)}
                    id="add-item-btn"
                  >
                    Add
                  </button>
                ) : (
                  <button
                    onClick={() => RemoveItem(item.iconurl)}
                    id="add-item-btn"
                  >
                    Remove
                  </button>
                )}
              </div>
            );
          })}
        </div>
        <button onClick={() => window.location.reload()} id="cancel-btn">
          Cancel
        </button>
        {billTotal>0 &&
          <button onClick={CheckOut} id="proceed-btn">
          Proceed
        </button>
        }
        
      </div>
      {/* <Footer /> */}
    </>
  );
}
