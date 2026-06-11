export function Frontpage() {
  return `
    ${nav}
    ${main}
    ${footer}
    `
}

 const nav = `
    <nav class="container mx-auto bg-white p-4 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 font-title">
        <div class="w-full md:w-auto flex justify-between items-center">
            <a href="#" class="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">Tailwind Listing</a>
            <button class="md:hidden text-gray-500 hover:text-amber-500 transition-colors">
                <span class="material-symbols-outlined text-3xl">menu</span>
            </button>
        </div>

        <div class="hidden md:block">
            <button class="text-amber-500 bg-transparent hover:text-white hover:bg-amber-500 px-6 py-2 rounded-xl text-base lg:text-lg border-amber-500 border-2 font-bold transition-all duration-300">Add Listing</button>
        </div>

        <div class="flex w-full md:w-auto gap-2 lg:gap-4">
            <button class="flex-1 md:flex-none hover:text-white px-6 py-2 text-sm lg:text-lg rounded-xl bg-amber-500 font-bold transition-all shadow-lg shadow-amber-500/20">Sign In</button>
            <button class="flex-1 md:flex-none bg-transparent hover:text-white px-6 py-2 text-sm lg:text-lg rounded-xl border-2 border-amber-500 font-bold transition-all">Sign Up</button>
        </div>
    </nav>
  `;


