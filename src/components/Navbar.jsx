import {useState, useEffect} from "react";

export default function Navbar () {

    const [hamOpen, useHamOpen] = useState(false)

    function ham(){
        useHamOpen(prev => !prev)
    }
    function closeHam(){
        useHamOpen(false)
    }
    useEffect(() => {
        function handleScroll() {
            useHamOpen(false);
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>

            <nav className="fixed z-50 flex p-4 items-center bg-white w-full justify-between border-b border-slate-200 shadow-sm">
                
                <a href="#alex" className="font-bold hover:bg-slate-100 rounded p-2">Alex Piroozfar</a>

                <button className="md:hidden text-3xl hover:bg-slate-100 rounded p-2" onClick={ham}>{!hamOpen ? "☰" : "✕" }</button>
                <div className="hidden md:flex gap-4 items-center">
                    <a href="#about" className="font-bold hover:bg-slate-100 rounded p-2">About</a>
                    <a href="#skills" className="font-bold hover:bg-slate-100 rounded p-2">Skills</a>
                    <a href="#projects" className="font-bold hover:bg-slate-100 rounded p-2">Projects</a>
                    <a href="#education" className="font-bold hover:bg-slate-100 rounded p-2">Education</a>
                    <a href="#contact" className="font-bold hover:bg-slate-100 rounded p-2">Contact</a>
                    <a 
                        href="/Alex_Piroozfar.pdf" 
                        className="font-bold bg-[#0EA5E9] p-1 rounded hover:brightness-105 hover:scale-105" 
                        target="_blank">
                        Resume
                    </a>
                </div>

                {hamOpen && (
                    <div className="bg-white rounded border border-slate-400 md:hidden flex flex-col absolute right-4 top-16 w-40 absolute">
                        <a href="#about" className="font-bold text-center hover:bg-slate-100 rounded p-2" onClick={closeHam}>About</a>
                        <a href="#skills" className="font-bold text-center hover:bg-slate-100 rounded p-2" onClick={closeHam}>Skills</a>
                        <a href="#projects" className="font-bold text-center hover:bg-slate-100 rounded p-2" onClick={closeHam}>Projects</a>
                        <a href="#education" className="font-bold text-center hover:bg-slate-100 rounded p-2" onClick={closeHam}>Education</a>
                        <a href="#contact" className="font-bold text-center hover:bg-slate-100 rounded p-2" onClick={closeHam}>Contact</a>
                        <a 
                            href="/Alex_Piroozfar.pdf" 
                            className="text-center font-bold bg-[#0EA5E9] p-1 rounded hover:brightness-105 hover:scale-105"
                            onClick={closeHam}
                            target="_blank">
                            Resume
                        </a>
                    </div>
                )}
            </nav>
        </div>
    ) 
}



