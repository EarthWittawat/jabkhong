import React from 'react';
import * as Form from '@radix-ui/react-form';
import Datepick from '../datepicker/datepicker';

const FormDemo = () => (
  <Form.Root className="w-[360px]">
    <Form.Field className="grid mb-[10px]" name="name">
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
    <Form.Field className="grid mb-[10px]" name="bank">
      <div className="flex items-baseline justify-between">
        <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
          เลขบัญชี *
        </Form.Label>
        <Form.Message className="text-[13px] text-white opacity-[0.8]" match="valueMissing">
            กรอกเลขบัญชี
        </Form.Message>
      </div>
      <Form.Control asChild>
        <textarea
          className="box-border w-full bg-white shadow-white inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[15px] leading-none text-black  shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9 resize-none"
          required
        />
        
      </Form.Control>
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
  
);

export default FormDemo;