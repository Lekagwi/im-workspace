function About() {
    const focus = [
      "Zoho CRM",
      "SalesIQ",
      "Zoho Creator",
      "Deluge",
      "React",
      "Python",
    ];
  
    return (
      <section className="bg-slate-950 py-24 px-6 text-white">
        <div className="max-w-6xl mx-auto">
  
          <p className="text-red-500 uppercase tracking-[0.3em]">
            About Me
          </p>
  
          <h2 className="text-4xl font-bold mt-4">
            Building business solutions through technology.
          </h2>
  
          <p className="mt-8 text-slate-400 leading-8 max-w-3xl">
            I enjoy turning business challenges into digital solutions.
            My journey is centred around automation, modern business systems,
            and the Zoho ecosystem. Every project is another opportunity to
            learn, improve, and ask, <span className="text-red-400 font-semibold">"What if?"</span>
          </p>
  
          <div className="mt-12 flex flex-wrap gap-4">
            {focus.map((item) => (
              <span
                key={item}
                className="rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2 text-sm text-red-300"
              >
                {item}
              </span>
            ))}
          </div>
  
        </div>
      </section>
    );
  }
  
  export default About;