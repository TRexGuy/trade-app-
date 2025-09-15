"use client";
import React, { useEffect, useRef, useState } from "react";
// import { Dialog } from "@radix-ui/react-dialog";

// This file is a single-file React component for Next.js App Router (page.tsx style).
// It uses Tailwind v4 utility classes and small Radix Dialog for leave confirmation.
// It shows a large local video preview, left top avatar + live badge, right vertical controls,
// and a centered circular "start" button like the provided mock.

export default function LiveRoomPage() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [cameraOff, setCameraOff] = useState(false);
  const [isLive, setIsLive] = useState(false);
  const [showLeaveConfirm, setShowLeaveConfirm] = useState(false);
  const [comments, setComments] = useState<{id: number, text: string}[]>([]);
  const [commentInput, setCommentInput] = useState("");
  
  const handleSendComment = () => {
    if (!commentInput.trim()) return;
    setComments(prev => [...prev, { id: Date.now(), text: commentInput }]);
    setCommentInput("");
  };
  
  useEffect(() => {
    // get user media on mount
    const getMedia = async () => {
      try {
        const s = await navigator.mediaDevices.getUserMedia({ video: { width: 1280 }, audio: true });
        setStream(s);
        if (videoRef.current) {
          videoRef.current.srcObject = s;
        }
      } catch (err) {
        console.warn("Could not get user media:", err);
      }
    };
    getMedia();

    return () => {
      if (stream) stream.getTracks().forEach((t) => t.stop());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
      videoRef.current.muted = true; // local preview muted by default
      videoRef.current.play().catch(() => {});
    }
  }, [stream]);

  useEffect(() => {
    if (!stream) return;
    stream.getAudioTracks().forEach((t) => (t.enabled = !isMuted));
  }, [isMuted, stream]);

  useEffect(() => {
    if (!stream) return;
    stream.getVideoTracks().forEach((t) => (t.enabled = !cameraOff));
  }, [cameraOff, stream]);

  const handleStartLive = () => {
    // placeholder: in real app trigger signaling / start broadcast
    setIsLive(true);
  };

  const handleLeave = () => {
    setShowLeaveConfirm(false);
    // cleanup and navigate away in real app
    setIsLive(false);
    if (stream) stream.getTracks().forEach((t) => t.stop());
    setStream(null);
  };

  return (
    <div className="min-h-screen bg-[#0f1724] flex items-center justify-center p-4">
      <div className="w-full max-w-[1200px] h-[720px] bg-[#111216] rounded-lg shadow-lg overflow-hidden relative">
        {/* top bar */}
        <div >
      {/* top bar */}
<div className="absolute top-4 left-4 bg-black/60 backdrop-blur z-20 flex items-center gap-3 px-4 py-2 rounded-lg">

  <div className="text-sm text-white/90  flex items-center gap-2">
   
    <span className="text-xs flex items-center gap-2 bg-white/50 backdrop-blur-sm px-2 py-1 rounded-md">
    0
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 17.5V15.8333C5 14.9493 5.35119 14.1014 5.97631 13.4763C6.60143 12.8512 7.44928 12.5 8.33333 12.5H11.6667C12.5507 12.5 13.3986 12.8512 14.0237 13.4763C14.6488 14.1014 15 14.9493 15 15.8333V17.5M6.66667 5.83333C6.66667 6.71739 7.01786 7.56523 7.64298 8.19036C8.2681 8.81548 9.11594 9.16667 10 9.16667C10.8841 9.16667 11.7319 8.81548 12.357 8.19036C12.9821 7.56523 13.3333 6.71739 13.3333 5.83333C13.3333 4.94928 12.9821 4.10143 12.357 3.47631C11.7319 2.85119 10.8841 2.5 10 2.5C9.11594 2.5 8.2681 2.85119 7.64298 3.47631C7.01786 4.10143 6.66667 4.94928 6.66667 5.83333Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  
    </span>
    <span className="text-xs px-2 py-0.5 rounded-full font-medium">
      Live
    </span>
    <img
    src="/avatar-placeholder.jpg"
    alt="avatar"
    className="w-8 h-8 rounded-full border ring-1 ring-white/10 object-cover"
  />
  
  </div>


          </div>

          <div className="text-sm text-white/50"> {/* empty center to balance */}</div>

          <div className="flex items-center gap-3">
            {/* close icon */}
   
          </div>
        </div>

        {/* right vertical controls */}
        <div className="absolute right-4 top-20 bottom-20 z-30 flex flex-col items-center gap-4">
        <button  aria-label="close" onClick={() => setShowLeaveConfirm(true)}>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.46927 22.1666L5.83594 20.5333L12.3693 13.9999L5.83594 7.46659L7.46927 5.83325L14.0026 12.3666L20.5359 5.83325L22.1693 7.46659L15.6359 13.9999L22.1693 20.5333L20.5359 22.1666L14.0026 15.6333L7.46927 22.1666Z" fill="white"/>
</svg>

            </button>
          <button className="w-12 h-12 flex items-center justify-center" aria-label="chat">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 24.5C16.0767 24.5 18.1068 23.8842 19.8335 22.7304C21.5602 21.5767 22.906 19.9368 23.7007 18.0182C24.4955 16.0996 24.7034 13.9884 24.2982 11.9516C23.8931 9.91476 22.8931 8.04383 21.4246 6.57538C19.9562 5.10693 18.0852 4.1069 16.0484 3.70176C14.0116 3.29661 11.9004 3.50455 9.98182 4.29927C8.0632 5.09399 6.42332 6.4398 5.26957 8.16652C4.11581 9.89323 3.5 11.9233 3.5 14C3.5 15.736 3.92 17.3717 4.66667 18.8148L3.5 24.5L9.18517 23.3333C10.6272 24.0788 12.2652 24.5 14 24.5Z" stroke="white" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          </button>
          <button
    className="md:hidden w-12 h-12 flex items-center justify-center  rounded-full"
    aria-label="rotate-device"
    onClick={() => alert("Please rotate your device")}
  >
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.0901 18.0541C13.5262 18.0735 12.9868 17.9814 12.4719 17.7776C11.957 17.5738 11.5048 17.2771 11.1151 16.8874C10.7254 16.4978 10.4287 16.0603 10.2249 15.5749C10.0212 15.0896 9.91927 14.5743 9.91927 14.0291C9.91927 13.8346 9.92899 13.6453 9.94844 13.4609C9.96788 13.2766 10.0068 13.0965 10.0651 12.9208C10.1429 12.6874 10.1382 12.4541 10.0511 12.2208C9.96399 11.9874 9.81311 11.8221 9.59844 11.7249C9.36511 11.6277 9.13683 11.6277 8.91361 11.7249C8.69038 11.8221 8.53949 11.9874 8.46094 12.2208C8.36372 12.5124 8.29099 12.8041 8.24277 13.0958C8.19455 13.3874 8.17005 13.6888 8.16927 13.9999C8.16927 14.7777 8.32016 15.5216 8.62194 16.2318C8.92372 16.9419 9.34644 17.5688 9.89011 18.1124C10.4151 18.6569 11.0327 19.0749 11.7428 19.3666C12.4529 19.6583 13.1867 19.8138 13.9443 19.8333L13.4484 20.3291C13.2734 20.5041 13.1859 20.7083 13.1859 20.9416C13.1859 21.1749 13.2734 21.3791 13.4484 21.5541C13.6234 21.7291 13.8276 21.8166 14.0609 21.8166C14.2943 21.8166 14.4984 21.7291 14.6734 21.5541L16.5401 19.6874C16.7734 19.4541 16.8901 19.1819 16.8901 18.8708C16.8901 18.5596 16.7734 18.2874 16.5401 18.0541L14.6734 16.1874C14.4984 16.0124 14.2943 15.9249 14.0609 15.9249C13.8276 15.9249 13.6234 16.0124 13.4484 16.1874C13.2734 16.3624 13.1859 16.5666 13.1859 16.7999C13.1859 17.0333 13.2734 17.2374 13.4484 17.4124L14.0901 18.0541ZM13.8859 9.91658C14.4498 9.91658 14.9943 10.0189 15.5193 10.2234C16.0443 10.428 16.5012 10.7243 16.8901 11.1124C17.279 11.5005 17.5757 11.938 17.7803 12.4249C17.9848 12.9118 18.0867 13.4271 18.0859 13.9708C18.0859 14.1652 18.0762 14.3546 18.0568 14.5389C18.0373 14.7233 17.9984 14.9033 17.9401 15.0791C17.8623 15.3124 17.8674 15.5504 17.9553 15.7931C18.0432 16.0358 18.1937 16.2061 18.4068 16.3041C18.6401 16.4013 18.8688 16.4013 19.0928 16.3041C19.3168 16.2069 19.4673 16.0416 19.5443 15.8083C19.6415 15.5166 19.7146 15.2199 19.7636 14.9181C19.8126 14.6163 19.8367 14.3103 19.8359 13.9999C19.8359 13.2221 19.6948 12.4786 19.4124 11.7693C19.1301 11.0599 18.7074 10.4229 18.1443 9.85825C17.5998 9.31381 16.9729 8.90081 16.2636 8.61925C15.5543 8.3377 14.82 8.19653 14.0609 8.19575L14.5859 7.67075C14.7415 7.49575 14.8193 7.29159 14.8193 7.05825C14.8193 6.82492 14.7318 6.62075 14.5568 6.44575C14.3818 6.27075 14.1776 6.18325 13.9443 6.18325C13.7109 6.18325 13.5068 6.27075 13.3318 6.44575L11.4651 8.31242C11.2318 8.54575 11.1151 8.81797 11.1151 9.12909C11.1151 9.4402 11.2318 9.71242 11.4651 9.94575L13.3318 11.8124C13.5068 11.9874 13.7109 12.0749 13.9443 12.0749C14.1776 12.0749 14.3818 11.9874 14.5568 11.8124C14.7318 11.6374 14.8193 11.4333 14.8193 11.1999C14.8193 10.9666 14.7318 10.7624 14.5568 10.5874L13.8859 9.91658ZM14.0026 25.6666C12.3887 25.6666 10.8721 25.3601 9.45261 24.7473C8.03316 24.1344 6.79844 23.3033 5.74844 22.2541C4.69844 21.2049 3.86738 19.9701 3.25527 18.5499C2.64316 17.1297 2.33672 15.613 2.33594 13.9999C2.33516 12.3868 2.64161 10.8701 3.25527 9.44992C3.86894 8.0297 4.69999 6.79497 5.74844 5.74575C6.79688 4.69653 8.03161 3.86547 9.45261 3.25259C10.8736 2.6397 12.3903 2.33325 14.0026 2.33325C15.6149 2.33325 17.1316 2.6397 18.5526 3.25259C19.9736 3.86547 21.2083 4.69653 22.2568 5.74575C23.3052 6.79497 24.1367 8.0297 24.7511 9.44992C25.3655 10.8701 25.6716 12.3868 25.6693 13.9999C25.6669 15.613 25.3605 17.1297 24.7499 18.5499C24.1394 19.9701 23.3083 21.2049 22.2568 22.2541C21.2052 23.3033 19.9705 24.1348 18.5526 24.7484C17.1347 25.3621 15.618 25.6681 14.0026 25.6666ZM14.0026 23.3333C16.6082 23.3333 18.8151 22.4291 20.6234 20.6208C22.4318 18.8124 23.3359 16.6055 23.3359 13.9999C23.3359 11.3944 22.4318 9.18742 20.6234 7.37909C18.8151 5.57075 16.6082 4.66659 14.0026 4.66659C11.397 4.66659 9.19011 5.57075 7.38177 7.37909C5.57344 9.18742 4.66927 11.3944 4.66927 13.9999C4.66927 16.6055 5.57344 18.8124 7.38177 20.6208C9.19011 22.4291 11.397 23.3333 14.0026 23.3333Z" fill="white"/>
</svg>

  </button>
          <button
            onClick={() => setIsMuted((s) => !s)}
          
            aria-label="mute"
          >
         <svg width="20" height="26" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.0807 5.41658C14.0807 3.16142 12.2526 1.33325 9.9974 1.33325C7.74223 1.33325 5.91406 3.16142 5.91406 5.41658V12.9999C5.91406 15.2551 7.74223 17.0833 9.9974 17.0833C12.2526 17.0833 14.0807 15.2551 14.0807 12.9999V5.41658Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
<path d="M1.25 12.4165C1.25 17.2488 5.16767 21.1665 10 21.1665M10 21.1665C14.8323 21.1665 18.75 17.2488 18.75 12.4165M10 21.1665V24.6665" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          </button>

          <button onClick={() => setCameraOff((s) => !s)}  aria-label="camera">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1692_12037)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.25 17.5V19.25C19.25 21.175 17.6838 22.75 15.75 22.75H3.5C1.575 22.75 0 21.1838 0 19.25V8.75C0 6.825 1.56625 5.25 3.5 5.25H15.75C17.675 5.25 19.25 6.81625 19.25 8.75V10.5L22.2425 7.5075C22.5706 7.17929 23.0157 6.99485 23.4797 6.99475H26.2622C26.7264 6.99475 27.1715 7.17912 27.4997 7.50731C27.8279 7.8355 28.0122 8.28062 28.0122 8.74475V19.2447C28.0122 19.7089 27.8279 20.154 27.4997 20.4822C27.1715 20.8104 26.7264 20.9947 26.2622 20.9947H23.4797C23.0157 20.9947 22.5706 20.8102 22.2425 20.482L19.25 17.4895V17.5ZM3.5 7H15.75C16.2141 7 16.6592 7.18437 16.9874 7.51256C17.3156 7.84075 17.5 8.28587 17.5 8.75V19.25C17.5 19.7141 17.3156 20.1592 16.9874 20.4874C16.6592 20.8156 16.2141 21 15.75 21H3.5C3.03587 21 2.59075 20.8156 2.26256 20.4874C1.93437 20.1592 1.75 19.7141 1.75 19.25V8.75C1.75 8.28587 1.93437 7.84075 2.26256 7.51256C2.59075 7.18437 3.03587 7 3.5 7ZM19.25 15.0325L23.4675 19.25H26.25V8.75H23.4675L19.25 12.9675V15.015V15.0325Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_1692_12037">
