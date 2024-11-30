"use client"

import { useEffect, useState } from "react";
import axios from "axios";
import { CldUploadWidget } from "next-cloudinary";
import { Upload } from "lucide-react";


const Profile_form = () => {
  const [loacal_userID, setlocaluser_id] = useState('');

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
    try {
      console.log("profile data before from client side:", 'public_id', public_id, 'quote', quote, 'loacal_userID', loacal_userID);
      await axios.post("/api/all_data/profile", { public_id, quote, loacal_userID });
      console.log("profile data AFTER sent from client side:", 'public_id', public_id, 'quote', quote, 'loacal_userID', loacal_userID);
    } catch (error) {
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
            placeholder="Enter the tagline or quote for you profile."
            value={quote}
            onChange={(e) => setquote(e.target.value)} />

          <CldUploadWidget uploadPreset='guns_preset' onSuccess={(results: any) => {
            if (results.event === 'success' && results.info?.public_id) {
              setpublic_id(results.info.public_id);
            }
          }}>
            {({ open }) => <button className='bg-zinc-800 p-4 rounded-lg' onClick={() => open()}>
               <Upload className="inline" /> <p className="inline text-center">Upload img</p>
            </button>}
          </CldUploadWidget>

        </div>

        <button
          onClick={submitprofile}
          className="w-full px-4 py-2 rounded-md bg-slate-200 hover:bg-zinc-500 text-zinc-600  font-semibold shadow-md transition-all">
          Submit
        </button>
      </div>
    </div>

  );
};

export default Profile_form;
