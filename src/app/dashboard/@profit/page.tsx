import { getProfitFromDB } from '@/app/utils/data';
import React from 'react'

 const profitPage = async() => {
    const profit=await getProfitFromDB();
  return (
    <div className='card bg-green-500'>
        {profit}
    </div>
  )
}
export default profitPage;