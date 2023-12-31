import styles from "@/components/main/Main.module.css";
import { useRouter  } from "next/navigation";
const MegaSearch = () => {
  const router = useRouter ();
  const handleSearch = (e) => {
    if (e.length > 2) {
      router.push(`/megaSearch/?text=${e}`);
    }
  };

  return (
    <>
      <div
        className="col-12"
        style={{
          // backgroundColor: "#11999e",
          borderBottom: "solid 2px #ddd",
          // marginTop:-50,
          zIndex:100
        }}
      >
        <div
          className="d-flex"
          style={{
            backgroundColor: "#fff",
            height: "100%",
            // borderTopLeftRadius: 25,
            // borderTopRightRadius: 25,
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: 20,
            paddingTop: 20,
            borderBottomWidth: 2,
            borderColor: "#ddd",
          }}
        >
          <div className={styles.inputWrapper}>
            <input
              className={styles.inputMega}
              type="text"
              name="mega"
              placeholder="جستجو در مراکز درمانی، پزشکان و ..."
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default MegaSearch;
