import Image from 'next/image'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/navbar/sidebar'
import Footerpage from '@/components/footer/footerpage'
import Card from '@/components/card/card'
import ComponentGrid from '@/components/component-grid/component-grid'
import Graph from '@/components/graph/graph'
import Reportuser from '@/components/reportuser/reportuser'
import { Grab } from 'lucide-react'
export default function Dashboard() {
  return (
    <main>
      <Sidebar />
      <div className='bg-[#28B67A] w-full h-screen'>
      <div className="relative isolate px-6 pt-40 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
          <h1 className="text-6xl text-white font-bold leading-relaxed drop-shadow-md">
            จับโกง ! 🔍
            </h1>
            </div>
            </div>
            <div className="flex justify-center items-center flex-col gap-8">
            <div className="my-10 w-6/12 max-w-screen-xl animate-fade-up gap-5 px-5 xl:px-0">
          {graph.map(({ title, description, demo, large }) => (
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

const graph = [
  {
    title: "พบการโกง",
    description:
      "1023 รายการ 😡",
    large: true,
    demo: <Graph/>
  }
];