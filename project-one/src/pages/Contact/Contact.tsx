import { Mail, Phone, Linkedin, Github, Globe, MessageCircle } from "lucide-react"


const Contact = () => {
  const whatsappNumber = "+918003316534"
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\+/g, "")}`
  const linkedinUrl = "https://www.linkedin.com/in/yash-singh-fullstackdev"
  const githubUrl = "https://github.com/GitYashRepo"
  const portfolioUrl = "https://yash-portfolio-dev.vercel.app/"

  return (
    <div className="container mx-auto px-4 py-8 min-h-[calc(100vh-120px)] flex items-center justify-center">
      <div className="w-full max-w-3xl bg-card text-card-foreground border-border shadow-lg rounded-md px-4 py-8">
        <div className="text-center pb-6">
          <h1 className="text-4xl font-bold text-foreground">Contact Me</h1>
          <p className="text-muted-foreground mt-2">I would love to hear from you!</p>
        </div>
        <div className="space-y-6 pt-10">
          <h2 className="text-2xl font-semibold text-foreground text-center">Reach out directly</h2>
          <div className="space-y-3 flex flex-col items-center">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Mail className="w-5 h-5 text-primary" />
              <span>singhyash3012@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Phone className="w-5 h-5 text-primary" />
              <a href="tel:+918003316534"><span>+91 80033-16534</span></a>
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-foreground mt-6 text-center pt-10">Connect with us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 justify-center items-center">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <button
                  className="w-full flex p-2 items-center justify-center bg-[#25D366] text-white hover:bg-[#25D366]/90 rounded-sm"
                >
                    <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp
                </button>
            </a>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                <button
                  className="w-full flex p-2 items-center justify-center border bg-blue-600 text-white rounded-sm"
                >
                    <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
                </button>
            </a>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <button
                  className="w-full flex p-2 items-center justify-center border bg-zinc-800 rounded-sm text-white"
                >
                    <Github className="mr-2 h-5 w-5" /> GitHub
                </button>
            </a>
            <a href={portfolioUrl} target="_blank" rel="noopener noreferrer">
                <button
                  className="w-full flex p-2 items-center justify-center bg-white text-black border rounded-sm"
                >
                    <Globe className="mr-2 h-5 w-5" /> Portfolio
                </button>
            </a>
          </div>
        </div>
        </div>
      </div>
  )
}

export default Contact
