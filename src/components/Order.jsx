import '../css/Order.css';


export default function(props) {
  const { _id,items, orderStatus, storePhoneNo, city, userId, storeAddress, billAmt, storeLocation, orderDate } = props.info

  return (<div className='order-entry'>
    <div className="id">{_id}</div>
    <div className='status'>{orderStatus}</div>
    <div className="date">{orderDate}</div>
    <div className="items">
      
    </div>
  </div>)

}
