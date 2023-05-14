import Image from 'next/image'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/navbar/sidebar'
import Footerpage from '@/components/footer/footerpage'
import Card from '@/components/card/card'
import ComponentGrid from '@/components/component-grid/component-grid'
import Data from '@/components/report-table/report-table'
import Reportuser from '@/components/reportuser/reportuser'
import CheatTable from '@/components/report-table/cheat-table'
export default function Home() {
  return (
    <main>
      <Sidebar />
      <div className='bg-[#28B67A] h-screen'>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-32 lg:py-46">
          <div className="text-center">
          <h1 className="text-6xl text-white font-bold leading-relaxed drop-shadow-md">
            จับโกง ! 🔍
            </h1>
            </div>
            </div>
            <div className="flex justify-center items-center flex-col gap-8">
            <div className="my-10 w-8/12 max-w-screen-xl animate-fade-up gap-5 px-5 xl:px-0">
          {letreport.map(({ title, description, demo, large }) => (
          <Card
            key={title}
            title={title}
            description={description}
            demo={
              // title === "Beautiful, reusable components" ? (
              //   <ComponentGrid />
              // ) : (
                demo
              // )
            }
            large={large}
          />
        ))}
      </div>
          </div>
         
        </div>
    
      </div>
    </main>
  )
}

const letreport = [
  {
    title: "การโกง",
    description:
      "",
    large: true,
    demo: <CheatTable/>
  }
];