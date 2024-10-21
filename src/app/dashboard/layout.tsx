import Link from 'next/link';
import React, { ReactNode } from 'react'

interface DashboardLayout{
    children:ReactNode;
    orders:ReactNode;
    profit:ReactNode;
    sales:ReactNode
}

export default function DashboardLayout({children,orders,profit,sales}:DashboardLayout) {
  return (
    <main className='p-10'>
        <nav>
            <Link href={"/dashboard/details"}>{">> "} go to order details </Link>
        </nav>
        <div className='flex justify-center items-center gap-7'>
{orders}
{profit}
{sales}
        </div>
        {children}
    </main>
  )
}
