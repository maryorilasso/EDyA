import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth, googleProvider } from '../firebase/config';
import { signInWithPopup, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { setUser, setLoading, setError, logout } from '../store/authSlice';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { isAuthenticated, loading, error, user } = useSelector((state) => state.auth);

  useEffect(() => {
    // Listener para cambios en el estado de autenticación
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL
        }));
      } else {
        dispatch(logout());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      dispatch(setUser({
        uid: result.user.uid,
        email: result.user.email,
        displayName: result.user.displayName,
        photoURL: result.user.photoURL
      }));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };

  const handleGoogleLogin = async () => {
    dispatch(setLoading(true));
    try {
      const result = await signInWithPopup(auth, googleProvider);
      dispatch(setUser({
        uid: result.user.uid,
        email: result.user.email,
        displayName: result.user.displayName,
        photoURL: result.user.photoURL
      }));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch(logout());
    } catch (error) {
      dispatch(setError(error.message));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-pink-200 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-xl border border-pink-200">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
            <span className="text-2xl">💝</span>
          </div>
          <h2 className="mt-4 text-center text-3xl font-bold text-gray-900">
            {isAuthenticated ? `Welcome, ${user?.displayName || 'lovely'}! 💖` : 'Sign in to your account'}
          </h2>
          <p className="mt-2 text-center text-sm text-pink-600">
            {isAuthenticated ? 'We\'re so happy to see you!' : 'Join our lovely community ✨'}
          </p>
        </div>

        {error && (
          <div className="bg-pink-50 border-l-4 border-pink-400 p-4 rounded">
            <div className="flex">
              <div className="ml-3">
                <p className="text-sm text-pink-700">{error}</p>
              </div>
            </div>
          </div>
        )}

        {!isAuthenticated && (
          <form className="mt-8 space-y-6" onSubmit={handleEmailLogin}>
            <div className="rounded-md -space-y-px">
              <div className="mb-4">
                <input
                  type="email"
                  required
                  className="appearance-none relative block w-full px-3 py-3 border border-pink-300 placeholder-pink-400 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 focus:z-10 sm:text-sm"
                  placeholder="✉️ Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="password"
                  required
                  className="appearance-none relative block w-full px-3 py-3 border border-pink-300 placeholder-pink-400 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 focus:z-10 sm:text-sm"
                  placeholder="🔒 Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col space-y-4">
              <button
                type="submit"
                disabled={loading}
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-pink-500 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-400 disabled:opacity-50 transition-colors duration-200"
              >
                {loading ? 'Loading...' : 'Sign in'} ✨
              </button>

              <button
                type="button"
                disabled={loading}
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-purple-500 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-400 disabled:opacity-50 transition-colors duration-200"
              >
                Register 🌸
              </button>

              <button
                type="button"
                onClick={handleGoogleLogin}
                disabled={loading}
                className="group relative w-full flex justify-center py-3 px-4 border border-pink-200 text-sm font-medium rounded-lg text-pink-600 bg-white hover:bg-pink-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-400 disabled:opacity-50 transition-colors duration-200"
              >
                Sign in with Google 🌟
              </button>
            </div>
          </form>
        )}

        {isAuthenticated && (
          <button
            onClick={handleLogout}
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-pink-500 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-400 transition-colors duration-200"
          >
            Logout 👋
          </button>
        )}

        <div className="mt-6 text-center">
          <p className="text-sm text-pink-400">
            Made with 💖 for you
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;