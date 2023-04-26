import Navbar from '@/components/navbar/navbar'
import Footerpage from '@/components/footer/footerpage'
import ReportTable from '@/components/report-table/report-table'
import { Dropdown, Input, Button } from '@nextui-org/react'
import React from 'react'
import ReportForm from '@/components/reportform/form'
import Reportlistcard from '@/components/reportlist/list'
export default function ReportPage() {
    const menuItems = [
        { key: "name", name: "ชื่อบัญชี" },
        { key: "tel", name: "เบอร์มือถือ" },
        { key: "bank", name: "เลขบัญชีธนาคาร" },
        { key: "promptpay", name: "Promptpay" },
        { key: "truewallet", name: "Truewallet" },
      ];
      const [selected, setSelected] = React.useState(new Set(["name"]));
    
      const selectedValue = React.useMemo(
        () => Array.from(selected).join(", ").replaceAll("_", " "),
        [selected]
      );
  return (
    <main>
      <Navbar />
      <div className='bg-[#1E1E1E]'>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-3xl py-16 sm:py-48 lg:py-28">
          <div className="text-center">
            <div className='flex flex-col items-center justify-center'>
            <h1 className="text-5xl text-[#FA9372] font-bold leading-relaxed drop-shadow-md">
            แจ้งข้อมูลคนโกง
            </h1>
            <h2 className='text-2xl text-white font-bold'>กรอกรายละเอียด</h2>
            <img className='object-contain h-48 w-96 mt-4' src='/res/phone1.png'/>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#1E1E1E]'>
      <div className="flex justify-center flex-col">
      <div className='flex flex-col justify-center gap-4 items-center'>
      < ReportForm/>
      <div className='flex flex-row gap-4'>
      <Button  color="success" auto>
        อัปโหลดหลักฐานการโกง 
        </Button>
        <Button  color="success" auto>
        อัปโหลดหลักฐานการสนทนา 
        </Button>
        <Button  color="success" auto>
        วันที่ถูกฉ้อโกง 
        </Button>
      </div>
      </div>
      <div className='flex flex-col items-center'>
        <div className="my-10 w-9/12 max-w-screen-xl animate-fade-up gap-5 px-5 xl:px-0">
       < Reportlistcard name={'สมมติ ว่าโกง'} bank={'000-111-9200'} detail={'โกงค่าเสื้อผ้า 3 ตัว ราคา 900 บาท'}/>
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

