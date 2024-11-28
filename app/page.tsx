import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center space-y-8">
          {/* Announcement Badge */}
          <div className="inline-flex items-center justify-center gap-2 bg-yellow-100 px-4 py-2 rounded-full">
            <Sparkles className="w-4 h-4 text-yellow-600" />
            <span className="text-sm font-medium text-gray-700">Create your portfolio in seconds</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl font-bold text-gray-800 sm:text-6xl">
            Welcome to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Gyan-card
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Create a small portfolio like card that showcases your professional journey in a beautiful and concise way.
          </p>
          
          {/* CTA Button */}
          <Link 
            href="/pages/gyan_card"
            className="inline-flex items-center gap-2 bg-gray-800 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Demo Example
            <ArrowRight className="w-5 h-5" />
          </Link>
          
          {/* Preview Section */}
          <div className="mt-16 p-8 bg-white rounded-2xl shadow-xl">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent rounded-lg"></div>
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000"
                alt="Portfolio Preview"
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: 'Professional Design',
                description: 'Elegant and modern portfolio cards that make you stand out'
              },
              {
                title: 'Quick Setup',
                description: 'Create your portfolio card in minutes with our streamlined process'
              },
              {
                title: 'Fully Customizable...? nope',
                description: 'Personalize colors, layout, and content to match your style.....nope  😁😁'
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-yellow-200"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Bottom Badge */}
          <div className="mt-16 inline-flex items-center justify-center gap-2 bg-gray-800/5 px-6 py-3 rounded-full">
            <span className="text-sm font-medium text-gray-600">
              <Link href={'/pages/signup'}>Click here to Get started</Link>  
            </span>
          </div>
            <span className="text-xl font-bold block  text-yellow-500 animate-bounce">
              Under Development...
            </span>
        </div>
      </div>
    </main>
  );
}