/** @type {import('tailwindcss').Config} */
module.exports = {
  
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        '@tablet': '640px',
        '@laptop': '1024px',
        '@desktop': '1280px',
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        poppins: ['var(--font-poppins)']
      },
      backgroundImage: {
        'hero-pattern': 'url("../../public/assets/bg-hero.svg")',
        'footer-pattern': 'url("../../public/assets/bg-footer.svg")',
        'banner-bg': 'url("../../public/assets/bg-banner.svg")',
      },
      colors: {
        'blue-primary': '#1D4FFE',
        'green-primary': '#4BCE97',
        'nft-card': '#131317',
        'like-numbers': '#05030A',
        'btn-slide-color': '#07050F'
      },
      maxWidth: {
        'grid': '76rem',
        'card-nft': '17.4rem',
        'card-collectors': '37rem',
        'logo-size-mb': '10rem',
        'logo-size-lp': '10.9rem',
        'nav-navbar': '46.25rem',
        'footer-about': '20.25rem',
        'home-hero-description': '41.125rem',
        'accordion': '70%'
      },
      width: {
        'home-hero-cards-mb': '43.75rem'
      },
      height: {
        'card-image-height-nft': '14.75rem',
        'home-hero-cards-mb': '15.3rem',
        'home-hero-cards-dt': '26.6rem'
      },
      padding: {
        'page-padding-mb': '1.5rem',
        'page-padding-lp': '2rem',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}