export default function Intro (){

    return (
    <div id="alex" className="flex flex-col lg:flex-row items-center px-6 py-24 gap-12 max-w-5xl mx-auto" >
        
        <div className="space-y-4 bg-[#E2E8F0] p-4 rounded-xl w-full border border-slate-300 hover:bg-sky-50 hover:-translate-y-0.5 select-none">
            <div className="rounded-xl overflow-hidden bg-gradient-to-br from-slate-50 via-white to-sky-100">
                <img
                    src="/images/alex-no-bg.png"
                    alt="Professional Photo"
                    className="w-full"
                />
            </div>

            <p className="font-bold text-center">Alex Piroozfar</p>
        </div>

        <div className="space-y-3 text-center lg:text-left">
            <p>I am a dedicated engineering student and an aspiring software developer.</p>
            <p>I enjoy building web applications, security tools, and data-driven solutions.</p>

            <div className="flex flex-col items-center lg:flex-row gap-4">
                <a 
                    href="#projects" 
                    className="bg-[#0EA5E9] border border-sky-600 p-3 rounded font-bold hover:brightness-105 hover:scale-105 text-center inline-block w-48 hover:shadow-md">
                    View Projects
                </a>
                <a 
                    href="/Alex_Piroozfar.pdf" 
                    className="bg-[#0EA5E9] border border-sky-600 p-3 rounded font-bold hover:brightness-105 hover:scale-105 text-center inline-block w-48 hover:shadow-md" target="_blank">
                    View Resume
                </a>
            </div>
        </div>

    </div>
    )
}