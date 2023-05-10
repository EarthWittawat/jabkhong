import React from "react";
import { Table, Input, Spacer,Tooltip, Dropdown } from "@nextui-org/react";
import { IconButton } from "./IconButton";
import { EyeIcon } from "./EyeIcon";
import { useState } from "react";
import Link from "next/link";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function ReportTable(this: any) {
  const [selected, setSelected] = React.useState('ชื่อบัญชี');
  const handleChange = (event: SelectChangeEvent) => {
    setSelected(event.target.value as string);
  };
    return (
      <>
      <div className="flex flex-col">
      <div className="flex flex-row gap-8 justify-center ">
      <Input placeholder="กรอกข้อมูล" />
      <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selected}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={'ชื่อบัญชี'}>ชื่อบัญชี</MenuItem>
          <MenuItem value={'เบอร์มือถือ'}>เบอร์มือถือ</MenuItem>
          <MenuItem value={'เลขบัญชีธนาคาร'}>เลขบัญชีธนาคาร</MenuItem>
          <MenuItem value={'Promptpay'}>Promptpay</MenuItem>
          <MenuItem value={'Truewallet'}>Truewallet</MenuItem>
        </Select>
    </div>
    <div className="flex-1 justify-center ">
        <Table
          aria-label="Example static collection table"
          css={{
            height: "auto",
            minWidth: "auto",
            textAlign: "left",
          }}
          selectionMode="single"
        >
          <Table.Header>
            <Table.Column>ชื่อ</Table.Column>
            <Table.Column>ตรวจสอบข้อมูล</Table.Column>
          </Table.Header>
          <Table.Body>
            <Table.Row key="1">
              <Table.Cell>สมมติชื่อ ก</Table.Cell>
              <Table.Cell>
                <Tooltip content="Details">
                <IconButton >
                  <EyeIcon size={20} fill="#979797" height={undefined} width={undefined} />
                  <Link href={'/reportcheck'}></Link>
                </IconButton>
              </Tooltip></Table.Cell>
            </Table.Row>
            <Table.Row key="2">
              <Table.Cell>สมมติชื่อ ข</Table.Cell>
              <Table.Cell>
                <Tooltip content="Details">
                <IconButton >
                  <EyeIcon size={20} fill="#979797" height={undefined} width={undefined} />
                  <Link href={'/reportcheck'}></Link>
                </IconButton>
              </Tooltip>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        </div>
        </div>
        </>
    );
  }