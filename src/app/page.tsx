import {
  PORTFOLIO,
  NAV_LINKS,
  SKILLS,
  PROJECTS,
  EXPERIENCES,
  EDUCATION,
  LANGUAGES,
  ACHIEVEMENTS,
} from "@/data/portfolio";

function MailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
      />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
      />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0"
      />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col flex-1 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-card-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-xl font-bold text-accent">
            {PORTFOLIO.initials}
          </a>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-accent/[0.02] to-transparent" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(56,189,248,0.05) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        {/* Floating code snippets */}
        <div className="absolute inset-0 select-none pointer-events-none overflow-hidden" aria-hidden="true">
          <span className="absolute top-[5%] left-[3%] text-accent/[0.07] text-xs font-mono rotate-[-8deg]">&lt;html lang=&quot;en&quot;&gt;</span>
          <span className="absolute top-[8%] left-[30%] text-accent/[0.07] text-sm font-mono rotate-[4deg]">import &#123; useState &#125; from &quot;react&quot;;</span>
          <span className="absolute top-[6%] right-[5%] text-accent/[0.07] text-xs font-mono rotate-[-3deg]">npm install next</span>
          <span className="absolute top-[12%] left-[8%] text-accent/[0.07] text-sm font-mono rotate-[-12deg]">&lt;div className=&quot;app&quot;&gt;</span>
          <span className="absolute top-[14%] left-[55%] text-accent/[0.07] text-xs font-mono rotate-[7deg]">const router = useRouter();</span>
          <span className="absolute top-[11%] right-[12%] text-accent/[0.07] text-xs font-mono rotate-[-5deg]">yarn add prisma</span>
          <span className="absolute top-[18%] left-[20%] text-accent/[0.07] text-xs font-mono rotate-[2deg]">interface User &#123; id: number; name: string &#125;</span>
          <span className="absolute top-[20%] right-[8%] text-accent/[0.07] text-sm font-mono rotate-[10deg]">export async function GET(req) &#123;</span>
          <span className="absolute top-[22%] right-[35%] text-accent/[0.07] text-xs font-mono rotate-[8deg]">const data = await fetch(url);</span>
          <span className="absolute top-[25%] left-[5%] text-accent/[0.07] text-xs font-mono rotate-[-6deg]">return NextResponse.json(data);</span>
          <span className="absolute top-[28%] left-[45%] text-accent/[0.07] text-sm font-mono rotate-[3deg]">CREATE TABLE posts (</span>
          <span className="absolute top-[30%] right-[3%] text-accent/[0.07] text-lg font-mono rotate-[15deg]">&#123;...&#125;</span>
          <span className="absolute top-[32%] left-[10%] text-accent/[0.07] text-xs font-mono rotate-[6deg]">export default function Home() &#123;</span>
          <span className="absolute top-[35%] right-[20%] text-accent/[0.07] text-xs font-mono rotate-[-9deg]">app.use(express.json());</span>
          <span className="absolute top-[37%] left-[60%] text-accent/[0.07] text-xs font-mono rotate-[4deg]">@Controller(&quot;/api&quot;)</span>
          <span className="absolute top-[40%] left-[2%] text-accent/[0.07] text-xs font-mono rotate-[-4deg]">SELECT * FROM users WHERE id = $1;</span>
          <span className="absolute top-[42%] right-[10%] text-accent/[0.07] text-sm font-mono rotate-[6deg]">docker build -t app .</span>
          <span className="absolute top-[44%] left-[35%] text-accent/[0.07] text-xs font-mono rotate-[-2deg]">const [state, setState] = useState(null);</span>
          <span className="absolute top-[47%] right-[40%] text-accent/[0.07] text-xs font-mono rotate-[11deg]">redis.set(&quot;key&quot;, value);</span>
          <span className="absolute top-[50%] left-[3%] text-accent/[0.07] text-sm font-mono rotate-[-10deg]">&lt;/&gt;</span>
          <span className="absolute top-[52%] left-[50%] text-accent/[0.07] text-xs font-mono rotate-[5deg]">prisma.user.findMany()</span>
          <span className="absolute top-[48%] right-[5%] text-accent/[0.07] text-xs font-mono rotate-[-7deg]">npm run build</span>
          <span className="absolute top-[55%] left-[15%] text-accent/[0.07] text-xs font-mono rotate-[8deg]">useEffect(() =&gt; &#123; ... &#125;, []);</span>
          <span className="absolute top-[58%] right-[25%] text-accent/[0.07] text-sm font-mono rotate-[-3deg]">git commit -m &quot;feat: init&quot;</span>
          <span className="absolute top-[60%] left-[40%] text-accent/[0.07] text-xs font-mono rotate-[9deg]">res.status(200).json(&#123; ok: true &#125;);</span>
          <span className="absolute top-[62%] left-[5%] text-accent/[0.07] text-xs font-mono rotate-[-5deg]">INSERT INTO orders VALUES ($1, $2);</span>
          <span className="absolute top-[65%] right-[8%] text-accent/[0.07] text-xs font-mono rotate-[3deg]">async function handler(req, res) &#123;</span>
          <span className="absolute top-[67%] left-[25%] text-accent/[0.07] text-sm font-mono rotate-[-8deg]">module.exports = config;</span>
          <span className="absolute top-[68%] right-[14%] text-accent/[0.07] text-sm font-mono rotate-[10deg]">git push origin main</span>
          <span className="absolute top-[70%] left-[55%] text-accent/[0.07] text-xs font-mono rotate-[2deg]">@Injectable()</span>
          <span className="absolute top-[72%] left-[8%] text-accent/[0.07] text-xs font-mono rotate-[6deg]">ng serve --port 4200</span>
          <span className="absolute top-[75%] right-[30%] text-accent/[0.07] text-xs font-mono rotate-[-4deg]">JWT.verify(token, secret);</span>
          <span className="absolute top-[78%] left-[18%] text-accent/[0.07] text-xs font-mono rotate-[3deg]">&#123; &quot;status&quot;: 200, &quot;data&quot;: [] &#125;</span>
          <span className="absolute top-[80%] right-[5%] text-accent/[0.07] text-xs font-mono rotate-[-6deg]">bcrypt.hash(password, 10);</span>
          <span className="absolute top-[82%] left-[40%] text-accent/[0.07] text-sm font-mono rotate-[7deg]">pm2 start server.js</span>
          <span className="absolute top-[85%] right-[25%] text-accent/[0.07] text-xs font-mono rotate-[5deg]">docker-compose up -d</span>
          <span className="absolute top-[87%] left-[10%] text-accent/[0.07] text-xs font-mono rotate-[-3deg]">npx prisma migrate dev</span>
          <span className="absolute top-[90%] left-[50%] text-accent/[0.07] text-xs font-mono rotate-[8deg]">ALTER TABLE users ADD COLUMN email;</span>
          <span className="absolute top-[92%] right-[15%] text-accent/[0.07] text-sm font-mono rotate-[-5deg]">export &#123; default &#125; from &quot;./App&quot;;</span>
          <span className="absolute top-[95%] left-[25%] text-accent/[0.07] text-xs font-mono rotate-[4deg]">console.log(&quot;Server running&quot;);</span>
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-8">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
              </span>
              Available for opportunities
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            {PORTFOLIO.name.split(" ").slice(0, -1).join(" ")}
            <span className="block text-accent">
              {PORTFOLIO.name.split(" ").slice(-1)}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted max-w-2xl mx-auto mb-10">
            {PORTFOLIO.tagline}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted">
            <a
              href={`mailto:${PORTFOLIO.email}`}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-card-border hover:border-accent/50 transition-colors"
            >
              <MailIcon />
              {PORTFOLIO.email}
            </a>
            <a
              href={`https://wa.me/${PORTFOLIO.phone.replace(/[\s+]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-card-border hover:border-accent/50 transition-colors"
            >
              <WhatsAppIcon />
              WhatsApp
            </a>
            <a
              href={`tel:${PORTFOLIO.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-card-border hover:border-accent/50 transition-colors"
            >
              <PhoneIcon />
              {PORTFOLIO.phone}
            </a>
            <a
              href={PORTFOLIO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-card-border hover:border-accent/50 transition-colors"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
            <a
              href={PORTFOLIO.cvPath}
              download
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-background font-medium hover:bg-accent-hover transition-colors"
            >
              <DownloadIcon />
              Download CV
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading title="About Me" />
          <div className="max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed text-muted">
              {PORTFOLIO.summary}
            </p>
            <div className="mt-10">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-accent mb-5">
                Languages I Speak
              </h3>
              <div className="flex flex-wrap gap-6">
                {LANGUAGES.map((lang) => (
                  <div key={lang.name} className="flex items-center gap-3">
                    <div className="relative w-12 h-12">
                      <svg className="w-12 h-12 -rotate-90" viewBox="0 0 36 36">
                        <circle
                          cx="18"
                          cy="18"
                          r="15.5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          className="text-card-border"
                        />
                        <circle
                          cx="18"
                          cy="18"
                          r="15.5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeDasharray={`${lang.percent * 0.974} 100`}
                          strokeLinecap="round"
                          className="text-accent"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-foreground text-sm">
                        {lang.name}
                      </div>
                      <div className="text-xs text-muted">{lang.level}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-card/50">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading title="Technical Skills" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(SKILLS).map(([category, items]) => (
              <div
                key={category}
                className="p-6 rounded-2xl bg-card border border-card-border"
              >
                <h3 className="text-lg font-semibold text-accent mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-background text-sm text-foreground border border-card-border hover:border-accent/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading title="Projects" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <div
                key={project.name}
                className="p-6 rounded-2xl bg-card border border-card-border hover:border-accent/30 transition-colors flex flex-col"
              >
                <div className="text-accent text-sm font-medium mb-2">
                  {project.company}
                </div>
                <h3 className="text-xl font-bold mb-3">{project.name}</h3>
                <p className="text-sm text-muted leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent/10 text-accent text-sm hover:bg-accent/20 transition-colors"
                    >
                      <ExternalLinkIcon />
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading title="Work Experience" />
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-card-border md:-translate-x-px" />

            <div className="space-y-12">
              {EXPERIENCES.map((exp, i) => (
                <div
                  key={i}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    i % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-3 h-3 rounded-full bg-accent border-2 border-background -translate-x-[5px] md:-translate-x-[7px] mt-2" />

                  <div className="md:w-1/2" />
                  <div
                    className={`md:w-1/2 ml-6 md:ml-0 ${
                      i % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div className="p-6 rounded-2xl bg-card border border-card-border hover:border-accent/30 transition-colors">
                      <div className="flex items-center gap-2 text-accent text-sm font-medium mb-2">
                        <span>{exp.period}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                      <p className="text-accent/80 font-medium mb-1">
                        {exp.company}
                      </p>
                      <p className="flex items-center gap-1 text-muted text-sm mb-4">
                        <MapPinIcon />
                        {exp.location}
                      </p>
                      <ul className="space-y-2">
                        {exp.points.map((point, j) => (
                          <li
                            key={j}
                            className="text-sm text-muted leading-relaxed flex gap-2"
                          >
                            <span className="text-accent mt-1.5 shrink-0">
                              &#x2022;
                            </span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 bg-card/50">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading title="Education" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {EDUCATION.map((edu) => (
              <div
                key={edu.degree}
                className="p-6 rounded-2xl bg-card border border-card-border"
              >
                <div className="text-accent text-sm font-medium mb-2">
                  {edu.period}
                </div>
                <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                <p className="text-muted">{edu.institution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading title="Achievements" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {ACHIEVEMENTS.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-card border border-card-border text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center text-accent text-2xl">
                  {item.icon}
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-card/50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <SectionHeading title="Get In Touch" />
          <p className="text-muted max-w-xl mx-auto mb-10">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your team.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${PORTFOLIO.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-background font-medium hover:bg-accent-hover transition-colors"
            >
              <MailIcon />
              Send Email
            </a>
            <a
              href={PORTFOLIO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-card-border text-foreground font-medium hover:border-accent/50 transition-colors"
            >
              <LinkedInIcon />
              LinkedIn Profile
            </a>
            <a
              href={PORTFOLIO.cvPath}
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-card-border text-foreground font-medium hover:border-accent/50 transition-colors"
            >
              <DownloadIcon />
              Download CV
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-card-border">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-muted">
          &copy; {new Date().getFullYear()} {PORTFOLIO.name}. All
          rights reserved.
        </div>
      </footer>
    </div>
  );
}

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
      <div className="mt-4 mx-auto w-20 h-1 rounded-full bg-accent" />
    </div>
  );
}
