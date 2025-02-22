import React, { useState, useEffect } from "react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, addMonths, subMonths, isSameDay } from "date-fns";
import ReactModal from "react-modal";

// List of funny quotes about how busy the woman is
const busyMessages = [
  "If you want her time, you'll need to schedule it... two months ago...",
];

const Calendar = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const [bookedDates, setBookedDates] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [randomMessage, setRandomMessage] = useState("");

  // Function to generate all days of the selected month
  const generateCalendarDays = (month) => {
    const start = startOfMonth(month);
    const end = endOfMonth(month);
    return eachDayOfInterval({ start, end });
  };

  // Handle month change
  const changeMonth = (direction) => {
    const newMonth = direction === "next" ? addMonths(selectedMonth, 1) : subMonths(selectedMonth, 1);
    setSelectedMonth(newMonth);
  };

  // Open modal and select a day
  const openModal = (day) => {
    setSelectedDay(day);
    setRandomMessage(busyMessages[Math.floor(Math.random() * busyMessages.length)]);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDay(null);
  };

  // Initialize booked dates as all days being booked
  useEffect(() => {
    const booked = generateCalendarDays(selectedMonth);
    setBookedDates(booked);
  }, [selectedMonth]);

  // Create an array of all days in the selected month
  const currentMonthDays = generateCalendarDays(selectedMonth);

  return (
    <div>
      <h1>Appointment with Prenses Gelecek</h1> 
      <h4>Click on a date to book an "appointment"...</h4>    
      <h4>Red = completely booked</h4>
      <div className="month-selector">
        <button onClick={() => changeMonth("previous")}>Previous</button>
        <select
          value={format(selectedMonth, "yyyy-MM")}
          onChange={(e) => setSelectedMonth(new Date(e.target.value))}
        >
          {Array.from({ length: 12 }).map((_, i) => {
            const monthDate = addMonths(new Date(), i);
            return (
              <option key={monthDate} value={format(monthDate, "yyyy-MM")}>
                {format(monthDate, "MMMM yyyy")}
              </option>
            );
          })}
        </select>
        <button onClick={() => changeMonth("next")}>Next</button>
      </div>

      <div className="calendar">
        {currentMonthDays.map((day) => (
          <div
            key={day}
            className={`day ${bookedDates.some((bookedDay) => isSameDay(bookedDay, day)) ? "booked" : ""}`}
            onClick={() => openModal(day)} // Open modal even when day is booked
          >
            {format(day, "d")}
          </div>
        ))}
      </div>

      {/* Modal for booking times */}
      <ReactModal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Book Appointment">
        <h2>Book Appointment on {format(selectedDay, "MMMM dd, yyyy")}</h2>
        <p className="busy-message">{randomMessage}</p>
        <div className="times">
          {[...Array(24)].map((_, i) => {
            const hour = `${i < 10 ? "0" : ""}${i}:00`;
            return (
              <button key={i} className="time" disabled>
                {hour} (Unavailable)
              </button>
            );
          })}
        </div>
        <button onClick={closeModal}>Close</button>
      </ReactModal>
    </div>
  );
};

export default Calendar;
