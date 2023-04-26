import React from "react";
import { Tooltip, Image,  Button, Input} from "@nextui-org/react";
import { useState } from "react";
import Link from "next/link";
export default function Loginform(this: any) {
    return (
      <>
      <div className="flex flex-col items-center ">
      <div className="flex flex-col mb-2">
      <Input label="หมายเลขโทรศัพท์" />
      <Input label="หมายเลขบัตรประชาชน 13 หลัก" />
        </div>
        <Link href={"/reportpage"}>
        <Button shadow color="success" auto>
        เข้าสู่ระบบ 
        </Button>
        </Link>
        <Link className="mt-4" href="/register">ลงทะเบียน</Link>
        </div>
        </>
    );
  }