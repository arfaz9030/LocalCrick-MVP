import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type MatchDetailProps = {
  matchId: string;
  team1Name: string;
  team2Name: string;
  runs: string;
  wickets: string;
  overs: string;
  status: string;
};

export default function MatchDetailScreen({
  matchId,
  team1Name,
  team2Name,
  runs,
  wickets,
  overs,
  status,
}: MatchDetailProps) {
  const router = useRouter();

  const handleAddScore = () => {
    router.push({
      pathname: '/add-score/[matchId]',
      params: {
        matchId,
        team1Name,
        team2Name,
        runs,
        wickets,
        overs,
        status,
      },
    });
  };

  const handleShareScore = () => {
    router.push({
      pathname: '/share-score/[matchId]',
      params: {
        matchId,
        team1Name,
        team2Name,
        runs,
        wickets,
        overs,
        status,
      },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{status}</Text>
      </View>

      <Text style={styles.title}>
        {team1Name} vs {team2Name}
      </Text>

      <Text style={styles.matchId}>Match ID: {matchId}</Text>

      <View style={styles.scoreCard}>
        <Text style={styles.score}>
          {runs}/{wickets}
        </Text>
        <Text style={styles.overs}>{overs} overs</Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>Match Summary</Text>
        <Text style={styles.infoText}>Batting side is building pressure nicely.</Text>
        <Text style={styles.infoText}>This is hardcoded demo data for Milestone 3.</Text>
      </View>

      <Pressable style={styles.primaryButton} onPress={handleAddScore}>
        <Text style={styles.primaryButtonText}>Add Score</Text>
      </Pressable>

      <Pressable style={styles.secondaryButton} onPress={handleShareScore}>
        <Text style={styles.secondaryButtonText}>Share Score Poster</Text>
      </Pressable>

      <Pressable
        style={styles.tertiaryButton}
        onPress={() => router.back()}
      >
        <Text style={styles.tertiaryButtonText}>Back to Matches</Text>
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
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: '#DC2626',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 999,
    marginTop: 10,
    marginBottom: 16,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '800',
  },
  matchId: {
    color: '#94A3B8',
    fontSize: 14,
    marginTop: 8,
    marginBottom: 24,
  },
  scoreCard: {
    backgroundColor: '#111C34',
    borderRadius: 20,
    padding: 22,
    borderWidth: 1,
    borderColor: '#1E293B',
    marginBottom: 18,
  },
  score: {
    color: '#22C55E',
    fontSize: 44,
    fontWeight: '900',
  },
  overs: {
    color: '#E2E8F0',
    fontSize: 18,
    marginTop: 8,
  },
  infoCard: {
    backgroundColor: '#111827',
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: '#1F2937',
    marginBottom: 20,
  },
  infoTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 12,
  },
  infoText: {
    color: '#CBD5E1',
    fontSize: 15,
    marginBottom: 8,
  },
  primaryButton: {
    backgroundColor: '#2563EB',
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 10,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  },
  secondaryButton: {
    backgroundColor: '#1E293B',
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 10,
  },
  secondaryButtonText: {
    color: '#E5E7EB',
    fontSize: 16,
    fontWeight: '700',
  },
  tertiaryButton: {
    backgroundColor: '#020617',
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1E293B',
  },
  tertiaryButtonText: {
    color: '#E5E7EB',
    fontSize: 16,
    fontWeight: '700',
  },
});