import axios from "axios";
import moment from "jalali-moment";

const HandleQue = async (item) => {
  var diffTime = moment().diff(moment(item.time), "minutes");
  try {
    await axios({
      url: "reservetask",
      method: "post",
      data:{
        time:moment(item.time).locale("en").format("YYYY-MM-DD HH:mm:ss"),
        office_id:22,
        task:'done',
        section:item.section
      },
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
       })
      .catch(function (error) {
        console.log(error.response.data);
        // console.log(error);
      });
  } catch (e) {
    // res.status(500).json({ message: { err: ["Server Error"] } });
  }
  
  }
 export default HandleQue;
