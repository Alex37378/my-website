export default function Page({ children }) {
  return (
    <div className="relative min-h-screen">

      {/* BACKGROUND BLOBS */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">

        <img src="/shapes/blob1.svg" className="hidden xl:block absolute left-[-110px] top-[0vh] w-[420px] opacity-60" style={{ animation: "float 6s ease-in-out infinite" }} />
        <img src="/shapes/blob2.svg" className="hidden xl:block absolute left-[-210px] top-[40vh] w-[460px] opacity-60" style={{ animation: "float 6s ease-in-out infinite" }} />
        <img src="/shapes/blob3.svg" className="hidden xl:block absolute left-[-100px] top-[85vh] w-[400px] opacity-60" style={{ animation: "float 6s ease-in-out infinite" }}/>

        <img src="/shapes/blob4.svg" className="hidden xl:block absolute right-[-165px] top-[20vh] w-[380px] opacity-60" style={{ animation: "float 6s ease-in-out infinite" }}/>
        <img src="/shapes/blob5.svg" className="hidden xl:block absolute right-[-180px] top-[60vh] w-[460px] opacity-60" style={{ animation: "float 6s ease-in-out infinite" }}/>

      </div>

      {/* CONTENT */}
      <div className="relative z-10">
        {children}
      </div>

    </div>
  );
}