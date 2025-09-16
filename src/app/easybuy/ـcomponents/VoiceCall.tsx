'use client';

import React, { useState, useEffect } from 'react';


export default function VoiceCallScreen() {
  const [isCallActive, setIsCallActive] = useState(false);
  const [time, setTime] = useState(0);
  const [isConnecting, setIsConnecting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isCallActive && !isConnecting) {
      timer = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer); // Cleanup timer
  }, [isCallActive, isConnecting]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isCallActive) {
      interval = setInterval(async () => {
        try {
          const response = await fetch('/api/check-connection'); // API فرضی
          const data = await response.json();
          setIsConnecting(!data.connected); // بر اساس پاسخ API
        } catch (error) {
          setIsConnecting(true); // اگر خطا بده، فرض می‌کنیم اتصال ضعیفه
        }
      }, 2000); // هر 2 ثانیه چک کن
    }
    return () => clearInterval(interval); // Cleanup interval
  }, [isCallActive]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAccept = () => {
    setIsCallActive(true);
  };

  const handleEndCall = () => {
    setIsCallActive(false);
    setTime(0); // Reset timer
    setIsConnecting(false); // Reset connection state
  };

  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative w-full h-full flex flex-col items-center justify-center text-white p-4 max-w-md mx-auto">
        <div className="relative mb-4">
          <div className="w-32 h-32 bg-pink-500 rounded-full flex items-center justify-center ">
            <div className="text-4xl font-bold text-white">R</div>
          </div>
        </div>

        <h1 className="text-2xl font-bold mb-1">Reza</h1>

        {!isCallActive ? (
          <p className="text-gray-400 mb-8">...Voice calling you</p>
        ) : (
          isConnecting ? (
            <p className="text-gray-400 mb-8">...Voice call Connecting</p>
          ) : (
            <p className="text-gray-400 mb-8">{formatTime(time)}</p>
          )
        )}

        <div className="flex flex-row-reverse justify-center items-center gap-6">
          <div className="flex flex-col items-center">
            <button className="p-5 bg-[#FFFFFF12] rounded-full transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.25 11C18.6297 11 18.9435 11.2822 18.9932 11.6482L19 11.75V12.25C19 15.8094 16.245 18.7254 12.751 18.9817L12.75 21.25C12.75 21.6642 12.4142 22 12 22C11.6203 22 11.3065 21.7178 11.2568 21.3518L11.25 21.25L11.25 18.9818C7.83323 18.7316 5.12283 15.938 5.00406 12.4863L5 12.25V11.75C5 11.3358 5.33579 11 5.75 11C6.1297 11 6.44349 11.2822 6.49315 11.6482L6.5 11.75V12.25C6.5 15.077 8.73445 17.3821 11.5336 17.4956L11.75 17.5H12.25C15.077 17.5 17.3821 15.2656 17.4956 12.4664L17.5 12.25V11.75C17.5 11.3358 17.8358 11 18.25 11ZM12 2C14.2091 2 16 3.79086 16 6V12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12V6C8 3.79086 9.79086 2 12 2Z" fill="white"/>
              </svg>
            </button>
            <span className="mt-2 text-sm text-gray-400">Mute</span>
          </div>

          {!isCallActive ? (
            <div className="flex flex-col items-center">
              <button
                className="p-5 bg-[#6CCB5F] rounded-full hover:bg-[#5AB552] transition-colors shadow-lg"
                style={{ boxShadow: '0 0 10px 5px #4F954566' }} // سایه سفارشی
                onClick={handleAccept}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.77209 2.43923L8.84868 2.09522C9.8575 1.77287 10.9353 2.29382 11.3674 3.31256L12.2271 5.33991C12.6018 6.22336 12.3939 7.26227 11.7131 7.9084L9.81881 9.70641C9.93569 10.7819 10.2972 11.8409 10.9033 12.8834C11.5095 13.9259 12.2665 14.7907 13.1744 15.4778L15.4496 14.7191C16.312 14.4315 17.2512 14.762 17.7802 15.5392L19.0125 17.3498C19.6275 18.2532 19.5169 19.4995 18.7538 20.2655L17.9361 21.0865C17.1222 21.9036 15.9597 22.2 14.8843 21.8645C12.3454 21.0726 10.0111 18.7214 7.88132 14.8109C5.74845 10.8947 4.9957 7.57214 5.62307 4.84313C5.88707 3.69482 6.70458 2.78033 7.77209 2.43923Z" fill="white"/>
                </svg>
              </button>
              <span className="mt-2 text-sm text-gray-400">Accept</span>
            </div>
          ) : null}

          {!isCallActive ? (
            <div className="flex flex-col items-center">
              <button className="p-5 bg-[#FD6161] rounded-full hover:bg-[#E04F4F] transition-colors shadow-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.9487 12.9929L21.7513 14.0294C21.5664 15.0007 20.6588 15.653 19.6305 15.5537L17.5841 15.3559C16.6923 15.2697 15.9325 14.6363 15.7056 13.79L15.0743 11.4347C14.1398 11.0515 13.1099 10.8764 11.9845 10.9093C10.8591 10.9422 9.81232 11.178 8.84412 11.6169L8.45304 13.8216C8.30481 14.6573 7.61525 15.2807 6.74193 15.3685L4.70741 15.573C3.69224 15.6751 2.71891 15.0291 2.43031 14.0618L2.12104 13.0252C1.8132 11.9934 2.08792 10.9075 2.84222 10.1746C4.62301 8.44431 7.59203 7.57647 11.7493 7.57107C15.9126 7.56571 18.974 8.42825 20.9337 10.1587C21.7582 10.8869 22.1443 11.965 21.9487 12.9929Z" fill="white"/>
                </svg>
              </button>
              <span className="mt-2 text-sm text-gray-400">Decline</span>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <button
                className="p-5 bg-[#FD6161] rounded-full hover:bg-[#E04F4F] transition-colors shadow-lg"
                onClick={handleEndCall}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.9487 12.9929L21.7513 14.0294C21.5664 15.0007 20.6588 15.653 19.6305 15.5537L17.5841 15.3559C16.6923 15.2697 15.9325 14.6363 15.7056 13.79L15.0743 11.4347C14.1398 11.0515 13.1099 10.8764 11.9845 10.9093C10.8591 10.9422 9.81232 11.178 8.84412 11.6169L8.45304 13.8216C8.30481 14.6573 7.61525 15.2807 6.74193 15.3685L4.70741 15.573C3.69224 15.6751 2.71891 15.0291 2.43031 14.0618L2.12104 13.0252C1.8132 11.9934 2.08792 10.9075 2.84222 10.1746C4.62301 8.44431 7.59203 7.57647 11.7493 7.57107C15.9126 7.56571 18.974 8.42825 20.9337 10.1587C21.7582 10.8869 22.1443 11.965 21.9487 12.9929Z" fill="white"/>
                </svg>
              </button>
              <span className="mt-2 text-sm text-gray-400">End Call</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}