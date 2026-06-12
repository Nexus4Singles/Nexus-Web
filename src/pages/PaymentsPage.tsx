import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Check,
  MessageCircle,
  Star,
  Shield,
  ChevronRight,
  X,
  ArrowLeft,
  CheckCircle2,
  Smartphone,
  Copy,
  KeyRound,
  Search,
  AlertCircle,
} from 'lucide-react';
import { Navbar, Footer } from '../components/Layout';

/* ────────────────────────────────────────────────
   TYPES
──────────────────────────────────────────────── */
type Tab = 'subscriptions' | 'counsellor';
type CheckoutStep = 'review' | 'method' | 'processing' | 'success';
type PaymentMethodId = 'stripe' | 'paypal' | 'flutterwave';
type CheckoutItem = {
  name: string;
  subtitle: string;
  image?: string;
  price: number;
  serviceFeePercent: number;
  itemType?: 'subscription' | 'counsellor';
};

/* ────────────────────────────────────────────────
   PAYMENT METHOD OPTION (radio-style)
──────────────────────────────────────────────── */
const MethodOption = ({
  id,
  selected,
  onSelect,
  logo,
  label,
  sublabel,
  accent,
}: {
  id: string;
  selected: boolean;
  onSelect: () => void;
  logo: React.ReactNode;
  label: string;
  sublabel: string;
  accent: string;
}) => (
  <button
    onClick={onSelect}
    className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl border-2 transition-all duration-200 text-left ${
      selected
        ? 'border-nexus bg-nexus/5 shadow-md shadow-nexus/10'
        : 'border-gray-200 bg-white hover:border-gray-300'
    }`}
  >
    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${accent}`}>
      {logo}
    </div>
    <div className="flex-1 min-w-0">
      <p className="font-semibold text-gray-900 text-sm">{label}</p>
      <p className="text-xs text-gray-500">{sublabel}</p>
    </div>
    <div
      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
        selected ? 'border-nexus bg-nexus' : 'border-gray-300'
      }`}
    >
      {selected && <Check className="w-3 h-3 text-white" />}
    </div>
  </button>
);

/* ────────────────────────────────────────────────
   STRIPE LOGO
──────────────────────────────────────────────── */
const StripeLogo = () => (
  <svg viewBox="0 0 60 25" fill="none" className="w-12 h-5">
    <path
      d="M5.45 9.37C5.45 8.37 6.27 7.97 7.6 7.97c1.93 0 3.87.58 5.8 1.56V4.14C11.4 3.4 9.4 3 7.6 3 3.4 3 .5 5.25.5 9.6c0 7.05 9.7 5.94 9.7 8.98 0 1.18-1.02 1.56-2.45 1.56-2.1 0-4.8-.88-6.93-2.06v5.46C2.87 24.5 5.14 25 7.85 25c4.3 0 7.25-2.13 7.25-6.52 0-7.6-9.65-6.28-9.65-9.11z"
      fill="#635BFF"
    />
    <path
      d="M21.6 1.5l-5.28 1.12-.02 17.4 5.3-.02V1.5zm5.4 5.87l-.33-1.56h-4.74v14.31h5.27v-9.7c1.24-1.62 3.36-1.32 4-.94V5.81c-.67-.41-3.08-.95-4.2 1.56zm8.08-3.2l-5.3 1.13v3.06l5.3-1.13V4.17zm0 4.34h-5.3v11.61h5.3V8.51zm8.32-.83c-2.06 0-3.37.97-4.09 1.64l-.27-1.3h-4.73v16.48l5.28-1.12.02-3.97c.74.53 1.84 1.3 3.72 1.3 3.76 0 7.17-3 7.17-9.68-.02-5.89-3.38-9.35-7.1-9.35zm-1.3 14.38c-1.22 0-1.95-.43-2.46-.97l-.03-7.65c.55-.6 1.3-1.02 2.49-1.02 1.9 0 3.22 2.13 3.22 4.8 0 2.72-1.3 4.84-3.22 4.84z"
      fill="#635BFF"
    />
  </svg>
);

/* ────────────────────────────────────────────────
   PAYPAL LOGO
──────────────────────────────────────────────── */
const PayPalLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5">
    <path
      d="M7.076 21.337H2.47a.641.641 0 01-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 00-.607-.541c1.379 1.959 1.028 4.626-.28 6.46-1.404 1.96-3.685 2.96-6.548 2.96h-1.9l-.8 5.04h3.042c.457 0 .847-.333.918-.784l.04-.2.72-4.566.047-.252c.07-.451.46-.784.917-.784h.578c3.742 0 6.671-1.52 7.526-5.907.36-1.848.174-3.392-.653-4.426z"
      fill="#009cde"
    />
    <path
      d="M6.263 7.154L6.1 8.12l-.162 1.028c.082-.518.526-.9 1.05-.9h2.19c4.298 0 7.664-1.747 8.647-6.797.03-.149.054-.294.077-.437C16.8 1.543 15.594 1 13.458 1H5.998c-.524 0-.972.382-1.054.901L1.837 20.597a.641.641 0 00.633.74h4.606l1.12-7.106.067-.077z"
      fill="#012169"
    />
  </svg>
);

/* ────────────────────────────────────────────────
   FLUTTERWAVE LOGO
──────────────────────────────────────────────── */
const FlutterwaveLogo = () => (
  <svg viewBox="0 0 40 40" className="w-6 h-6">
    <path d="M20 4C11.163 4 4 11.163 4 20s7.163 16 16 16 16-7.163 16-16S28.837 4 20 4z" fill="#F5A623" />
    <path
      d="M27.5 15.5c-1.2-1.5-3-2.2-5-2-1.5.15-2.8.8-3.8 1.8-.7.7-1.2 1.6-1.5 2.6-.2.7-.2 1.4 0 2.1.4 1.4 1.5 2.5 2.9 2.9.7.2 1.4.2 2.1 0 1-.3 1.9-.8 2.6-1.5 1-1 1.65-2.3 1.8-3.8.05-.65-.05-1.45-.1-2.1z"
      fill="#fff"
    />
    <path
      d="M15.5 12.5c-1.5 1.2-2.2 3-2 5 .15 1.5.8 2.8 1.8 3.8.7.7 1.6 1.2 2.6 1.5.7.2 1.4.2 2.1 0 1.4-.4 2.5-1.5 2.9-2.9.2-.7.2-1.4 0-2.1-.3-1-.8-1.9-1.5-2.6-1-1-2.3-1.65-3.8-1.8-.65-.05-1.45.05-2.1.1z"
      fill="#fff"
      opacity="0.6"
    />
  </svg>
);

/* ────────────────────────────────────────────────
   CHECKOUT FLOW MODAL
──────────────────────────────────────────────── */
const CheckoutFlow = ({
  item,
  onClose,
}: {
  item: CheckoutItem;
  onClose: () => void;
}) => {
  const [step, setStep] = useState<CheckoutStep>('review');
  const [method, setMethod] = useState<PaymentMethodId | null>(null);
  const [refNumber] = useState(
    () => 'NXS-' + Math.random().toString(36).substring(2, 8).toUpperCase()
  );
  // 6-digit session token for counsellor payment validation
  const [sessionToken] = useState(
    () => String(Math.floor(100000 + Math.random() * 900000))
  );

  const serviceFee = parseFloat(((item.price * item.serviceFeePercent) / 100).toFixed(2));
  const total = (item.price + serviceFee).toFixed(2);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const handlePay = () => {
    if (!method) return;
    setStep('processing');
    setTimeout(() => setStep('success'), 2800);
  };

  const stepIndex = step === 'review' ? 0 : step === 'method' ? 1 : 2;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4"
    >
      {/* Backdrop */}
      <div
        onClick={step !== 'processing' ? onClose : undefined}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* Panel */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ type: 'spring', damping: 28, stiffness: 300 }}
        className="relative w-full sm:max-w-lg bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
      >
        {/* Header */}
        {step !== 'processing' && step !== 'success' && (
          <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-gray-100">
            <div className="flex items-center gap-3">
              {step === 'method' && (
                <button
                  onClick={() => setStep('review')}
                  className="p-1.5 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 text-gray-600" />
                </button>
              )}
              <div>
                <h3 className="font-bold text-gray-900">
                  {step === 'review' ? 'Order Review' : 'Choose Payment'}
                </h3>
                <p className="text-xs text-gray-500">Step {stepIndex + 1} of 3</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <X className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        )}

        {/* Progress bar */}
        {step !== 'success' && (
          <div className="flex gap-1.5 px-6 pt-4 pb-1 flex-shrink-0">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                  i <= stepIndex ? 'bg-nexus' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        )}

        {/* Scrollable step content */}
        <div className="overflow-y-auto flex-1">
          <AnimatePresence mode="wait">

            {/* ── STEP 1: REVIEW ── */}
            {step === 'review' && (
              <motion.div
                key="review"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.18 }}
                className="p-6"
              >
                {/* Item summary card */}
                <div className="bg-gray-50 rounded-2xl p-4 mb-6 flex items-center gap-4">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 rounded-2xl object-cover flex-shrink-0"
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-gray-900 text-sm">{item.name}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{item.subtitle}</p>
                  </div>
                </div>

                {/* Fee breakdown */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Base price</span>
                    <span className="font-medium text-gray-900">${item.price.toFixed(2)}</span>
                  </div>
                  {serviceFee > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 flex items-center gap-1.5">
                        Platform fee
                        <span className="text-xs bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded">
                          {item.serviceFeePercent}%
                        </span>
                      </span>
                      <span className="font-medium text-gray-900">${serviceFee.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="border-t border-dashed border-gray-200 pt-3 flex justify-between items-baseline">
                    <span className="font-bold text-gray-900">Total due today</span>
                    <span className="font-bold text-nexus text-xl">${total}</span>
                  </div>
                </div>

                {/* App / session notice */}
                <div className="flex items-start gap-3 bg-nexus/5 border border-nexus/10 rounded-2xl p-4 mb-6">
                  <Smartphone className="w-4 h-4 text-nexus flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-gray-700 leading-relaxed">
                    {item.itemType === 'counsellor'
                      ? 'After payment, you (the payer) will receive a 6-digit session token. Open the Nexus app, go to your booked session, and enter the token to access the live session room.'
                      : 'After payment, this purchase unlocks automatically in the Nexus app. Make sure you are signed in with the same account.'}
                  </p>
                </div>

                <button
                  onClick={() => setStep('method')}
                  className="w-full bg-nexus hover:bg-nexus-dark text-white py-4 rounded-2xl font-bold text-sm transition-all shadow-lg shadow-nexus/25 flex items-center justify-center gap-2"
                >
                  Continue to Payment
                  <ChevronRight className="w-4 h-4" />
                </button>
              </motion.div>
            )}

            {/* ── STEP 2: PAYMENT METHOD ── */}
            {step === 'method' && (
              <motion.div
                key="method"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.18 }}
                className="p-6"
              >
                <p className="text-xs text-gray-500 mb-5">
                  Total charge:{' '}
                  <span className="font-bold text-gray-900 text-sm">${total}</span>
                </p>

                <div className="space-y-3 mb-6">
                  <MethodOption
                    id="stripe"
                    selected={method === 'stripe'}
                    onSelect={() => setMethod('stripe')}
                    logo={<StripeLogo />}
                    label="Card (Stripe)"
                    sublabel="Visa, Mastercard, Amex — worldwide"
                    accent="bg-indigo-50"
                  />
                  <MethodOption
                    id="paypal"
                    selected={method === 'paypal'}
                    onSelect={() => setMethod('paypal')}
                    logo={<PayPalLogo />}
                    label="PayPal"
                    sublabel="Pay with your PayPal balance or card"
                    accent="bg-blue-50"
                  />
                  <MethodOption
                    id="flutterwave"
                    selected={method === 'flutterwave'}
                    onSelect={() => setMethod('flutterwave')}
                    logo={<FlutterwaveLogo />}
                    label="Flutterwave"
                    sublabel="Cards, mobile money & more — Africa"
                    accent="bg-orange-50"
                  />
                </div>

                <button
                  onClick={handlePay}
                  disabled={!method}
                  className={`w-full py-4 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                    method
                      ? 'bg-nexus hover:bg-nexus-dark text-white shadow-lg shadow-nexus/25'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <Shield className="w-4 h-4" />
                  Pay ${total} Securely
                </button>
                <p className="text-center text-xs text-gray-400 mt-3 flex items-center justify-center gap-1.5">
                  <Shield className="w-3 h-3" />
                  256-bit SSL encryption · PCI compliant
                </p>
              </motion.div>
            )}

            {/* ── STEP 3: PROCESSING ── */}
            {step === 'processing' && (
              <motion.div
                key="processing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-12 flex flex-col items-center justify-center min-h-[320px]"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 0.9, ease: 'linear' }}
                  className="w-16 h-16 border-4 border-nexus/20 border-t-nexus rounded-full mb-8"
                />
                <p className="font-bold text-gray-900 text-lg mb-2">Processing payment…</p>
                <p className="text-sm text-gray-500 text-center">Please don't close this window</p>
              </motion.div>
            )}

            {/* ── STEP 4: SUCCESS ── */}
            {step === 'success' && (
              <motion.div
                key="success"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-8 flex flex-col items-center text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', damping: 14, stiffness: 280, delay: 0.1 }}
                  className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-5"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.45 }}
                  >
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="w-full"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Payment Successful!</h3>
                  <p className="text-sm text-gray-500 mb-6">
                    {item.itemType === 'counsellor'
                      ? `Your session with ${item.name} is confirmed.`
                      : `${item.name} is now active on your Nexus account.`}
                  </p>

                  {/* Session access token — counsellor only */}
                  {item.itemType === 'counsellor' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 }}
                      className="bg-nexus rounded-2xl p-5 mb-4 text-white"
                    >
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <KeyRound className="w-4 h-4" />
                        <p className="text-xs font-semibold opacity-80">Your Session Access Token</p>
                      </div>
                      <div className="flex items-center justify-center gap-3 mb-2">
                        <p className="font-mono font-bold text-3xl tracking-[0.3em]">{sessionToken}</p>
                        <button
                          onClick={() => navigator.clipboard?.writeText(sessionToken)}
                          className="p-1.5 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
                          title="Copy token"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs opacity-70">This is your token — enter it in the Nexus app under your booked session to access the live Jitsi room · Expires 24 hrs after session time</p>
                    </motion.div>
                  )}

                  {/* Subscription activated card — subscription only */}
                  {item.itemType === 'subscription' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 }}
                      className="bg-nexus rounded-2xl p-5 mb-4 text-white"
                    >
                      <div className="flex items-center justify-center gap-2 mb-3">
                        <CheckCircle2 className="w-4 h-4" />
                        <p className="text-xs font-semibold opacity-80">Subscription Activated</p>
                      </div>
                      <p className="font-bold text-xl text-center mb-1">{item.name}</p>
                      <p className="text-xs opacity-70 text-center">
                        Your subscription is live — all features are unlocked in the Nexus app immediately. No code needed.
                      </p>
                    </motion.div>
                  )}

                  {/* Reference number */}
                  <div className="bg-gray-50 rounded-2xl p-4 mb-4 border border-gray-200">
                    <p className="text-xs text-gray-500 mb-2">Payment reference</p>
                    <div className="flex items-center justify-center gap-2">
                      <p className="font-mono font-bold text-gray-900 tracking-widest">{refNumber}</p>
                      <button
                        onClick={() => navigator.clipboard?.writeText(refNumber)}
                        className="p-1.5 hover:bg-gray-200 rounded-lg transition-colors"
                        title="Copy reference"
                      >
                        <Copy className="w-3.5 h-3.5 text-gray-500" />
                      </button>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">Save this for your records</p>
                  </div>

                  {/* App CTA */}
                  <div className="bg-nexus/5 border border-nexus/10 rounded-2xl p-4 mb-6 flex items-start gap-3 text-left">
                    <Smartphone className="w-5 h-5 text-nexus flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-gray-700 leading-relaxed">
                      {item.itemType === 'counsellor'
                        ? 'Open the Nexus app, go to your booked session, and enter the token above to access the live session room.'
                        : 'Open your Nexus app and sign in with the same account. Your purchase will be unlocked and waiting for you.'}
                    </p>
                  </div>

                  <button
                    onClick={onClose}
                    className="w-full bg-nexus hover:bg-nexus-dark text-white py-4 rounded-2xl font-bold text-sm transition-all shadow-lg shadow-nexus/25"
                  >
                    Done
                  </button>
                </motion.div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ────────────────────────────────────────────────
   TAB 1 — SUBSCRIPTIONS
