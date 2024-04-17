import { useState } from 'react';
import Logo from '../assets/Logo.png';
import ChatFeed from './ChatFeed';
import { FaFileUpload } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import axios from 'axios';


const ChatScreen = () => {

    const [file, setFile] = useState(null);
    const [question, setQuestion] = useState('');
    const [answer,setAnswer]=useState('')
    const [q,setQ]=useState('')

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleTextChange = (e) => {
        setQuestion(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!file && !textInput) {
            alert('Please select a file to upload or enter some text');
            return;
        }

        try {
            const formData = new FormData();
            formData.append('user',1)
            formData.append('question', question);
            if (file) {
                formData.append('pdf', file);
            }


            const response = await axios.post('http://127.0.0.1:8000/api/answer/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('File uploaded successfully:', response);
            console.log(formData)
            console.log(response.data.answer)
            setAnswer(response.data.answer)
            setQ(question)

            
            // Optionally, you can handle success response here
        } catch (error) {
            console.error('Error uploading file:', error);
            // Optionally, you can handle error response here
        }
    };




    return (
        <div className="flex h-screen antialiased text-gray-800">
            <div className="flex flex-row h-full w-full overflow-x-hidden">
                <div className="flex flex-col py-8 pl-6 pr-2 w-64 ">
                    <div className="flex flex-row items-center justify-center h-12 w-full">
                        <div className="flex items-center justify-center rounded-2xl text-indigo-700 h-50 w-50 pt-10">
                            <img src={Logo} alt="logo" />
                        </div>
                    </div>
                    
                </div>
                <div className="relative flex flex-col flex-auto h-full p-6">
                    <div className=" overflow-y-auto flex flex-col flex-auto flex-shrink-0 rounded-2xl h-full p-4 relative bg-gradient-to-r from-rose-500 to-red-500">
                        {/* Chat bubbles */}
                        <ChatFeed  question={q} answer={answer}/>
                        <div className="flex-grow"></div> {/* This will push the ChatInput to the bottom */}
                    </div>
                    <div className="fixed bottom-10 left-0 w-full z-50">
                        <div className="max-w-xl mx-auto pr-10 pl-10">
                            {/*Chat input  start */}

                            <form onSubmit={handleSubmit}>
                                <div className="flex flex-row items-center h-16 rounded-xl shadow-card  w-full px-4 bg-gradient-to-r from-slate-900 to-slate-700">
                                    <div className="flex-grow ml-4">
                                        <div className="relative w-full">
                                            <textarea
                                                type="text"
                                                value={question}
                                                onChange={handleTextChange}
                                                className="flex w-full  bg-white text-dark border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-11"
                                                placeholder="Type your message here..."
                                            />
                                            <div className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600">
                                                <label htmlFor='file-upload'>
                                                    <FaFileUpload />
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
                                        <button type='submit' className="-center justify-center bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-1 flex-shrink-0 rounded-md"flex items>
                                            <IoSend className='m-1' />
                                        </button>
                                    </div>
                                </div>
                            </form>


                            {/*Chat input  end */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatScreen;
