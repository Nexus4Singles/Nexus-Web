import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronRight,
  ChevronLeft,
  Upload,
  AlertCircle,
  CheckCircle2,
  X,
  Eye,
  EyeOff,
} from 'lucide-react';
import { Navbar, Footer } from '../components/Layout';

interface FormData {
  // Step 1
  title: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  gender: string;

  // Step 2
  nationality: string;
  city: string;
  countryOfResidence: string;
  yearsOfExperience: number | '';
  maritalStatus: string;

  // Step 3
  credentials: string;
  achievements: string;
  sessionRate: string;
  socialMedia: string;
  linkedinProfile: string;

  // Step 4
  profilePhoto: File | null;
  credentialsPdf: File | null;
}

interface FormErrors {
  [key: string]: string;
}

const COUNTRIES = [
  'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Argentina', 'Armenia',
  'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados',
  'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia Herzegovina',
  'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia',
  'Cameroon', 'Canada', 'Cape Verde', 'Central African Republic', 'Chad', 'Chile', 'China',
  'Colombia', 'Comoros', 'Congo', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic',
  'Czechia', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt',
  'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Fiji', 'Finland',
  'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada',
  'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary',
  'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy',
  'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea North',
  'Korea South', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho',
  'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi',
  'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius',
  'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco',
  'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand',
  'Nicaragua', 'Niger', 'Nigeria', 'North Macedonia', 'Norway', 'Oman', 'Pakistan',
  'Palau', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines',
  'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts Nevis',
  'Saint Lucia', 'Saint Vincent Grenadines', 'Samoa', 'San Marino', 'Sao Tome Principe',
  'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia',
  'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Sudan', 'Spain',
  'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria', 'Taiwan',
  'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Tonga', 'Trinidad Tobago',
  'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates',
  'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City',
  'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe',
];

const SESSION_RATES = ['$20', '$30', '$40', '$50', '$60', '$70', '$80', '$90', '$100'];

const CoachApplicationPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    title: '',
    fullName: '',
    email: '',
    phoneNumber: '',
    gender: '',
    nationality: '',
    city: '',
    countryOfResidence: '',
    yearsOfExperience: '',
    maritalStatus: '',
    credentials: '',
    achievements: '',
    sessionRate: '',
    socialMedia: '',
    linkedinProfile: '',
    profilePhoto: null,
    credentialsPdf: null,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [successState, setSuccessState] = useState(false);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [nationalitySearch, setNationalitySearch] = useState('');
  const [residenceSearch, setResidenceSearch] = useState('');
  const [showCountryDropdown, setShowCountryDropdown] = useState<'nationality' | 'residence' | null>(null);
  const [showComingSoonSnackbar, setShowComingSoonSnackbar] = useState(false);

  // Auto-hide the snackbar after 3 seconds
  React.useEffect(() => {
    if (showComingSoonSnackbar) {
      const timer = setTimeout(() => {
        setShowComingSoonSnackbar(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showComingSoonSnackbar]);

  // Validation functions
  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone: string) => {
    const digitsOnly = phone.replace(/\D/g, '');
    const hasPlus = phone.includes('+');
    return hasPlus && digitsOnly.length >= 10;
  };

  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const validateStep1 = () => {
    const newErrors: FormErrors = {};

    if (!formData.title) newErrors.title = 'Title is required';
    if (!formData.fullName) newErrors.fullName = 'Full name is required';
    if (!/^[a-zA-Z\s]*$/.test(formData.fullName)) {
      newErrors.fullName = 'Full name should contain only letters and spaces';
    }
    if (!formData.email) newErrors.email = 'Email is required';
    if (formData.email && !validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone number is required';
    if (formData.phoneNumber && !validatePhone(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Phone must include country code (e.g., +234) and be at least 10 digits';
    }
    if (!formData.gender) newErrors.gender = 'Gender is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: FormErrors = {};

    if (!formData.nationality) newErrors.nationality = 'Nationality is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!/^[a-zA-Z\s]*$/.test(formData.city)) {
      newErrors.city = 'City should contain only letters and spaces';
    }
    if (!formData.countryOfResidence) newErrors.countryOfResidence = 'Country of residence is required';
    if (!formData.yearsOfExperience) {
      newErrors.yearsOfExperience = 'Years of experience is required';
    } else if (Number(formData.yearsOfExperience) < 5) {
      newErrors.yearsOfExperience = 'Minimum 5 years of experience required';
    }
    if (!formData.maritalStatus) newErrors.maritalStatus = 'Marital status is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    const newErrors: FormErrors = {};

    if (!formData.credentials) newErrors.credentials = 'Credentials are required';
    if (!formData.sessionRate) newErrors.sessionRate = 'Session rate is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep4 = () => {
    const newErrors: FormErrors = {};

    if (!formData.profilePhoto) newErrors.profilePhoto = 'Profile photo is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    setShowComingSoonSnackbar(true);
  };

  const handleBack = () => {
    setShowComingSoonSnackbar(true);
  };

  const handleInputChange = (
    field: keyof FormData,
    value: string | number
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleFieldBlur = (field: keyof FormData) => {
    // Clear error for this field when user leaves it
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (!['image/jpeg', 'image/png'].includes(file.type)) {
        setErrors((prev) => ({
          ...prev,
          profilePhoto: 'Only JPG and PNG files are accepted',
        }));
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          profilePhoto: 'File size must be less than 5MB',
        }));
        return;
      }

      setFormData((prev) => ({
        ...prev,
        profilePhoto: file,
      }));

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);

      // Clear error
      setErrors((prev) => ({
        ...prev,
        profilePhoto: '',
      }));
    }
  };

  const handlePdfUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (file.type !== 'application/pdf') {
        setErrors((prev) => ({
          ...prev,
          credentialsPdf: 'Only PDF files are accepted',
        }));
        return;
      }

      // Validate file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          credentialsPdf: 'File size must be less than 10MB',
        }));
        return;
      }

      setFormData((prev) => ({
        ...prev,
        credentialsPdf: file,
      }));

      // Clear error
      setErrors((prev) => ({
        ...prev,
        credentialsPdf: '',
      }));
    }
  };

  const removePhoto = () => {
    setFormData((prev) => ({
      ...prev,
      profilePhoto: null,
    }));
    setPhotoPreview(null);
  };

  const removePdf = () => {
    setFormData((prev) => ({
      ...prev,
      credentialsPdf: null,
    }));
  };

  const handleSubmit = () => {
    setShowComingSoonSnackbar(true);
  };

  const getFilteredCountries = () => {
    const searchTerm = showCountryDropdown === 'nationality' ? nationalitySearch : residenceSearch;
    return COUNTRIES.filter((country) =>
      country.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filteredCountries = getFilteredCountries();

  const Progress = () => (
    <div className="flex items-center justify-between mb-8">
      {[1, 2, 3, 4].map((step) => (
        <div key={step} className="flex items-center flex-1">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-all ${
              step <= currentStep
                ? 'bg-nexus text-white'
                : 'bg-gray-200 text-gray-500'
            }`}
          >
            {step < currentStep ? <CheckCircle2 className="w-5 h-5" /> : step}
          </div>
          {step < 4 && (
            <div
              className={`flex-1 h-1 mx-2 rounded transition-all ${
                step < currentStep ? 'bg-nexus' : 'bg-gray-200'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );

  const FormField = ({
    label,
    error,
    required = false,
    children,
    htmlFor,
  }: {
    label: string;
    error?: string;
    required?: boolean;
    children: React.ReactNode;
    htmlFor?: string;
  }) => (
    <div className="mb-6">
      <label htmlFor={htmlFor} className="block text-sm font-semibold text-gray-700 mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {children}
      {error && (
        <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
          <AlertCircle className="w-4 h-4" />
          {error}
        </div>
      )}
    </div>
  );

  // Step 1: Personal Information
  const Step1 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">
        Personal Information
      </h2>

      <FormField label="Title" error={errors.title} required htmlFor="title">
        <select
          id="title"
          name="title"
          value={formData.title}
          onChange={(e) => handleInputChange('title', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nexus focus:border-transparent"
        >
          <option value="">Select a title</option>
          <option value="Dr.">Dr.</option>
          <option value="Mr.">Mr.</option>
          <option value="Mrs.">Mrs.</option>
          <option value="Ms.">Ms.</option>
          <option value="Prof.">Prof.</option>
        </select>
      </FormField>

      <FormField label="Full Name" error={errors.fullName} required htmlFor="fullName">
        <input
          id="fullName"
          name="fullName"
          type="text"
          value={formData.fullName}
          onChange={(e) =>
            handleInputChange(
              'fullName',
              e.target.value.replace(/[^a-zA-Z\s]/g, '')
            )
          }
          onBlur={() => handleFieldBlur('fullName')}
          placeholder="Enter your full name"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nexus focus:border-transparent"
        />
      </FormField>

      <FormField label="Email Address" error={errors.email} required htmlFor="email">
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          onBlur={() => handleFieldBlur('email')}
          placeholder="your.email@example.com"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nexus focus:border-transparent"
        />
      </FormField>

      <FormField label="Phone Number" error={errors.phoneNumber} required htmlFor="phoneNumber">
        <input
          id="phoneNumber"
          name="phoneNumber"
          type="tel"
          value={formData.phoneNumber}
          onChange={(e) =>
            handleInputChange(
              'phoneNumber',
              e.target.value.replace(/[^\d+]/g, '')
            )
          }
          onBlur={() => handleFieldBlur('phoneNumber')}
          placeholder="+234 8012345678"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nexus focus:border-transparent"
        />
        <p className="text-xs text-gray-500 mt-2">Include country code (e.g., +234)</p>
      </FormField>

      <FormField label="Gender" error={errors.gender} required>
        <div className="flex gap-4">
          {['Male', 'Female'].map((option) => (
            <label key={option} htmlFor={`gender-${option}`} className="flex items-center cursor-pointer">
              <input
                id={`gender-${option}`}
                type="radio"
                name="gender"
                value={option}
                checked={formData.gender === option}
                onChange={(e) => handleInputChange('gender', e.target.value)}
                className="mr-2 w-4 h-4"
              />
              <span className="text-gray-700">{option}</span>
            </label>
          ))}
        </div>
      </FormField>
    </motion.div>
  );

  // Step 2: Professional Background
  const Step2 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">
        Professional Background
      </h2>

      <FormField label="Nationality" error={errors.nationality} required htmlFor="nationality">
        <div className="relative">
          <input
            id="nationality"
            name="nationality"
            type="text"
            placeholder="Search nationality..."
            value={showCountryDropdown === 'nationality' ? nationalitySearch : (formData.nationality || '')}
            onChange={(e) => {
              setNationalitySearch(e.target.value);
              setShowCountryDropdown('nationality');
            }}
            onFocus={() => setShowCountryDropdown('nationality')}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nexus focus:border-transparent"
          />
          {showCountryDropdown === 'nationality' && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto">
              {filteredCountries.map((country) => (
                <button
                  key={country}
                  onClick={() => {
                    handleInputChange('nationality', country);
                    setShowCountryDropdown(null);
                    setNationalitySearch('');
                  }}
                  className="w-full px-4 py-2 text-left hover:bg-nexus/10 text-gray-700"
                >
                  {country}
                </button>
              ))}
            </div>
          )}
        </div>
      </FormField>

      <FormField label="City" error={errors.city} required htmlFor="city">
        <input
          id="city"
          name="city"
          type="text"
          value={formData.city}
          onChange={(e) =>
            handleInputChange('city', e.target.value.replace(/[^a-zA-Z\s]/g, ''))
          }
          onBlur={() => handleFieldBlur('city')}
          placeholder="Your city"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nexus focus:border-transparent"
        />
      </FormField>

      <FormField label="Country of Residence" error={errors.countryOfResidence} required htmlFor="countryOfResidence">
        <div className="relative">
          <input
            id="countryOfResidence"
            name="countryOfResidence"
            type="text"
            placeholder="Search country..."
            value={showCountryDropdown === 'residence' ? residenceSearch : (formData.countryOfResidence || '')}
            onChange={(e) => {
              setResidenceSearch(e.target.value);
              setShowCountryDropdown('residence');
            }}
            onFocus={() => setShowCountryDropdown('residence')}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nexus focus:border-transparent"
          />
          {showCountryDropdown === 'residence' && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto">
              {filteredCountries.map((country) => (
                <button
                  key={country}
                  onClick={() => {
                    handleInputChange('countryOfResidence', country);
                    setShowCountryDropdown(null);
                    setResidenceSearch('');
                  }}
                  className="w-full px-4 py-2 text-left hover:bg-nexus/10 text-gray-700"
                >
                  {country}
                </button>
              ))}
            </div>
          )}
        </div>
      </FormField>

      <FormField label="Years of Experience" error={errors.yearsOfExperience} required htmlFor="yearsOfExperience">
        <input
          id="yearsOfExperience"
          name="yearsOfExperience"
          type="number"
          value={formData.yearsOfExperience}
          onChange={(e) => handleInputChange('yearsOfExperience', Number(e.target.value) || '')}
          onBlur={() => handleFieldBlur('yearsOfExperience')}
          placeholder="Enter years of experience"
          min="5"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nexus focus:border-transparent"
        />
        <p className="text-xs text-gray-500 mt-2">Minimum 5 years of experience required</p>
      </FormField>

      <FormField label="Marital Status" error={errors.maritalStatus} required htmlFor="maritalStatus">
        <select
          id="maritalStatus"
          name="maritalStatus"
          value={formData.maritalStatus}
          onChange={(e) => handleInputChange('maritalStatus', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nexus focus:border-transparent"
        >
          <option value="">Select marital status</option>
          <option value="Single">Single</option>
          <option value="Married">Married</option>
          <option value="Divorced">Divorced</option>
          <option value="Widowed">Widowed</option>
        </select>
      </FormField>
    </motion.div>
  );

  // Step 3: Qualifications & Expertise
  const Step3 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">
        Qualifications & Expertise
      </h2>

      <FormField label="Credentials & Certifications" error={errors.credentials} required htmlFor="credentials">
        <textarea
          id="credentials"
          name="credentials"
          value={formData.credentials}
          onChange={(e) => handleInputChange('credentials', e.target.value)}
          onBlur={() => handleFieldBlur('credentials')}
          placeholder="e.g., M.A. in Marriage & Family Therapy, LMFT License #..."
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nexus focus:border-transparent resize-none"
        />
      </FormField>

      <FormField label="Career Achievements" required={false} htmlFor="achievements">
        <textarea
          id="achievements"
          name="achievements"
          value={formData.achievements}
          onChange={(e) => handleInputChange('achievements', e.target.value)}
          onBlur={() => handleFieldBlur('achievements')}
          placeholder="Write a compelling description of any achievements or milestones you have had in your coaching career, if any."
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nexus focus:border-transparent resize-none"
        />
      </FormField>

      <FormField label="Session Rate (USD/hr)" error={errors.sessionRate} required htmlFor="sessionRate">
        <input
          id="sessionRate"
          name="sessionRate"
          type="hidden"
          value={formData.sessionRate}
        />
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
          {SESSION_RATES.map((rate) => (
            <button
              key={rate}
              onClick={() => handleInputChange('sessionRate', rate)}
              className={`py-3 rounded-lg font-semibold transition-all ${
                formData.sessionRate === rate
                  ? 'bg-nexus text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {rate}
            </button>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-4">
          💡 <strong>Pro Tip:</strong> Counselors with lower starting rates attract more
          first-time bookings. We recommend proving your worth to users first and then
          increase your rates afterwards.
        </p>
      </FormField>

      <FormField label="Social Media Handle" required={false} htmlFor="socialMedia">
        <input
          id="socialMedia"
          name="socialMedia"
          type="text"
          value={formData.socialMedia}
          onChange={(e) => handleInputChange('socialMedia', e.target.value)}
          onBlur={() => handleFieldBlur('socialMedia')}
          placeholder="@yourhandle"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nexus focus:border-transparent"
        />
      </FormField>

      <FormField label="LinkedIn Profile URL" required={false} htmlFor="linkedinProfile">
        <input
          id="linkedinProfile"
          name="linkedinProfile"
          type="url"
          value={formData.linkedinProfile}
          onChange={(e) => handleInputChange('linkedinProfile', e.target.value)}
          onBlur={() => handleFieldBlur('linkedinProfile')}
          placeholder="https://linkedin.com/in/yourprofile"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nexus focus:border-transparent"
        />
      </FormField>
    </motion.div>
  );

  // Step 4: Attachments & Submission
  const Step4 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">
        Attachments & Submission
      </h2>

      {/* Warning Banner */}
      <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8 rounded">
        <div className="flex gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-amber-800 text-sm">
              Professional Photo Required
            </p>
            <p className="text-amber-700 text-sm mt-1">
              Please upload a nice professional picture as this would be used to create your
              profile. AI-generated pictures are not acceptable and using them could invalidate
              your application.
            </p>
          </div>
        </div>
      </div>

      <FormField label="Profile Photo" error={errors.profilePhoto} required htmlFor="profilePhoto">
        <input
          id="profilePhoto"
          name="profilePhoto"
          type="hidden"
          value={formData.profilePhoto?.name || ''}
        />
        {photoPreview ? (
          <div className="flex flex-col items-center gap-4">
            <img
              src={photoPreview}
              alt="Profile preview"
              className="w-40 h-40 object-cover rounded-lg shadow-md"
            />
            <button
              onClick={removePhoto}
              className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg font-medium"
            >
              <X className="w-4 h-4" />
              Remove & Upload New
            </button>
          </div>
        ) : (
          <label htmlFor="photoUpload" className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-nexus hover:bg-nexus/5 transition-all">
            <Upload className="w-8 h-8 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-600 font-medium">Click to upload photo</p>
            <p className="text-xs text-gray-500 mt-1">JPG or PNG • Max 5MB</p>
            <input
              id="photoUpload"
              type="file"
              accept="image/jpeg,image/png"
              onChange={handlePhotoUpload}
              className="hidden"
            />
          </label>
        )}
      </FormField>

      <FormField label="Credentials PDF" required={false} htmlFor="credentialsPdf">
        <input
          id="credentialsPdf"
          name="credentialsPdf"
          type="hidden"
          value={formData.credentialsPdf?.name || ''}
        />
        {formData.credentialsPdf ? (
          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg border border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-100 rounded flex items-center justify-center">
                <span className="text-red-600 font-bold text-sm">PDF</span>
              </div>
              <div>
                <p className="font-medium text-gray-900 text-sm">
                  {formData.credentialsPdf.name}
                </p>
                <p className="text-xs text-gray-500">
                  {(formData.credentialsPdf.size / 1024).toFixed(2)} KB
                </p>
              </div>
            </div>
            <button
              onClick={removePdf}
              className="text-red-600 hover:bg-red-50 p-2 rounded"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        ) : (
          <label htmlFor="pdfUpload" className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-nexus hover:bg-nexus/5 transition-all">
            <Upload className="w-8 h-8 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-600 font-medium">Click to upload PDF</p>
            <p className="text-xs text-gray-500 mt-1">PDF only • Max 10MB</p>
            <input
              id="pdfUpload"
              type="file"
              accept=".pdf"
              onChange={handlePdfUpload}
              className="hidden"
            />
          </label>
        )}
      </FormField>

      {/* Info Note */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded mt-8">
        <p className="text-blue-900 text-sm">
          <strong>ℹ️ Timeline:</strong> Your application will be reviewed by our team. We'll
          provide feedback within 10 business days.
        </p>
      </div>
    </motion.div>
  );

  if (successState) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-4 py-20 pt-32">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center max-w-md"
          >
            <div className="inline-block p-4 bg-green-100 rounded-full mb-6">
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Application Received
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Your application has been received. Our team will review it and get back to you
              within 10 business days.
            </p>
            <p className="text-sm text-gray-500">
              We've sent a confirmation email to <strong>{formData.email}</strong>
            </p>
            <button
              onClick={() => window.history.back()}
              className="mt-8 px-8 py-3 bg-nexus text-white rounded-full font-medium hover:bg-nexus-dark transition-all"
            >
              Return to Home
            </button>
          </motion.div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8 pt-32">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Join Our Coaching Team
            </h1>
            <p className="text-lg text-gray-600">
              We're looking for experienced counselors and marriage coaches to join the Nexus
              platform. Transform lives through expert guidance grounded in Christian values.
            </p>
          </motion.div>

          {/* Form Section */}
          <div className="relative bg-white rounded-2xl shadow-lg p-6 sm:p-8">
            {/* Coming Soon Overlay */}
            <div className="absolute inset-0 bg-white/30 rounded-2xl backdrop-blur-xs pointer-events-auto z-40" />
            
            <div className="pointer-events-none opacity-60">
              <Progress />

              <AnimatePresence mode="wait">
                {currentStep === 1 && <Step1 />}
                {currentStep === 2 && <Step2 />}
                {currentStep === 3 && <Step3 />}
                {currentStep === 4 && <Step4 />}
              </AnimatePresence>

              {/* Navigation Buttons */}
            <div className="flex gap-4 mt-12">
              {currentStep > 1 && (
                <button
                  onClick={handleBack}
                  className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-gray-400 transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                  Back
                </button>
              )}

              {currentStep < 4 ? (
                <button
                  onClick={handleNext}
                  className="flex items-center gap-2 px-6 py-3 bg-nexus text-white rounded-lg font-medium hover:bg-nexus-dark transition-all ml-auto"
                >
                  Next
                  <ChevronRight className="w-5 h-5" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="flex items-center gap-2 px-8 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-all ml-auto"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  Submit Application
                </button>
              )}
            </div>
            </div>
          </div>

          {/* Help Text */}
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>Have questions? Contact us at <strong>coaches@nexusapp.com</strong></p>
          </div>
        </div>

        {/* Coming Soon Snackbar */}
        <AnimatePresence>
          {showComingSoonSnackbar && (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.3 }}
              className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-4 rounded-lg shadow-xl flex items-center gap-3 max-w-sm z-50"
            >
              <div className="w-5 h-5 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-bold">!</span>
              </div>
              <span className="font-medium">Coming soon! We're working on this feature.</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Footer />
    </>
  );
};

export default CoachApplicationPage;
