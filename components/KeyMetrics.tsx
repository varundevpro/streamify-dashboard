"use client"
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const KeyMetrics = () => {
  const metrics = [
    { title: 'Total Users', value: '2,345,678' },
    { title: 'Active Users', value: '234,567' },
    { title: 'Total Streams', value: '15,678,910' },
    { title: 'Revenue', value: '$2,345,678' },
  ];

  return (
    <section className="w-full max-w-5xl grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-4">
      {metrics.map((metric, index) => (
        <Card key={index}>
          <CardHeader className='px-6 pt-6 pb-1'>
            <CardTitle className='text-sm font-normal tracking-normal text-muted-foreground'>{metric.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl">{metric.value}</p>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};

export default KeyMetrics;