import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/navbar'
import Footerpage from '@/components/footer/footerpage'
import Card from '@/components/card/card'
import ComponentGrid from '@/components/component-grid/component-grid'
import ReportTable from '@/components/report-table/report-table'
import Reportuser from '@/components/reportuser/reportuser'
export default function Home() {
  return (
    <main>
      <Navbar />
      <div className='bg-gradient-to-b from-[#FA9372] to-[#EF709B]'>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-6xl text-white font-bold leading-relaxed drop-shadow-md">
            รู้ทันกลโกงมิจฉาชีพ<br />
            ตรวจสอบง่าย<br /> 
            ก่อนเป็นเหยื่อ ! ️
            </h1>
          </div>
        </div>
      </div>
      </div>
      <div className='bg-white'>
      <div className="flex justify-center flex-col gap-8">
      
      <span className='flex justify-center text-xl font-bold mt-8'>ตรวจพบการโกง 1023 ราย 😡</span>
      <div className='flex flex-col items-center'>
        <div className="my-10 w-8/12 max-w-screen-xl animate-fade-up gap-5 px-5 xl:px-0">
        {reportcheck.map(({ title, description, demo, large }) => (
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
      <div className='bg-[#FA9372]'>
      <div className='flex flex-col items-center'>
      <span className='flex justify-center text-2xl text-white font-bold mt-8'>ร่วมช่วยเหลือแจ้งข้อมูลคนโกง 📢</span>
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
      </div>
      
      <Footerpage/>
    </main>
  )
}
const reportcheck = [
  {
    title: "ตรวจสอบข้อมูลการฉ้อโกง 🔍",
    description:
      "",
    large: true,
    demo: (
      <ReportTable/>
    ),
  }
];

const letreport = [
  {
    title: "แจ้งข้อมูลคนโกง ❗️",
    description:
      "",
    large: true,
    demo: (
      <Reportuser />
    ),
  }
];