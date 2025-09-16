'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Mic, Video, PhoneOff, Share } from 'lucide-react';

export default function VideoCallScreen({ isOwner = true }) {
  const [isCallActive, setIsCallActive] = useState(false);
  const [time, setTime] = useState(0);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const screenShareVideoRef = useRef<HTMLVideoElement>(null);
  const peerConnection = useRef<RTCPeerConnection | null>(null);
  const [remoteStream, setRemoteStream] = useState<MediaStream | null>(null);
  const [screenStream, setScreenStream] = useState<MediaStream | null>(null);

  // تنظیم WebRTC
  useEffect(() => {
    peerConnection.current = new RTCPeerConnection({
      iceServers: [{ urls: 'stun:stun.l.google.com:19302' }], // STUN سرور عمومی
    });

    peerConnection.current.ontrack = (event) => {
      setRemoteStream(event.streams[0]);
      if (remoteVideoRef.current) remoteVideoRef.current.srcObject = event.streams[0];
    };

    peerConnection.current.onicecandidate = (event) => {
      if (event.candidate) {
        // اینجا باید candidate رو به سرور/یوزر دیگه بفرستی (مثلاً WebSocket)
        console.log('ICE candidate:', event.candidate);
      }
    };

    return () => {
      peerConnection.current?.close();
    };
  }, []);

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
    // شروع استریم ریموت (ویدیو طرف مقابل)
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setRemoteStream(stream);
        if (remoteVideoRef.current) remoteVideoRef.current.srcObject = stream;
        // اضافه کردن trackها به peer connection
        stream.getTracks().forEach((track) => peerConnection.current?.addTrack(track, stream));
        // ایجاد Offer برای اتصال WebRTC
        peerConnection.current
          ?.createOffer()
          .then((offer) => peerConnection.current?.setLocalDescription(offer))
          .then(() => console.log('Offer created, send to peer'))
          .catch((err) => console.error('Error creating offer:', err));
      })
      .catch((err) => {
        console.error('Error starting remote stream:', err);
        alert('Failed to start video. Check permissions.');
      });
  };

  const handleEndCall = () => {
    setIsCallActive(false);
    setTime(0); // Reset timer
    setIsConnecting(false); // Reset connection state
    setIsScreenSharing(false); // Reset screen sharing
    remoteStream?.getTracks().forEach((track) => track.stop());
    screenStream?.getTracks().forEach((track) => track.stop());
    setRemoteStream(null);
    setScreenStream(null);
  };

  const handleShareScreen = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: true,
      });
      setScreenStream(stream);
      setIsScreenSharing(true);
      if (screenShareVideoRef.current) screenShareVideoRef.current.srcObject = stream;
      // اضافه کردن trackهای Screen Share به peer connection
      stream.getTracks().forEach((track) => peerConnection.current?.addTrack(track, stream));
      alert('Screen sharing started! Stream added to peer.');
      stream.getVideoTracks()[0].onended = () => {
        setIsScreenSharing(false);
        alert('Screen sharing stopped.');
      };
    } catch (error) {
      console.error('Error sharing screen:', error);
      alert('Failed to share screen. Please allow permission.');
      setIsScreenSharing(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative w-full h-full flex flex-col items-center justify-center text-white p-4">
        {!isCallActive ? (
          <>
            <div className="relative mb-4">
              <div className="w-32 h-32 bg-pink-500 rounded-full flex items-center justify-center border-4 border-blue-500">
                <div className="text-4xl font-bold text-white">R</div>
              </div>
            </div>

            <h1 className="text-2xl font-bold mb-1">Reza</h1>

            <p className="text-gray-400 mb-8">...Video calling you</p>

            <div className="flex flex-row-reverse justify-center items-center gap-6">
              <div className="flex flex-col items-center">
                <button className="p-5 bg-[#FFFFFF12] rounded-full transition-colors">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.5 16.25C16.5 18.0449 15.0449 19.5 13.25 19.5H5.75C3.95507 19.5 2.5 18.0449 2.5 16.25V7.75C2.5 5.95507 3.95507 4.5 5.75 4.5H13.25C15.0449 4.5 16.5 5.95507 16.5 7.75V16.25ZM22.262 5.89334C22.4156 6.07414 22.5 6.30368 22.5 6.54096V17.4588C22.5 18.0111 22.0523 18.4588 21.5 18.4588C21.2627 18.4588 21.0332 18.3744 20.8524 18.2208L17.5 15.3709V8.62794L20.8524 5.77899C21.2732 5.42132 21.9043 5.47252 22.262 5.89334Z" fill="white"/>
</svg>
                </button>
                <span className="mt-2 text-sm text-gray-400">Mute</span>
              </div>

              <div className="flex flex-col items-center">
                <button className="p-5 bg-[#FFFFFF12] rounded-full transition-colors">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.5 16.25C16.5 18.0449 15.0449 19.5 13.25 19.5H5.75C3.95507 19.5 2.5 18.0449 2.5 16.25V7.75C2.5 5.95507 3.95507 4.5 5.75 4.5H13.25C15.0449 4.5 16.5 5.95507 16.5 7.75V16.25ZM22.262 5.89334C22.4156 6.07414 22.5 6.30368 22.5 6.54096V17.4588C22.5 18.0111 22.0523 18.4588 21.5 18.4588C21.2627 18.4588 21.0332 18.3744 20.8524 18.2208L17.5 15.3709V8.62794L20.8524 5.77899C21.2732 5.42132 21.9043 5.47252 22.262 5.89334Z" fill="white"/>
</svg>
                </button>
                <span className="mt-2 text-sm text-gray-400">Video</span>
              </div>

              <div className="flex flex-col items-center">
                <button
                  className="p-5 bg-[#6CCB5F] rounded-full hover:bg-[#5AB552] transition-colors shadow-lg"
                  style={{ boxShadow: '0 0 10px 5px #4F954566' }}
                  onClick={handleAccept}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.77209 2.43923L8.84868 2.09522C9.8575 1.77287 10.9353 2.29382 11.3674 3.31256L12.2271 5.33991C12.6018 6.22336 12.3939 7.26227 11.7131 7.9084L9.81881 9.70641C9.93569 10.7819 10.2972 11.8409 10.9033 12.8834C11.5095 13.9259 12.2665 14.7907 13.1744 15.4778L15.4496 14.7191C16.312 14.4315 17.2512 14.762 17.7802 15.5392L19.0125 17.3498C19.6275 18.2532 19.5169 19.4995 18.7538 20.2655L17.9361 21.0865C17.1222 21.9036 15.9597 22.2 14.8843 21.8645C12.3454 21.0726 10.0111 18.7214 7.88132 14.8109C5.74845 10.8947 4.9957 7.57214 5.62307 4.84313C5.88707 3.69482 6.70458 2.78033 7.77209 2.43923Z" fill="white"/>
                  </svg>
                </button>
                <span className="mt-2 text-sm text-gray-400">Accept</span>
              </div>

              <div className="flex flex-col items-center">
                <button className="p-5 bg-[#FD6161] rounded-full hover:bg-[#E04F4F] transition-colors shadow-lg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.9487 12.9929L21.7513 14.0294C21.5664 15.0007 20.6588 15.653 19.6305 15.5537L17.5841 15.3559C16.6923 15.2697 15.9325 14.6363 15.7056 13.79L15.0743 11.4347C14.1398 11.0515 13.1099 10.8764 11.9845 10.9093C10.8591 10.9422 9.81232 11.178 8.84412 11.6169L8.45304 13.8216C8.30481 14.6573 7.61525 15.2807 6.74193 15.3685L4.70741 15.573C3.69224 15.6751 2.71891 15.0291 2.43031 14.0618L2.12104 13.0252C1.8132 11.9934 2.08792 10.9075 2.84222 10.1746C4.62301 8.44431 7.59203 7.57647 11.7493 7.57107C15.9126 7.56571 18.974 8.42825 20.9337 10.1587C21.7582 10.8869 22.1443 11.965 21.9487 12.9929Z" fill="white"/>
                  </svg>
                </button>
                <span className="mt-2 text-sm text-gray-400">Decline</span>
              </div>
            </div>
          </>
        ) : (
          <>
            {isOwner ? (
              // نمایش برای Owner
              <div className="relative w-full h-full">
                {!isScreenSharing && (
                  <video
                    ref={remoteVideoRef}
                    autoPlay
                    muted
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
                {isScreenSharing && (
                  <div className="absolute inset-0 bg-gray-600">
                    <video
                      ref={screenShareVideoRef}
                      autoPlay
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 w-24 h-24 bg-blue-700 rounded-lg overflow-hidden">
                      <video
                        ref={localVideoRef}
                        autoPlay
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}
              </div>
            ) : (
              // نمایش برای User
              <div className="relative w-full h-full flex">
                <div className="w-1/2 h-full bg-gray-700">
                  <video
                    ref={remoteVideoRef}
                    autoPlay
                    muted
                    className="w-full h-full object-cover"
                  />
                </div>
                {isScreenSharing && (
                  <div className="w-1/2 h-full bg-gray-600">
                    <video
                      ref={screenShareVideoRef}
                      autoPlay
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            )}

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center items-center gap-6">
            <div className="flex flex-col items-center">
                <button
                  className="p-5 bg-[#FD6161] rounded-full hover:bg-[#E04F4F] transition-colors shadow-lg"
                  onClick={handleEndCall}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.9487 12.9931L21.7513 14.0297C21.5664 15.001 20.6588 15.6533 19.6305 15.5539L17.5841 15.3562C16.6923 15.27 15.9325 14.6366 15.7056 13.7902L15.0743 11.435C14.1398 11.0518 13.1099 10.8766 11.9845 10.9095C10.8591 10.9424 9.81232 11.1783 8.84412 11.6171L8.45304 13.8219C8.30481 14.6575 7.61525 15.2809 6.74193 15.3687L4.70741 15.5733C3.69224 15.6753 2.71891 15.0294 2.43031 14.0621L2.12104 13.0255C1.8132 11.9936 2.08792 10.9077 2.84222 10.1748C4.62301 8.44455 7.59203 7.57672 11.7493 7.57131C15.9126 7.56595 18.974 8.4285 20.9337 10.159C21.7582 10.8871 22.1443 11.9653 21.9487 12.9931Z" fill="white"/>
                  </svg>
                </button>
                <span className="mt-2 text-sm text-gray-400">End Call</span>
              </div>
              <div className="flex flex-col items-center">
                <button className="p-5 bg-[#FFFFFF12] rounded-full transition-colors">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.75 11C19.1297 11 19.4435 11.2822 19.4932 11.6482L19.5 11.75V12.25C19.5 15.8094 16.745 18.7254 13.251 18.9817L13.25 21.25C13.25 21.6642 12.9142 22 12.5 22C12.1203 22 11.8065 21.7178 11.7568 21.3518L11.75 21.25L11.75 18.9818C8.33323 18.7316 5.62283 15.938 5.50406 12.4863L5.5 12.25V11.75C5.5 11.3358 5.83579 11 6.25 11C6.6297 11 6.94349 11.2822 6.99315 11.6482L7 11.75V12.25C7 15.077 9.23445 17.3821 12.0336 17.4956L12.25 17.5H12.75C15.577 17.5 17.8821 15.2656 17.9956 12.4664L18 12.25V11.75C18 11.3358 18.3358 11 18.75 11ZM12.5 2C14.7091 2 16.5 3.79086 16.5 6V12C16.5 14.2091 14.7091 16 12.5 16C10.2909 16 8.5 14.2091 8.5 12V6C8.5 3.79086 10.2909 2 12.5 2Z" fill="white"/>
</svg>

                </button>
                <span className="mt-2 text-sm text-gray-400">Mute</span>
              </div>

              <div className="flex flex-col items-center">
                <button className="p-5 bg-[#FFFFFF12] rounded-full transition-colors">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.5 16.25C16.5 18.0449 15.0449 19.5 13.25 19.5H5.75C3.95507 19.5 2.5 18.0449 2.5 16.25V7.75C2.5 5.95507 3.95507 4.5 5.75 4.5H13.25C15.0449 4.5 16.5 5.95507 16.5 7.75V16.25ZM22.262 5.89334C22.4156 6.07414 22.5 6.30368 22.5 6.54096V17.4588C22.5 18.0111 22.0523 18.4588 21.5 18.4588C21.2627 18.4588 21.0332 18.3744 20.8524 18.2208L17.5 15.3709V8.62794L20.8524 5.77899C21.2732 5.42132 21.9043 5.47252 22.262 5.89334Z" fill="white"/>
</svg>
                </button>
                <span className="mt-2 text-sm text-gray-400">Video</span>
              </div>

              <div className="flex flex-col items-center">
                <button
                  className="p-5 bg-[#FFFFFF12] rounded-full transition-colors hover:bg-[#4CAF50]"
                  onClick={handleShareScreen}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 11H13V12.4C13 12.5167 13.05 12.596 13.15 12.638C13.25 12.68 13.3417 12.659 13.425 12.575L15.65 10.35C15.75 10.25 15.8 10.1333 15.8 10C15.8 9.86667 15.75 9.75 15.65 9.65L13.425 7.425C13.3417 7.34167 13.25 7.321 13.15 7.363C13.05 7.405 13 7.484 13 7.6V9H11C10.1667 9 9.45834 9.29167 8.875 9.875C8.29167 10.4583 8 11.1667 8 12V13C8 13.2833 8.096 13.521 8.288 13.713C8.48 13.905 8.71734 14.0007 9 14C9.28267 13.9993 9.52034 13.9033 9.713 13.712C9.90567 13.5207 10.0013 13.2833 10 13V12C10 11.7167 10.096 11.4793 10.288 11.288C10.48 11.0967 10.7173 11.0007 11 11ZM2 21C1.71667 21 1.47934 20.904 1.288 20.712C1.09667 20.52 1.00067 20.2827 1 20C0.999337 19.7173 1.09534 19.48 1.288 19.288C1.48067 19.096 1.718 19 2 19H22C22.2833 19 22.521 19.096 22.713 19.288C22.905 19.48 23.0007 19.7173 23 20C22.9993 20.2827 22.9033 20.5203 22.712 20.713C22.5207 20.9057 22.2833 21.0013 22 21H2ZM4 18C3.45 18 2.97934 17.8043 2.588 17.413C2.19667 17.0217 2.00067 16.5507 2 16V5C2 4.45 2.196 3.97933 2.588 3.588C2.98 3.19667 3.45067 3.00067 4 3H20C20.55 3 21.021 3.196 21.413 3.588C21.805 3.98 22.0007 4.45067 22 5V16C22 16.55 21.8043 17.021 21.413 17.413C21.0217 17.805 20.5507 18.0007 20 18H4Z" fill="white"/>
                  </svg>
                </button>
                <span className="mt-2 text-sm text-gray-400">Share Screen</span>
              </div>

        
            </div>
          </>
        )}
      </div>
    </div>
  );
}