<rect width="28" height="28" fill="white"/>
</clipPath>
</defs>
</svg>

          </button>

        </div>

        {/* main video area */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full flex items-center justify-center relative">
            {/* background / video area */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              {cameraOff || !stream ? (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-white/40">Camera is off</div>
                </div>
              ) : (
                <video ref={videoRef} playsInline className="w-full h-full object-cover" />
              )}
            </div>

            {/* center start button */}
         
         {!isLive ? (
            <div className="absolute bottom-20 left-0 right-0 flex flex-col items-center justify-center z-40">
              <button
                onClick={handleStartLive}
                aria-label="start-live"
              >
                <svg width="76" height="75" viewBox="0 0 76 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="37.9999" cy="37.2047" r="30.6327" fill="white"/>
                  <circle cx="38.0016" cy="37.2048" r="35.2048" stroke="white" stroke-width="3.65764"/>
                </svg>
              </button>
              <div className="mt-3 text-sm text-yellow-400 font-medium">Start live video</div>
            </div>
          ) : (
            // وقتی لایو شروع شد، این input نمایش داده میشه
            <div className="absolute bottom-20 left-0 right-0 flex flex-col items-center z-40 gap-2">
            {/* کامنت input و دکمه */}
                        {/* لیست کامنت‌ها */}
            <div className="mt-4 w-80 max-h-64 overflow-y-auto flex flex-col gap-2">
              {comments.map(c => (
                <div key={c.id} className="flex items-start gap-2">
                  <img
                    src="/avatar-placeholder.jpg"
                    alt="avatar"
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <div className=" text-white text-xs px-3 py-1.5 rounded-2xl">
                    {c.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2">
            <button
                onClick={handleSendComment}
                className="rounded-full p-2 bg-[#205FCB]"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.39969 6.32015L15.8897 3.49015C19.6997 2.22015 21.7697 4.30015 20.5097 8.11015L17.6797 16.6002C15.7797 22.3102 12.6597 22.3102 10.7597 16.6002L9.91969 14.0802L7.39969 13.2402C1.68969 11.3402 1.68969 8.23015 7.39969 6.32015Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.1094 13.6501L13.6894 10.0601" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              </button>
              <input
                type="text"
                placeholder="Write a comment"
                value={commentInput}
                onChange={(e) => setCommentInput(e.target.value)}
                className="w-64 px-3 py-1.5 rounded-full border border-white/40 bg-black/70 text-white text-sm placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
         
            </div>
        
          </div>
          )}
          
          </div>
        </div>

        {/* bottom bar (dark) */}
        <div className="absolute bottom-0 left-0 right-0 h-14 bg-black/60 flex items-center justify-center z-20">
          <div className="text-xs text-white/60"> {/* left empty - could be status */}</div>
        </div>

 
      </div>
    </div>
  );
}
