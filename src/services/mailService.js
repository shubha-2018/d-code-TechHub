/**
 * D-Code Tech Hub - Email Dispatcher Service
 * 
 * Direct Target Mailbox: dcodetechhub@gmail.com
 * Admissions Mobile/WhatsApp: +91 92843 16487
 */

export const CONTACT_EMAIL = 'dcodetechhub@gmail.com';
export const CONTACT_PHONE = '+91 92843 16487';

/**
 * Formats subject line for course enquiry
 */
export function formatMailSubject(formData) {
  const name = formData.name ? formData.name.trim() : 'Prospective Student';
  const course = formData.course || 'Course Enquiry';
  return `New Admission Enquiry: ${name} - ${course}`;
}

/**
 * Formats plain text email body with all submitted form details
 */
export function formatMailBody(formData) {
  const {
    name = '',
    email = '',
    phone = '',
    course = 'C Programming',
    message = ''
  } = formData;

  const timestamp = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'medium'
  });

  return [
    `🎓 NEW STUDENT ADMISSION ENQUIRY`,
    `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
    `🏢 Institute: D-Code Tech Hub`,
    `📍 Location: Near post office Jintur- 431509, Maharashtra`,
    `🕒 Received At: ${timestamp}`,
    `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
    `👤 Student Name: ${name.trim() || 'N/A'}`,
    `📧 Student Email: ${email.trim() || 'N/A'}`,
    `📱 Contact / Phone: ${phone.trim() || 'N/A'}`,
    `💻 Interested Course: ${course}`,
    `💬 Message / Query: ${message.trim() || 'No additional message provided.'}`,
    `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
    `📥 This message was sent via the Contact Form on D-Code Tech Hub website.`,
    `Target Email: ${CONTACT_EMAIL}`
  ].join('\n');
}

/**
 * Generates direct mailto: URL with pre-filled subject and body
 */
export function getMailtoUrl(formData) {
  const subject = encodeURIComponent(formatMailSubject(formData));
  const body = encodeURIComponent(formatMailBody(formData));
  return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}

/**
 * Generates Gmail web composer URL for desktop / browser users
 */
export function getGmailWebUrl(formData) {
  const subject = encodeURIComponent(formatMailSubject(formData));
  const body = encodeURIComponent(formatMailBody(formData));
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_EMAIL}&su=${subject}&body=${body}`;
}

/**
 * Sends the contact form data directly to dcodetechhub@gmail.com
 * via background FormSubmit endpoint.
 */
export async function sendContactEmail(formData) {
  const endpoint = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

  const payload = {
    name: formData.name.trim(),
    email: formData.email.trim(),
    phone: formData.phone.trim(),
    course: formData.course || 'C Programming',
    message: formData.message.trim() || 'No additional query specified',
    _subject: formatMailSubject(formData),
    _template: 'table',
    _captcha: 'false',
    submitted_at: new Date().toISOString()
  };

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json().catch(() => ({}));

    if (response.ok) {
      return {
        success: true,
        directDelivered: true,
        message: 'Your enquiry was sent directly to dcodetechhub@gmail.com!',
        targetEmail: CONTACT_EMAIL
      };
    } else {
      return {
        success: true, // Still allow fallback to open mail client
        directDelivered: false,
        message: data.message || 'Server received enquiry.',
        targetEmail: CONTACT_EMAIL
      };
    }
  } catch (error) {
    console.warn('Direct email dispatch encountered network state, activating mail client fallback:', error);
    return {
      success: true, // UI proceeds gracefully to success card with mail client options
      directDelivered: false,
      fallbackRequired: true,
      error: error.message,
      targetEmail: CONTACT_EMAIL
    };
  }
}
