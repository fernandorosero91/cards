export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 lg:p-8">
      <section className="flex flex-col lg:flex-row gap-6 lg:gap-8 max-w-7xl w-full">
        {/* Card New York */}
        <article className="relative bg-white rounded-3xl shadow-2xl overflow-hidden w-full lg:w-1/2 max-w-md mx-auto lg:mx-0">
          <figure className="relative h-96 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80"
              alt="New York City skyline"
              className="w-full h-full object-cover"
            />
            <button className="absolute top-4 right-4 w-10 h-10 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/50 transition-colors">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <h2 className="text-white text-3xl font-bold mb-1">New York</h2>
              <p className="text-gray-300 text-sm mb-4">Economy</p>
              <div className="flex items-center gap-4 text-white text-sm">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                  from $120
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  JFK
                </span>
              </div>
            </div>
          </figure>
          <div className="p-6">
            <button className="w-full bg-white border-2 border-gray-200 text-gray-800 py-3 px-6 rounded-full font-medium hover:bg-gray-50 transition-colors">
              Search flight
            </button>
          </div>
        </article>

        {/* Card San Francisco */}
        <article className="relative bg-white rounded-3xl shadow-2xl overflow-hidden w-full lg:w-1/2 max-w-md mx-auto lg:mx-0">
          <figure className="relative h-96 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80"
              alt="San Francisco Golden Gate Bridge"
              className="w-full h-full object-cover"
            />
          </figure>
          <div className="p-6">
            <h2 className="text-gray-900 text-3xl font-bold mb-1">San Francisco</h2>
            <p className="text-gray-400 text-sm mb-4">Premium economy</p>
            <div className="flex items-center gap-4 text-gray-600 text-sm mb-6">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
                from $240
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                SFO
              </span>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex-1 bg-gray-900 text-white py-3 px-6 rounded-full font-medium hover:bg-gray-800 transition-colors">
                Search flight
              </button>
              <button className="w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center hover:bg-pink-100 transition-colors">
                <svg className="w-6 h-6 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}
