# Coach Application Form - Firebase Integration Guide

## Overview
The Coach Application Form (`CoachApplicationPage.tsx`) is ready to collect all application data and files from coaches. This guide explains how to connect the form submission to your Firebase infrastructure.

## Current Form Data Structure

The form collects the following data:

```typescript
interface FormData {
  // Step 1: Personal Information
  title: string;                    // Dr. / Mr. / Mrs. / Ms. / Prof.
  fullName: string;                 // Full name (letters only)
  email: string;                    // Valid email
  phoneNumber: string;              // With country code, min 10 digits
  gender: string;                   // Male / Female

  // Step 2: Professional Background
  nationality: string;              // Country name
  city: string;                     // City name
  countryOfResidence: string;       // Country name
  yearsOfExperience: number;        // Min 5 years
  maritalStatus: string;            // Single / Married / Divorced / Widowed

  // Step 3: Qualifications & Expertise
  credentials: string;              // Certifications and qualifications
  achievements: string;             // Career achievements (optional)
  sessionRate: string;              // $20-$100 per hour
  socialMedia: string;              // Social media handle (optional)
  linkedinProfile: string;          // LinkedIn URL (optional)

  // Step 4: Attachments
  profilePhoto: File;               // JPG/PNG, max 5MB
  credentialsPdf: File;             // PDF, max 10MB (optional)
}
```

## Implementation Steps

### Step 1: Install Firebase SDK

```bash
npm install firebase
```

### Step 2: Initialize Firebase in Your Project

Create a new file `src/config/firebase.ts`:

```typescript
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Replace with your Firebase config
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
```

### Step 3: Create a Submission Handler Function

Create a new file `src/services/coachApplicationService.ts`:

```typescript
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../config/firebase';

interface FormData {
  title: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  gender: string;
  nationality: string;
  city: string;
  countryOfResidence: string;
  yearsOfExperience: number;
  maritalStatus: string;
  credentials: string;
  achievements: string;
  sessionRate: string;
  socialMedia: string;
  linkedinProfile: string;
  profilePhoto: File | null;
  credentialsPdf: File | null;
}

export const submitCoachApplication = async (formData: FormData) => {
  try {
    // Step 1: Upload files to Firebase Storage
    let profilePhotoUrl = '';
    let credentialsPdfUrl = '';

    if (formData.profilePhoto) {
      const photoRef = ref(
        storage,
        `coach-applications/${Date.now()}_${formData.email}_photo`
      );
      await uploadBytes(photoRef, formData.profilePhoto);
      profilePhotoUrl = await getDownloadURL(photoRef);
    }

    if (formData.credentialsPdf) {
      const pdfRef = ref(
        storage,
        `coach-applications/${Date.now()}_${formData.email}_credentials`
      );
      await uploadBytes(pdfRef, formData.credentialsPdf);
      credentialsPdfUrl = await getDownloadURL(pdfRef);
    }

    // Step 2: Save application data to Firestore
    const applicationData = {
      // Personal Information
      title: formData.title,
      fullName: formData.fullName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      gender: formData.gender,

      // Professional Background
      nationality: formData.nationality,
      city: formData.city,
      countryOfResidence: formData.countryOfResidence,
      yearsOfExperience: formData.yearsOfExperience,
      maritalStatus: formData.maritalStatus,

      // Qualifications
      credentials: formData.credentials,
      achievements: formData.achievements,
      sessionRate: formData.sessionRate,
      socialMedia: formData.socialMedia,
      linkedinProfile: formData.linkedinProfile,

      // File URLs
      profilePhotoUrl,
      credentialsPdfUrl,

      // Metadata
      status: 'pending', // pending, under-review, approved, rejected
      applicationDate: Timestamp.now(),
      lastModified: Timestamp.now(),
    };

    // Add to 'coach_applications' collection
    const docRef = await addDoc(
      collection(db, 'coach_applications'),
      applicationData
    );

    // Step 3: (Optional) Send confirmation email via Cloud Function
    // This would trigger a Cloud Function to send email confirmation
    // const response = await fetch('/api/sendApplicationConfirmation', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ 
    //     email: formData.email,
    //     fullName: formData.fullName,
    //     applicationId: docRef.id
    //   })
    // });

    return {
      success: true,
      applicationId: docRef.id,
      message: 'Application submitted successfully',
    };
  } catch (error) {
    console.error('Error submitting application:', error);
    throw error;
  }
};
```

### Step 4: Update the Form Component

Replace the `handleSubmit` function in `CoachApplicationPage.tsx`:

```typescript
import { submitCoachApplication } from '../services/coachApplicationService';

// ... inside the CoachApplicationPage component

const [isSubmitting, setIsSubmitting] = useState(false);
const [submitError, setSubmitError] = useState<string | null>(null);

const handleSubmit = async () => {
  if (!validateStep4()) return;

  setIsSubmitting(true);
  setSubmitError(null);

  try {
    const result = await submitCoachApplication(formData);
    console.log('Application submitted:', result);
    setSuccessState(true);
  } catch (error) {
    console.error('Submission failed:', error);
    setSubmitError(
      error instanceof Error
        ? error.message
        : 'Failed to submit application. Please try again.'
    );
    setIsSubmitting(false);
  }
};

// Update the submit button to show loading state:
{currentStep === 4 ? (
  <button
    onClick={handleSubmit}
    disabled={isSubmitting}
    className="flex items-center gap-2 px-8 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-all ml-auto disabled:opacity-50 disabled:cursor-not-allowed"
  >
    {isSubmitting ? (
      <>
        <span className="inline-block animate-spin">⏳</span>
        Submitting...
      </>
    ) : (
      <>
        <CheckCircle2 className="w-5 h-5" />
        Submit Application
      </>
    )}
  </button>
) : (
  // ... Next button code
)}

// Show error message if submission fails:
{submitError && (
  <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
    {submitError}
  </div>
)}
```

