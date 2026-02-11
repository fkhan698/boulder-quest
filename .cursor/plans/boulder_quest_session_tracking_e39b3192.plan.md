---
name: Boulder Quest Session Tracking
overview: Build a bouldering session tracking feature with 6 inputs (session goal, top grade, photo, notes, duration, effort) following an iterative v0→v1→v2→v3 approach, starting with hardcoded prototypes and gradually adding state, data persistence, and polish.
todos:
  - id: phase0-ui
    content: "Phase 0: Create hardcoded UI prototype - Build the Log New Session screen with all 6 inputs as static elements, add navigation from sessions list"
    status: pending
  - id: phase1-state
    content: "Phase 1: Add state management - Create Session type, add useState for all inputs, make grade/effort selectors interactive, implement Save button with console.log"
    status: pending
    dependencies:
      - phase0-ui
  - id: phase2-storage
    content: "Phase 2: Add data persistence - Create storage utilities, implement photo picker, save sessions to storage, display sessions list with loaded data"
    status: pending
    dependencies:
      - phase1-state
  - id: phase3-polish
    content: "Phase 3: Polish & UX - Add duration timer, swipe gestures for grade, photo preview, sessions list improvements (delete, sort, empty state), form validation feedback"
    status: pending
    dependencies:
      - phase2-storage
---

# Boulder Quest Session Tracking Plan

## Overview

Build a session logging feature for tracking bouldering sessions with 6 inputs: session goal, top grade achieved, photo upload, session notes, duration, and effort level. Follow the learning-first iterative approach: start with hardcoded prototypes, add state management, then data persistence, and finally polish.

## Architecture Overview

```
Session Flow:
┌─────────────────┐
│ Sessions List   │ (sessions.tsx)
│  - View all     │
│  - Add new      │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Log New Session │ (new-session.tsx)
│  - Form inputs  │
│  - Save button  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Session Data    │ (types + storage)
│  - TypeScript   │
│  - Local state  │
└─────────────────┘
```

## Implementation Phases

### Phase 0: Hardcoded Prototype (v0)

**Goal**: Get the UI structure working with static data, no interactivity yet.

**Files to create/modify**:

- `app/(tabs)/sessions.tsx` - Main sessions list screen
- `app/new-session.tsx` - New session form screen (modal route)
- `components/session-form.tsx` - Reusable form component (optional, start inline)

**Tasks**:

1. Create the "Log New Session" screen with all 6 input fields as static/hardcoded:

   - Session goal: TextInput with placeholder
   - Top grade: Hardcoded V2/V3/V4 buttons (non-functional)
   - Photo upload: Placeholder box with camera icon
   - Session notes: TextInput (multiline)
   - Duration: Hardcoded "2h 15m" display
   - Effort: Hardcoded 5 lightning icons (4 filled)
   - Save button: Non-functional button

2. Add navigation from sessions list to new session screen
3. Style to match the dark green theme from the design
4. Use existing `ThemedView`, `ThemedText` components

**Learning focus**: Understanding React Native form layouts, styling with StyleSheet, navigation with expo-router

---

### Phase 1: State & Logic (v1)

**Goal**: Make inputs interactive with React state, no persistence yet.

**Files to modify**:

- `app/new-session.tsx` - Add useState hooks for each input
- `types/session.ts` - Create TypeScript interface for Session data

**Tasks**:

1. Create `types/session.ts` with Session interface:
   ```typescript
   interface Session {
     id: string;
     goal: string;
     topGrade: string; // "V2", "V3", "V4", etc.
     photoUri?: string;
     notes: string;
     duration: number; // in minutes
     effort: number; // 1-5
     createdAt: Date;
   }
   ```

2. Add state management for each input:

   - `goal` state with TextInput onChange
   - `topGrade` state with button selection
   - `notes` state with TextInput onChange
   - `effort` state with tap-to-select (1-5)

3. Implement grade selection: Make V2/V3/V4 buttons toggle selected state
4. Implement effort selector: 5 lightning icons, tap to set 1-5
5. Add duration tracking (start with manual input, or timer later)
6. Make Save button functional: console.log the session data
7. Add basic validation: ensure required fields are filled

**Learning focus**: React hooks (useState), controlled components, TypeScript interfaces, form validation basics

---

### Phase 2: Real Data & Storage (v2)

**Goal**: Persist sessions to local storage and display in sessions list.

**Files to create/modify**:

- `utils/storage.ts` - Local storage helper functions
- `app/(tabs)/sessions.tsx` - Display list of saved sessions
- `app/new-session.tsx` - Save to storage on submit

**Tasks**:

1. Create storage utility using `expo-secure-store` or `AsyncStorage`:

   - `saveSession(session: Session): Promise<void>`
   - `getSessions(): Promise<Session[]>`
   - `deleteSession(id: string): Promise<void>`

2. Implement photo upload:

   - Add `expo-image-picker` dependency
   - Add camera/gallery picker functionality
   - Store image URI in session

3. Update new-session screen:

   - Save session to storage on Save button press
   - Navigate back to sessions list after save

4. Update sessions list screen:

   - Load sessions from storage on mount
   - Display sessions in a list (FlatList or ScrollView)
   - Show session preview: date, top grade, photo thumbnail

5. Add session detail view (optional):

   - Tap session to view full details

**Learning focus**: AsyncStorage/SecureStore, async/await, image picker API, FlatList component, data persistence patterns

---

### Phase 3: Polish & UX (v3)

**Goal**: Improve user experience with animations, better UI, and edge case handling.

**Files to modify**:

- All existing files - Add polish and refinements

**Tasks**:

1. Duration tracking:

   - Add start/stop timer functionality
   - Or improve manual duration input (hours/minutes picker)

2. Grade selection:

   - Add swipe gesture for grade selection (using react-native-gesture-handler)
   - Visual feedback on swipe

3. Photo handling:

   - Show preview after selection
   - Allow removing/replacing photo
   - Handle image compression if needed

4. Sessions list improvements:

   - Add pull-to-refresh
   - Add delete swipe gesture
   - Sort by date (newest first)
   - Add empty state when no sessions

5. Form improvements:

   - Add loading state on save
   - Add success feedback (haptic + toast)
   - Better error handling
   - Form validation feedback

6. Theme integration:

   - Ensure dark green theme matches design
   - Add proper spacing and typography

**Learning focus**: Gesture handling, animations, UX patterns, error handling, loading states

---

## Key Files Structure

```
boulder-quest/
├── app/
│   ├── (tabs)/
│   │   ├── sessions.tsx          # Sessions list screen
│   │   └── ...
│   └── new-session.tsx           # New session form (modal)
├── components/
│   └── session-form.tsx          # Optional: reusable form
├── types/
│   └── session.ts                # Session TypeScript interface
└── utils/
    └── storage.ts                # Storage helper functions
```

## Dependencies to Add

- `expo-image-picker` - For photo upload functionality
- `expo-secure-store` or `@react-native-async-storage/async-storage` - For data persistence

## Design Notes

Based on the provided design:

- Dark green background theme
- Rounded rectangular inputs
- Grade selection with swipe hint
- Photo upload with dashed border and camera icon
- Effort rating with 5 lightning bolt icons
- Duration and effort displayed as bottom cards

## Success Criteria (per phase)

Each phase is complete when:

- ✅ All features work as expected
- ✅ Basic edge cases handled (empty inputs, etc.)
- ✅ You can explain how it works out loud
- ✅ Code is readable and well-commented (why, not what)
- ✅ No major bugs or crashes