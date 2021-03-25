module.exports = {
  darkMode: 'class',
  purge: {
    enabled: true,
    content: [
    './src/**/*.md',
    './src/**/*.html',
    './src/**/*.liquid'
  ]
},
  theme: {
    extend: {
      colors: {
        'soft-white': '#c9b9b4',
        'titles': '#d4c7c3'
      },
      typography: (theme) => ({
        dark: {
          css: {
            color: "#d4c7c3",
            a: {
              color: "#d4c7c3",
              "&:hover": {
                color: "#1d4ed8",
              },
            },
            p: {
              color: "#d4c7c3",
            },
            h1: {
              color: "#d4c7c3",
            },
            h2: {
              color: "#d4c7c3",
            },
            h3: {
              color: "#d4c7c3",
            },
            h4: {
              color: "#d4c7c3",
            },
            h5: {
              color: "#d4c7c3",
            },
            h6: {
              color: "#d4c7c3",
            },
            th: {
              color: "#d4c7c3",
            },
            strong: {
              color: "#d4c7c3",
            },
            "blockquote p": {
              color: "#d4c7c3",
            },
            code: {
              color: "white",
            },
            figcaption: {
              color: theme("colors.gray.500"),
            },
            "::selection": {
              backgroundColor: "#005dcc",
            },
          },
        }
      })
    },
  },
  variants: {
    extend: {
      typography: ['dark']
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}