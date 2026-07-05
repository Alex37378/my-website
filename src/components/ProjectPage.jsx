import Project from "../components/Project"

export default function ProjectPage (){
    return (
        <div id="projects" className="max-w-5xl mx-auto px-6 py-24">

            <h1 className="mb-6 font-bold text-3xl text-center lg:text-left">Projects</h1>
            <div className="pb-24 grid grid-cols-1 md:grid-cols-2 gap-6">

                {/*
                <Project
                    projectImg="/images/pattrick.png"
                    projectName="Network Intrusion Detection System"
                    projectDesc="Built a Python-based intrusion detection system that monitors network traffic and identifies suspicious activity and security threats in real time."
                    techStack="Stack: Python, Pandas, Wireshark."
                    gitLink=""
                />

                <Project
                    projectImg="/images/pattrick.png"
                    projectName="Interactive Geography Game Platform"
                    projectDesc="Built an interactive web-based platform that helps users learn countries, capitals, and maps through quizzes, timed challenges, and more. Focused on making learning engaging through game-like mechanics."
                    techStack="Stack: React, REST APIs, GeoJSON."
                    gitLink=""
                />

                <Project
                    projectImg="/images/pattrick.png"
                    projectName="Data Lakehouse Analytics System"
                    projectDesc="Built a data lakehouse system that ingests, processes, and analyzes Wikipedia data to extract structured insights."
                    techStack="Stack: Python, SQL, Apache Spark, Databricks, Wikimedia Dumps."
                    gitLink=""
                />

                <Project
                    projectImg="/images/pattrick.png"
                    projectName="Mobile Game"
                    projectDesc="Built a mobile game featuring responsive player movement, collision detection, and level-based gameplay."
                    techStack="Stack: Unity."
                    gitLink=""
                />
                */}

                <Project
                    projectImg="/images/utrack.png"
                    projectName="UTrack"
                    projectDesc="Built a web application with a dashboard for visualizing student team productivity metrics to support professors in analyzing team performance."
                    techStack="Stack: React, Node.js, Express, MongoDB, Docker."
                    gitLink="https://github.com/h0nt3d/UTrack.git" 
                />

            </div>

        </div>
    )
}