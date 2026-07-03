'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { getPropertiesData, WorkspaceProperty } from '@/src/api';
import { Hits } from '@/src/components';
import Loader from '@/src/helpers/Loader';
import Link from 'next/link';

// Available Amenities for Checklist
const AMENITIES_OPTIONS = [
  'Generator Backup',
  'Solar Power Backup',
  'Fiber Internet (150mbps)',
  'High-speed Wi-Fi (300mbps)',
  'Gigabit Wi-Fi',
  'Ergonomic Chairs',
  'Steelcase Ergonomic Chairs',
  'Soundproof Phone Booth',
  'Soundproof Pods',
  'Standing Desks',
  'Dual Monitors',
  'Complimentary Tea/Coffee',
  'Premium Espresso Bar',
  'Podcast Recording Studio',
  'Gym Access'
];

function WorkspaceListContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const initialCountry = searchParams.get('country') || '';
  const initialSearch = searchParams.get('search') || '';

  const [properties, setProperties] = useState<WorkspaceProperty[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<WorkspaceProperty[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Filters State
  const [country, setCountry] = useState(initialCountry);
  const [search, setSearch] = useState(initialSearch);
  const [workspaceType, setWorkspaceType] = useState('');
  const [maxPrice, setMaxPrice] = useState(1000);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    // Sync URL queries
    setCountry(searchParams.get('country') || '');
    setSearch(searchParams.get('search') || '');
  }, [searchParams]);

  useEffect(() => {
    getPropertiesData().then((data) => {
      setProperties(data.hits);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    let result = [...properties];

    // Search Query
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.location.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    // Country Filter
    if (country) {
      result = result.filter((p) => p.country === country);
    }

    // Workspace Type Filter
    if (workspaceType) {
      result = result.filter((p) => p.workspaceType === workspaceType);
    }

    // Max Price Filter
    result = result.filter((p) => p.price <= maxPrice);

    // Amenities Filter
    if (selectedAmenities.length > 0) {
      result = result.filter((p) =>
        selectedAmenities.every((amenity) =>
          p.amenities.some((a) => a.toLowerCase().includes(amenity.toLowerCase()))
        )
      );
    }

    // Sorting
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    setFilteredProperties(result);
  }, [properties, country, search, workspaceType, maxPrice, selectedAmenities, sortBy]);

  const handleAmenityChange = (amenity: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity) ? prev.filter((a) => a !== amenity) : [...prev, amenity]
    );
  };

  const clearFilters = () => {
    setCountry('');
    setSearch('');
    setWorkspaceType('');
    setMaxPrice(1000);
    setSelectedAmenities([]);
    setSortBy('featured');
    router.replace('/list');
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="py-10 px-4 md:px-8">
      {/* Title Header */}
      <div className="mb-8 border-b border-gray-100 pb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-manrope font-extrabold text-black tracking-tight">Available Workspaces</h1>
          <p className="text-gray-500 font-manrope text-sm mt-1">
            Showing {filteredProperties.length} verified live-work & coworking spaces
          </p>
        </div>
        <button
          onClick={clearFilters}
          className="text-xs font-semibold text-[#f85a47] border border-[#f85a47]/30 hover:bg-[#f85a47] hover:text-white px-3 py-1.5 rounded-lg transition-all self-start md:self-auto"
        >
          Reset All Filters
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="lg:w-1/4 w-full bg-white p-6 rounded-2xl border border-gray-100 shadow-sm h-fit sticky top-24">
          <h2 className="text-lg font-manrope font-bold text-black border-b border-gray-100 pb-3 mb-4">Filters</h2>

          {/* Search Input */}
          <div className="mb-6">
            <label className="block text-xs font-bold font-manrope text-gray-500 uppercase tracking-wider mb-2">
              Keywords
            </label>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search title, description..."
              className="w-full text-sm font-manrope border border-gray-200 rounded-lg p-2.5 outline-none focus:border-[#f85a47]"
            />
          </div>

          {/* Country Selection */}
          <div className="mb-6">
            <label className="block text-xs font-bold font-manrope text-gray-500 uppercase tracking-wider mb-2">
              Country
            </label>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full text-sm font-manrope border border-gray-200 rounded-lg p-2.5 outline-none bg-white focus:border-[#f85a47]"
            >
              <option value="">All Countries</option>
              <option value="Nigeria">Nigeria</option>
              <option value="US">United States</option>
              <option value="UK">United Kingdom</option>
            </select>
          </div>

          {/* Workspace Type */}
          <div className="mb-6">
            <label className="block text-xs font-bold font-manrope text-gray-500 uppercase tracking-wider mb-2">
              Space Type
            </label>
            <select
              value={workspaceType}
              onChange={(e) => setWorkspaceType(e.target.value)}
              className="w-full text-sm font-manrope border border-gray-200 rounded-lg p-2.5 outline-none bg-white focus:border-[#f85a47]"
            >
              <option value="">All Types</option>
              <option value="Hot Desk">Hot Desk</option>
              <option value="Dedicated Desk">Dedicated Desk</option>
              <option value="Private Office">Private Office</option>
              <option value="Coliving Space">Coliving Space</option>
            </select>
          </div>

          {/* Price Range Slider */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <label className="block text-xs font-bold font-manrope text-gray-500 uppercase tracking-wider">
                Max Price
              </label>
              <span className="text-sm font-bold text-text-orange">${maxPrice}/mo</span>
            </div>
            <input
              type="range"
              min="50"
              max="1000"
              step="50"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-[#f85a47]"
            />
          </div>

          {/* Amenities Checklist */}
          <div>
            <label className="block text-xs font-bold font-manrope text-gray-500 uppercase tracking-wider mb-3">
              Work Amenities
            </label>
            <div className="space-y-2 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
              {AMENITIES_OPTIONS.map((amenity) => (
                <label key={amenity} className="flex items-center space-x-2 text-xs font-manrope text-gray-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedAmenities.includes(amenity)}
                    onChange={() => handleAmenityChange(amenity)}
                    className="accent-[#f85a47] rounded border-gray-300"
                  />
                  <span>{amenity}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Results Main Area */}
        <main className="flex-grow lg:w-3/4 w-full">
          {/* Sorting / Controls */}
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
            <span className="text-xs text-gray-500 font-manrope font-semibold">
              Filtered Result Count: {filteredProperties.length}
            </span>
            <div className="flex items-center space-x-2">
              <label className="text-xs font-bold font-manrope text-gray-400">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-xs font-manrope font-bold border border-gray-200 rounded-lg p-2 outline-none bg-white focus:border-[#f85a47] cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>

          {/* Listings Grid */}
          {filteredProperties.length > 0 ? (
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProperties.map((item) => (
                <Link href={`/${item.slug}`} key={item.id} className="block">
                  <Hits
                    price={item.price}
                    name={item.title}
                    img={item.coverPhoto.url}
                    baths={item.baths}
                    rooms={item.rooms}
                    location={item.location}
                    workspaceType={item.workspaceType}
                  />
                </Link>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm py-20 text-center px-4">
              <h3 className="text-lg font-manrope font-extrabold text-black">No workspaces found</h3>
              <p className="text-gray-500 text-sm mt-1 max-w-md mx-auto">
                No spaces matched your current search filters. Try widening your price scope, resetting amenities, or searching for other keywords.
              </p>
              <button
                onClick={clearFilters}
                className="mt-6 bg-[#f85a47] hover:bg-red-700 text-white font-bold text-xs py-2 px-5 rounded-lg tracking-[0.01rem] transition-colors"
              >
                Clear Search & Filters
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default function WorkspaceList() {
  return (
    <Suspense fallback={<Loader />}>
      <WorkspaceListContent />
    </Suspense>
  );
}
