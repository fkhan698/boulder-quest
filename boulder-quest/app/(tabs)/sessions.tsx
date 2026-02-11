import { TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function SessionsScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Sessions</ThemedText>
      
      <Link href="/new-session" asChild>
        <TouchableOpacity style={styles.addButton}>
          <ThemedText 
            lightColor="#FFFFFF" 
            darkColor="#FFFFFF" 
            style={styles.addButtonText}
          >
            Add New Session
          </ThemedText>
        </TouchableOpacity>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  addButton: {
    marginTop: 24,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 32,
    minWidth: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4CAF50', // Bright green
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
