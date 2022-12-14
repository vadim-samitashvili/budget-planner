export interface HeaderProps {
  avatar: string;
  lastName: string;
  firstName: string;
  setIsAuth: () => void;
  setTheme: (theme: string | null) => void;
}
