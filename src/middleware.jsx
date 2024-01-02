export { default } from 'next-auth/middleware'

export const config = {

  matcher: [
    '/',
    '/products',
    '/nota',
    '/clientes',
    '/newProduct',
    '/vehiculos',
    '/home',
  ]
}
