import { Briefcase, Code } from "lucide-react";


export const AboutSection = () => {
    return(
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">

                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About<span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12  item-center">

                    <div className="space-y-6">

                        

                        <p className="text-muted-foreground">
                            I am a <strong>web developer</strong> with a strong <strong>cybersecurity background</strong>, experienced in developing  
                            <strong> modern web applications</strong> while implementing <strong>secure-by-design principles</strong>. 
                            My skill set includes <strong>frontend and backend development</strong> , 
                            <strong> authentication and authorization</strong>, <strong>API security</strong>, and  
                            <strong> database protection</strong>, alongside hands-on experience in  
                            <strong> penetration testing</strong>, <strong>vulnerability assessment</strong>, and  
                            <strong> threat mitigation</strong>. 
                            I am passionate about <strong>bridging the gap between development and security</strong> to deliver  
                            <strong> reliable, attack-resistant digital solutions</strong>.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">{""}Get In Touch</a>
                            <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">{""} Download CV</a>

                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border  p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4>Web Development</h4>
                                    <h4>Cyber Security</h4>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}