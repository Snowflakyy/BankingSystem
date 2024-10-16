export  interface DUserState{
        token:string;
        isAdministrator:boolean;
}
export interface DUserAction {
    type: string;
    payload?: DUserState; // Define more specific type if possible
  }
  export interface DUserAfterState{
    id:number;
    fullName: string;
    isEmployed:boolean;
    email:string;
    accounts:DAccountState[];
    loans:DLoanState[];
  }
  export interface DUserAfterAction{
    type:string;
    payload?:DUserAfterState;
  }
  
  
  
  // export interface UserLoginState{
  //     token?:any,
  //     user?:any;
  // }


export interface DAccountState{
  color?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'dark' | 'light';
  status: number;
  dateOpened: string;
  accountType: number;
  balance: number;
}
export interface DAccountAction {
  type: string;
  payload?: DAccountState; // Define more specific type if possible
}

export interface DLoanState{
  amount:number;
  interestRate:number;
  loanDate?:string;
  status:number;
  endDate:string;
  totalPaid:number;
  monthlyInstallment:number;
  userId?:number;
  //userId
  payments?:any[];
}
export interface DLoanAction{
  type:string;
  payload?:DLoanState;
}

