"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { recentStreamsData } from '@/data';

interface DashboardContextType {
  recentStreams: typeof recentStreamsData;
  sortConfig: SortConfig;
  setSortConfig: React.Dispatch<React.SetStateAction<SortConfig>>;
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

interface SortConfig {
  key: keyof typeof recentStreamsData[0];
  direction: 'ascending' | 'descending';
}

interface DashboardProviderProps {
  children: ReactNode;
}

export const DashboardProvider = ({ children }: DashboardProviderProps) => {
  const [recentStreams, setRecentStreams] = useState(recentStreamsData);
  const [sortConfig, setSortConfig] = useState<SortConfig>({ key: 'dateStreamed', direction: 'ascending' });

  const sortedStreams = [...recentStreams].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });

  const value = {
    recentStreams: sortedStreams,
    sortConfig,
    setSortConfig,
  };

  return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>;
};

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
};