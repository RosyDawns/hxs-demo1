import { reactive, watch } from 'vue';

const STORAGE_KEY = 'user_health_profile';

// Default initial state
const defaultProfile = {
  gender: 'male',
  birthDate: '', // Format: YYYY-MM-DD
  height: 175,
  weight: 70,
  activityLevel: 'moderate',
  bmr: 0,
  tdee: 0,
  lastUpdated: null,
};

// Reactive state
const profile = reactive({ ...defaultProfile });

// Load from storage
function loadProfile() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      Object.assign(profile, parsed);
    } catch (e) {
      console.error('Failed to load user profile', e);
    }
  }
}

// Save to storage
function saveProfile() {
  profile.lastUpdated = new Date().toISOString();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
}

// Calculate age from birthDate
function calculateAge(birthDateString) {
  if (!birthDateString) return 25; // Default age if not set
  const birthDate = new Date(birthDateString);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

// Update profile data
function updateProfile(data) {
  Object.assign(profile, data);
  saveProfile();
}

// Simulate hardware sync (Placeholder for future implementation)
async function syncWithHardware() {
  console.log('Attempting to sync with hardware devices...');
  return new Promise((resolve) => {
    // Simulate network/bluetooth delay
    setTimeout(() => {
      // Mock data from a "Smart Scale"
      // In a real app, this would be the result of a Bluetooth read or API call
      const mockHardwareData = {
        weight: profile.weight, // Keep current for now, or randomize slightly: profile.weight + (Math.random() - 0.5)
        // bodyFat: 20, // Future metric
      };
      
      console.log('Hardware sync successful', mockHardwareData);
      resolve(mockHardwareData);
    }, 1000);
  });
}

// Initialize
loadProfile();

// Watch for changes to auto-save (optional, but good for reactivity)
watch(profile, () => {
  saveProfile();
}, { deep: true });

export function useUserProfile() {
  return {
    profile,
    updateProfile,
    calculateAge,
    syncWithHardware
  };
}
