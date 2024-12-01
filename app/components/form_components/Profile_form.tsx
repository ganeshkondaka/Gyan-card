"use client"

import { useEffect, useState } from "react";
import axios from "axios";
import { CldUploadWidget } from "next-cloudinary";
import { CloudinaryUploadWidgetResults, CloudinaryUploadWidgetInfo } from "@cloudinary-util/types";

import { Upload } from "lucide-react";

// interface CloudinaryUploadWidgetResults {
//   event: string;
//   info?: {
//     public_id?: string;
//     [key: string]: any; // Optional: In case the info object has more properties you don't care to strictly type
//   };
// }



const Profile_form = () => {
  const [loacal_userID, setlocaluser_id] = useState('');
  const [indicator, setindicator] = useState(false);
  const [public_id, setpublic_id] = useState("")
  const [quote, setquote] = useState("")


  useEffect(() => {
    // Access localStorage only in the browser
    const userId = localStorage.getItem("local_userID")
    setlocaluser_id(userId || '');
  }, []);

  const submitprofile = async () => {
    // if (skill_lu[0] === '' || skill_lu.length === 0) {
    //   return alert('fill out the form')
    // }
    setindicator(true)
    try {
      // console.log("profile data before from client side:", 'public_id', public_id, 'quote', quote, 'loacal_userID', loacal_userID);
      await axios.post("/api/all_data/profile", { public_id, quote, loacal_userID });
      alert('profile updated..✅')
      // console.log("profile data AFTER sent from client side:", 'public_id', public_id, 'quote', quote, 'loacal_userID', loacal_userID);
    } catch (error) {
      setindicator(false)
      console.log("Failed to send profile data:", error);
    }
  };

  return (
    <div className="bg-gray-900 min-h-auto flex flex-col items-center py-8 px-4 sm:px-8 text-white">
      <h1 className="text-2xl font-bold mb-6 text-center">profile</h1>
      <div className="w-full max-w-lg">
        <div className=" flex justify-between mb-6">

          <input
            className="w-auto px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Enter a tagline or quote for you profile."
            value={quote}
            onChange={(e) => setquote(e.target.value)} />

          {/* <CldUploadWidget uploadPreset='guns_preset' onSuccess={(results: CloudinaryUploadWidgetResults) => {
            if (results.event === 'success' && results.info?.public_id) {
              setpublic_id(results.info.public_id);
            }
          }}> */}

          <CldUploadWidget
            uploadPreset="guns_preset"
            onSuccess={(results: CloudinaryUploadWidgetResults) => {
              const info = results.info as CloudinaryUploadWidgetInfo;
              // if (results.event === "success" && typeof results.info !== "string" && results.info?.public_id) {
              //     setpublic_id(results.info.public_id);
              // }
              if (results.event === "success" && info.public_id) {
                setpublic_id(info.public_id);
              }
            }}
          >
            {({ open }) => <button className='bg-zinc-800 p-4 rounded-lg' onClick={() => open()}>
              <Upload className="inline" /> <p className="inline text-center">Upload img</p>
            </button>}
          </CldUploadWidget>

        </div>
        {public_id && (
          <p className="text-green-500 text-right text-sm mt-2">
            Image uploaded: <span className="font-bold">✅</span>
          </p>
        )}

        <p className="text-zinc-500 text-sm mb-4">wait for alert message after clicking submit for confirmation</p>

        <button
          onClick={submitprofile}
          className="w-full px-4 py-2 rounded-md bg-slate-200 hover:bg-zinc-500 text-zinc-600  font-semibold shadow-md transition-all">
          Submit
        </button>
        {indicator && (
          <p className="text-green-500 text-right text-sm mt-2">
            profile uploaded: <span className="font-bold">✅</span>
          </p>
        )}
      </div>
    </div>

  );
};

export default Profile_form;
