export function test(){
    return  `
    <div class="h-screen flex items-center justify-center bg-gray-900">
        <button class="px-6 py-3 bg-blue-500 text-white text-xl rounded-xl hover:bg-blue-700">
            Tailwind Test
        </button>
    </div>
    `;
}


export function heightWidth(){
    return`
        <section class="d-inline-block">
            <div class="h-30 w-1/2 border-2 bg-red-100 rounded-sm"></div>
            <div class="h-30 w-1/2 border-2 border-green-100 border-dashed rounded-md shadow-md"></div>
            <div class="h-30 w-1/2 border-2 border-red-200 border-dotted rounded-lg shadow-lg"></div>
            <div class="h-30 w-1/2 border-3 border-blue-300 border-double rounded-xl shadow-xl"></div>
            <div class="h-30 w-1/2 border-1 border-gray-400 rounded-full shadow-2xl"></div>
            <div class="h-30 w-1/2 border-1 border-yellow-500 rounded-2xl"></div>
            <div class="h-30 w-1/2 border-1 border-pink-500 rounded-3xl hover:shadow-lg"></div>
            <div class="h-30 w-1/2 bg-green-100 rounded-t-md"></div>
            <div class="h-30 w-1/2 bg-green-100 rounded-b-lg"></div>
            <div class="h-30 w-1/2 bg-green-100 rounded-tl-xl"></div>
            <div class="h-40 w-3/4 border-t-2 border-b-2 border-red-200 "></div>
        </section>
    `;
}


export function paddingMargin(){
    return`
        <section class="space-x-2">
            <p class="bg-blue-500 py-4  m-3">this is jaykeyz for the university of mines and technology.</p>
            <p class="bg-red-500 p-2 my-4">This is elder Theophilus from  Newness of life incorported.</p>
            <p class="bg-orange-300 p-5 space-y-10 mb-5">This is elder Theophilus from  Newness of life incorported.</p>
        </section>
    `;
}


export function flexBox(){
    return`
        <section class="space-y-3 flex  justify-evenly">
            <p class="bg-blue-500">box 1</p>
            <p class="bg-red-500">box 2</p>
            <p class="bg-orange-300">box 3</p>
        </section>
    `;
}

export function buttons(){
    return`
    <button class="border rounded-md px-5 py-2 mt-2 hover:bg-pink-500 hover:text-white hover:shadow-lg hover:shadow-pink-500/80 transiton duration-800  ease-in">click me</button>
    `;
}


export function animation(){
    return `
    <div class="absolute">
        <div class="animate-ping w-5 h-5 bg-red-500 rounded-xl opacity-50"></div>
        <div class="animate-pulse relative right-11.5   w-5 h-5 bg-red-500 rounded-xl opacity-50"></div>
    </div>
    <span>
        <svg class="w-10 h-10 animate-spin" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
            <path fill="#607D8B" d="M39.6,27.2c0.1-0.7,0.2-1.4,0.2-2.2s-0.1-1.5-0.2-2.2l4.5-3.2c0.4-0.3,0.6-0.9,0.3-1.4L40,10.8c-0.3-0.5-0.8-0.7-1.3-0.4l-5,2.3c-1.2-0.9-2.4-1.6-3.8-2.2l-0.5-5.5c-0.1-0.5-0.5-0.9-1-0.9h-8.6c-0.5,0-1,0.4-1,0.9l-0.5,5.5c-1.4,0.6-2.7,1.3-3.8,2.2l-5-2.3c-0.5-0.2-1.1,0-1.3,0.4l-4.3,7.4c-0.3,0.5-0.1,1.1,0.3,1.4l4.5,3.2c-0.1,0.7-0.2,1.4-0.2,2.2s0.1,1.5,0.2,2.2L4,30.4c-0.4,0.3-0.6,0.9-0.3,1.4L8,39.2c0.3,0.5,0.8,0.7,1.3,0.4l5-2.3c1.2,0.9,2.4,1.6,3.8,2.2l0.5,5.5c0.1,0.5,0.5,0.9,1,0.9h8.6c0.5,0,1-0.4,1-0.9l0.5-5.5c1.4-0.6,2.7-1.3,3.8-2.2l5,2.3c0.5,0.2,1.1,0,1.3-0.4l4.3-7.4c0.3-0.5,0.1-1.1-0.3-1.4L39.6,27.2z M24,35c-5.5,0-10-4.5-10-10c0-5.5,4.5-10,10-10c5.5,0,10,4.5,10,10C34,30.5,29.5,35,24,35z"></path><path fill="#455A64" d="M24,13c-6.6,0-12,5.4-12,12c0,6.6,5.4,12,12,12s12-5.4,12-12C36,18.4,30.6,13,24,13z M24,30c-2.8,0-5-2.2-5-5c0-2.8,2.2-5,5-5s5,2.2,5,5C29,27.8,26.8,30,24,30z"></path>
        </svg>
    </span>
        `;
    }


export function Transform(){
    return `
        <div class="h-30 w-30 bg-green-300 rounded-lg transform rotate-60 translate-10 ">
            <div class="h-30 w-30 bg-red-300 rounded-lg  transform rotate-90 scale-y-30">
                <div class="h-30 w-30 bg-violet-300 rounded-lg transform rotate-110 -translate-y-20"></div>
            </div>
        </div>
        
    `;
}


export function Background(){
    return`
        <div class="w-100 h-20 bg-gradient-to-t from-yellow-500 to-black-100"></div>
        <div class="w-100 h-20 bg-gradient-to-r from-blue-500 to-black-100"></div>
        <div class="w-100 h-20 bg-gradient-to-l from-green-500 via-blue-200 to-black-100"></div>
        <div class="w-100 h-20 bg-gradient-to-b from-pink-500 via-blue-200 via-green-200 to-red-500"></div>

        <h1 class="text-4xl font-bold">
            <span class="bg-clip-text text-transparent  bg-gradient-to-r from-green-300 via-blue-500 to-red-500">Hello World</span>
        </h1>
    `;
}


export function Grid() {
    return `
    
<div class="grid grid-rows-2 grid-cols-3 gap-4 p-7">

    <div class="bg-red-500 p-10"></div>
    <div class="bg-blue-500 row-span-4 p-10"></div>
    <div class="bg-green-500 p-10"></div>

    <div class="bg-yellow-500 p-10"></div>
    <div class="bg-pink-500 p-10"></div>
    <div class="bg-purple-500 p-10"></div>

</div>

`;
}