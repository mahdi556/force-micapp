"use client";
import styles from "@/components/megaSearch/page.module.css";
import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { MedList } from "@/datalist/Medicals";
import { DocList } from "@/datalist/Medicals";
import MegaMedicals from "./MegaMedicals";
import MegaDoctors from "./MegaDoctors";
const MegaSearch = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [inputValue, setInputValue] = useState(searchParams.get("text"));
  const [searchInput, setSearchInput] = useState("");
  const [medicals, setMedicals] = useState([]);
  const [medicalList, setMedicalList] = useState([]);
  const [clinics, setClinics] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [cMethodes, setCMethodes] = useState([]);
  const [cTools, setCTools] = useState([]);
  const [MMethodes, setMMethodes] = useState([]);
  const [MTools, setMTools] = useState([]);
  const [details, setDetails] = useState([]);
  useEffect(() => {
    setMedicals(MedList);
  }, []);
  const inputHandler = (e) => {
    setInputValue(e);
    searchHandle(e);
  };
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus the input element when the page loads
    inputRef.current.focus();
  }, []);
  const searchHandle = (e) => {
    // setMedicalList([]);
    setSearchInput(e);
    let filterList1 = [];
    setMedicalList(filterList1);
    medicals.filter(function check(item) {
      if (item.name.indexOf(e) != -1) {
        filterList1.push(item);
      }
    });
    let filterList2 = [];
    setDoctors(filterList2);
    DocList.filter(function check(item) {
      if (item.name.indexOf(e) != -1) {
        filterList2.push(item);
      }
    });
    let filterList3 = [];
    setCMethodes(filterList3);
    DocList.filter(function check(item) {
      if (item.methodes.indexOf(e) != -1) {
        filterList3.push(item);
      }
    });
    let filterList4 = [];
    setCTools(filterList4);
    DocList.filter(function check(item) {
      if (item.tools.indexOf(e) != -1) {
        filterList4.push(item);
      }
    });
    let filterList5 = [];
    setMMethodes(filterList5);
    medicals.filter(function check(item) {
      if (item.methodes.indexOf(e) != -1) {
        filterList5.push(item);
      }
    });
    let filterList6 = [];
    setMTools(filterList6);
    medicals.filter(function check(item) {
      if (item.tools.indexOf(e) != -1) {
        filterList6.push(item);
      }
    });
  };
  return (
    <>
      <div className="d-flex flex-column col-12">
        <div className={`mx-auto p-2 my-3 ${styles.searchBox}`}>
          <input
            ref={inputRef}
            placeholder="جستجو در مراکز درمانی، پزشکان و ..."
            className={` mx-auto ps-3 ${styles.searchInput}`}
            type=""
            name=""
            value={inputValue}
            onChange={(e) => inputHandler(e.target.value)}
          />
        </div>
        {inputValue != "" ? (
          <>
            <div className={`mx-auto px-3 py-1 mt-2 ${styles.resultHeader}`}>
              جستجوی "{inputValue}" در مراکز درمانی
            </div>
            <MegaMedicals medicalList={medicalList} />
            {/* <div className={`mx-auto px-3 py-1 mt-2 ${styles.resultHeader}`}>
              جستجوی "{inputValue}" در کلینیک ها
            </div> */}
            <div className={`mx-auto px-3 py-1 mt-2 ${styles.resultHeader}`}>
              جستجوی "{inputValue}" در پزشکان
            </div>
            <MegaDoctors doctors={doctors} />
            <div className={`mx-auto px-3 py-1 mt-2 ${styles.resultHeader}`}>
              جستجوی "{inputValue}"در متد های مراکز درمانی
            </div>
            <MegaMedicals medicalList={MMethodes} />
            <div className={`mx-auto px-3 py-1 mt-2 ${styles.resultHeader}`}>
              جستجوی "{inputValue}"در متد های پزشکان
            </div>
            <MegaDoctors doctors={cMethodes} />
          </>
        ) : (
          <div
            className={`mx-auto d-flex flex-column align-items-center
         justify-content-center px-3 py-4 mt-2 ${styles.helpResult}`}
          >
            <h6 className="">چیزی جستجو کنید </h6>
            <h6 className="my-4">یا</h6>
            <button className="btn btn-danger" onClick={() => router.push("/")}>
              بازگشت به صفحه اصلی
            </button>
          </div>
        )}
      </div>
    </>
  );
};
export default MegaSearch;
