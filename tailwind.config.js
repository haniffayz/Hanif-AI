/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colos: {
          primary: '#000',
      accent: '#f9f9f9',
      secondary: '#ccc',
      dark: '',
      cadangan: '#F1F6F9',
      button: '#FE0000',
      SidebarAccent: '#628dfb',
      sidebarColor: '#121212',
      Info: '#e7e5e4',
      DarkInfo: '#272829',
      CardDashboard: '#F5F5F5',
      DarkCardDashboard: '#272829',
      card: '#BFBFBF',
      white: '#fff',
      animeColor: '#6c7983',
      title: '#856afe'
        }
      }
    },
  },
  plugins: [],
}

