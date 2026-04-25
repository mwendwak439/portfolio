import React, { useState, useRef, useEffect } from 'react';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [focusedField, setFocusedField] = useState(null);
  
  const formRef = useRef(null);
  
  // Animate elements on mount
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-load');
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('animated');
      }, index * 100);
    });
  }, []);
  
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // Simulate API call (replace with your actual backend endpoint)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Successful submission
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
      
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Copy contact info to clipboard
  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    // Show temporary tooltip feedback
    const tooltip = document.createElement('div');
    tooltip.className = 'copy-tooltip';
    tooltip.textContent = `${type} copied!`;
    document.body.appendChild(tooltip);
    setTimeout(() => tooltip.remove(), 2000);
  };
  
  return (
    <div className="contact-page">
      {/* Animated Background */}
      <div className="contact-bg">
        <div className="bg-gradient"></div>
        <div className="bg-dots"></div>
        <div className="bg-blur-1"></div>
        <div className="bg-blur-2"></div>
      </div>
      
      <div className="contact-container">
        {/* Header Section */}
        <div className="contact-header animate-on-load">
          <div className="header-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h1>Let's Connect</h1>
          <p>Have a project in mind? I'd love to hear from you. Send me a message and I'll respond within 24 hours.</p>
        </div>
        
        <div className="contact-grid">
          {/* Contact Info Cards */}
          <div className="contact-info animate-on-load">
            <div className="info-card">
              <div className="info-icon email-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Email</h3>
              <p>kennedy.kimanzi@example.com</p>
              <button onClick={() => copyToClipboard('kennedy.kimanzi@example.com', 'Email')} className="copy-btn">
                <svg viewBox="0 0 24 24" width="16" height="16">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke="currentColor" fill="none" strokeWidth="2"/>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" stroke="currentColor" fill="none" strokeWidth="2"/>
                </svg>
                Copy
              </button>
            </div>
            
            <div className="info-card">
              <div className="info-icon phone-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7294C21.7209 20.9845 21.5573 21.2136 21.352 21.4019C21.1467 21.5901 20.904 21.7335 20.6397 21.8227C20.3754 21.9119 20.095 21.945 19.816 21.92C16.743 21.5856 13.787 20.5341 11.18 18.85C8.77315 17.3147 6.72494 15.2665 5.18965 12.8597C3.50688 10.2519 2.45581 7.29549 2.12001 4.222C2.09498 3.94316 2.12792 3.66285 2.21699 3.39861C2.30606 3.13437 2.4493 2.89166 2.63746 2.6863C2.82562 2.48094 3.05459 2.31727 3.30965 2.20553C3.56471 2.09379 3.84031 2.03666 4.11885 2.037H7.11885C7.59792 2.03271 8.06446 2.19021 8.44698 2.48248C8.82951 2.77474 9.10389 3.18338 9.22301 3.649C9.38717 4.32497 9.62666 4.97994 9.93701 5.6C10.0705 5.85769 10.1361 6.14523 10.1274 6.43412C10.1187 6.72301 10.036 7.00583 9.88701 7.254L8.98001 8.761C10.3083 11.0258 12.1059 12.9787 14.239 14.462L15.792 13.626C16.0416 13.4903 16.3214 13.4185 16.6061 13.417C16.8907 13.4154 17.1713 13.4841 17.422 13.617C18.056 13.943 18.7235 14.1927 19.412 14.362C19.8778 14.4818 20.2864 14.757 20.578 15.1403C20.8696 15.5236 21.026 15.9907 21.021 16.47L21.016 16.92H22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Phone</h3>
              <p>+254 707 567 366</p>
              <button onClick={() => copyToClipboard('+254 707 567 366', 'Phone number')} className="copy-btn">
                <svg viewBox="0 0 24 24" width="16" height="16">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke="currentColor" fill="none" strokeWidth="2"/>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" stroke="currentColor" fill="none" strokeWidth="2"/>
                </svg>
                Copy
              </button>
            </div>
            
            <div className="info-card location-card">
              <div className="info-icon location-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Location</h3>
              <p>Nairobi, Kenya</p>
              <button onClick={() => window.open('https://maps.google.com/?q=Nairobi,Kenya', '_blank')} className="map-btn">
                <svg viewBox="0 0 24 24" width="16" height="16">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" fill="none" strokeWidth="2"/>
                  <circle cx="12" cy="10" r="3" stroke="currentColor" fill="none" strokeWidth="2"/>
                </svg>
                View Map
              </button>
            </div>
            
            {/* Social Links */}
            <div className="social-links-card">
              <h3>Follow Me</h3>
              <div className="social-icons">
                <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.99h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.99C18.343 21.128 22 16.991 22 12z"/>
                  </svg>
                </a>
                <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.482-11.623c0-.213-.004-.425-.015-.636A9.936 9.936 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.98 0 1.771-.773 1.771-1.729V1.729C24 .774 23.203 0 22.225 0z"/>
                  </svg>
                </a>
                <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="contact-form-wrapper animate-on-load">
            <form onSubmit={handleSubmit} ref={formRef} className="contact-form">
              <div className={`form-group ${focusedField === 'name' ? 'focused' : ''} ${errors.name ? 'error' : ''}`}>
                <label htmlFor="name">
                  <svg viewBox="0 0 24 24" width="18" height="18">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" fill="none" strokeWidth="2"/>
                    <circle cx="12" cy="7" r="4" stroke="currentColor" fill="none" strokeWidth="2"/>
                  </svg>
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="John Doe"
                  className={errors.name ? 'error-input' : ''}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>
              
              <div className={`form-group ${focusedField === 'email' ? 'focused' : ''} ${errors.email ? 'error' : ''}`}>
                <label htmlFor="email">
                  <svg viewBox="0 0 24 24" width="18" height="18">
                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" fill="none" strokeWidth="2"/>
                    <path d="M22 6L12 13L2 6" stroke="currentColor" fill="none" strokeWidth="2"/>
                  </svg>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="hello@example.com"
                  className={errors.email ? 'error-input' : ''}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
              
              <div className={`form-group ${focusedField === 'subject' ? 'focused' : ''} ${errors.subject ? 'error' : ''}`}>
                <label htmlFor="subject">
                  <svg viewBox="0 0 24 24" width="18" height="18">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="currentColor" fill="none" strokeWidth="2"/>
                    <polyline points="7 10 12 15 17 10" stroke="currentColor" fill="none" strokeWidth="2"/>
                    <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('subject')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Project Inquiry"
                  className={errors.subject ? 'error-input' : ''}
                />
                {errors.subject && <span className="error-message">{errors.subject}</span>}
              </div>
              
              <div className={`form-group ${focusedField === 'message' ? 'focused' : ''} ${errors.message ? 'error' : ''}`}>
                <label htmlFor="message">
                  <svg viewBox="0 0 24 24" width="18" height="18">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="currentColor" fill="none" strokeWidth="2"/>
                  </svg>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Tell me about your project..."
                  className={errors.message ? 'error-input' : ''}
                ></textarea>
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>
              
              <button 
                type="submit" 
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <svg viewBox="0 0 24 24" width="20" height="20">
                      <line x1="22" y1="2" x2="11" y2="13" stroke="currentColor" strokeWidth="2"/>
                      <polygon points="22 2 15 22 11 13 2 9 22 2" stroke="currentColor" fill="none" strokeWidth="2"/>
                    </svg>
                    Send Message
                  </>
                )}
              </button>
              
              {submitStatus === 'success' && (
                <div className="success-message">
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="error-message-global">
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" fill="none" strokeWidth="2"/>
                    <line x1="12" y1="8" x2="12" y2="12" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="16" r="1" fill="currentColor"/>
                  </svg>
                  Something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>
    </div>
  );
};

export default Contact;