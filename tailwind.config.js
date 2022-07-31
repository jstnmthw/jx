module.exports = {
    darkMode: 'class',
    content: ['./src/pages/**/*.tsx', './src/components/**/*.tsx'],
    theme: {
        extend: {
            animation: {
                gradient: 'gradient 3s linear infinite'
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
            },
            colors: {
                blue: {
                    DEFAULT: '#0070F3',
                    50: '#ACD2FF',
                    150: '#97C7FF',
                    100: '#6EB1FF',
                    200: '#469BFF',
                    300: '#1D85FF',
                    400: '#0F7CFF',
                    500: '#0070F3',
                    600: '#0056BB',
                    700: '#003C83',
                    800: '#00224B',
                    900: '#000913'
                }
            },
            fontFamily: {
                sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif']
            },
            keyframes: {
                gradient: {
                    '0%, 100%': { 'background-position': '0% 50%' },
                    '50%': { 'background-position': '100% 50%' }
                }
            }
        }
    },
    plugins: [require('@tailwindcss/forms')]
}
