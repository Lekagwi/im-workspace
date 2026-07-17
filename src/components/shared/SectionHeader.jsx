function SectionHeader({
    eyebrow,
    title,
    description,
  }) {
    return (
      <div className="mb-20 text-center">
  
        <p className="font-semibold uppercase tracking-[.35em] text-red-500">
  
          {eyebrow}
  
        </p>
  
        <h2 className="mt-5 text-5xl font-black">
  
          {title}
  
        </h2>
  
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
  
          {description}
  
        </p>
  
      </div>
    );
  }
  
  export default SectionHeader;