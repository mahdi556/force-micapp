"use client";
import styles from "@/components/megaSearch/page.module.css";
import { useState } from "react";

const MegaSearch = ({ search }) => {
  const [inputValue, setInputValue] = useState(search);
  const inputHandler = (e) => {
    setInputValue(e);
  };
  return (
    <>
      <div className="d-flex flex-column col-12">
        <div className={`mx-auto p-2 my-3 ${styles.searchBox}`}>
          <input
            placeholder="جستجو در مراکز درمانی، پزشکان و ..."
            className={` mx-auto ps-3 ${styles.searchInput}`}
            type=""
            name=""
            onChange={(e) => inputHandler(e.target.value)}
          />
        </div>
        {inputValue != "" && (
          <>
            <div className={`mx-auto px-3 py-1 mt-2 ${styles.resultHeader}`}>
              جستجوی حقیقتی در مراکز درمانی
            </div>
            <div className={`mx-auto px-3 py-1 mt-2 ${styles.resultHeader}`}>
              جستجوی حقیقتی در کلینیک ها
            </div>
            <div className={`mx-auto px-3 py-1 mt-2 ${styles.resultHeader}`}>
              جستجوی حقیقتی در پزشکان
            </div>
            <div className={`mx-auto px-3 py-1 mt-2 ${styles.resultHeader}`}>
              جستجوی حقیقتی در متد های مراکز درمانی
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default MegaSearch;
