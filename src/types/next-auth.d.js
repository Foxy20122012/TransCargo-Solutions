import { User as NextAuthUser } from 'next-auth';
import { JWT as NextAuthJWT } from 'next-auth/jwt';

const UserId = string;

// No se necesita 'declare module' en JSX

const JWT = {
  id: UserId,
  username: '',
  email: '',
  firstName: '',
  lastName: '',
  avatarUrl: '',
  roles: [],
  createdAt: new Date(),
  updatedAt: new Date(),
};

// No se necesita 'declare module' en JSX
const User = {
  id: UserId,
  username: '',
  email: '',
  firstName: '',
  lastName: '',
  avatarUrl: '',
  roles: [],
  createdAt: new Date(),
  updatedAt: new Date(),
};

// No se necesita 'declare module' en JSX
const Session = {
  user: User,
};

const UserRole = {
  id: 0,
  name: '',
};
