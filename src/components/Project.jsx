export default function Project ({projectImg, projectName, projectDesc, techStack, gitLink}){
    return (
    <div className="space-y-4 bg-[#E2E8F0] p-4 rounded-xl w-full border border-slate-300 hover:bg-sky-50 hover:-translate-y-0.5 select-none shadow-sm hover:shadow-lg">
        <div className="flex justify-center">
            <img src={projectImg} alt="Project Photo" className="w-full rounded-xl"/>
        </div>

        <p className="text-center font-bold">{projectName}</p>
        <p className="text-center">{projectDesc}</p>
        <p className="text-center">{techStack}</p>

        <div className="flex justify-center">
            <a 
                href={gitLink}
                className="bg-[#0EA5E9] border border-sky-600 p-1 rounded font-bold hover:brightness-105 hover:scale-105 text-center inline-block hover:shadow-md">
                Github
            </a>
        </div>
    </div>
    )
}
