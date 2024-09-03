"use client"
import React from 'react';
import { useDashboard } from '@/context/DashboardContext';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { recentStreamsData } from '@/data';

const RecentStreamsTable = () => {
  const { recentStreams, setSortConfig, sortConfig } = useDashboard();

  const requestSort = (key: keyof typeof recentStreamsData[0]) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle>Recent Streams</CardTitle>
      </CardHeader>
      <CardContent className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => requestSort('songName')}>Song Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => requestSort('artist')}>Artist</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => requestSort('dateStreamed')}>Date Streamed</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => requestSort('streamCount')}>Stream Count</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => requestSort('userId')}>User ID</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {recentStreams.map((stream, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{stream.songName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{stream.artist}</td>
                <td className="px-6 py-4 whitespace-nowrap">{stream.dateStreamed}</td>
                <td className="px-6 py-4 whitespace-nowrap">{stream.streamCount}</td>
                <td className="px-6 py-4 whitespace-nowrap">{stream.userId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
};

export default RecentStreamsTable;