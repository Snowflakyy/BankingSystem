export interface SignUpProps {
    username:string;
    fullName:string;
    email:string;
    password:string;
    confirmPassword:string;
    phoneNumber:string;
    address:string;
}
export interface LoginProps{
    username:string;
    password:string;
}
export interface LoanProps{
    CurrencyType:string;
    LoanType: string;
    amount:string;
    DurationInMonths:string;
    LoanStatus : "Active" | "paidoff"
}