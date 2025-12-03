import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/renovation1.png" // Replace with your actual image path
          alt="Modern kitchen renovation"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="max-w-5xl text-center">
          {/* Heading */}
          <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl lg:text-7xl">
            Transform Your Home with Expert Renovation
          </h1>

          {/* Subheading */}
          <p className="mb-8 text-lg text-white/90 md:text-xl lg:text-2xl">
            Premium craftsmanship and attention to detail in every project. From
            concept to completion, we bring your vision to life with quality
            materials and expert execution.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="rounded-lg bg-orange-400 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-orange-500">
              Get a Free Quote
            </button>
            <button className="rounded-lg bg-white px-8 py-4 text-lg font-semibold text-gray-800 transition-all hover:bg-gray-100">
              View Our Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}