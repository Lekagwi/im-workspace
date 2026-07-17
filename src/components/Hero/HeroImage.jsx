function HeroImage() {
    return (
      <div className="flex justify-center">
  
        <div className="rounded-[40px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
  
          <img
            src="profile.jpeg"
            alt="Ian Muema"
            className="h-80 w-80 rounded-3xl object-cover shadow-2xl"
          />
  
        </div>
  
      </div>
    );
  }
  
  export default HeroImage;