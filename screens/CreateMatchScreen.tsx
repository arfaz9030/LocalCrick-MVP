import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function CreateMatchScreen() {
  const router = useRouter();
  const [team1Name, setTeam1Name] = useState('');
  const [team2Name, setTeam2Name] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Match</Text>
      <Text style={styles.subtitle}>Milestone 3 demo form</Text>

      <Text style={styles.label}>Team 1 Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter team 1"
        placeholderTextColor="#64748B"
        value={team1Name}
        onChangeText={setTeam1Name}
      />

      <Text style={styles.label}>Team 2 Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter team 2"
        placeholderTextColor="#64748B"
        value={team2Name}
        onChangeText={setTeam2Name}
      />

      <Pressable style={styles.primaryButton}>
        <Text style={styles.primaryButtonText}>Save Match</Text>
      </Pressable>

      <Pressable
        style={styles.secondaryButton}
        onPress={() => router.back()}
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