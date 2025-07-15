export const Header = () => {
  return (
    <div className="relative min-h-[25vh] bg-gradient-hero flex flex-col items-center justify-center text-white px-4">
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="relative z-10 text-center max-w-4xl">
        <div className="mb-6">
          <img 
            src="/lovable-uploads/071172b1-8442-4767-8a0c-9ebc62414ec7.png" 
            alt="The Inner Circle by Launch by Lunch" 
            className="mx-auto w-24 h-24 object-contain mb-4"
          />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Advanced Vibe Coding
        </h1>
        
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 border border-white/30">
          <span className="text-sm font-medium">📚 4-Class Accelerator Program</span>
        </div>
      </div>
    </div>
  );
};