import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useLocation } from 'react-router-dom';
import './Appointments.css';

function Appointments() {
  const location = useLocation();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [hairStyle, setHairStyle] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // Parse URL search params
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const serviceParam = searchParams.get('service');
    const styleParam = searchParams.get('style');

    if (serviceParam) {
      setService(serviceParam);
    }

    if (styleParam) {
      setHairStyle(styleParam);
    }
  }, [location]);

  // Available time slots
  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', 
    '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
    '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
    '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM'
  ];

  // Available services
  const services = [
    'Haircut', 'Beard Trim', 'Haircut & Beard Combo', 
    'Hair Styling', 'Hair Coloring', 'Facial', 'Shave'
  ];

  // Available haircut styles (optional)
  const hairStyles = [
    'Classic Cut', 'Fade', 'Undercut', 'Pompadour', 
    'Crew Cut', 'Buzz Cut', 'Slick Back', 'Textured Crop',
    'Side Part', 'Quiff', 'French Crop', 'Comb Over'
  ];

  // Filter out past dates
  const isValidDate = (date) => {
    return date >= new Date();
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Validate form
    if (selectedDate && selectedTime && name && email && phone && service) {
      // In a real application, you would send this data to a server
      console.log('Appointment booked:', {
        date: selectedDate,
        time: selectedTime,
        name,
        email,
        phone,
        service,
        hairStyle: hairStyle || 'Not specified' // Include hairStyle if selected
      });

      // Show confirmation
      setBookingConfirmed(true);
    }
  };

  // Reset form for a new booking
  const handleNewBooking = () => {
    setSelectedDate(null);
    setSelectedTime(null);
    setName('');
    setEmail('');
    setPhone('');
    setService('');
    setHairStyle('');
    setSubmitted(false);
    setBookingConfirmed(false);
  };

  return (
    <div className="appointments-container">
      <h1>Book an Appointment</h1>

      {bookingConfirmed ? (
        <div className="confirmation-message">
          <h2>Appointment Confirmed!</h2>
          <p>Thank you for booking with us, {name}.</p>
          <p>Your appointment is scheduled for:</p>
          <p className="appointment-details">
            {selectedDate.toLocaleDateString()} at {selectedTime}
          </p>
          <p>We've sent a confirmation email to {email}.</p>
          <p>If you need to reschedule or cancel, please contact us at least 24 hours in advance.</p>
          <button className="new-booking-btn" onClick={handleNewBooking}>Book Another Appointment</button>
        </div>
      ) : (
        <div className="booking-form-container">
          <div className="booking-steps">
            <div className={`step ${selectedDate ? 'completed' : 'active'}`}>1. Select Date</div>
            <div className={`step ${selectedDate && !selectedTime ? 'active' : (selectedTime ? 'completed' : '')}`}>2. Select Time</div>
            <div className={`step ${selectedTime && !bookingConfirmed ? 'active' : ''}`}>3. Your Details</div>
          </div>

          <form onSubmit={handleSubmit} className="booking-form">
            <div className="form-section">
              <h2>Select Date</h2>
              <DatePicker
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                filterDate={isValidDate}
                inline
                minDate={new Date()}
                placeholderText="Select a date"
              />
              {submitted && !selectedDate && <p className="error-message">Please select a date</p>}
            </div>

            {selectedDate && (
              <div className="form-section">
                <h2>Select Time</h2>
                <div className="time-slots">
                  {timeSlots.map(time => (
                    <button
                      type="button"
                      key={time}
                      className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </button>
                  ))}
                </div>
                {submitted && !selectedTime && <p className="error-message">Please select a time</p>}
              </div>
            )}

            {selectedTime && (
              <div className="form-section">
                <h2>Your Details</h2>
                <div className="form-group">
                  <label htmlFor="service">Service:</label>
                  <select
                    id="service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    required
                  >
                    <option value="">Select a service</option>
                    {services.map(svc => (
                      <option key={svc} value={svc}>{svc}</option>
                    ))}
                  </select>
                  {submitted && !service && <p className="error-message">Please select a service</p>}
                </div>

                {/* Optional haircut style selection */}
                {(service === 'Haircut' || service === 'Haircut & Beard Combo' || service === 'Hair Styling') && (
                  <div className="form-group">
                    <label htmlFor="hairStyle">Haircut Style (Optional):</label>
                    <select
                      id="hairStyle"
                      value={hairStyle}
                      onChange={(e) => setHairStyle(e.target.value)}
                    >
                      <option value="">Select a haircut style (optional)</option>
                      {hairStyles.map(style => (
                        <option key={style} value={style}>{style}</option>
                      ))}
                    </select>
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="name">Full Name:</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  {submitted && !name && <p className="error-message">Please enter your name</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  {submitted && !email && <p className="error-message">Please enter your email</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number:</label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                  {submitted && !phone && <p className="error-message">Please enter your phone number</p>}
                </div>

                <button type="submit" className="submit-btn">Book Appointment</button>
              </div>
            )}
          </form>
        </div>
      )}
    </div>
  );
}

export default Appointments;
