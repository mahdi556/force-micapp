import Booking from "@/components/Booking/Booking";
import { QueProvider } from "@/context/QueContext ";

const pageBooking = () => {
  return (
    <>
      <QueProvider>
        <Booking />
      </QueProvider>
    </>
  );
};
export default pageBooking;
