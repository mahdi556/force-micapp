import Booking from "@/components/Booking/Booking";
import { QueProvider } from "@/context/QueContext ";

const pageBooking = ({params}) => {
  return (
    <>
      <QueProvider>
        <Booking id={params.id} />
      </QueProvider>
    </>
  );
};
export default pageBooking;
