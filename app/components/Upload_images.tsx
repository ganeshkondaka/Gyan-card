// 'use client';

// import React, { useState } from 'react';
// import { CldImage, CldUploadWidget } from 'next-cloudinary';
// import { CloudinaryUploadWidgetResults,CloudinaryUploadWidgetInfo  } from "@cloudinary-util/types";

// export const Upload_images = () => {
//     const [public_id, setpublic_id] = useState("");

//     return (
//         <>
//             {public_id && (
//                 // Image is displayed here
//                 <CldImage 
//                     src={public_id} 
//                     alt="user image" 
//                     width={300} 
//                     height={300}
//                 />
//             )}
//             {/* Upload button */}
//             <CldUploadWidget
//                 uploadPreset="guns_preset"
//                 onSuccess={(results: CloudinaryUploadWidgetResults) => {
//                     const info = results.info as CloudinaryUploadWidgetInfo;
//                     // if (results.event === "success" && typeof results.info !== "string" && results.info?.public_id) {
//                     //     setpublic_id(results.info.public_id);
//                     // }
//                     if (results.event === "success" && info.public_id) {
//                         setpublic_id(info.public_id);
//                     }
//                 }}
//             >
//                 {({ open }) => (
//                     <button
//                         className="bg-zinc-800 p-4 rounded-lg"
//                         onClick={() => open()}
//                     >
//                         +
//                     </button>
//                 )}
//             </CldUploadWidget>
//         </>
//     );
// };
