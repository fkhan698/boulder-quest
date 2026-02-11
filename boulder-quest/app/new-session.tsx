import { ScrollView, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

import { ThemedView } from '@/components/themed-view';
import { ThemedText } from '@/components/themed-text';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function NewSessionScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  
  const isDark = colorScheme === 'dark';
  const backgroundColor = isDark ? '#1A2A1A' : '#F5F5F5';
  const borderColor = isDark ? '#2A3A2A' : '#E0E0E0';
  const textColor = isDark ? '#ECEDEE' : '#11181C';
  const selectedGradeColor = '#4CAF50';

  return (
    <ThemedView style={styles.container}>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Session Goal Section */}
        <View style={styles.section}>
          <ThemedText style={styles.sectionLabel}>SESSION GOAL</ThemedText>
          <TextInput
            style={[
              styles.textInput,
              {
                backgroundColor,
                borderColor,
                color: textColor,
              }
            ]}
            placeholder="e.g., Work on overhangs or dynamic move"
            placeholderTextColor={isDark ? '#9BA1A6' : '#687076'}
            editable={true}
          />
        </View>

        {/* Top Grade Achieved Section */}
        <View style={styles.section}>
          <ThemedText style={styles.sectionLabel}>TOP GRADE ACHIEVED</ThemedText>
          <View style={styles.gradeContainer}>
            <TouchableOpacity 
              style={[
                styles.gradeButton,
                styles.gradeButtonSelected,
                { borderColor: selectedGradeColor }
              ]}
            >
              <ThemedText style={[styles.gradeText, { color: selectedGradeColor }]}>
                V2
              </ThemedText>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[
                styles.gradeButton,
                { borderColor }
              ]}
            >
              <ThemedText style={styles.gradeText}>V3</ThemedText>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[
                styles.gradeButton,
                { borderColor }
              ]}
            >
              <ThemedText style={[styles.gradeText, styles.gradeTextBold]}>V4</ThemedText>
            </TouchableOpacity>
          </View>
          <ThemedText style={styles.hintText}>Swipe to select grade</ThemedText>
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  section: {
    marginBottom: 32,
  },
  sectionLabel: {
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 1,
    marginBottom: 12,
    textTransform: 'uppercase',
  },
  textInput: {
    borderRadius: 12,
    borderWidth: 1,
    padding: 16,
    fontSize: 16,
    minHeight: 50,
  },
  gradeContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 8,
  },
  gradeButton: {
    flex: 1,
    borderRadius: 12,
    borderWidth: 2,
    paddingVertical: 16,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 50,
  },
  gradeButtonSelected: {
    borderWidth: 2,
  },
  gradeText: {
    fontSize: 18,
    fontWeight: '400',
  },
  gradeTextBold: {
    fontWeight: '700',
  },
  hintText: {
    fontSize: 12,
    opacity: 0.6,
    marginTop: 4,
  },
});
