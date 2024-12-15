import { ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center space-y-8">
          {/* Announcement Badge */}
          <div className="inline-flex items-center justify-center gap-2 bg-green-950 px-4 py-2 rounded-full animate-fade-in-down">
            <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
            <span className="text-sm font-medium text-yellow-200">
              Create your portfolio in seconds
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl font-bold text-gray-100 sm:text-6xl animate-text-glow">
            Welcome to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 animate-gradient">
              Gyan-card
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up">
            "Shrink your career epic into a card so stylish, it’ll make LinkedIn jealous!" 😏📇
            Create a small portfolio website-like card that showcases your professional journey in a concise way.
          </p>

          {/* CTA Button */}
          <Link
            href="/pages/gyan_card"
            className="inline-flex items-center gap-2 bg-zinc-200 text-gray-900 px-8 py-4 rounded-full font-medium hover:bg-yellow-500 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl animate-float"
          >
            Demo Example
            <ArrowRight className="w-5 h-5" />
          </Link>

          {/* Preview Section */}
          <div className="mt-16 bg-green-950 rounded-3xl shadow-xl animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent rounded-lg"></div>
              <Image
                className="rounded-3xl h-full shadow-lg hover:shadow-xl transition-shadow duration-300 w-full"
                priority
                src="/gyancard3.jpeg"
                alt="ganesh image"
                width={500}
                height={500}
              />
            </div>
          </div>

          {/* Features Grid */}
          <div className="pb-5 pt-5 grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 animate-fade-in-up">
            {[
              {
                title: 'Professional Design',
                description: 'Elegant and modern portfolio cards that make you stand out',
              },
              {
                title: 'Quick Setup',
                description: 'Create your portfolio card in minutes with our streamlined process',
              },
              {
                title: 'Fully Customizable...? nope',
                description: 'Personalize colors, layout, and content to match your style.....nope 😁😁',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-green-950 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-600 hover:border-green-500 hover:border-4 hover:scale-105"
              >
                <h3 className="text-lg font-semibold text-gray-100 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Bottom Badge */}
          <div className="mt-16 inline-flex items-center justify-center gap-2 bg-gray-700 px-6 py-3 rounded-full animate-fade-in-up">
            <span className="text-sm font-medium text-gray-300">
              <Link
                href={'/pages/signup'}
                className="inline-flex items-center gap-2 bg-zinc-200 text-gray-900 px-8 py-4 rounded-full font-medium hover:bg-yellow-500 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl animate-float"
              >
                Click here to Get started
              </Link>
            </span>
          </div>
          <span className="text-xl pt-5 font-bold block text-green-600 animate-bounce">
            Under Development...
          </span>
        </div>
      </div>
    </main>
  );
}
