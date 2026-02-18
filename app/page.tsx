export default function Home() {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-8">
      <section className="flex flex-col lg:flex-row gap-8 items-center justify-center">
        {/* Card New York */}
        <article className="relative bg-white rounded-[40px] shadow-xl overflow-hidden w-[340px] h-[600px] border-8 border-white">
          <figure className="relative h-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80"
              alt="New York City skyline"
              className="w-full h-full object-cover"
            />
            <button className="absolute top-6 right-6 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 pb-8">
              <h2 className="text-white text-4xl font-bold mb-2">New York</h2>
              <p className="text-gray-300 text-base mb-6">Economy</p>
              <div className="flex items-center gap-4 text-white text-sm mb-6">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                  from $120
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  JFK
                </span>
              </div>
              <button className="w-full bg-white text-gray-800 py-4 px-6 rounded-full font-semibold text-base hover:bg-gray-100 transition-colors">
                Search flight
              </button>
            </div>
          </figure>
        </article>

        {/* Card San Francisco */}
        <article className="relative bg-white rounded-[40px] shadow-xl overflow-hidden w-[340px] h-[600px] border-8 border-white">
          <figure className="relative h-[340px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80"
              alt="San Francisco Golden Gate Bridge"
              className="w-full h-full object-cover rounded-t-[32px]"
            />
          </figure>
          <div className="p-6 pt-8">
            <h2 className="text-gray-900 text-4xl font-bold mb-2">San Francisco</h2>
            <p className="text-gray-400 text-base mb-6">Premium economy</p>
            <div className="flex items-center gap-4 text-gray-500 text-sm mb-8">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                from $240
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                SFO
              </span>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex-1 bg-gray-900 text-white py-4 px-6 rounded-full font-semibold text-base hover:bg-gray-800 transition-colors">
                Search flight
              </button>
              <button className="w-14 h-14 bg-white border-2 border-gray-100 rounded-full flex items-center justify-center hover:bg-pink-50 transition-colors">
                <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}
