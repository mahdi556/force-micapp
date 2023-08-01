"use client";
import axios from "axios";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
const DoctorSite = ({ name }) => {
    const router = useRouter();
  const veifyDoctorSite = async () => {
    try {
      await axios({
        url: `doctor/verifySite?name=${name}`,
        method: "get",
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => {
          router.push(`/doctor/${response.data.data.doctor.id}/${response.data.data.doctor.slug}/${response.data.data.doctor.site}`)
        })
        .catch(function (error) {
          router.push(`/doctors`)
        });
    } catch (e) {
      // res.status(500).json({ message: { err: ["Server Error"] } });
    }
  };
  useEffect(() => {
    veifyDoctorSite();
  }, []);
  return <></>;
};
export default DoctorSite;
