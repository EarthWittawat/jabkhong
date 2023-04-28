import React from "react";
import { Table, Input, Spacer,Tooltip, Dropdown } from "@nextui-org/react";
import { IconButton } from "./IconButton";
import { EyeIcon } from "./EyeIcon";
import { useState } from "react";
import Link from "next/link";

export default function ReportTable(this: any) {
  const [selected, setSelected] = React.useState(new Set(["name"] ));
  type Props = {
    selected: boolean;
    setSelected: (active: boolean) => void;
 }
  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );
    return (
      <>
      <div className="flex flex-col">
      <div className="flex flex-row justify-center ">
      <Input size="md" labelPlaceholder="กรอกข้อมูล" />
    </div>
    <div className="flex-1 justify-center pt-4">
        <Table
          aria-label="Example static collection table"
          css={{
            height: "auto",
            minWidth: "30rem",
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
            <Table.Row key="3">
              <Table.Cell>สมมติชื่อ ค</Table.Cell>
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