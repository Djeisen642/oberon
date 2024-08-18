import { router } from 'expo-router';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import { useSession } from '@/components/AuthContext';

export default function SignIn() {
  const { signIn, isLoading } = useSession();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text variant="displayLarge">Big App Name</Text>
      <Button
        icon="login"
        mode="contained"
        loading={isLoading}
        onPress={async () => {
          if (isLoading) return;
          await signIn({
            name: 'test',
            email: 'test@invalid.test',
          });
          // Navigate after signing in. You may want to tweak this to ensure sign-in is
          // successful before navigating.
          router.replace('/');
        }}
      >
        Sign In
      </Button>
    </View>
  );
}
