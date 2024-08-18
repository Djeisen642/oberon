import { View } from 'react-native';

import { useSession } from '@/components/AuthContext';
import { Button } from 'react-native-paper';

export default function Index() {
  const { signOut } = useSession();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        icon="logout"
        mode="contained"
        onPress={() => {
          // The `app/(app)/_layout.tsx` will redirect to the sign-in screen.
          signOut();
        }}
      >
        Sign out
      </Button>
    </View>
  );
}