──────────────────────────────────────────────── */
const plans = [
  {
    name: 'Free',
    monthlyPrice: '0',
    annualPrice: '0',
    description: 'Explore Nexus at no cost.',
    color: 'border-gray-200',
    badge: null,
    features: [
      'Personalised Assessments',
      'Unlimited Profile Search',
      'Guided Journeys',
      'Limited Chats',
      'Weekly Stories',
    ],
    cta: 'Current Plan',
    disabled: true,
  },
  {
    name: 'Premium',
    monthlyPrice: '4.99',
    annualPrice: '4.99',
    description: 'Full dating + journey access for individuals.',
    color: 'border-nexus',
    badge: 'Most Popular',
    features: [
      'Personalised Assessments',
      'Unlimited Profile Search',
      'Guided Journeys',
      'Limited Chats',
      'Weekly Stories',
      'Unlimited Messaging',
      'Compatibility Data',
      'Contact Information',
    ],
    cta: 'Subscribe',
    disabled: false,
  },
  // {
  //   name: 'Couples',
  //   monthlyPrice: '14.99',
  //   annualPrice: '119.99',
  //   description: 'For married couples growing together.',
  //   color: 'border-pink-300',
  //   badge: 'For Married Couples',
  //   features: [
  //     'Couples journeys & assessments',
  //     'Shared progress dashboard',
  //     'Weekly Stories + archives',
  //     '1 free counsellor session/month',
  //     'Priority support',
  //   ],
  //   cta: 'Subscribe',
  //   disabled: false,
  // },
];

