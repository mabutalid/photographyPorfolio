module.exports = {
  purge: [],
  theme: {
    extend: {
      screens:{
        'xs': '400px'
      },
      spacing: {
        '76': '20rem',
        '88': '22rem',
        '100': '25rem',
        '101': '28rem',
        '102': '30rem',
        '103': '35rem',
        '1vw': '1vw',
        '1.25vw': '1.25vw',
        '10vh': '10vh',
        '15vh': '15vh',
        '20vh': '20vh',
        '30vh': '30vh',
        '40vh': '40vh',
        '42vh': '42vh',
        '44vh': '44vh',
        '46vh': '46vh',
        '48vh': '48vh',
        '50vh': '50vh',
        '52vh': '52vh',
        '54vh': '54vh',
        '56vh': '56vh',
        '58vh': '58vh',
        '60vh': '60vh',
        '70vh': '70vh',
        '80vh': '80vh',
        '90vh': '90vh',
      },
      fontFamily: {
        Cinzel: ['Cinzel'],
        Raleway: ['Raleway']
      }
    },
  },
  variants: {
    backgroundColor: ['responsive', 'active', 'hover','focus'],
    borderColor: ['responsive','active', 'hover','focus']
  },
  plugins: [],
}
