"use client";

import { useState } from "react";
import axios from "axios";

type Social = {
  name: string;
  link: string;
};

const Social_form = () => {
  const [indicator, setindicator] = useState(false);
  const [socialLinks, setSocialLinks] = useState<Social[]>([
    { name: "GitHub", link: "" },
    { name: "Mail", link: "" },
    { name: "LinkedIn", link: "" },
    { name: "Twitter", link: "" },
  ]);

  const handleLinkChange = (index: number, value: string) => {
    const updatedSocialLinks = [...socialLinks];
    updatedSocialLinks[index].link = value;
    setSocialLinks(updatedSocialLinks);
  };

  // console.log('teh social links are :',socialLinks)

  const submitSocialLinks = async () => {
    
    const userId = localStorage.getItem("local_userID");
    // console.log('user id :',userId)
    if (!userId) {
      alert("User ID not found. Please log in.");
      return;
    }
    setindicator(true)
    const socialswith_userid = socialLinks.map((social) => ({
      ...social,
      userId,
    }));
    
    try {
      // console.log('the social links before are :',socialLinks)
      await axios.post("/api/all_data/socials", { socialswith_userid });
      // console.log('the social links after are :',socialLinks)
      alert("Social media links submitted successfully!");
    } catch (error) {
      setindicator(false)
      console.error("Failed to send social media links:", error);
      alert("Failed to submit social media links.");
    }
  };

  return (
    <div className="bg-gray-900 min-h-auto flex flex-col items-center py-8 px-4 sm:px-8 text-white">
      <h1 className="text-2xl font-bold mb-6 text-center">Add Social Media Links</h1>
      <div className="w-full max-w-lg">
        {socialLinks.map((social, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-center gap-4 mb-4 bg-gray-800 p-4 rounded-lg shadow-md"
          >
            <label className="flex-1 text-lg font-semibold">{social.name}</label>
            <input
              className="flex-1 px-3 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="url"
              required
              placeholder={`Enter your ${social.name} link`}
              value={social.link}
              onChange={(e) => handleLinkChange(index, e.target.value)}
            />
          </div>
        ))}
          <p className="text-zinc-500 text-sm">wait for alert message after clicking submit for confirmation</p>
        <div className="flex justify-end">
          <button
            onClick={submitSocialLinks}
            className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md transition-all"
          >
            Submit
          </button>
        </div>
        {indicator && (
          <p className="text-green-500 text-right text-sm mt-2">
            Socials uploaded: <span className="font-bold">✅</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Social_form;

