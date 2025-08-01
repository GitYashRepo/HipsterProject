import { projectsData } from "../../lib/data";


const About = () => {
  return (
      <div className="group mb-3 sm:mb-8 last:mb-0">
          <div className="w-full my-4 px-12">
                <h1 className="text-center text-4xl font-semibold">About Me</h1>
                <p className="mt-2 text-xl text-center leading-relaxed mb-8">My name is Yash Singh,Full Stack MERN Developer with over 2 years of freelance experience [created over 7-8 websites on my own including MERN Stack ecommerce website.] and a 5-month internship experience at Cloudify.Biz (Feb 6, 2025 – June 20, 2025), where I worked as a Frontend Developer managing their SaaS applications built using React, Redux on a turborepo folder structure, I have developed and enhanced a variety of SaaS and client-facing web applications.</p>
          <p className="text-center font-semibold">Name: Yash Singh</p>
          <p className="text-center font-semibold">Role Applying: Frontend React Developer Position</p>
          <p className="text-center font-semibold">Email: Singhyash3012@gmail.com</p>
          </div>
          <h1 className="text-center text-4xl font-semibold py-8">My projects</h1>
          {projectsData.map((project, index) => (
          <div key={index} className="flex justify-center items-center group mb-3 sm:mb-8 last:mb-0 mx-auto">
              <section className="max-w-[52rem] !h-auto rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] sm:group-even:pl-8 bg-background text-foreground border border-border flex flex-col items-center justify-center pb-4">
                  <div className="flex flex-row">
                      <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
                          <h3 className="text-2xl font-semibold">{project.title}</h3>
                          <p className="mt-2 leading-relaxed mb-8">
                            {project.description}
                          </p>
                      </div>

                      <div>
                          <img
                            src={project.imageUrl}
                            alt="Project I worked on"
                            className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-even:right-[initial] group-even:-left-40"
                          />
                      </div>
                </div>

                <div className="w-full flex flex-col justify-center items-center">
                    <ul className={`flex flex-wrap mt-4 gap-2 sm:mt-auto justify-center items-center`}>
                    {project.tags.map((tag, index) => (
                      <li
                        className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                        key={index}
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  {project.hosturl && (
                    <a
                      href={project.hosturl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 flex items-center justify-center inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition cursor-pointer"
                    >
                      View Live
                    </a>
                  )}
                </div>
              </section>
          </div>
      ))}
      </div>
    )
}

export default About
