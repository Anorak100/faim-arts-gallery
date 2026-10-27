import { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  PUBLIC_KEY,
  SERVICE_ID,
  TEMPLATE_ID,
} from '../config/emailjs-config';
import './Contact.css';

const emailjsConfigured = [PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID]
  .every((value) => value && !value.startsWith('YOUR_EMAILJS_'));

function ContactIcon({ type }) {
  if (type === 'location') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function SocialIcon({ name }) {
  if (name === 'Instagram') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" /></svg>;
  }
  if (name === 'TikTok') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.5 3v11.2a4.2 4.2 0 1 1-3.4-4.1" /><path d="M12.5 3c.4 3.2 2.4 5.2 5.5 5.5" /></svg>;
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>;
}

function ContactDetail({ icon, label, children }) {
  return (
    <div className="contact-detail">
      <span className="contact-detail__icon">
        <ContactIcon type={icon} />
      </span>
      <div className="contact-detail__copy">
        <span className="contact-detail__label">{label}</span>
        {children}
      </div>
    </div>
  );
}

export default function Contact() {
  const [status, setStatus] = useState('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    if (formData.get('website')) {
      form.reset();
      setStatus('success');
      setStatusMessage('Thank you. Your message has been sent.');
      return;
    }

    if (!emailjsConfigured) {
      setStatus('error');
      setStatusMessage('The contact form is not configured yet. Please email faimarts@gmail.com instead.');
      return;
    }

    setStatus('sending');
    setStatusMessage('');

    const firstName = formData.get('first_name').trim();
    const lastName = formData.get('last_name').trim();
    const templateParams = {
      first_name: firstName,
      last_name: lastName,
      from_name: `${firstName} ${lastName}`.trim(),
      reply_to: formData.get('reply_to').trim(),
      subject: formData.get('subject').trim(),
      message: formData.get('message').trim(),
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      form.reset();
      setStatus('success');
      setStatusMessage('Thank you. Your message has been sent.');
    } catch (error) {
      console.error('EmailJS contact form submission failed:', error);
      setStatus('error');
      setStatusMessage('Your message could not be sent. Please try again or email faimarts@gmail.com.');
    }
  };

  return (
    <section className="contact-page" aria-labelledby="contact-title">
      <div className="contact-page__container container">
        <header className="contact-page__header">
          <span className="contact-page__eyebrow">Get in touch</span>
          <h1 className="contact-page__title" id="contact-title">Contact</h1>
        </header>

        <div className="contact-layout">
          <div className="contact-info">
            <p className="contact-info__intro">
              For inquiries, commissions, collaborations and purchases, reach out through the details below or send a message directly.
            </p>

            <section className="contact-info__group" aria-labelledby="contact-studio-title">
              <h2 className="contact-info__heading" id="contact-studio-title">Studio</h2>
              <ContactDetail icon="location" label="Location">
                <span>Ile-Ife, Nigeria</span>
              </ContactDetail>
            </section>

            <section className="contact-info__group" aria-labelledby="contact-connect-title">
              <h2 className="contact-info__heading" id="contact-connect-title">Connect</h2>
              <ContactDetail icon="email" label="Email">
                <a href="mailto:faimarts@gmail.com">faimarts@gmail.com</a>
              </ContactDetail>
              <nav className="contact-socials" aria-label="Social media">
                <a href="https://www.instagram.com/faimarts" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><SocialIcon name="Instagram" /></a>
                <a href="https://www.tiktok.com/@faimarts" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><SocialIcon name="TikTok" /></a>
                <a href="https://www.facebook.com/faimarts" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><SocialIcon name="Facebook" /></a>
              </nav>
            </section>
          </div>

          <div className="contact-form-card">
            <h2 className="contact-form-card__title">Send a message</h2>
            <p className="contact-form-card__intro">Share a little about what you have in mind.</p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form__name-row">
                <div className="contact-form__field">
                  <label htmlFor="contact-first-name">First Name</label>
                  <input
                    id="contact-first-name"
                    name="first_name"
                    type="text"
                    autoComplete="given-name"
                    required
                  />
                </div>
                <div className="contact-form__field">
                  <label htmlFor="contact-last-name">Last Name</label>
                  <input
                    id="contact-last-name"
                    name="last_name"
                    type="text"
                    autoComplete="family-name"
                    required
                  />
                </div>
              </div>

              <div className="contact-form__field">
                <label htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  name="reply_to"
                  type="email"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="contact-form__field">
                <label htmlFor="contact-subject">Subject</label>
                <input id="contact-subject" name="subject" type="text" required />
              </div>

              <div className="contact-form__field">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Type message here..."
                  rows="5"
                  required
                />
              </div>

              <div className="contact-form__honeypot" aria-hidden="true">
                <label htmlFor="contact-website">Leave this field empty</label>
                <input
                  id="contact-website"
                  name="website"
                  type="text"
                  tabIndex="-1"
                  autoComplete="off"
                />
              </div>

              <p
                className={`contact-form__status contact-form__status--${status}`}
                role={status === 'error' ? 'alert' : 'status'}
                aria-live={status === 'error' ? 'assertive' : 'polite'}
                aria-atomic="true"
              >
                {statusMessage}
              </p>

              <button className="contact-form__submit" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send Message'}
                {status !== 'sending' && <span aria-hidden="true">→</span>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
