"use client";

import { useState, useEffect } from "react";

export interface SavedTrip {
  countryCode: string;
  name: string;
}

export function useSavedTrips() {
  const [savedTrips, setSavedTrips] = useState<SavedTrip[]>(() => {
    const stored = localStorage.getItem("savedTrips");
    return stored ? JSON.parse(stored) : [];
  });

  // Save to localStorage whenever savedTrips changes
  useEffect(() => {
    localStorage.setItem("savedTrips", JSON.stringify(savedTrips));
  }, [savedTrips]);

  const saveTrip = (trip: SavedTrip) => {
    setSavedTrips((prev) => {
      if (prev.some((t) => t.countryCode === trip.countryCode)) return prev;
      return [...prev, trip];
    });
  };

  const removeTrip = (countryCode: string) => {
    setSavedTrips((prev) => prev.filter((t) => t.countryCode !== countryCode));
  };

  const isSaved = (countryCode: string) =>
    savedTrips.some((t) => t.countryCode === countryCode);

  return { savedTrips, saveTrip, removeTrip, isSaved };
}
