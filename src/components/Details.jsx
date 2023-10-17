import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setBtnShow } from "../STORE/SLICES/LogOut_Slice";

const Details = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [showDetails, setShowDetails] = useState(true);

  useEffect(() => {
    let login_Check = localStorage.hasOwnProperty("user_login");
    if (login_Check) {
      let log_details = localStorage.getItem("user_login");
      log_details = JSON.parse(log_details);
      if (log_details.length === 0) {
        setShowDetails(false);
        history("/error");
      } else if (log_details.length !== 0) {
        dispatch(setBtnShow(true));
      }
    } else if (login_Check === false) {
      setShowDetails(false);
      history("/error");
    }
  }, []);
  return <div>{showDetails ? <div>Details</div> : <div>Error</div>}</div>;
};

export default Details;
