import React, { useState } from 'react';
import { FaFileUpload } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import axios from 'axios';

const ChatInput = () => {
    const [file, setFile] = useState(null);
    

    const handleFileChange = (e) => {
      setFile(e.target.files[0]);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (!file) {
        alert('Please select a file to upload');
        return;
      }
  
      try {
        const formData = new FormData();
        formData.append('user', 1);
        formData.append('pdf_file', file);
  
        // const response = await axios.post('http://127.0.0.1:8000/api/pdf/', formData, {
        //   headers: {
        //     'Content-Type': 'multipart/form-data',
        //   },
        // });
  
        console.log('File uploaded successfully:', response);
        // Optionally, you can handle success response here
      } catch (error) {
        console.error('Error uploading file:', error);
        // Optionally, you can handle error response here
      }
    };

    return (
        <div className="flex flex-row items-center h-16 rounded-xl shadow-card  w-full px-4 bg-gradient-to-r from-slate-900 to-slate-700">
            <div className="flex-grow ml-4">
                <div className="relative w-full">
                    <input
                        type="text"
                        className="flex w-full  bg-white text-dark border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                    />
                    
                    <div  className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600">
                    <label htmlFor='file-upload'>
                        <FaFileUpload/>
                    </label>
                    <input
                    id='file-upload'
                        type="file"
                        onChange={handleFileChange}
                        className="hidden"
                        accept=".pdf"
                        placeholder='upload file'
                    />
                    </div>
                </div>
            </div>
            <div className="ml-4">
                <button onClick={handleSubmit} className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-1 flex-shrink-0 rounded-md">
                    <IoSend className='m-1' />
                </button>
            </div>
        </div>
    );
};

export default ChatInput;
