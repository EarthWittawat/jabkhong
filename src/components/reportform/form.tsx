import React from 'react';
import * as Form from '@radix-ui/react-form';
import Datepick from '../datepicker/datepicker';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Button, Dropdown, Input } from "@nextui-org/react";
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import Axios from 'axios'
import Link from 'next/link';

export default function FormDemo(tthis: any) {
  const [selected, setSelected] = React.useState('ชื่อบัญชี');
  const [name, setName] = useState('')
  const [details, setdetails] = useState('')
  const [bank, setBank] = useState('')
  const [promptpay, setpromptpay] = useState('')
  const [truewallet, settruewallet] = useState('')

  const report = () => {
    Axios.post('https://jabkhong-backend.vercel.app/api/reportwaitlist', {
      name: name, 
      details: details, 
      bank: bank,
      promptpay: promptpay,
      truewallet: truewallet
      }).then((response)=>{
        console.log(response);
      });
  }
const handleChange = (event: SelectChangeEvent) => {
  setSelected(event.target.value as string);
};
return (
  <>
     <div className="flex flex-col items-center ">
      <div className="flex flex-col mb-2">
      <Input onChange={(e)=> {
        setName(e.target.value)
        }} label="ชื่อ - สกุล" />
        <Input onChange={(e)=> {
        setdetails(e.target.value)
        }} label="รายละเอียด" />
         <Input onChange={(e)=> {
        setBank(e.target.value)
        }} label="เลขบัญชีธนาคาร" />
        <Input onChange={(e)=> {
        setpromptpay(e.target.value)
        }} label="PromptPay" />
        <Input onChange={(e)=> {
        settruewallet(e.target.value)
        }} label="Truewallet" />
        </div>
        <Button onClick={report} shadow color="success" auto>
        ยืนยันการแจ้งโกง
        </Button>
        </div>
  </>
);}