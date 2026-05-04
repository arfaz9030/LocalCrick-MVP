// import { useRouter } from 'expo-router';
// import { useState } from 'react';
// import {
//   Pressable,
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
// } from 'react-native';

// export default function CreateMatchScreen() {
//   const router = useRouter();
//   const [team1Name, setTeam1Name] = useState('');
//   const [team2Name, setTeam2Name] = useState('');

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Create Match</Text>
//       <Text style={styles.subtitle}>Milestone 3 demo form</Text>

//       <Text style={styles.label}>Enter 1st Team  Name</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter 2nd Team  Name"
//         placeholderTextColor="#64748B"
//         value={team1Name}
//         onChangeText={setTeam1Name}
//       />

//       <Text style={styles.label}>Enter 2nd Team  Name</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter 2nd Team  Name"
//         placeholderTextColor="#64748B"
//         value={team2Name}
//         onChangeText={setTeam2Name}
//       />

//       <Pressable style={styles.primaryButton}>
//         <Text style={styles.primaryButtonText}>Save Match</Text>
//       </Pressable>

//       <Pressable
//         style={styles.secondaryButton}
//         onPress={() => router.back()}
//       >
//         <Text style={styles.secondaryButtonText}>Cancel</Text>
//       </Pressable>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#0B1220',
//     padding: 20,
//   },
//   title: {
//     color: '#FFFFFF',
//     fontSize: 28,
//     fontWeight: '800',
//     marginTop: 20,
//   },
//   subtitle: {
//     color: '#94A3B8',
//     fontSize: 14,
//     marginTop: 4,
//     marginBottom: 24,
//   },
//   label: {
//     color: '#E2E8F0',
//     fontSize: 14,
//     marginBottom: 8,
//     marginTop: 8,
//   },
//   input: {
//     backgroundColor: '#111C34',
//     borderWidth: 1,
//     borderColor: '#1E293B',
//     borderRadius: 14,
//     paddingHorizontal: 14,
//     paddingVertical: 14,
//     color: '#FFFFFF',
//     marginBottom: 14,
//   },
//   primaryButton: {
//     backgroundColor: '#2563EB',
//     borderRadius: 16,
//     paddingVertical: 16,
//     alignItems: 'center',
//     marginTop: 8,
//     marginBottom: 12,
//   },
//   primaryButtonText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: '800',
//   },
//   secondaryButton: {
//     backgroundColor: '#1E293B',
//     borderRadius: 16,
//     paddingVertical: 16,
//     alignItems: 'center',
//   },
//   secondaryButtonText: {
//     color: '#E2E8F0',
//     fontSize: 16,
//     fontWeight: '700',
//   },
// });

import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { createMatch } from '../src/api/matchApi';

export default function CreateMatchScreen() {
  const router = useRouter();
  const [team1Name, setTeam1Name] = useState('');
  const [team2Name, setTeam2Name] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSaveMatch = async () => {
    const t1 = team1Name.trim();
    const t2 = team2Name.trim();

    if (!t1 || !t2) {
      Alert.alert('Validation', 'Please enter both team names.');
      return;
    }

    try {
      setLoading(true);

      const created = await createMatch({
        team1Name: t1,
        team2Name: t2,
      });

      // Option 1: go back to list (it will refetch on focus)
      router.back();

      // Option 2 (if you already have /match/[matchId] wired):
      // router.replace({ pathname: '/match/[matchId]', params: { matchId: created.matchId } });
    } catch (err) {
      const message =
        err instanceof Error ? err.message : 'Failed to create match.';
      Alert.alert('Error', message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Match</Text>
      <Text style={styles.subtitle}>Milestone 3 demo form</Text>

      <Text style={styles.label}>Enter 1st Team Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter 1st Team Name"
        placeholderTextColor="#64748B"
        value={team1Name}
        onChangeText={setTeam1Name}
        autoCapitalize="words"
      />

      <Text style={styles.label}>Enter 2nd Team Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter 2nd Team Name"
        placeholderTextColor="#64748B"
        value={team2Name}
        onChangeText={setTeam2Name}
        autoCapitalize="words"
      />

      <Pressable
        style={[
          styles.primaryButton,
          loading && { opacity: 0.6 },
        ]}
        onPress={handleSaveMatch}
        disabled={loading}
      >
        <Text style={styles.primaryButtonText}>
          {loading ? 'Saving…' : 'Save Match'}
        </Text>
      </Pressable>

      <Pressable
        style={styles.secondaryButton}
        onPress={() => router.back()}
        disabled={loading}
      >
        <Text style={styles.secondaryButtonText}>Cancel</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1220',
    padding: 20,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '800',
    marginTop: 20,
  },
  subtitle: {
    color: '#94A3B8',
    fontSize: 14,
    marginTop: 4,
    marginBottom: 24,
  },
  label: {
    color: '#E2E8F0',
    fontSize: 14,
    marginBottom: 8,
    marginTop: 8,
  },
  input: {
    backgroundColor: '#111C34',
    borderWidth: 1,
    borderColor: '#1E293B',
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 14,
    color: '#FFFFFF',
    marginBottom: 14,
  },
  primaryButton: {
    backgroundColor: '#2563EB',
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 12,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  },
  secondaryButton: {
    backgroundColor: '#1E293B',
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#E2E8F0',
    fontSize: 16,
    fontWeight: '700',
  },
});