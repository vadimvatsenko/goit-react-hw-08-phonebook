import { Nav } from 'components/nav/nav';
import { UserMenu } from '../userMenu/userMenu';
import { AuthNav } from '../authNav/authNav';
import { useAuth } from 'hooks/useAuth';
import css from './appBar.module.css';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <Nav />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};