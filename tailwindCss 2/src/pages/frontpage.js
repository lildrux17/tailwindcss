export function Frontpage() {
  return `
    ${nav}
    ${main}
    ${footer}
    `
}

 const nav = `
    <nav class="bg-gray-800 text-white p-4 flex justify-end items-center ">
      <ul class="flex space-x-4 space-x-20">
        <li><a href="#" class="hover:underline bg-blue-500 px-7 py-2 rounded">Home</a></li>
        <li><a href="#" class="hover:underline px-7 py-2">About</a></li>
        <li><a href="#" class="hover:underline px-7 py-2">Contact</a></li>
      </ul>
    </nav>
  `;


const main = `
    <main class="p-8">
      <h1 class="text-4xl font-bold mb-4">Welcome to My Tailwind CSS Page</h1>
      <p class="text-lg mb-6">This is a simple example of a front page using Tailwind CSS.</p>
      <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Get Started</button>
    </main>
  `;    

  const footer = `
    <footer class="bg-gray-800 text-white p-4 text-center">
      <p>&copy; 2024 My Tailwind CSS Page. All rights reserved.</p>
    </footer>
  `;