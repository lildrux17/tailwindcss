export function blog() {
  return `
    <section class="container mx-auto px-4 max-w-5xl py-6 bg-black lg:bg-white">
         <div class="text-center">
            <h1 class="text-5xl font-bold text-secondary font-title">Latest Blog</h1>
            <h2 class="text-4xl text-gray-600 mt-4 font-title text-primary">Latest Post</h2>
            <p class="text-primary font-bold font-body max-w-xs mx-auto">Welcome to our blog site. Get our latest news with just one search!</p>

            <div>
                <input type="text" placeholder="Search..." class="border border-gray-300 rounded-full bg-our-bg py-2 px-6 mt-6 w-50 max-w-md mx-auto focus:outline-none focus:ring-2 focus:ring-secondary shadow-inner">
            </div>
         </div>


         <!--section 2-->
         <section class="mt-8 border border-gray-100 rounded-2xl overflow-hidden transition duration-200 hover:shadow-lg hover:border-transparent">
             <div class="grid grid-cols-1 md:grid-cols-2">
                <!--image-->
                 <div class="h-64 md:h-auto">
                     <a href="#" class="block h-full"> 
                         <img src="https://i.pinimg.com/736x/c1/aa/e5/c1aae5dd211cce1d6921d9acce4d349e.jpg" alt="Blog Post Image" class="w-full h-full object-cover">
                     </a>
                 </div>
                 
                 <!--content-->
                 <div class="py-6 px-6 flex flex-col justify-center">
                     <span class="bg-our-bg text-secondary text-sm font-bold px-3.5 py-1.5 rounded-full w-fit mb-3">Features</span>
                     <a href="#">
                         <h2 class="text-4xl text-gray-600 font-title text-primary hover:text-secondary transition duration-200">Why is it important to follow a Brand Style Guide for your Business?</h2>
                     </a>
                     <p class="text-gray-500 mt-4 font-body">A brand style guide is a document that outlines the visual and verbal elements of a brand, including its logo, color palette, typography, tone of voice, and messaging. It serves as a reference for anyone creating content or materials for the brand, ensuring consistency and coherence across all channels.</p>
                     
                     <!-- Author Section -->
                     <div class="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                         <div class="w-10 h-10 rounded-full bg-gradient-to-tr from-secondary to-purple-500 flex items-center justify-center text-white font-bold text-sm shadow-md">
                             JD
                         </div>
                         <div>
                             <h4 class="text-sm font-bold text-primary font-body">John Doe</h4>
                             <p class="text-xs text-gray-500 font-body">Brand scientist</p>
                         </div>
                     </div>
                 </div>
             </div>
         </section>   


         <!--section 3-->
         <section class="mt-12">
             <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                 <!-- Card 1 -->
                 <div class="border border-gray-100 rounded-2xl overflow-hidden transition duration-200 hover:shadow-lg hover:border-transparent flex flex-col bg-white">
                     <a href="#" class="group flex flex-col h-full"> 
                         <img src="https://i.pinimg.com/1200x/86/de/25/86de25bf5b2b497bb8be816e43e60bc0.jpg" alt="Blog Post Image" class="w-full h-48 object-cover">
                         <div class="p-5 flex flex-col flex-grow">
                             <span class="bg-our-bg text-secondary text-xs font-bold px-2.5 py-1 rounded-full w-fit mb-3">Design</span>
                             <h3 class="text-xl text-primary font-bold font-title group-hover:text-secondary transition duration-200 line-clamp-2">How to build a brand identity from scratch</h3>
                             <p class="text-gray-500 mt-3 font-body text-sm line-clamp-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                             
                             <!-- Author Section -->
                             <div class="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
                                 <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-secondary to-purple-500 flex items-center justify-center text-white font-bold text-xs shadow-sm">
                                     JD
                                 </div>
                                 <div>
                                     <h4 class="text-xs font-bold text-primary font-body">John Doe</h4>
                                     <p class="text-[10px] text-gray-500 font-body">Brand scientist</p>
                                 </div>
                             </div>
                         </div>
                     </a>
                 </div>

                 <!-- Card 2 -->
                 <div class="border border-gray-100 rounded-2xl overflow-hidden transition duration-200 hover:shadow-lg hover:border-transparent flex flex-col bg-white">
                     <a href="#" class="group flex flex-col h-full"> 
                         <img src="https://i.pinimg.com/736x/83/ad/1d/83ad1d0300e97d7007e14f8a53e7e144.jpg" alt="Blog Post Image" class="w-full h-48 object-cover">
                         <div class="p-5 flex flex-col flex-grow">
                             <span class="bg-our-bg text-secondary text-xs font-bold px-2.5 py-1 rounded-full w-fit mb-3">Marketing</span>
                             <h3 class="text-xl text-primary font-bold font-title group-hover:text-secondary transition duration-200 line-clamp-2">10 marketing strategies for local businesses</h3>
                             <p class="text-gray-500 mt-3 font-body text-sm line-clamp-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
                             
                             <!-- Author Section -->
                             <div class="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
                                 <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-500 to-pink-500 flex items-center justify-center text-white font-bold text-xs shadow-sm">
                                     SS
                                 </div>
                                 <div>
                                     <h4 class="text-xs font-bold text-primary font-body">Sarah Smith</h4>
                                     <p class="text-[10px] text-gray-500 font-body">Marketing Lead</p>
                                 </div>
                             </div>
                         </div>
                     </a>
                 </div>

                 <!-- Card 3 -->
                 <div class="border border-gray-100 rounded-2xl overflow-hidden transition duration-200 hover:shadow-lg hover:border-transparent flex flex-col bg-white">
                     <a href="#" class="group flex flex-col h-full"> 
                         <img src="https://i.pinimg.com/736x/36/2f/62/362f6246234a91d5f02933e47d3ddfaf.jpg" alt="Blog Post Image" class="w-full h-48 object-cover">
                         <div class="p-5 flex flex-col flex-grow">
                             <span class="bg-our-bg text-secondary text-xs font-bold px-2.5 py-1 rounded-full w-fit mb-3">Development</span>
                             <h3 class="text-xl text-primary font-bold font-title group-hover:text-secondary transition duration-200 line-clamp-2">Why modern web frameworks use Tailwind CSS</h3>
                             <p class="text-gray-500 mt-3 font-body text-sm line-clamp-3">Sunt in culpa qui officia deserunt mollit anim id est laborum. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                             
                             <!-- Author Section -->
                             <div class="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
                                 <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-green-500 to-teal-500 flex items-center justify-center text-white font-bold text-xs shadow-sm">
                                     AJ
                                 </div>
                                 <div>
                                     <h4 class="text-xs font-bold text-primary font-body">Alex Johnson</h4>
                                     <p class="text-[10px] text-gray-500 font-body">Lead Developer</p>
                                 </div>
                             </div>
                         </div>
                     </a>
                 </div>
             </div>
         </section>


         <!--section 4-->
         <section class="mt-12">
             <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:grid-cols-1 ">
                 <!-- Card 1 (Spans 2 columns - twice as much as Card 2) -->
                 <div class="md:col-span-2 border border-gray-100 rounded-2xl overflow-hidden transition duration-200 hover:shadow-lg hover:border-transparent flex flex-col bg-white">
                     <a href="#" class="group flex flex-col h-full"> 
                         <!-- Image -->
                         <img src="https://i.pinimg.com/736x/39/d9/0a/39d90a1b20ccfb03b5f350c93fbe6fd7.jpg" alt="Blog Post Image" class="w-full h-64 object-cover">
                         <!-- Content -->
                         <div class="p-5 flex flex-col flex-grow">
                             <span class="bg-our-bg text-secondary text-xs font-bold px-2.5 py-1 rounded-full w-fit mb-3">Strategy</span>
                             <h3 class="text-xl text-primary font-bold font-title group-hover:text-secondary transition duration-200 line-clamp-2">How to scale your branding strategy globally</h3>
                             <p class="text-gray-500 mt-3 font-body text-sm line-clamp-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                             
                             <!-- Author Section -->
                             <div class="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
                                 <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-500 to-rose-500 flex items-center justify-center text-white font-bold text-xs shadow-sm">
                                     EW
                                 </div>
                                 <div>
                                     <h4 class="text-xs font-bold text-primary font-body">Emily Watson</h4>
                                     <p class="text-[10px] text-gray-500 font-body">Strategy Director</p>
                                 </div>
                             </div>
                         </div>
                     </a>
                 </div>

                 <!-- Card 2 (Spans 1 column) -->
                 <div class="md:col-span-1 border border-gray-100 rounded-2xl overflow-hidden transition duration-200 hover:shadow-lg hover:border-transparent flex flex-col bg-white">
                     <a href="#" class="group flex flex-col h-full"> 
                         <img src="https://i.pinimg.com/736x/1a/56/cd/1a56cd008a9669d0ee5f664ed2e820ce.jpg" alt="Blog Post Image" class="w-full h-48 object-cover">
                         <div class="p-5 flex flex-col flex-grow">
                             <span class="bg-our-bg text-secondary text-xs font-bold px-2.5 py-1 rounded-full w-fit mb-3">Portfolio</span>
                             <h3 class="text-xl text-primary font-bold font-title group-hover:text-secondary transition duration-200 line-clamp-2">Creating a portfolio that attracts clients</h3>
                             <p class="text-gray-500 mt-3 font-body text-sm line-clamp-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
                             
                             <!-- Author Section -->
                             <div class="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
                                 <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold text-xs shadow-sm">
                                     MB
                                 </div>
                                 <div>
                                     <h4 class="text-xs font-bold text-primary font-body">Michael Brown</h4>
                                     <p class="text-[10px] text-gray-500 font-body">Senior Designer</p>
                                 </div>
                             </div>
                         </div>
                     </a>
                 </div>
             </div>
         </section>

         <!-- Subscribe Section -->
        <section class="mt-12 text-center mb-12 px-4">
            <h2 class="text-3xl md:text-5xl text-primary font-title">
                Subscribe to Our
            </h2>

            <h2 class="text-3xl md:text-5xl text-secondary mt-2 font-title font-bold">
                Blog Updates
            </h2>

            <p class="text-gray-500 mt-4 font-body text-center max-w-lg mx-auto">
                Please subscribe to get regular updates and features throughout your email.
            </p>

            <div
                class="w-full lg:p-0 lg:rounded-3xl md:w-2/3 lg:w-1/2 mt-6 border border-gray-300 rounded-2xl flex flex-col md:flex-row items-center bg-our-bg mx-auto p-2 gap-2"
            >
                <input
                    type="email"
                    placeholder="Enter your email"
                    class="w-full flex-1 px-4 py-3 bg-transparent focus:outline-none"
                />

                <button
                    class="w-full md:w-auto bg-secondary text-white px-8 py-3 rounded-full hover:bg-secondary-dark transition duration-200"
                >
                    Submit
                </button>
            </div>
        </section>
            </section>

    <!--footer-->
    <section class="bg-primary text-white py-6">
        <div class="container mx-auto max-w-5xl flex flex-col justify-between items-center lg:flex sm:flex-row  gap-4">
            <p class="text-lg font-bold font-title ">Tailwind CSS</p>
            <p class="text-sm font-body">&copy; 2024 Your Blog Name. All rights reserved.</p>
        </div>
    </section>
  `
}
