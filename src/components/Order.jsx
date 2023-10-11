import '../css/Order.css';


export default function(props) {
  const { items, orderStatus, storePhoneNo, city, userId, storeAddress, billAmt, storeLocation, orderDate } = props.info

  return (<>
    {orderStatus}
  </>)

}