const main = `
    <main>
        <!-- Hero Section -->
        <div class="relative w-full h-[85vh] md:h-screen overflow-hidden">
            <div class="bg-[url('https://i.pinimg.com/736x/5f/64/8b/5f648bb101eb592d64b1685c3f781334.jpg')] bg-cover bg-center w-full h-full transform scale-105"></div>
            <div class="absolute inset-0 bg-black/60"></div>
            
            <section class="absolute inset-0 flex flex-col justify-center items-center text-white px-4 text-center z-10">
                <h1 class="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-title font-bold leading-tight max-w-5xl">Discover Places That People Love To Eat</h1>
                <p class="mb-8 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-body max-w-3xl opacity-90 mx-auto">Find the best restaurants, cafes, and bars in your city with our comprehensive listing.</p>

                <form class="flex flex-col md:flex-row gap-3 w-full max-w-4xl bg-white/10 backdrop-blur-xl p-3 rounded-2xl border border-white/20 shadow-2xl">
                    <div class="relative flex-1">
                        <span class="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-400">search</span>
                        <input type="text" placeholder="Search for restaurants, cafes..." class="w-full pl-12 pr-4 py-4 rounded-xl border-none bg-white text-gray-700 focus:ring-4 focus:ring-amber-500/20 outline-none transition-all">
                    </div>
                    <div class="relative flex-1">
                        <span class="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-400">location_on</span>
                        <input type="text" placeholder="Location" class="w-full pl-12 pr-4 py-4 rounded-xl border-none bg-white text-gray-700 focus:ring-4 focus:ring-amber-500/20 outline-none transition-all">
                    </div>
                    <button class="bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-xl shadow-amber-500/40 active:scale-95">
                        <span class="material-symbols-outlined">search</span>
                        Search
                    </button>
                </form>
                
                <div class="hidden sm:flex flex-wrap justify-center gap-3 mt-10 max-w-5xl">
                    ${[
                        { icon: 'icons8-restaurant-50.png', label: 'Restaurants' },
                        { icon: 'icons8-cafe-30.png', label: 'Cafes' },
                        { icon: 'icons8-gym-50.png', label: 'Gym' },
                        { icon: 'icons8-hospital-50.png', label: 'Hospitals' },
                        { icon: 'icons8-education-30.png', label: 'Schools' },
                        { icon: 'icons8-add-shopping-cart-30.png', label: 'Shopping' }
                    ].map(item => `
                        <span class="bg-white/10 hover:bg-amber-500 backdrop-blur-md text-white px-5 py-2.5 rounded-full font-bold flex items-center gap-3 cursor-pointer transition-all border border-white/20 group">
                            <img src="/src/asset/${item.icon}" alt="${item.label}" class="w-4 h-4 brightness-0 invert group-hover:scale-110 transition-transform">
                            ${item.label}
                        </span>
                    `).join('')}
                </div>
            </section>
            <!-- Scroll Indicator -->
            <div class="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce text-white/50 hidden md:block">
                <span class="material-symbols-outlined text-4xl">expand_more</span>
            </div>
        </div>

        <!-- Top Rated Section -->
        <section class="container mx-auto mt-16 md:mt-24 px-4 xl:px-8 2xl:px-12">
            <div class="text-center mb-12 md:mb-20">
                <h2 class="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-title font-bold mb-6 text-gray-900">Top Rated Restaurants</h2>
                <div class="w-24 h-1.5 bg-amber-500 mx-auto rounded-full mb-8"></div>
                <p class="text-base md:text-lg lg:text-xl font-body text-gray-500 max-w-2xl mx-auto">Discover Most Searched Places in Your City</p>
            </div>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 md:gap-8 lg:gap-10">
                <!-- Restaurant Cards -->
                ${[
                    { title: "The Gourmet Kitchen", img: "https://i.pinimg.com/736x/5f/64/8b/5f648bb101eb592d64b1685c3f781334.jpg", rev: 48, loc: "123 Culinary Ave", tag: "Fine Dining", price: "$$$", desc: "Experience world-class fine dining with a seasonal menu crafted by award-winning chefs." },
                    { title: "Urban Brew Cafe", img: "https://i.pinimg.com/736x/a5/8d/52/a58d52e58145b1e6f1be20b1447c7c24.jpg", rev: 124, loc: "45 Coffee St", tag: "Cafe", price: "$", desc: "The perfect spot for specialty coffee and artisanal pastries in a cozy atmosphere." },
                    { title: "The Green Bowl", img: "https://i.pinimg.com/1200x/f0/ed/1c/f0ed1c0148d42cadae9e7b0d2f0e69eb.jpg", rev: 86, loc: "78 Wellness Blvd", tag: "Healthy", price: "$$", desc: "Fresh, organic ingredients transformed into delicious and healthy salad bowls." },
                    { title: "Sakura Sushi", img: "https://i.pinimg.com/1200x/28/5c/d3/285cd3c6eba155ff75e2688b57fb5256.jpg", rev: 210, loc: "12 Sakura Lane", tag: "Japanese", price: "$$$", desc: "Authentic Japanese sushi and sashimi prepared with the freshest catch." },
                    { title: "Luigi's Pizzeria", img: "https://i.pinimg.com/736x/87/d3/dc/87d3dc0225d21869daf72e1f9a198ba4.jpg", rev: 156, loc: "88 Italian Way", tag: "Pizza", price: "$$", desc: "Traditional wood-fired Neapolitan pizzas with a variety of fresh toppings." },
                    { title: "The Smokehouse", img: "https://i.pinimg.com/736x/01/03/86/01038666ec7759759cf55eb82bc95687.jpg", rev: 92, loc: "56 Grill Road", tag: "BBQ", price: "$$$", desc: "Slow-smoked Texas-style BBQ ribs and brisket that fall right off the bone." },
                    { title: "Taco Haven", img: "https://i.pinimg.com/736x/3f/54/23/3f54234cef52120689fffc7177438ba0.jpg", rev: 188, loc: "34 Fiesta Blvd", tag: "Mexican", price: "$", desc: "Vibrant Mexican street tacos with house-made salsas and authentic flavors." },
                    { title: "Golden Leaf Tea", img: "https://i.pinimg.com/736x/aa/22/0d/aa220d97f7143ab98b80b0705eeb4679.jpg", rev: 64, loc: "22 Serenity Lane", tag: "Tea Room", price: "$$", desc: "A tranquil tea room offering a vast selection of premium loose-leaf teas." },
                    { title: "Ocean Blue", img: "https://i.pinimg.com/1200x/f5/c9/4f/f5c94f0d0e9b09f0aabc300f1334f7ef.jpg", rev: 112, loc: "5 Harbor View", tag: "Seafood", price: "$$$", desc: "Freshly caught seafood served in a relaxed, coastal-inspired setting by the bay." },
                    { title: "The Burger Joint", img: "https://i.pinimg.com/736x/12/19/2b/12192b9312b0e6f39b3c038638dff455.jpg", rev: 320, loc: "15 Patty Lane", tag: "Burgers", price: "$", desc: "Gourmet burgers with hand-cut fries and thick, creamy milkshakes." },
                    { title: "Spice Route", img: "https://i.pinimg.com/736x/2a/86/40/2a864028c6cf41e9d037bdf6e74e07be.jpg", rev: 145, loc: "99 Curry St", tag: "Indian", price: "$$", desc: "A flavorful journey through Indian cuisine with aromatic curries." },
                    { title: "La Boulangerie", img: "https://i.pinimg.com/736x/b6/4c/02/b64c021e1aa8c2a91f3ad7420f41eb62.jpg", rev: 78, loc: "10 Pastry Road", tag: "Bakery", price: "$", desc: "Charming French bakery serving handmade croissants and delicate pastries." },
                    { title: "Vintage Vines", img: "https://i.pinimg.com/736x/f7/c0/4e/f7c04e653d2408ffefdfc265bd8128cb.jpg", rev: 52, loc: "77 Grape St", tag: "Wine Bar", price: "$$$", desc: "Elegant wine bar featuring a curated selection of global wines." },
                    { title: "Sunshine Diner", img: "https://i.pinimg.com/736x/47/81/86/4781868b508ea13acb7ce14b4a42dcc1.jpg", rev: 240, loc: "4 Sunny Road", tag: "Diner", price: "$", desc: "Classic American diner serving hearty breakfast and brunch favorites." },
                    { title: "Midnight Noodle", img: "https://i.pinimg.com/736x/cd/9f/8f/cd9f8f9893f0926e9daae24b17d56617.jpg", rev: 167, loc: "101 Neon St", tag: "Ramen", price: "$$", desc: "Cozy late-night ramen shop with rich broths and various toppings." }
                ].map(item => `
                    <div class="group bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden flex flex-col h-full active:scale-95">
                        <div class="relative h-64 sm:h-56 overflow-hidden">
                            <img src="${item.img}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                            <div class="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black text-amber-600 shadow-xl uppercase tracking-widest">Featured</div>
                            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                        <div class="p-6 lg:p-8 flex flex-col flex-1 space-y-4">
                            <div>
                                <h3 class="text-xl lg:text-2xl font-title font-bold text-gray-900 group-hover:text-amber-600 transition-colors duration-300 leading-tight">${item.title}</h3>
                                <div class="flex items-center gap-2 mt-2">
                                    <div class="flex text-amber-500 text-sm">
                                        <span class="material-symbols-outlined fill-[1] text-lg">star</span>
                                        <span class="material-symbols-outlined fill-[1] text-lg">star</span>
                                        <span class="material-symbols-outlined fill-[1] text-lg">star</span>
                                        <span class="material-symbols-outlined fill-[1] text-lg">star</span>
                                        <span class="material-symbols-outlined text-lg">star_half</span>
                                    </div>
                                    <span class="text-gray-400 text-xs font-bold tracking-wide">(${item.rev} Reviews)</span>
                                </div>
                            </div>
                            <p class="text-gray-600 text-sm md:text-base leading-relaxed line-clamp-2 font-body">${item.desc}</p>
                            <div class="flex items-center gap-2 text-gray-400 font-medium pt-2">
                                <span class="material-symbols-outlined text-amber-500 text-xl">location_on</span>
                                <span class="text-xs lg:text-sm truncate">${item.loc}, City District</span>
                            </div>
                            <div class="pt-6 mt-auto border-t border-gray-50 flex justify-between items-center">
                                <div class="flex gap-2">
                                    <span class="bg-amber-50 text-amber-600 text-[10px] lg:text-[11px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg border border-amber-100">${item.tag}</span>
                                    <span class="bg-gray-50 text-gray-600 text-[10px] lg:text-[11px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg border border-gray-100">${item.price}</span>
                                </div>
                                <button class="w-10 h-10 rounded-full bg-gray-50 text-gray-400 hover:bg-red-50 hover:text-red-500 transition-all duration-300 flex items-center justify-center">
                                    <span class="material-symbols-outlined text-xl">favorite</span>
                                </button>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>

            <div class="mt-20 text-center">
                <button class="inline-flex items-center gap-3 px-10 py-5 bg-white border-2 border-amber-500 text-amber-600 font-black rounded-2xl hover:bg-amber-500 hover:text-white transition-all duration-300 group shadow-2xl shadow-amber-500/10 active:translate-y-1">
                    <span class="material-symbols-outlined group-hover:rotate-45 transition-transform duration-500">rocket_launch</span>
                    DISCOVER MORE PLACES
                </button>
            </div>
        </section>

        <!-- Categories Section -->
        <section class="bg-gray-950 mt-32 py-24 md:py-40 relative overflow-hidden">
            <!-- Background Glows -->
            <div class="absolute -top-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px]"></div>
            <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px]"></div>

            <div class="container mx-auto px-4 relative z-10">
                <div class="text-center mb-20 md:mb-28">
                    <span class="text-amber-500 font-black uppercase tracking-[0.3em] text-xs mb-4 inline-block">Explore Everything</span>
                    <h2 class="text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl font-title font-bold mb-6 text-white">Discover by Categories</h2>
                    <p class="text-gray-400 text-lg md:text-xl font-body max-w-2xl mx-auto opacity-80">Explore the best of the city by browsing through our hand-picked categories.</p>
                </div>

                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-4 gap-6 md:gap-10">
                    ${[
                        { name: 'Coffee & Tea', icon: 'icons8-coffee-100.png' },
                        { name: 'Entertainment', icon: 'icons8-entertainment-100.png' },
                        { name: 'Hotels', icon: 'icons8-hotel-100.png' },
                        { name: 'Health', icon: 'icons8-health-100.png' },
                        { name: 'Education', icon: 'icons8-education-100.png' },
                        { name: 'Automotive', icon: 'icons8-automotive-100.png' },
                        { name: 'Home Service', icon: 'icons8-home-100.png' },
                        { name: 'Shopping', icon: 'icons8-buying-100.png' }
                    ].map(cat => `
                        <div class="group bg-white/5 backdrop-blur-md p-8 md:p-14 rounded-[2.5rem] border border-white/5 hover:border-amber-500/30 hover:bg-white/10 transition-all duration-500 text-center cursor-pointer active:scale-95">
                            <div class="mb-8 relative mx-auto w-max">
                                <div class="absolute inset-0 bg-amber-500/20 rounded-full blur-2xl scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                                <img src="/src/asset/discovery/${cat.icon}" alt="${cat.name}" class="relative w-20 h-20 md:w-32 md:h-32 group-hover:-translate-y-4 transition-transform duration-700 brightness-0 invert opacity-80 group-hover:opacity-100 group-hover:brightness-100 group-hover:invert-0">
                            </div>
                            <p class="text-white font-title font-bold text-lg md:text-2xl group-hover:text-amber-500 transition-colors">${cat.name}</p>
                            <p class="text-gray-500 text-xs md:text-sm mt-2 font-black uppercase tracking-widest">120+ Listings</p>
                        </div>
                    `).join('')}
                </div>
                
                <div class="mt-20 text-center">
                    <button class="bg-white text-gray-900 px-12 py-5 rounded-2xl font-black hover:bg-amber-500 hover:text-white transition-all duration-500 flex items-center gap-4 mx-auto shadow-2xl group active:scale-95">
                        <span class="material-symbols-outlined text-amber-500 group-hover:text-white transition-colors">grid_view</span>
                        VIEW ALL CATEGORIES
                    </button>
                </div>
            </div>
        </section>

        <!-- CEO/Team Section -->
        <section class="bg-white py-24 md:py-48 overflow-hidden">
            <div class="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
                <!-- CEO Images Grid -->
                <div class="w-full lg:w-1/2 grid grid-cols-2 gap-6 md:gap-8 relative order-2 lg:order-1">
                    <div class="space-y-6 md:space-y-8">
                        <div class="relative group overflow-hidden rounded-[2rem] shadow-2xl aspect-[3/4]">
                            <img src="/src/asset/ceo/Pasted image.png" alt="CEO" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000">
                            <div class="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div class="absolute bottom-8 left-8 translate-y-6 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100 text-white">
                                <p class="font-bold text-2xl">Fate Foo</p>
                                <p class="text-xs text-amber-400 uppercase tracking-[0.3em] font-black mt-1">CEO & Founder</p>
                            </div>
                        </div>
                        <div class="relative group overflow-hidden rounded-[2rem] shadow-2xl aspect-square">
                            <img src="/src/asset/ceo/Pasted image (2).png" alt="Team" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000">
                            <div class="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-transparent to-transparent"></div>
                            <div class="absolute bottom-6 left-6 text-white">
                                <p class="font-bold text-lg">John Doe</p>
                                <p class="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-black">Ops Manager</p>
                            </div>
                        </div>
                    </div>
                    <div class="space-y-6 md:space-y-8 pt-20">
                        <div class="relative group overflow-hidden rounded-[2rem] shadow-2xl aspect-square">
                            <img src="/src/asset/ceo/Pasted image (3).png" alt="Team" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000">
                            <div class="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-transparent to-transparent"></div>
                            <div class="absolute bottom-6 left-6 text-white">
                                <p class="font-bold text-lg">Jane Smith</p>
                                <p class="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-black">Tech Lead</p>
                            </div>
                        </div>
                        <div class="relative group overflow-hidden rounded-[2rem] shadow-2xl aspect-[3/4]">
                            <img src="/src/asset/ceo/Pasted image (4).png" alt="Team" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000">
                            <div class="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-transparent to-transparent"></div>
                            <div class="absolute bottom-8 left-8 text-white">
                                <p class="font-bold text-2xl">Mike Ross</p>
                                <p class="text-xs text-amber-400 uppercase tracking-[0.3em] font-black mt-1">Customer Success</p>
                            </div>
                        </div>
                    </div>
                    <!-- Decorations -->
                    <div class="absolute -bottom-20 -right-20 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px] -z-10"></div>
                    <div class="absolute -top-20 -left-20 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px] -z-10"></div>
                </div>

                <!-- Text Content -->
                <div class="w-full lg:w-1/2 space-y-10 order-1 lg:order-2 text-center lg:text-left">
                    <div class="space-y-8">
                        <span class="inline-block font-title font-black text-amber-500 tracking-[0.4em] uppercase text-xs bg-amber-50 px-6 py-3 rounded-2xl border border-amber-100">OUR SUPPORT HEROES</span>
                        <h2 class="font-title text-4xl md:text-5xl xl:text-6xl 2xl:text-8xl font-extrabold text-gray-900 leading-[1.1]">We're Building The Future of City Discovery</h2>
                        <p class="font-body text-gray-600 text-lg md:text-xl 2xl:text-2xl leading-relaxed max-w-2xl mx-auto lg:mx-0">Our dedicated professionals work tirelessly to bring you the best local experiences. With expertise across technology and hospitality, we're here to help you find exactly what you're looking for.</p>
                        <div class="grid grid-cols-2 gap-12 pt-4">
                            <div class="p-6 rounded-3xl bg-gray-50 border border-gray-100">
                                <p class="text-5xl md:text-6xl font-black text-gray-950">12k+</p>
                                <p class="text-gray-500 text-xs md:text-sm mt-3 uppercase tracking-[0.2em] font-black">Active Users</p>
                            </div>
                            <div class="p-6 rounded-3xl bg-gray-50 border border-gray-100">
                                <p class="text-5xl md:text-6xl font-black text-gray-950">500+</p>
                                <p class="text-gray-500 text-xs md:text-sm mt-3 uppercase tracking-[0.2em] font-black">Verified Places</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col sm:flex-row gap-5 pt-8 justify-center lg:justify-start">
                        <button class="bg-amber-500 hover:bg-amber-600 text-white px-12 py-5 rounded-2xl font-black transition-all shadow-2xl shadow-amber-500/40 flex items-center justify-center gap-4 group active:scale-95">
                            MEET THE TEAM
                            <span class="material-symbols-outlined group-hover:translate-x-2 transition-transform duration-300">arrow_forward</span>
                        </button>
                        <button class="border-2 border-gray-100 text-gray-700 hover:border-amber-500 hover:text-amber-600 px-12 py-5 rounded-2xl font-black transition-all flex items-center justify-center active:scale-95">
                            LEARN MORE
                        </button>
                    </div>
                </div>
            </div>            
        </section>

        <!-- Testimonials Section -->
        <section class="relative bg-gray-950 py-32 md:py-56 overflow-hidden">
            <div class="absolute inset-0">
                <img src="/src/asset/backgorundd/Pasted image.png" alt="Background" class="w-full h-full object-cover opacity-10 scale-110 blur-sm">
                <div class="absolute inset-0 bg-gradient-to-b from-gray-950 via-transparent to-gray-950"></div>
            </div>
            
            <div class="container mx-auto relative z-10 px-4">
                <div class="max-w-7xl mx-auto">
                    <div class="text-center mb-24 md:mb-32">
                        <span class="text-amber-500 font-black uppercase tracking-[0.4em] text-xs mb-6 inline-block">Real Experiences</span>
                        <h2 class="font-title font-bold text-4xl md:text-6xl lg:text-7xl 2xl:text-8xl text-white mb-8">What Our Customers Say</h2>
                        <div class="w-32 h-1.5 bg-amber-500 mx-auto rounded-full"></div>
                    </div>

                    <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 bg-white/5 backdrop-blur-3xl p-8 md:p-24 rounded-[4rem] border border-white/10 shadow-3xl">
                        <div class="w-full lg:w-1/2 group relative">
                            <div class="absolute -inset-10 bg-amber-500/20 rounded-[4rem] blur-3xl group-hover:bg-amber-500/30 transition-all duration-700"></div>
                            <div class="relative overflow-hidden rounded-[3rem] shadow-3xl aspect-[4/3] lg:aspect-square 2xl:aspect-video">
                                <img src="/src/asset/backgorundd/what_our_customers_are_saying.png" alt="Success Story" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000">
                                <div class="absolute inset-0 bg-gradient-to-t from-gray-950/80 to-transparent"></div>
                                <div class="absolute inset-0 flex items-center justify-center">
                                    <button class="w-24 h-24 bg-amber-500 text-white rounded-full flex items-center justify-center shadow-3xl hover:scale-110 transition-transform active:scale-95 group/play">
                                        <span class="material-symbols-outlined text-5xl group-hover/play:scale-110 transition-transform">play_arrow</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <div class="w-full lg:w-1/2 space-y-10 lg:space-y-16">
                            <div class="space-y-8">
                                <span class="material-symbols-outlined text-amber-500 text-7xl md:text-9xl opacity-30">format_quote</span>
                                <h3 class="text-3xl md:text-4xl lg:text-5xl font-title font-bold text-white leading-[1.2]">Help Us Improve Our Productivity and Reach New Heights.</h3>
                                <p class="text-xl md:text-2xl font-body text-gray-300 leading-relaxed italic opacity-90">"Using this platform has been a game-changer for our business. The ease of discovery and the quality of listings have helped us connect with the right customers more effectively than ever before."</p>
                            </div>
                            
                            <div class="flex items-center gap-8 p-6 rounded-3xl bg-white/5 border border-white/5">
                                <div class="w-20 h-20 rounded-2xl bg-amber-500 flex items-center justify-center text-white text-3xl font-black shadow-2xl rotate-3 group-hover:rotate-0 transition-transform">JD</div>
                                <div>
                                    <p class="font-bold font-title text-2xl md:text-3xl text-white">John Doe</p>
                                    <p class="font-body text-xs md:text-sm uppercase tracking-[0.3em] text-amber-500 font-black mt-2">Lead Marketing Manager</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
  `;


const footer = `
    <footer class="bg-gray-950 text-gray-400 pt-32 pb-16 font-body overflow-hidden relative">
        <div class="container mx-auto px-4 relative z-10">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 mb-24">
                <!-- Brand Section -->
                <div class="space-y-10">
                    <a href="#" class="text-3xl font-black font-title text-white tracking-tighter">Tailwind Listing</a>
                    <p class="text-gray-500 leading-relaxed text-lg opacity-80">Connecting people with the best local experiences. Discover, rate, and share your favorite places in the city.</p>
                    <div class="flex gap-5">
                        ${['facebook', 'twitter', 'instagram', 'linkedin'].map(social => `
                            <a href="#" class="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center hover:bg-amber-500 hover:border-amber-500 hover:text-white transition-all duration-500 group active:scale-90">
                                <span class="material-symbols-outlined text-2xl group-hover:rotate-[360deg] transition-transform duration-700">public</span>
                            </a>
                        `).join('')}
                    </div>
                </div>

                <!-- Explore Links -->
                <div class="lg:pl-16">
                    <h4 class="text-white font-black uppercase tracking-[0.3em] text-xs mb-10">Explore</h4>
                    <ul class="space-y-5">
                        ${['Restaurants & Bars', 'Hotels & Travel', 'Health & Medical', 'Shopping & Retail', 'Events & Nightlife'].map(link => `
                            <li><a href="#" class="hover:text-amber-500 transition-colors flex items-center gap-3 group">
                                <span class="w-2 h-0.5 bg-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                                ${link}
                            </a></li>
                        `).join('')}
                    </ul>
                </div>

                <!-- Company Links -->
                <div class="lg:pl-16">
                    <h4 class="text-white font-black uppercase tracking-[0.3em] text-xs mb-10">Company</h4>
                    <ul class="space-y-5">
                        ${['About Us', 'Contact Support', 'Careers', 'Terms of Service', 'Privacy Policy'].map(link => `
                            <li><a href="#" class="hover:text-amber-500 transition-colors flex items-center gap-3 group">
                                <span class="w-2 h-0.5 bg-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                                ${link}
                            </a></li>
                        `).join('')}
                    </ul>
                </div>

                <!-- Newsletter Section -->
                <div class="space-y-10">
                    <div>
                        <h4 class="text-white font-black uppercase tracking-[0.3em] text-xs mb-6">Stay Updated</h4>
                        <p class="text-gray-500 text-lg opacity-80">Subscribe to get the latest listings and city news delivered to your inbox.</p>
                    </div>
                    <form class="space-y-4">
                        <div class="relative group">
                            <input type="email" placeholder="Your email address" class="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-sm w-full focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all outline-none">
                        </div>
                        <button class="w-full bg-amber-500 text-white py-5 rounded-2xl font-black hover:bg-amber-600 transition-all shadow-2xl shadow-amber-500/30 active:scale-95 tracking-widest uppercase text-xs">
                            Subscribe Now
                        </button>
                    </form>
                </div>
            </div>

            <!-- Bottom Copyright Bar -->
            <div class="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                <div class="text-gray-500 text-sm font-medium tracking-wide">
                    &copy; 2026 <span class="text-white font-black">Tailwind Listing</span>. Designed with ❤️ for the community.
                </div>
                <div class="flex flex-wrap justify-center gap-10 text-xs font-black uppercase tracking-[0.2em]">
                    <a href="#" class="text-gray-600 hover:text-white transition-colors">Help Center</a>
                    <a href="#" class="text-gray-600 hover:text-white transition-colors">API Docs</a>
                    <a href="#" class="text-gray-600 hover:text-white transition-colors">System Status</a>
                </div>
            </div>
        </div>

        <!-- Background Gradient Glow -->
        <div class="absolute -top-48 -right-48 w-[40rem] h-[40rem] bg-amber-500/5 rounded-full blur-[150px]"></div>
        <div class="absolute -bottom-48 -left-48 w-[40rem] h-[40rem] bg-amber-500/5 rounded-full blur-[150px]"></div>
    </footer>
`;
