import { getOrderCountFromDB } from '@/app/utils/data'
import React from 'react'



export default async function OrdersPage() {
    const order =await getOrderCountFromDB();
  return (
    <div className='card bg-red-500'>
        {order}
    </div>
  )
}
