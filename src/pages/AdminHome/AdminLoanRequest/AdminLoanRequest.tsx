import { LoanTable, UsersTable } from '../../creativeTim/examples/Table';
import React from 'react'

export interface ColumnLoans {
  id: 'name' |"id"| "amountToBePaid"| "dateOfBirth"|"dueDate" | "creditScore" | "amountToBePaid" | "riskAssessment" | "Approve/Reject";
  label?: string;
  minWidth?: number;
  align?: 'center' | "right" |"left";
  format?: (value: number) => string;
}

export interface DataLoans {
  name: string;
  id:number;
  amountToBePaid:number;
  dateOfBirth:string;
  dueDate:string;
  creditScore:number;
  riskAssessment:string;
}
//icon+FullName, Active Loans, Pending Loans, Accounts
const columns: ColumnLoans[] = [
  { id: 'id', label: "User Id", minWidth: 30, align: 'center' },
  { id: 'name', label: 'Name', minWidth: 170, align: 'left' },
  { id: 'amountToBePaid', label: 'Amount', minWidth: 100, align: 'right', format: (value: number) => value.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) },
  { id: 'dateOfBirth', label: 'Birth date', minWidth: 100, align: 'center' },
  { id: 'dueDate', label: 'Due-to date', minWidth: 100, align: 'center' },
  { id: 'creditScore', label: 'Credit Score', minWidth: 100, align: 'center' },
  { id: 'riskAssessment', label: 'Risk Assessment', minWidth: 100, align: 'center' },
  { id: 'Approve/Reject', label: 'Action', minWidth: 200, align: 'center' },
]

const rows: DataLoans[] = [
  { id: 1, name: "John Doe", amountToBePaid: 5000, dateOfBirth: "1985-05-15", dueDate: "2023-12-31", creditScore: 720, riskAssessment: "Low" },
  { id: 2, name: "Jane Smith", amountToBePaid: 7500, dateOfBirth: "1990-08-22", dueDate: "2024-01-15", creditScore: 680, riskAssessment: "Medium" },
  { id: 3, name: "Michael Johnson", amountToBePaid: 10000, dateOfBirth: "1978-11-30", dueDate: "2023-11-30", creditScore: 750, riskAssessment: "Low" },
  { id: 4, name: "Emily Davis", amountToBePaid: 3000, dateOfBirth: "1995-02-18", dueDate: "2024-02-28", creditScore: 630, riskAssessment: "High" },
  { id: 5, name: "Chris Brown", amountToBePaid: 8000, dateOfBirth: "1982-07-07", dueDate: "2023-10-31", creditScore: 700, riskAssessment: "Medium" },
]


function createData(
  name: string,
  id:number,
  amountToBePaid:number,
  dateOfBirth:string,
  dueDate:string,
  creditScore:number,
  riskAssessment:string, 
): DataLoans {
  return { id,name,amountToBePaid,dateOfBirth,dueDate,creditScore,riskAssessment};
}

export const AdminLoanRequests = () => {
  return (
<LoanTable headers={columns} body={rows}/>
  )
}

