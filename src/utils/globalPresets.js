const theme = 'blue';

const presets = {
  theme: `${theme}`,
  appTitle: 'Restaurant ERP',
  images: {
    logo: 'https://img.freepik.com/vector-premium/logo-perfecto-empresa-relacionada-industria-transporte-carga_225174-92.jpg',
    loginFondo: 'https://img.freepik.com/vector-premium/logo-perfecto-empresa-relacionada-industria-transporte-carga_225174-92.jpg',
    welcomeFondo: 'https://img.freepik.com/vector-premium/logo-perfecto-empresa-relacionada-industria-transporte-carga_225174-92.jpg',
  },
  locations: {
    login: '/login',
    companiasUsuario: '/welcome',
    welcome: '/companiasUsuario',
    profile: '/miPerfil',
    welcomeTemp: '/welcome'
  },
  toaster: {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: 'light'
  }
};

export default presets;