## Firestore Collection Structure

Create a collection called `coach_applications` with the following document structure:

```
coach_applications/
├── {documentId}/
│   ├── title: string
│   ├── fullName: string
│   ├── email: string
│   ├── phoneNumber: string
│   ├── gender: string
│   ├── nationality: string
│   ├── city: string
│   ├── countryOfResidence: string
│   ├── yearsOfExperience: number
│   ├── maritalStatus: string
│   ├── credentials: string
│   ├── achievements: string
│   ├── sessionRate: string
│   ├── socialMedia: string (nullable)
│   ├── linkedinProfile: string (nullable)
│   ├── profilePhotoUrl: string (Firebase Storage URL)
│   ├── credentialsPdfUrl: string (Firebase Storage URL, nullable)
│   ├── status: string (pending, under-review, approved, rejected)
│   ├── applicationDate: Timestamp
│   └── lastModified: Timestamp
```

## Security Rules for Cloud Storage

Add these rules to your Firebase Storage security rules:

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /coach-applications/{allPaths=**} {
      // Allow write for authenticated users during form submission
      allow create: if request.auth != null;
      // Allow read for admin users (to review applications)
      allow read: if request.auth != null && request.auth.token.admin == true;
    }
  }
}
```

## Security Rules for Firestore

Add these rules to your Firestore security rules:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /coach_applications/{document=**} {
      // Only authenticated users can create
      allow create: if request.auth != null;
      // Only admins can read
      allow read: if request.auth != null && request.auth.token.admin == true;
      // Only admins can update/delete
      allow update, delete: if request.auth != null && request.auth.token.admin == true;
    }
  }
}
```

## Environment Variables

Add these to your `.env` file:

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

And update your Vite config to expose them:

```typescript
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    // ... existing config
    define: {
      'process.env.VITE_FIREBASE_API_KEY': JSON.stringify(env.VITE_FIREBASE_API_KEY),
      'process.env.VITE_FIREBASE_AUTH_DOMAIN': JSON.stringify(env.VITE_FIREBASE_AUTH_DOMAIN),
      'process.env.VITE_FIREBASE_PROJECT_ID': JSON.stringify(env.VITE_FIREBASE_PROJECT_ID),
      'process.env.VITE_FIREBASE_STORAGE_BUCKET': JSON.stringify(env.VITE_FIREBASE_STORAGE_BUCKET),
      'process.env.VITE_FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(env.VITE_FIREBASE_MESSAGING_SENDER_ID),
      'process.env.VITE_FIREBASE_APP_ID': JSON.stringify(env.VITE_FIREBASE_APP_ID),
    },
  };
});
```

## Optional: Send Confirmation Email

You can create a Firestore trigger or Cloud Function to send a confirmation email when an application is submitted:

**Firebase Cloud Function (functions/index.js):**

```javascript
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

exports.sendApplicationConfirmation = functions.firestore
  .document('coach_applications/{applicationId}')
  .onCreate(async (snap, context) => {
    const data = snap.data();

    const mailOptions = {
      from: 'noreply@nexusapp.com',
      to: data.email,
      subject: 'Nexus Coach Application Received',
      html: `
        <h2>Thank You for Your Application!</h2>
        <p>Hi ${data.fullName},</p>
        <p>We've received your application to join the Nexus coaching team.</p>
        <p>Our team will review your application and get back to you within 10 business days.</p>
        <p>Application ID: ${context.params.applicationId}</p>
        <p>Best regards,<br/>Nexus Team</p>
      `,
    };

    return transporter.sendMail(mailOptions);
  });
```

## Admin Dashboard Recommendations

Consider building an admin dashboard to:
1. View pending applications
2. Review uploaded credentials and photos
3. Update application status (approved/rejected)
4. Send feedback to applicants
5. Export approved coaches as a CSV for onboarding

## Rate Limiting (Optional)

To prevent abuse, consider implementing rate limiting:

```typescript
// Add to Firestore rules
match /coach_applications/{document=**} {
  allow create: if request.auth != null && 
    request.time < resource.data.nextSubmissionTime;
}
```

Or implement on the client side:

```typescript
// Check if user has submitted recently
const lastSubmission = localStorage.getItem('lastCoachApplicationSubmission');
const timeSinceLastSubmission = Date.now() - (lastSubmission ? parseInt(lastSubmission) : 0);

if (timeSinceLastSubmission < 24 * 60 * 60 * 1000) {
  // Show error: Can only submit one application per 24 hours
}
```

## Testing

1. **Test locally** by submitting a test application
2. **Monitor Firestore** to see the data being saved
3. **Check Cloud Storage** for uploaded files
4. **Verify file access** by downloading files from the URLs

## Next Steps

1. Set up Firebase project and credentials
2. Install Firebase SDK
3. Create the service file
4. Update the form component with submission logic
5. Test with sample data
6. Set up admin dashboard for reviewing applications
7. Configure email notifications
8. Deploy to production

---

For questions or issues with Firebase integration, refer to the official [Firebase Documentation](https://firebase.google.com/docs).
