import { Card } from "@/components/ui/card";
import { Pookkalam3D } from "@/components/Pookkalam3D";

const Index = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-muted to-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Decorative elements */}
          <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-gradient-to-br from-pokkalam-orange to-pokkalam-yellow opacity-20 animate-float"></div>
          <div className="absolute top-32 right-16 w-16 h-16 rounded-full bg-gradient-to-br from-pokkalam-pink to-pokkalam-red opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 rounded-full bg-gradient-to-br from-pokkalam-green to-pokkalam-yellow opacity-25 animate-float" style={{ animationDelay: '2s' }}></div>

          {/* Main Content */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pokkalam-orange via-pokkalam-pink to-pokkalam-yellow bg-clip-text text-transparent mb-6">
              My Pookkalam
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              A traditional floral artwork celebrating the festival of Onam
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-pokkalam-orange to-pokkalam-pink mx-auto rounded-full"></div>
          </div>

          {/* 3D Pookkalam Display */}
          <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-pokkalam-orange mb-4">Experience in 3D</h2>
              <p className="text-muted-foreground">Click and drag to rotate • Scroll to zoom • Auto-rotation enabled</p>
            </div>
            <Pookkalam3D />
          </div>

          {/* Original Pookkalam Display */}
          <div className="flex justify-center mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-2 border-pokkalam-orange/20 shadow-2xl animate-glow">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-pokkalam-pink">Original Artwork</h2>
              </div>
              <div className="relative">
                <img
                  src="/lovable-uploads/0f31927f-b13a-4f91-abc2-4f5d3dc9d3c3.png"
                  alt="Beautiful Pookkalam - Traditional Kerala floral art with vibrant orange, yellow, pink, green and red colors arranged in intricate concentric patterns"
                  className="w-full max-w-2xl mx-auto rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
                />
                {/* Decorative frame corners */}
                <div className="absolute -top-2 -left-2 w-6 h-6 border-l-4 border-t-4 border-pokkalam-orange rounded-tl-lg"></div>
                <div className="absolute -top-2 -right-2 w-6 h-6 border-r-4 border-t-4 border-pokkalam-pink rounded-tr-lg"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-4 border-b-4 border-pokkalam-yellow rounded-bl-lg"></div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-4 border-b-4 border-pokkalam-green rounded-br-lg"></div>
              </div>
            </Card>
          </div>

          {/* About Section */}
          <div className="grid md:grid-cols-2 gap-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Card className="p-8 bg-white/60 backdrop-blur-sm border border-pokkalam-orange/30 hover:shadow-xl transition-all duration-300">
              <h2 className="text-3xl font-bold text-pokkalam-orange mb-4">About Pookkalam</h2>
              <p className="text-foreground leading-relaxed">
                Pookkalam is a traditional floral carpet made during the harvest festival of Onam in Kerala, India. 
                These intricate designs are created using fresh flower petals, leaves, and natural materials, 
                symbolizing prosperity, unity, and the welcoming of King Mahabali.
              </p>
            </Card>

            <Card className="p-8 bg-white/60 backdrop-blur-sm border border-pokkalam-pink/30 hover:shadow-xl transition-all duration-300">
              <h2 className="text-3xl font-bold text-pokkalam-pink mb-4">The Art Form</h2>
              <p className="text-foreground leading-relaxed">
                Each Pookkalam tells a unique story through its patterns and colors. The circular designs represent 
                the cycle of life and nature&apos;s abundance. This particular creation showcases the traditional 
                vibrant palette and geometric precision that makes each Pookkalam a masterpiece.
              </p>
            </Card>
          </div>

          {/* Color Palette Section */}
          <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <h3 className="text-2xl font-bold text-foreground mb-8">Colors of Tradition</h3>
            <div className="flex justify-center gap-4 flex-wrap">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-pokkalam-orange shadow-lg mb-2 hover:scale-110 transition-transform"></div>
                <span className="text-sm text-muted-foreground">Orange</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-pokkalam-yellow shadow-lg mb-2 hover:scale-110 transition-transform"></div>
                <span className="text-sm text-muted-foreground">Yellow</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-pokkalam-pink shadow-lg mb-2 hover:scale-110 transition-transform"></div>
                <span className="text-sm text-muted-foreground">Pink</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-pokkalam-green shadow-lg mb-2 hover:scale-110 transition-transform"></div>
                <span className="text-sm text-muted-foreground">Green</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-pokkalam-red shadow-lg mb-2 hover:scale-110 transition-transform"></div>
                <span className="text-sm text-muted-foreground">Red</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-border/50">
        <p className="text-muted-foreground">
          Created with love during Onam • Traditional Kerala Art
        </p>
      </footer>
    </main>
  );
};

export default Index;