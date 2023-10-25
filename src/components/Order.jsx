import '../css/Order.css';


export default function(props) {
  const { _id,items, orderStatus, billAmt, deliveryAddress, store, orderDate } = props.info;

  return (<div className='order-entry'>
    <div className="id">{_id}</div>
    <div className='status'>{orderStatus}</div>
    <div className="date">{orderDate}</div>
    <div className="total">{billAmt}</div>

    <div className="items">
      {items.map((item)=>{
        return <div className="item">
          <div>Name: {item.productName}</div>
          <div>Quantity: {item.quantity}</div>
          <div className="add-on">
            {washType.map((wash)=>{
              return <div>{wash}</div>
            })}
          </div>
          <div className="total">Total: {item.total}</div>
        </div>
      })}
    </div>

    <div className="user-address">
      <div>Delivery Address</div>
      {deliveryAddress.address}
      {deliveryAddress.city}
      {deliveryAddress.stateName}
    </div>

    <div className="store-address">
      <div>Store Address</div>
      {store.storeName}
      {store.address}
      {store.telephone}
      {store.delivery_charges}
    </div>

  </div>)

}
