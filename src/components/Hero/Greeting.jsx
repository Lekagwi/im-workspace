function Greeting() {
  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-green-500/20 bg-green-500/10 px-5 py-3">

      <div className="h-3 w-3 animate-pulse rounded-full bg-green-400"></div>

      <span className="text-green-300 font-medium">
        Available for Opportunities
      </span>

    </div>
  );
}

export default Greeting;