function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-8 py-10">

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">

        <div>

          <h2 className="text-2xl font-black">
            <span className="text-red-500">IM</span> Workspace
          </h2>

          <p className="mt-2 text-slate-400">
            Version 2.0 • Powered by Curiosity and "What If?"
          </p>

        </div>

        <div className="flex items-center gap-3">

          <span className="h-3 w-3 animate-pulse rounded-full bg-green-400"></span>

          <span className="text-green-400">
            Workspace Online
          </span>

        </div>

      </div>

      <p className="mt-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Ian Muema. All rights reserved.
      </p>

    </footer>
  );
}

export default Footer;