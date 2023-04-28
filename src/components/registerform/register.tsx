import React from "react";
import { Tooltip, Image,  Button, Input} from "@nextui-org/react";
import { useState } from "react";
import Link from "next/link";
export default function RegisterForm(this: any) {
    return (
      <>
      <div className="flex flex-col items-center ">
      <div className="flex flex-col mb-2 justify-center items-center">
      <Input label="ชื่อ-สกุล" />
      <Input label="หมายเลขบัตรประชาชน" />
      <Input label="หมายเลขโทรศัพท์" />
   
        </div>
        <div className="my-4 flex flex-col justify-center">
                 <img
          className="h-56 w-full object-cover"
          src="/res/id-card.png"
          />
        <Button flat> อัปโหลดบัตรประชาชน  </Button>
        </div>
        
        <Link href={"/reportpage"}>
        <Button shadow color="success" auto>
        ลงทะเบียน 
        </Button>
        </Link>
        </div>
        </>
    );
  }