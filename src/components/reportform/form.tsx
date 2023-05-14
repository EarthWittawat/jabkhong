import React from 'react';
import * as Form from '@radix-ui/react-form';
import Datepick from '../datepicker/datepicker';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Dropdown } from "@nextui-org/react";
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";

export default function FormDemo(this: any) {
  const [selected, setSelected] = React.useState('ชื่อบัญชี');
const handleChange = (event: SelectChangeEvent) => {
  setSelected(event.target.value as string);
};
return (
  <>
  <Form.Root className="w-[30rem]">
    <Form.Field className="grid mb-[10px] w-[22.3rem]" name="name">
      <div className="flex items-baseline justify-between">
        <Form.Label className="text-[15px] font-medium leading-[35px] text-white">ชื่อ - สกุล *</Form.Label>
        <Form.Message className="text-[13px] text-white opacity-[0.8]" match="valueMissing">
          กรอกชื่อ - สกุล
        </Form.Message>
      </div>
      <Form.Control asChild>
        <input
          className="box-border w-full bg-white shadow-white inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9"
          type="name"
          required
        />
      </Form.Control>
    </Form.Field>
    <Form.Field className="flex flex-col  mb-[10px]" name="bank">
      <div className="flex items-baseline justify-between">
        <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
          เลขบัญชี *
        </Form.Label>
        <Form.Message className="text-[13px] text-white opacity-[0.8]" match="valueMissing">
            กรอกเลขบัญชี
        </Form.Message>
      </div>
      <div className='flex flex-row gap-4'>
      <Form.Control asChild>
        <textarea
          className="box-border w-full bg-white shadow-white inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[15px] leading-none text-black  shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9 resize-none"
          required
        />
      </Form.Control>
      <Dropdown>
      <Dropdown.Button flat>ชื่อบัญชี</Dropdown.Button>
      <Dropdown.Menu aria-label="Static Actions">
        <Dropdown.Item key="ชื่อบัญชี">ชื่อบัญชี</Dropdown.Item>
        <Dropdown.Item key="เบอร์มือถือ">เบอร์มือถือ</Dropdown.Item>
        <Dropdown.Item key="เลขบัญชีธนาคาร">เลขบัญชีธนาคาร</Dropdown.Item>
        <Dropdown.Item key="Promptpay">Promptpay</Dropdown.Item>
        <Dropdown.Item key="Truewallet">Truewallet</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
    </Form.Field>
    <Form.Field className="grid mb-[10px]" name="bank">
      <div className="flex items-baseline justify-between">
        <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
          รายละเอียดการโกง *
        </Form.Label>
        <Form.Message className="text-[13px] text-white opacity-[0.8]" match="valueMissing">
            กรอกรายละเอียดการโกง
        </Form.Message>
      </div>
      <Form.Control asChild>
        <textarea
          className="box-border w-full bg-white shadow-white inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[15px] leading-none text-black  shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9 resize-none"
          required
        />
      </Form.Control>
    </Form.Field>
  </Form.Root>
  </>
);}