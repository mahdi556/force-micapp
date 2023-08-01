import DoctorSite from "@/components/doctorSite/DoctorSite";

const doctorName = ({ params }) => {

  return (
    <>
       <DoctorSite name={params.doctorname} />
    </>
  );
};
export default doctorName;
