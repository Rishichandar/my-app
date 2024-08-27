
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Adjust according to your file structure
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        customRed: '#BA1E44',
        'custom-orange': '#FF8100',
        gray: '#6b7280', // Custom gray color if needed
      },
      borderRadius: {
        'custom': '70px 0px 80px 0px',
      },
      fontSize: {
        'custom': '20px',
      },
      fontWeight: {
        'medium': 500,
      },
      spacing: {
        'logo-gap': '4.0rem', // Add custom spacing for logos
      },
      animation: {
        'slide-in-left': 'slideInLeft 1s ease-in-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'rotate-left': 'rotateLeft 2s ease-in-out infinite alternate',
        'rotate-right': 'rotateRight 2s ease-in-out infinite alternate',
      },
      keyframes: {
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        rotateLeft: {
          '0%': { transform: 'rotate(-10deg)' },
          '100%': { transform: 'rotate(10deg)' },
        },
        rotateRight: {
          '0%': { transform: 'rotate(10deg)' },
          '100%': { transform: 'rotate(-10deg)' },
        },
        colors: {
          'custom-gray': '#f0f0f0',
        },
      },
    },
  },
  plugins: [],
};
