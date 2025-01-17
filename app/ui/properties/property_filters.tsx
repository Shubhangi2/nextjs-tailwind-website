'use client';

import { ChevronDown } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';

interface PropertyFiltersProps {
  totalCount: number;
  startIndex: number;
  endIndex: number;
}

export function PropertyFilters({ totalCount, startIndex, endIndex }: PropertyFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSort = (sortBy: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('sort', sortBy);
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center gap-2">
        <button 
          onClick={() => handleSort('relevance')}
          className="inline-flex items-center px-3 py-2 border rounded-md text-sm"
        >
          Relevance
          <ChevronDown className="ml-2 h-4 w-4" />
        </button>
        <span className="text-sm text-gray-500">
          Showing {startIndex}-{endIndex} of {totalCount}
        </span>
      </div>
    </div>
  );
}