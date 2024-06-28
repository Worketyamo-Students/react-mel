/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
    colors:{
      "primary-color": "#7286D3",
       "bg": "cyan",
       "text":"black",
       "connexion":"white",
       "input":"#9E9E9F",
       "secondary-color":"#8EA7E9",
    },
    fontFamily: {
      sans: ['Poppins'],
  
    },
  },
  plugins: [],
}

