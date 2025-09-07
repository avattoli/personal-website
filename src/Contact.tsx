export default function Contact() {
  const EMAIL = "ayush.vatts@gmail.com";

  return (
    <section id="contact" className="relative w-full py-12">
      {/* soft background wash */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-44 bg-[radial-gradient(70%_50%_at_50%_0%,rgba(99,102,241,0.08),rgba(255,255,255,0))]" />
      <div className="mx-auto w-full max-w-md px-4">
        {/* subtle gradient border */}
        <div className="rounded-2xl bg-gradient-to-br from-indigo-400/20 via-fuchsia-300/20 to-emerald-300/20 p-[1px]">
          <div className="rounded-[14px] bg-white/90 p-6 shadow-sm ring-1 ring-gray-200 backdrop-blur-sm">
            <h2 className="text-center text-xl font-semibold text-gray-900">Let's connect</h2>
            <p className="mt-1 text-center text-sm text-gray-600">Feel free to reach out to me.</p>

            <div className="mt-5 flex justify-center">
              <a
                href={`mailto:${EMAIL}`}
                aria-label={`Email ${EMAIL}`}
                className="group inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white/90 px-4 py-2 text-sm font-medium text-gray-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                {/* inline mail icon */}
                <svg
                  className="h-4 w-4 text-indigo-600/80 transition group-hover:text-indigo-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" />
                  <path d="m22 8-10 6L2 8" />
                </svg>
                <span>{EMAIL}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
