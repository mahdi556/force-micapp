import axios from "axios";
import { useEffect, useState } from "react";
import moment from "jalali-moment";
import { useRouter } from "next/navigation";
 
const BankBack = ({ token }) => {
  const [transaction, setTransaction] = useState(null);
  const [reserve, setReserve] = useState(null);
  const router = useRouter();
  const getTransaction = async () => {
    try {
      await axios({
        url: `transaction?token=${token}`,
        method: "get",
        headers: {
          //   Authorization: `Bearer ${req.cookies.token}`,
          Accept: "application/json",
        },
      })
        .then((response) => {
          setTransaction(response.data.data.transaction);
          setReserve(response.data.data.reserve);
        })
        .catch(function (error) {
          console.log(error.response.data);
          // console.log(error);
        });
    } catch (e) {
      // res.status(500).json({ message: { err: ["Server Error"] } });
    }
  };

  useEffect(() => {
    getTransaction();
  }, []);
  return (
    <>
      {transaction && (
        <div
          className="d-flex flex-column col-md-6 col-sm-10 m-auto px-3 py-3"
          style={{
            border: "solid 2px #11999e",
            borderRadius: 20,
          }}
        >
          {transaction.status == 0 && (
            <div className="bg-secondary px-5 py-3 mb-5">
              <h5 className="text-center"> {transaction.message} </h5>
            </div>
          )}
          <div className="d-flex mb-2 justify-content-between align-items-center">
            <h6 className="col">وضعیت تراکنش</h6>
            <h6 className="col">........................</h6>
            {transaction.status == 1 ? (
              <h6 className="text-success col ">موفق</h6>
            ) : (
              <h6 className="text-danger col ">ناموفق</h6>
            )}
          </div>
          <div className="d-flex mb-2 justify-content-between align-items-center">
            <h6 className="col">کد رهگیری</h6>
            <h6 className="col">........................</h6>
            <h6 className="text-secondary col numfont">{transaction.token}</h6>
          </div>
          {transaction.status == 1 && (
            <div className="d-flex mb-2 justify-content-between align-items-center">
              <h6 className="col">مبلغ پرداخت شده</h6>
              <h6 className="col">........................</h6>
              <h6 className="text-secondary numfont col">
                {transaction.amount}
              </h6>
            </div>
          )}
          {transaction.status == 1 && (
            <div className="d-flex mb-2 justify-content-between align-items-center">
              <h6 className="col">تاریخ پرداخت</h6>
              <h6 className="col">........................</h6>
              <h6 className="text-secondary numfont col">
                {moment(transaction.date).locale("fa").format("jYYYY/jM/jD")}
              </h6>
            </div>
          )}
          {transaction.status == 1 && (
            <div className="d-flex mb-2 justify-content-between align-items-center">
              <h6 className="col">تاریخ ویزیت</h6>
              <h6 className="col">........................</h6>
              <h6 className="text-secondary numfont col">
                {moment(reserve.time).locale("fa").format("jYYYY/jM/jD")}ساعت{" "}
                {moment(reserve.time).locale("fa").format("HH:mm")}
              </h6>
            </div>
          )}
          {transaction.status == 0 && (
            <div className="bg-danger px-2 py-1 my-3">
              <h6 className="text-center text-white lh-lg ">
                {" "}
                پرداخت انجام نشد! در صورت کسر مبلغ از حساب شما و عدم برگشت
                مبلغ پس از 72 ساعت از زمان پرداخت، با پشتیبانی تماس بگیرید.
              </h6>
            </div>
          )}
          <button className="btn btn-success col-6 m-auto mt-3"
          onClick={()=>router.push('/user/reserves')}
          >
            بازگشت به صفحه پروفایل
          </button>
        </div>
      )}
    </>
  );
};
export default BankBack;
