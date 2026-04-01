export default function DanceTeamWebsiteStarter() {
  const upcomingEvents = [
    { date: 'May 1', title: 'Practice Begins', location: 'Sinchon' },
    { date: 'December', title: 'Performance', location: 'TBD' },
  ];

  const teamMembers = [
    { name: 'Kim Gyuri', role: 'Director' },
    { name: 'Kim Haeun', role: 'Director' },
    { name: 'Jo Minseo', role: 'Director' },
    { name: 'Jung Jaehoon', role: 'Director and Choreographer' },
    { name: 'Oh Jimin', role: 'Dancer' },
    { name: 'Kim Sangyeon', role: 'Dancer' },
    { name: 'Kim Yeogyeong', role: 'Dancer' },
    { name: 'Kim Taeyoon', role: 'Dancer' },
    { name: 'Kim Sooyeon', role: 'Dancer' },
    { name: 'Oh On', role: 'Dancer' },
    { name: '? Hyeonjeong', role: 'Dancer' },
  ];

  const gallery = [
    'Performance highlights',
    'Practice room moments',
    'Backstage team photo',
  ];

  return (
    <div className="min-h-screen text-white relative bg-black">
      {/* near-black starry background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564')] bg-cover bg-center opacity-20" />

      {/* subtle star glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(99,102,241,0.15),transparent_50%)]" />

      {/* strong dark overlay for true midnight feel */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#000000]/95 via-[#020617]/95 to-[#0f172a]/90" />

      {/* content */}
      <div className="relative z-10">

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-transparent to-blue-500/5" />
        <div className="relative mx-auto max-w-6xl px-6 py-24">
          <nav className="mb-16 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur">
            <div>
              <p className="text-lg font-semibold tracking-wide">DIADENT</p>
              <p className="text-sm text-white/60">The Trace of Our Light</p>
            </div>
            <div className="hidden gap-6 text-sm md:flex text-white/80">
              <a href="#about" className="hover:text-white">About</a>
              <a href="#events" className="hover:text-white">Events</a>
              <a href="#team" className="hover:text-white">Team</a>
              <a href="#join" className="hover:text-white">Contact Us</a>
            </div>
          </nav>

          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-indigo-300">Team Diadent</p>
              <h1 className="mb-6 text-5xl font-medium leading-tight md:text-6xl">
                *
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
                <div className="aspect-[4/3] rounded-[1.5rem] border border-dashed border-white/15 bg-gradient-to-br from-indigo-900/20 to-blue-700/10 p-6">
                  <div className="flex h-full items-end rounded-[1.25rem] bg-black/40 p-4 text-sm text-white/70">
                    team photo or performance video.
                  </div>
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
              Write a warm, clear intro here: what your team represents, what styles you focus on, what kind of performances you do, and what kind of community you want to build.
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
        <div className="grid gap-4 md:grid-cols-3">
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
              <div className="mb-4 aspect-square rounded-[1.5rem] bg-white/10" />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-white/60">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-4">
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-white/50">Gallery</p>
        <h2 className="mb-8 text-3xl font-semibold">Moments worth showing</h2>
        <div className="grid gap-4 md:grid-cols-4">
          {gallery.map((item) => (
            <div key={item} className="aspect-[3/4] rounded-[2rem] border border-white/10 bg-white/5 p-4 text-sm text-white/60">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="join" className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 md:p-12">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-white/50">Contact Information</p>
          <h2 className="mb-4 text-3xl font-semibold">Contact us</h2>
          <p className="mb-8 max-w-2xl text-white/70">
            Add your audition schedule, application form link, Instagram, email, or a simple contact button here.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="rounded-2xl bg-white px-5 py-3 font-medium text-black">Email</button>
            <button className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white">Instagram</button>
          </div>
        </div>
      </section>

      </div>
    </div>
  );
}
