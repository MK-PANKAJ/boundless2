import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import EventDetails from './EventDetails';
import SubEventDetails from './SubEventDetails';
import CategoryFeed from './CategoryFeed';
import TimelineMonthFeed from './TimelineMonthFeed';
import AboutUs from './AboutUs';
import Council from './Council';

// Admin Components
import ManageEvents from './admin/ManageEvents';
import AddEvent from './admin/AddEvent';
import EditEvent from './admin/EditEvent';
import ManageMonths from './admin/ManageMonths';
import AddMonth from './admin/AddMonth';
import EditMonth from './admin/EditMonth';
import Login from './admin/Login';
import AdminProtectedRoute from './admin/AdminProtectedRoute';

// Firebase & Setter Imports
import { db } from './lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { setDynamicEvents } from './data/events';
import { setDynamicMonths } from './data/timelineEvents';

export default function App() {
  const [dbLoaded, setDbLoaded] = useState(false);

  useEffect(() => {
    async function loadDatabase() {
      try {
        const eventsSnap = await getDocs(collection(db, "events"));
        const monthsSnap = await getDocs(collection(db, "timeline_months"));

        if (!eventsSnap.empty) {
          const eventsList = eventsSnap.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setDynamicEvents(eventsList);
        }

        if (!monthsSnap.empty) {
          const monthsList = monthsSnap.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setDynamicMonths(monthsList);
        }
      } catch (error) {
        console.warn("Failed to load Firebase database, falling back to static:", error);
      } finally {
        setDbLoaded(true);
      }
    }
    loadDatabase();
  }, []);

  if (!dbLoaded) {
    return (
      <div className="min-h-screen bg-[#0f172a] text-slate-100 flex flex-col items-center justify-center gap-3">
        <div className="w-10 h-10 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-sm font-semibold tracking-wider text-slate-400">Loading Boundless Database...</p>
      </div>
    );
  }

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

        {/* Admin Routes */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin" element={<AdminProtectedRoute><ManageEvents /></AdminProtectedRoute>} />
        <Route path="/admin/events/add" element={<AdminProtectedRoute><AddEvent /></AdminProtectedRoute>} />
        <Route path="/admin/events/edit/:id" element={<AdminProtectedRoute><EditEvent /></AdminProtectedRoute>} />
        <Route path="/admin/timeline-months" element={<AdminProtectedRoute><ManageMonths /></AdminProtectedRoute>} />
        <Route path="/admin/timeline-months/add" element={<AdminProtectedRoute><AddMonth /></AdminProtectedRoute>} />
        <Route path="/admin/timeline-months/edit/:id" element={<AdminProtectedRoute><EditMonth /></AdminProtectedRoute>} />
      </Routes>
    </Router>
  );
}