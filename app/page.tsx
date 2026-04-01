export default function DanceTeamWebsite() {
  const upcomingEvents = [
    { date: 'May', title: 'Practice Begins', location: 'Sinchon' },
    { date: 'December', title: 'Performance', location: 'TBD' },
  ];

  const teamMembers = [
    { name: 'Kim Gyury', role: 'Director and Producer', image:'/images/members/orange.avif' },
    { name: 'Kim Haeun', role: 'Director',image:'' },
    { name: 'Jo Minseo', role: 'Director',image:'' },
    { name: 'Jung Jaehoon', role: 'Director and Choreographer',image:'' },
    { name: 'Oh Jimin', role: 'Member',image:'' },
    { name: 'Kim Sangyeon', role: 'Member',image:'' },
    { name: 'Kim Yeogyeong', role: 'Member',image:'' },
    { name: 'Kim Taeyoon', role: 'Member',image:'' },
    { name: 'Kim Sooyeon', role: 'Member',image:'' },
    { name: 'Oh On', role: 'Member',image:'' },
    { name: '? Hyeonjeong', role: 'Member',image:'' },
  ];

  const gallery = [
    { src: '/images/bwstage.jpg', alt: 'Black and white stage performance' },
    { src: '/images/group.jpg', alt: 'Diadent group photo' },
    { src: '/images/poster.jpg', alt: 'Diadent poster' },
    { src: '/images/stage.jpg', alt: 'Stage performance' },
  ];

  return (
    <div className="min-h-screen text-white relative bg-black">
      {/* background image*/}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: "url('/images/background.png')" }}
      />

      {/* dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/25 via-black/55 to-indigo-950/20" />
      {/* light glow to keep aesthetic */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_30%,rgba(255,255,255,0.08),transparent_10%)]" />

      <div className="relative z-10">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-blue-500/5" />
          <div className="relative mx-auto max-w-6xl px-6 py-24">
            <nav className="mb-16 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur">
              <div>
                <p className="text-lg font-semibold tracking-wide">DIADENT</p>
                <p className="text-sm text-white/60">the trace of our light</p>
              </div>
              <div className="hidden gap-6 text-sm md:flex text-white/80">
                <a href="#about" className="transition hover:text-white hover:opacity-100">About</a>
                <a href="#events" className="transition hover:text-white hover:opacity-100">Events</a>
                <a href="#team" className="transition hover:text-white hover:opacity-100">Team</a>
                <a href="#join" className="transition hover:text-white hover:opacity-100">Contact</a>
              </div>
            </nav>

            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <p className="mb-4 text-sm uppercase tracking-[0.3em] text-indigo-300">Team Diadent</p>
                <h1 className="mb-6 text-5xl font-medium leading-tight md:text-6xl">
                  Placeholder Message
                </h1>
                <p className="mb-8 max-w-xl text-lg text-white/70">
                  We are a dance and performance team based in Seoul, Korea. 
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#join" className="rounded-2xl bg-white px-5 py-3 font-medium text-black shadow-lg shadow-white/10">
                    Contact
                  </a>
                  <a href="#events" className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white">
                    See Events
                  </a>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
                  <div className="aspect-[4/3] rounded-[1.75rem] overflow-hidden border border-white/10">
                    <img
                      src="/images/groupmain.jpg"
                      alt="Diadent main group"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                    <p className="text-2xl font-semibold">##</p>
                    <p className="text-sm text-white/60">??</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                    <p className="text-2xl font-semibold">##</p>
                    <p className="text-sm text-white/60">??</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                    <p className="text-2xl font-semibold">##</p>
                    <p className="text-sm text-white/60">??</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <p className="mb-3 text-sm uppercase tracking-[0.25em] text-white/50">About</p>
              <h2 className="mb-4 text-3xl font-semibold">Our Story</h2>
              <p className="text-white/70">
                Starting with our individual dreams and united by the goal "빛의 흔적을 따라", we are artists on a journey of discovery, blahblah...
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <p className="mb-3 text-sm uppercase tracking-[0.25em] text-white/50">Our Vision</p>
              <ul className="space-y-3 text-white/70">
                <li>• 몰라용</li>
                <li>• 몰라용</li>
                <li>• 몰라용</li>
                <li>• 몰라용</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="events" className="mx-auto max-w-6xl px-6 py-10">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.25em] text-white/50">Events</p>
              <h2 className="text-3xl font-semibold">Upcoming schedule</h2>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {upcomingEvents.map((event) => (
              <div key={event.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                <p className="mb-3 text-sm text-indigo-300">{event.date}</p>
                <h3 className="mb-2 text-xl font-semibold">{event.title}</h3>
                <p className="text-white/60">{event.location}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="team" className="mx-auto max-w-6xl px-6 py-20">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-white/50">Team</p>
          <h2 className="mb-8 text-3xl font-semibold">Our Members</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <div key={member.name + member.role} className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <div className="mb-4 aspect-square overflow-hidden rounded-[1.5rem] bg-white/10">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                ) : null}
              </div>                
              <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-white/60">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-4">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-white/50">Gallery</p>
          <h2 className="mb-8 text-3xl font-semibold">Our Work</h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {gallery.map((item) => (
              <div
                key={item.src}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 transition duration-300 hover:border-white/20 hover:bg-white/[0.07]"
              >              <img
                src={item.src}
                alt={item.alt}
                className="aspect-[3/4] w-full object-cover transition duration-500 hover:scale-105 hover:opacity-90"
              />              
              </div>
            ))}
          </div>
        </section>

        <section id="join" className="mx-auto max-w-6xl px-6 py-20">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 md:p-12">
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-white/50">Contact Information</p>
            <h2 className="mb-4 text-3xl font-semibold">Contact us</h2>
            <p className="mb-8 max-w-2xl text-white/70">
              Reach out to us for collaborations or inquiries. <br />
              Email: gyury1208@naver.com <br />
              Instagram: @diadent__
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://mail.google.com/mail/?view=cm&to=gyury1208@naver.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-white px-5 py-3 font-medium text-black"
              >
                Email
              </a>
              <a 
                href="https://www.instagram.com/diadent__/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white"
              >
                Instagram
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
