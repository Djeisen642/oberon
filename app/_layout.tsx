import { AuthProvider } from '@/components/AuthContext';
import { Slot } from 'expo-router';
import { Material3ThemeProvider } from '@/components/ThemeContext';

export default function RootLayout() {
  return (
    <AuthProvider>
      <Material3ThemeProvider>
        <Slot />
      </Material3ThemeProvider>
    </AuthProvider>
  );
}
