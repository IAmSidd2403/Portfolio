import React, {useState} from "react";
import { cn } from "@/lib/utils";


const skills = [
  // Frontend
  { name: "HTML", level: 90, category: "frontend" },
  { name: "CSS", level: 85, category: "frontend" },
  { name: "JavaScript", level: 80, category: "frontend" },
  { name: "React.js", level: 78, category: "frontend" },
  { name: "Material UI", level: 72, category: "frontend" },
  

  // Backend
  { name: "Node.js", level: 75, category: "backend" },
  { name: "Express.js", level: 72, category: "backend" },
  { name: "Python", level: 10, category: "backend" },
  { name: "Django", level: 10, category: "backend" },
  { name: "Java", level: 10, category: "backend" },

  // Databases
  { name: "PostgreSQL", level: 70, category: "database" },
  { name: "MySQL", level: 65, category: "database" },

  // Cyber Security & Ethical Hacking
  { name: "Network Scanning (Nmap)", level: 80, category: "cybersecurity" },
  { name: "Packet Sniffing (Scapy)", level: 75, category: "cybersecurity" },
  { name: "Metasploit Framework", level: 72, category: "cybersecurity" },
  { name: "Burp Suite", level: 75, category: "cybersecurity" },
  { name: "Wireshark", level: 80, category: "cybersecurity" },
  


  // Programming & DSA
  { name: "C++", level: 50, category: "programming" },
  

  // Tools
  { name: "Git & GitHub", level: 80, category: "tools" },
  { name: "VS Code", level: 85, category: "tools" },
  { name: "Postman", level: 75, category: "tools" },

  
];

const categories = ["all", "frontend" , "backend", "database", "cybersecurity", "programming", "tools"]

export const SkillsSection = () => {

    const [activeCategory,setActiveCategory] = useState("all");
    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    );
    return (
        <section id="skills" className="py-24 px-4 relative bg-secondry/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12 ">
                     {categories.map((category,key) => (
                        <button key = {key} onClick={() =>setActiveCategory(category)} 
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondry/70 text-foreground hover:bg-secondry"
                            )}
                        >
                            {category}
                        </button>
                     ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill,key) =>(
                        <div key = {key} className = "bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">
                                    {skill.name}
                                </h3>
                            </div>
                            <div className="w-full bg-secondry/50 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out" style ={{width: skill.level + "%"}}/>
                            </div>

                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                        </div>
                        

                    ))}
                </div>
            </div>
        </section>
    )
}