"use client"
import React from 'react';
import { DashboardProvider } from '@/context/DashboardContext';
import KeyMetrics from '@/components/KeyMetrics';
import UserGrowthChart from '@/components/UserGrowthChart';
import RevenueDistribution from '@/components/RevenueDistribution';
import TopStreamedSongs from '@/components/TopStreamedSongs';
import RecentStreamsTable from '@/components/RecentStreamsTable';

export default function Home() {
  return (
    <DashboardProvider>
      <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-12 lg:p-24">
        <header className="w-full max-w-5xl items-center justify-between text-sm lg:flex mb-8">
          <h1 className="text-4xl font-bold">Streamify Dashboard</h1>
        </header>

        <KeyMetrics />

        <section className="w-full max-w-5xl mt-8 grid grid-cols-1 gap-4">
          <UserGrowthChart />
          <div className="grid lg:grid-cols-2 gap-4">
            <RevenueDistribution />
            <TopStreamedSongs />
          </div>
        </section>

        <section className="w-full max-w-5xl mt-8">
          <RecentStreamsTable />
        </section>
      </main>
    </DashboardProvider>
  );
}
