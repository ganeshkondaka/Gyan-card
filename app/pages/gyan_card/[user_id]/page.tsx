'use client'

import axios from "axios";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function User_id() {

  const params = useParams(); // Use the hook to fetch params
  const userid = params?.user_id;

  const [userData, setUserData] = useState();

  // export default function User_id({ params }:
  //   {
  //     params: { user_id: string }
  //   }
  // ) {

  // console.log('teh user id slugpage :', userid)

  async function handle_click() {

    if (!userid) {
      return console.log("user id not found in client"); // Wait for the query parameter to be available
    }

    try {
      const response = await axios.get(`/api/final_data?userId=${userid}`);
      console.log(response.data.data)
      // setUserData(response.data.data);

    } catch (err) {
      console.error("Error fetching user data:", err);
    } finally {
      // setLoading(false);
    }

  }

  return (
    <div>
      userid from the param is {params.user_id} <br />
      <button onClick={handle_click}>click</button>
    </div>
  )
}
