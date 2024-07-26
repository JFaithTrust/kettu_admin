import {create} from "zustand";

interface UserStoreState {
  auth: null | {
    token: string;
    refreshTokenId: string;
    user: {
      id: string;
      email: string;
    };
  };
  isLoggedIn: boolean;
  setAuth: (auth: UserStoreState["auth"]) => void;
  logout: () => void;
}

const useAuthStore = create<UserStoreState>((set) => {
  // Load user data from localStorage on initialization
  const initialAuth = typeof window !== 'undefined' && localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth')!)
    : null;

  return {
    auth: initialAuth,
    isLoggedIn: initialAuth !== null,
    setAuth: (auth) => {
      set({ auth, isLoggedIn: true });
      localStorage.setItem('auth', JSON.stringify(auth));
    },
    logout: () => {
      set({ auth: null, isLoggedIn: false });
      localStorage.removeItem('auth');
    },
  };
});

export default useAuthStore;