const SubscriptionsTab = () => {
  const [checkout, setCheckout] = useState<CheckoutItem | null>(null);

  return (
    <div>
      {/* Plan cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
        {plans.map((plan) => (
          <motion.div
            key={plan.name}
            whileHover={!plan.disabled ? { y: -4 } : {}}
            className={`relative rounded-3xl border-2 ${plan.color} p-7 transition-all duration-200 bg-white ${
              !plan.disabled ? 'hover:shadow-xl' : 'opacity-70'
            }`}
          >
            {plan.badge && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-nexus text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                {plan.badge}
              </div>
            )}
            <h3 className="text-lg font-bold text-gray-900 mb-1">{plan.name}</h3>
            <p className="text-xs text-gray-500 mb-4">{plan.description}</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">
                ${plan.monthlyPrice}
              </span>
              <span className="text-gray-500 text-sm ml-1">/mo</span>
            </div>
            <ul className="space-y-2 mb-6">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                  <Check className="w-4 h-4 text-nexus flex-shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
            {!plan.disabled ? (
              <button
                onClick={() =>
                  setCheckout({
                    name: `Nexus ${plan.name}`,
                    subtitle: 'Monthly subscription',
                    price: parseFloat(plan.monthlyPrice),
                    serviceFeePercent: 0,
                    itemType: 'subscription',
                  })
                }
                className="w-full py-3 rounded-xl font-semibold text-sm bg-nexus text-white hover:bg-nexus-dark transition-all shadow-md shadow-nexus/20"
              >
                {plan.cta}
              </button>
            ) : (
              <div className="w-full py-3 rounded-xl font-semibold text-sm bg-gray-100 text-gray-400 text-center">
                {plan.cta}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {checkout && <CheckoutFlow item={checkout} onClose={() => setCheckout(null)} />}
      </AnimatePresence>
    </div>
  );
};

/* ────────────────────────────────────────────────
   TAB 2 — GUIDED JOURNEYS (coming soon)
──────────────────────────────────────────────── */
// const journeys = [ ... ];
// const GuidedJourneysTab = () => { ... };

/* ────────────────────────────────────────────────
   TAB 2 — BOOK A COUNSELLOR
──────────────────────────────────────────────── */
// Simulates a Firestore lookup by booking reference.
// In production, replace with a real API/Firestore call using the ref as the document ID.
type MockBooking = {
  ref: string;
  counsellor: string;
  sessionType: string;
  date: string;
  time: string;
  duration: string;
  amount: number;
};

const mockLookup = (ref: string): MockBooking | null => {
  if (ref.trim().length < 6) return null;
  // Stub — real implementation queries Firestore sessions collection
  return {
    ref: ref.trim().toUpperCase(),
    counsellor: 'Pastor Seun Adeleke',
    sessionType: 'Post-Marital Counselling',
    date: 'Tuesday, 7 April 2026',
    time: '4:00 PM – 5:00 PM (WAT)',
    duration: '60 minutes',
    amount: 65.00,
  };
};

const BookCounsellorTab = () => {
  const [refInput, setRefInput] = useState('');
  const [booking, setBooking] = useState<MockBooking | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [checkout, setCheckout] = useState<CheckoutItem | null>(null);

  const handleLookup = () => {
    const result = mockLookup(refInput);
    if (result) {
      setBooking(result);
      setNotFound(false);
    } else {
      setBooking(null);
      setNotFound(true);
    }
  };

  return (
    <div className="max-w-lg mx-auto">
      {/* How it works */}
      <div className="bg-nexus/5 border border-nexus/10 rounded-2xl p-5 mb-8 flex items-start gap-3">
        <Smartphone className="w-5 h-5 text-nexus flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-semibold text-gray-900 mb-1">Booked on the Nexus app?</p>
          <p className="text-xs text-gray-600 leading-relaxed">
            Complete your session booking in the app first. Once confirmed, you'll receive a Booking Reference. Enter it below to proceed to payment.
          </p>
        </div>
      </div>

      {/* Reference input */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Booking Reference
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            value={refInput}
            onChange={(e) => { setRefInput(e.target.value); setNotFound(false); setBooking(null); }}
            onKeyDown={(e) => e.key === 'Enter' && handleLookup()}
            placeholder="e.g. BKG-A4X29K"
            className="flex-1 border-2 border-gray-200 rounded-2xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-nexus transition-colors"
          />
          <button
            onClick={handleLookup}
            disabled={!refInput.trim()}
            className={`px-5 py-3 rounded-2xl font-semibold text-sm transition-all flex items-center gap-2 ${
              refInput.trim()
                ? 'bg-nexus hover:bg-nexus-dark text-white shadow-md shadow-nexus/20'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            <Search className="w-4 h-4" />
            Find
          </button>
        </div>
      </div>

      {/* Not found */}
      {notFound && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-2xl p-4 mb-6"
        >
          <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-red-700 leading-relaxed">
            Booking reference not found. Please check the reference in your Nexus app under <strong>My Sessions</strong> and try again.
          </p>
        </motion.div>
      )}

      {/* Booking summary */}
      <AnimatePresence>
        {booking && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="bg-white border-2 border-nexus rounded-3xl overflow-hidden shadow-lg shadow-nexus/10"
          >
            {/* Header */}
            <div className="bg-nexus/5 px-6 py-4 border-b border-nexus/10 flex items-center justify-between">
              <p className="text-xs text-gray-500 font-medium">Booking confirmed in app</p>
              <span className="text-xs font-bold text-nexus bg-nexus/10 px-2.5 py-1 rounded-full">
                {booking.ref}
              </span>
            </div>

            {/* Details */}
            <div className="px-6 py-5 space-y-3">
              {[
                { label: 'Counsellor', value: booking.counsellor },
                { label: 'Session type', value: booking.sessionType },
                { label: 'Date', value: booking.date },
                { label: 'Time', value: booking.time },
                { label: 'Duration', value: booking.duration },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between items-start text-sm">
                  <span className="text-gray-500">{label}</span>
                  <span className="font-semibold text-gray-900 text-right ml-4">{value}</span>
                </div>
              ))}
              <div className="border-t border-dashed border-gray-200 pt-3 flex justify-between items-baseline">
                <span className="font-bold text-gray-900">Amount due</span>
                <span className="font-bold text-nexus text-xl">${booking.amount.toFixed(2)}</span>
              </div>
            </div>

            {/* Pay CTA */}
            <div className="px-6 pb-6">
              <button
                onClick={() =>
                  setCheckout({
                    name: booking.counsellor,
                    subtitle: `${booking.sessionType} · ${booking.ref}`,
                    price: booking.amount,
                    serviceFeePercent: 15,
                    itemType: 'counsellor',
                  })
                }
                className="w-full py-4 rounded-2xl font-bold text-sm bg-nexus text-white hover:bg-nexus-dark transition-all shadow-lg shadow-nexus/25 flex items-center justify-center gap-2"
              >
                <Shield className="w-4 h-4" />
                Proceed to Payment
              </button>
              <p className="text-center text-xs text-gray-400 mt-3 flex items-center justify-center gap-1.5">
                <Shield className="w-3 h-3" />
                256-bit SSL encryption · PCI compliant
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {checkout && <CheckoutFlow item={checkout} onClose={() => setCheckout(null)} />}
      </AnimatePresence>
    </div>
  );
};

/* ────────────────────────────────────────────────
   MAIN PAGE
──────────────────────────────────────────────── */
const tabs: { key: Tab; label: string; icon: React.ReactNode }[] = [
  { key: 'subscriptions', label: 'Subscriptions', icon: <Star className="w-4 h-4" /> },
  { key: 'counsellor', label: 'Book a Counsellor', icon: <MessageCircle className="w-4 h-4" /> },
];

export const PaymentsPage = () => {
  const [activeTab, setActiveTab] = useState<Tab>('subscriptions');

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-nexus/20 selection:text-nexus">
      <Navbar />

      <main className="pt-24 pb-24">
        {/* Hero */}
        <section className="bg-gradient-to-b from-nexus/5 to-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 mb-4">
                Invest in Your <span className="text-nexus italic">Kingdom Journey</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Pay securely on the web using Stripe, PayPal, or Flutterwave. Your purchase unlocks instantly on the Nexus app.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 bg-green-50 text-green-700 text-sm font-medium px-4 py-2 rounded-full">
                <Shield className="w-4 h-4" />
                Payments are linked to your Nexus account automatically
              </div>
            </motion.div>
          </div>
        </section>

        {/* Tabs */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 p-1.5 rounded-2xl flex gap-1 flex-wrap justify-center">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    activeTab === tab.key
                      ? 'bg-white text-nexus shadow-md'
                      : 'text-gray-500 hover:text-gray-800'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === 'subscriptions' && <SubscriptionsTab />}
              {activeTab === 'counsellor' && <BookCounsellorTab />}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <Footer />
    </div>
  );
};
