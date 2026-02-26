import { ArrowRight, ExternalLink, Github } from "lucide-react";
import React from "react";

const projects = [
    {
        id: 1,
        title: "Anime Hub",
        description: "Anime list web app.",
        image: "/projects/project1.png",
        tags: ["React", "TailwindCSS", "Supabase"],
        demoUrl: "https://animehub-seven-zeta.vercel.app/",
        githubUrl: "https://github.com/IAmSidd2403/animehub",
        
    },
    {
        id: 2,
        title: "Library",
        description: " using a an api of Books library.",
        image: "/projects/project2.png",
        tags: ["EJS", "TailwindCSS", "HTML"],
        demoUrl: "#",
        githubUrl: "https://github.com/IAmSidd2403/Library",
        
    },
    {
        id: 3,
        title: "SaaS Landing Page",
        description: "A beautiful landing page app using React and Tailwind.",
        image: "/projects/project3.png",
        tags: ["React", "TailwindCSS", "Supabase"],
        demoUrl: "#",
        githubUrl: "#",
    }
];

export const ProjectsSection = () => {
    return (
        <section id = "projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center ">
                    Featured <span className="text-primary">Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my projects. Each project was crafted 
                    for my only the purpose of learning, and provide hends on experiences.
                </p>

                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project,key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                             <div className="h-48 ">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]" />
                             </div>

                             <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                   {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                                        {tag}
                                    </span>
                                   ))} 
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                    <p className="text-muted-foregrouond text-sm mb-4">{project.description}</p>
                                    <div className="flex justify-between items-center">

                                        <div className="flex space-x-3">
                                            <a href={project.demoUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300" target="_blank">
                                                {" "}
                                                <ExternalLink size={20}/>
                                            </a>
                                            <a href="" className="text-foreground/80 hover:text-primary transition-colors duration-300" target="_blank">
                                                {" "}
                                                <Github size={20}/>
                                            </a>
                                        </div>

                                    </div>
                                </div>
                             </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a href="https://github.com/IAmSidd2403" className="cosmic-button w-fit flex items-center mx-auto gap-2" target="_blank">
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>

            </div>
        </section>
    );
}