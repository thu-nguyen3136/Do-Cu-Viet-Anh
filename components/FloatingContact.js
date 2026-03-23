import { useEffect, useState } from 'react';

export function FloatingContact() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* FLOATING CONTACT BUTTONS - Bottom Corner Icons */}
      
      {/* Left: Phone Button with Icon + Number (New Glossy Pill Design) */}
      <a
        href="tel:0988257479"
        className="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-50 flex items-center group hover:no-underline"
        title="Gọi điện ngay"
        aria-label="Gọi điện"
      >
        <div className="relative flex items-center">
          {/* Ring Animations centered on the icon */}
          <div className="absolute left-0 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center ml-1">
            <div className="absolute w-12 h-12 md:w-14 md:h-14 bg-brand-500 rounded-full animate-ping opacity-60"></div>
            <div className="absolute w-16 h-16 md:w-20 md:h-20 border-2 border-brand-500 rounded-full animate-ping opacity-40" style={{ animationDuration: '1.5s' }}></div>
            <div className="absolute w-20 h-20 md:w-24 md:h-24 border border-brand-500 rounded-full animate-ping opacity-20" style={{ animationDuration: '2s' }}></div>
          </div>

          {/* Pill Container */}
          <div className="relative flex items-center bg-[#e08a0d] group-hover:bg-[#bc700a] rounded-full shadow-[0_4px_15px_rgba(224,138,13,0.5)] transition-all duration-300 transform group-hover:scale-105 border border-[#e59524] overflow-hidden ml-1">
            
            {/* Glossy top overlay (no horizontal line) */}
            <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-white/20 to-transparent pointer-events-none"></div>
            
            {/* Phone Icon Circle */}
            <div className="relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#e59524] to-[#e08a0d] rounded-full border-[3px] border-[#efbe7a] shadow-[inset_0_2px_4px_rgba(255,255,255,0.4)] z-10 mx-[2px] my-[2px]">
              <svg 
                className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:rotate-12 transition-transform duration-300" 
                fill="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
              </svg>
            </div>

            {/* Text */}
            <div className="px-3 md:px-5 pr-4 md:pr-7 relative z-10">
              <span className="text-white font-black text-[17px] md:text-xl tracking-wider drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
                0988.257.479
              </span>
            </div>
          </div>
        </div>
      </a>

      {/* Right: SMS Icon (Orange background for harmony) */}
      <a
        href="sms:0988257479"
        className="fixed bottom-6 right-6 z-40 group hover:no-underline"
        title="Gửi SMS"
        aria-label="Gửi tin nhắn SMS"
      >
        <div className="w-12 h-12 md:w-14 md:h-14 bg-brand-500 hover:bg-brand-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl hover:shadow-brand-500/50 hover:scale-110 transition-all duration-300 transform">
          <svg 
            className="w-6 h-6 md:w-7 md:h-7 text-white" 
            fill="currentColor" 
            viewBox="0 0 512 512"
            aria-hidden="true"
          >
            <path d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 9.8 11.2 15.5 19.1 9.7L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zM128 240c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm128 0c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm128 0c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24z"/>
          </svg>
        </div>
      </a>

      {/* Right: Zalo Icon (Orange background with Wiki Avatar) */}
      <a
        href="https://zalo.me/0988257479"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 z-40 group hover:no-underline"
        title="Chat Zalo"
        aria-label="Liên hệ qua Zalo"
      >
        <div className="w-12 h-12 md:w-14 md:h-14 bg-brand-600 hover:bg-brand-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl hover:shadow-brand-600/50 hover:scale-110 transition-all duration-300 transform">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg" 
            alt="Zalo" 
            className="w-8 h-8 md:w-9 md:h-9 object-contain" 
            aria-hidden="true"
          />
        </div>
      </a>
    </>
  );
}