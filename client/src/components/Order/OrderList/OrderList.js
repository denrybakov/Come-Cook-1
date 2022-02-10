import * as React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentOrdersClient, getOrders } from '../../../redux/actions/ordersAction';
import OrderItem from '../OrderItem/OrderItem';

const OrderList = () => {
  const allOrders = useSelector(state => state.ordersCurrentClient);
  const {id} = useSelector(state => state.user)
  // console.log('orderlist --->', allOrders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentOrdersClient(id))
  }, [])


  return (

    <div>
      {
        allOrders.map((item, index) => <OrderItem
          key={item.id}
          id={item.id}
          index={index}
          date={item.date}
          address={item.address}
          title={item.title}
          text={item.text}
          numOfPeople={item.numOfPeople}
          price={item.price}
          status={item.status}
        // заинклюдить нужно клиента (вытащить аватарб имя) статус и тд.
        />)
      }
    </div>
  );
}

export default OrderList



// export default function OrderList() {

//   const allOrders = useSelector(state => state.orders);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getOrders())
//   }, [])

//   return (
//     <ul>
//       {allOrders.map(el => <OrderItem key={el.id} date={el.date} address={el.address} title={el.title} text={el.text} numOfPeople={el.numOfPeople} price={el.price} status_id={el.status_id} povar_id={el.povar_id} client_id={el.client_id} /> )}
//     </ul>
//   );
// }
