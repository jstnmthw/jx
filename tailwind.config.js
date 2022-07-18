module.exports = {
    content: ['./src/pages/**/*.tsx', './src/components/**/*.tsx'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif']
            },
            colors: {
                blue: {
                    DEFAULT: '#0070F3',
                    50: '#ACD2FF',
                    150: '#97C7FF',
                    100: '#6EB1FF',
                    200: '#469BFF',
                    300: '#1D85FF',
                    400: '#0076ff',
                    500: '#0070F3',
                    600: '#0056BB',
                    700: '#003C83',
                    800: '#00224B',
                    900: '#000913'
                }
            }
        }
    },
    plugins: [require('@tailwindcss/forms')]
}
