export default function Contact (){

    return (
        <div id="contact" className="space-y-4 py-24 flex flex-col items-center lg:items-start max-w-5xl mx-auto px-6">
            <h1 className="font-bold text-3xl mb-6">Contact</h1>

            <p className="text-center lg:text-left">I am currently looking for co-op opportunities in software development and would be excited to contribute to real-world teams. Feel free to reach out!</p>
            
            <p className="bg-[#E2E8F0] p-2 rounded-full border border-slate-300 hover:bg-sky-50 hover:-translate-y-0.5 select-none inline-block shadow-sm">📧 alexpirooz.04@gmail.com</p>

            <div className="flex gap-4">
                <a href="mailto:alexpirooz.04@gmail.com" className="bg-[#0EA5E9] border border-sky-600 p-3 rounded font-bold hover:brightness-105 hover:scale-105 hover:shadow-md">Email Me</a>
                <a href="https://www.linkedin.com/in/alex-piroozfar-550926311/" className="bg-[#0EA5E9] border border-sky-600 p-3 rounded font-bold hover:brightness-105 hover:scale-105 hover:shadow-md" target="_blank">LinkedIn</a>
                <a href="https://github.com/Alex37378" className="bg-[#0EA5E9] border border-sky-600 p-3 rounded font-bold hover:brightness-105 hover:scale-105 hover:shadow-md" target="_blank">Github</a>
            </div>
        </div>
    )
}








