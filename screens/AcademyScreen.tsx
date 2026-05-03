import React from 'react';
import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';

export default function AcademyScreen() {
  const handleCall = () => {
    // Replace with real phone later
    Linking.openURL('tel:+910000000000').catch(() => {});
  };

  const handleWhatsApp = () => {
    // Replace with real WhatsApp number later
    const phone = '+910000000000';
    const message = encodeURIComponent('Hi, I am interested in your cricket academy.');
    Linking.openURL(`https://wa.me/${phone}?text=${message}`).catch(() => {});
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.academyName}>CrickHero Elite Academy</Text>
        <Text style={styles.tagline}>Train like a pro. Play like a champion.</Text>

        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.bodyText}>
          We focus on real match scenarios, fitness, and mental toughness to prepare young
          cricketers for league and tournament level.
        </Text>

        <Text style={styles.sectionTitle}>Location</Text>
        <Text style={styles.bodyText}>
          Hyderabad, Telangana{'\n'}Near Gachibowli Stadium
        </Text>

        <Text style={styles.sectionTitle}>Training Highlights</Text>
        <Text style={styles.bodyText}>
          • Morning and evening batches{'\n'}
          • Qualified coaches with match experience{'\n'}
          • Weekend practice matches with live scoring
        </Text>
      </View>

      <Pressable style={styles.primaryButton} onPress={handleCall}>
        <Text style={styles.primaryButtonText}>Call Academy</Text>
      </Pressable>

      <Pressable style={styles.secondaryButton} onPress={handleWhatsApp}>
        <Text style={styles.secondaryButtonText}>WhatsApp Enquiry</Text>
      </Pressable>

      <Text style={styles.footerText}>
        This is demo content for the MVP. Later you can load these details from the backend.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020617',
    padding: 20,
  },
  card: {
    backgroundColor: '#0F172A',
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#1E293B',
    marginBottom: 20,
  },
  academyName: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 6,
  },
  tagline: {
    color: '#38BDF8',
    fontSize: 14,
    marginBottom: 18,
  },
  sectionTitle: {
    color: '#E5E7EB',
    fontSize: 16,
    fontWeight: '700',
    marginTop: 14,
    marginBottom: 6,
  },
  bodyText: {
    color: '#CBD5E1',
    fontSize: 14,
    lineHeight: 20,
  },
  primaryButton: {
    backgroundColor: '#16A34A',
    borderRadius: 16,
    paddingVertical: 14,
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
  },
  secondaryButtonText: {
    color: '#E5E7EB',
    fontSize: 16,
    fontWeight: '700',
  },
  footerText: {
    color: '#64748B',
    fontSize: 12,
    marginTop: 14,
    textAlign: 'center',
  },
});