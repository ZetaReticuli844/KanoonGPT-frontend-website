import React from 'react';
import Logo from '../assets/Logo.png';
import ChatBubble from './ChatBubble';
import ChatInput from './ChatInput';

const ChatScreen = () => {
    return (
        <div className="flex h-screen antialiased text-gray-800">
            <div className="flex flex-row h-full w-full overflow-x-hidden">
                <div className="flex flex-col py-8 pl-6 pr-2 w-64 ">
                    <div className="flex flex-row items-center justify-center h-12 w-full">
                        <div className="flex items-center justify-center rounded-2xl text-indigo-700 h-50 w-50 pt-10">
                            <img src={Logo} alt="logo" />
                        </div>
                    </div>
                    {/* Rest of the sidebar content */}
                </div>
                <div className="relative flex flex-col flex-auto h-full p-6">
                    <div className="overflow-y-auto flex flex-col flex-auto flex-shrink-0 rounded-2xl h-full p-4 relative bg-gradient-to-r from-rose-500 to-red-500">
                        {/* Chat bubbles */}
                        <ChatBubble />
                        <div className="flex-grow"></div> {/* This will push the ChatInput to the bottom */}
                    </div>
                    <div className="fixed bottom-10 left-0 w-full z-50">
                        <div className="max-w-xl mx-auto pr-10 pl-10">
                            <ChatInput />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatScreen;
