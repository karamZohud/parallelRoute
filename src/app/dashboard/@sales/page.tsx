import { getSalesFromDB } from '@/app/utils/data'
import React from 'react'

export default async function page() {
const sales=await getSalesFromDB();

  return (
    <div className='card bg-yellow-400'>
        {sales}
    </div>
  )
}
