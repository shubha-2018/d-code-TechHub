/**
 * D-Code Tech Hub - "Join Now" WhatsApp Backend Service
 * 
 * Target WhatsApp Admissions: +91 92843 16487 (9284316487)
 * Purpose: Connects the "Join Now" lead form & direct actions directly to WhatsApp.
 */

export const WHATSAPP_BACKEND_CONFIG = {
  phoneNumber: '919284316487',
  displayNumber: '+91 92843 16487',
  academyName: 'D-Code Tech Hub',
  founderName: 'Prof. Dipali Dube',
  location: 'Near post office Jintur- 431509'
};

/**
 * Formats enrollment application into a structured WhatsApp message
 * and generates the direct WhatsApp API link.
 */
export function formatJoinNowMessage(data) {
  const {
    name = '',
    phone = '',
    email = '',
    course = 'Core Java',
    batchPreference = 'Weekend Live Batch (Sat-Sun)',
    codingExperience = 'Beginner (Starting from scratch)'
  } = data;

  const lines = [
    `🎓 *NEW "JOIN NOW" ENROLLMENT REQUEST*`,
    `🏢 *D-Code Tech Hub Admissions*`,
    `━━━━━━━━━━━━━━━━━━━━━━━━━`,
    `👤 *Student Name:* ${name.trim() || 'Not specified'}`,
    `📱 *WhatsApp / Mobile:* ${phone.trim() || 'Not specified'}`,
    `📧 *Email Address:* ${email.trim() || 'Not specified'}`,
    `💻 *Selected Course:* ${course}`,
    `⏰ *Batch Preference:* ${batchPreference}`,
    `🎯 *Coding Experience:* ${codingExperience}`,
    `━━━━━━━━━━━━━━━━━━━━━━━━━`,
    `✨ *Free Demo Class:* Requested`,
    `📍 *Institute:* D-Code Tech Hub (Jintur - 431509)`,
    `━━━━━━━━━━━━━━━━━━━━━━━━━`,
    `_Hello! I submitted this request via the D-Code Tech Hub Join Now portal. Please confirm my demo class link and batch details._`
  ];

  return lines.join('\n');
}

/**
 * Submits the "Join Now" form data to the WhatsApp backend.
 * Returns the target URL, raw message, and status.
 */
export function submitJoinNowToWhatsApp(formData) {
  const message = formatJoinNowMessage(formData);
  const encodedText = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${WHATSAPP_BACKEND_CONFIG.phoneNumber}?text=${encodedText}`;

  return {
    success: true,
    url: whatsappUrl,
    message,
    phoneNumber: WHATSAPP_BACKEND_CONFIG.phoneNumber,
    displayNumber: WHATSAPP_BACKEND_CONFIG.displayNumber,
    timestamp: new Date().toISOString()
  };
}

/**
 * Generates an instant 1-click Join WhatsApp link for a specific course or general inquiry.
 */
export function getQuickWhatsAppJoinUrl(course = '') {
  const text = course
    ? `Hello D-Code Tech Hub! I want to Join Now for the *${course}* program. Please share the syllabus and free live demo class details.`
    : `Hello D-Code Tech Hub! I want to Join Now for your live programming courses. Please share the free demo class schedule.`;

  return `https://wa.me/${WHATSAPP_BACKEND_CONFIG.phoneNumber}?text=${encodeURIComponent(text)}`;
}
