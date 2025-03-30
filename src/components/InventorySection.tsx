"use client"; // Next.js compatibility

import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

type TabType = 'Organizing' | 'Managing' | 'Reporting';

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => (
  <div className="flex flex-col items-center p-4 hover:shadow-md transition-shadow h-full">
    <div className="mb-3">
      <Image src="/mrp_workorder_icon.png" alt="Inventory Icon" width={25} height={25} />
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-600 text-center">{description}</p>
  </div>
);

export default function InventorySection() {
  const [activeTab, setActiveTab] = useState<TabType>('Managing');

  const tabContent = {
    Organizing: [
      { title: 'Easy Inventory Import', description: 'Easy inventory import transfers your missing inventory into Sortly with the touch of button' },
      { title: 'Inventory Categorization', description: 'Easy inventory import transfers your missing inventory into Sortly with the touch of button' },
      { title: 'Custom Fields Setup', description: 'Easy inventory import transfers your missing inventory into Sortly with the touch of button' },
      { title: 'Bulk Editing', description: 'Easy inventory import transfers your missing inventory into Sortly with the touch of button' },
      { title: 'Item Grouping', description: 'Easy inventory import transfers your missing inventory into Sortly with the touch of button' },
      { title: 'Custom Tags', description: 'Easy inventory import transfers your missing inventory into Sortly with the touch of button' },
      { title: 'Location Management', description: 'Easy inventory import transfers your missing inventory into Sortly with the touch of button' },
      { title: 'Asset Hierarchy', description: 'Easy inventory import transfers your missing inventory into Sortly with the touch of button' },
      { title: 'Inventory Templates', description: 'Easy inventory import transfers your missing inventory into Sortly with the touch of button' },
      { title: 'Batch Import', description: 'Easy inventory import transfers your missing inventory into Sortly with the touch of button' },
      { title: 'Item Relationships', description: 'Easy inventory import transfers your missing inventory into Sortly with the touch of button' },
      { title: 'Data Validation', description: 'Easy inventory import transfers your missing inventory into Sortly with the touch of button' },
    ],
    Managing: [
      { title: 'Easy Inventory Import', description: 'Easy inventory import transfers your missing inventory into Sortly with the touch of button' },
      { title: 'Inventory Tracking', description: 'Easy inventory import transfers your missing inventory into Sortly with the touch of button' },
      { title: 'Low Stock Alerts', description: 'Easy inventory import transfers your missing inventory into Sortly with the touch of button' },
      { title: 'Barcode Scanning', description: 'Easy inventory import transfers your missing inventory into Sortly with the touch of button' },
      { title: 'Check In/Check Out', description: 'Easy inventory import transfers your missing inventory into Sortly with the touch of button' },
      { title: 'Stock Replenishment', description: 'Easy inventory import transfers your missing inventory into Sortly with the touch of button' },
      { title: 'Usage Tracking', description: 'Easy inventory import transfers your missing inventory into Sortly with the touch of button' },
      { title: 'Mobile Access', description: 'Easy inventory import transfers your missing inventory into Sortly with the touch of button' },
      { title: 'Permissions Management', description: 'Easy inventory import transfers your missing inventory into Sortly with the touch of button' },
      { title: 'Audit Trail', description: 'Easy inventory import transfers your missing inventory into Sortly with the touch of button' },
      { title: 'Material Management', description: 'Easy inventory import transfers your missing inventory into Sortly with the touch of button' },
      { title: 'QR Code Support', description: 'Easy inventory import transfers your missing inventory into Sortly with the touch of button' },
    ],
    Reporting: [
      { title: 'Easy Inventory Import', description: 'Easy inventory import transfers your missing inventory into Sortly with the touch of button' },
      { title: 'Custom Reports', description: 'Easy inventory import transfers your missing inventory into Sortly with the touch of button' },
      { title: 'Export Data', description: 'Easy inventory import transfers your missing inventory into Sortly with the touch of button' },
      { title: 'Inventory Valuation', description: 'Easy inventory import transfers your missing inventory into Sortly with the touch of button' },
      { title: 'Usage Analytics', description: 'Easy inventory import transfers your missing inventory into Sortly with the touch of button' },
      { title: 'Stock Level Reports', description: 'Easy inventory import transfers your missing inventory into Sortly with the touch of button' },
      { title: 'Project Reports', description: 'Easy inventory import transfers your missing inventory into Sortly with the touch of button' },
      { title: 'Trend Analysis', description: 'Easy inventory import transfers your missing inventory into Sortly with the touch of button' },
      { title: 'Location Reports', description: 'Easy inventory import transfers your missing inventory into Sortly with the touch of button' },
      { title: 'Cost Analysis', description: 'Easy inventory import transfers your missing inventory into Sortly with the touch of button' },
      { title: 'Scheduled Reports', description: 'Easy inventory import transfers your missing inventory into Sortly with the touch of button' },
      { title: 'Data Visualization', description: 'Easy inventory import transfers your missing inventory into Sortly with the touch of button' },
    ],
  };

  // Function to create rows with specific card counts
  const renderCards = (cards: Array<{ title: string; description: string }>) => {
    const rows = [
      cards.slice(0, 3),      // 3 cards in first row
      cards.slice(3, 7),      // 4 cards in second row
      cards.slice(7, 10),     // 3 cards in third row
      cards.slice(10, 12)     // 2 cards in fourth row
    ];

    return (
      <div className="space-y-8">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${rowIndex === 1 ? '4' : rowIndex === 3 ? '2' : '3'} gap-6`}>
            {row.map((feature, index) => (
              <div 
                key={index} 
                className={`${
                  rowIndex === 3 ? 'col-span-1 sm:col-span-1 lg:col-span-1 xl:col-span-1' : 
                  ''
                }`}
              >
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <Head>
        <title>Sortly - Construction Inventory Management</title>
        <meta name="description" content="Sortly construction inventory management software" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Sortly construction inventory management software feature
          </h1>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex">
            {(['Organizing', 'Managing', 'Reporting'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 text-lg font-medium border-b-2 ${
                  activeTab === tab
                    ? 'text-red-500 border-red-500'
                    : 'text-gray-500 border-transparent hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Feature Grid with custom row layout */}
        {renderCards(tabContent[activeTab])}
      </main>
    </div>
  );
}