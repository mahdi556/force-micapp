'use client'
import BankBack from "@/components/Payment/BankBack";
import { useSearchParams } from 'next/navigation'
const bankbackPage = () => {
    const searchParams = useSearchParams()
   return (
    <>
      <BankBack token={searchParams.get('token')} />
    </>
  );
};
export default bankbackPage;
