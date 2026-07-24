import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import EventDetails from './EventDetails';
import SubEventDetails from './SubEventDetails';
import CategoryFeed from './CategoryFeed';
import TimelineMonthFeed from './TimelineMonthFeed';
import AboutUs from './AboutUs';
import Council from './Council';

export default function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/event/:eventId" element={<EventDetails />} />
        <Route path="/event/:eventId/:subEventId" element={<SubEventDetails />} />
        <Route path="/category/:categoryId" element={<CategoryFeed />} />
        <Route path="/timeline/:monthId" element={<TimelineMonthFeed />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/council" element={<Council />} />
      </Routes>
    </Router>
  );
}