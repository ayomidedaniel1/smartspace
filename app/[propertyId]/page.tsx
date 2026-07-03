'use client';

import React, { useEffect, useState } from 'react';
import { getPropertyBySlug, WorkspaceProperty } from '@/src/api';
import Loader from '@/src/helpers/Loader';
import { useRouter } from 'next/navigation';
import { AiFillStar, AiOutlineArrowLeft, AiOutlineCheckCircle, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { FiMapPin, FiAward, FiUsers, FiClock, FiCheck } from 'react-icons/fi';
import Link from 'next/link';

interface PageProps {
  params: {
    propertyId: string;
  };
}

export default function PropertyDetails({ params }: PageProps) {
  const router = useRouter();
  const { propertyId } = params;

  const [property, setProperty] = useState<WorkspaceProperty | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Booking Form State
  const [startDate, setStartDate] = useState('');
  const [duration, setDuration] = useState(1); // in months
  const [deskType, setDeskType] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    getPropertyBySlug(propertyId).then((data) => {
      if (data) {
        setProperty(data);
        setDeskType(data.workspaceType);
      }
      setIsLoading(false);
    });
  }, [propertyId]);

  if (isLoading) {
    return <Loader />;
  }

  if (!property) {
    return (
      <div className="py-20 text-center px-4">
        <h1 className="text-2xl font-manrope font-extrabold text-black">Workspace not found</h1>
        <p className="text-gray-500 mt-2">The workspace slug you are requesting does not exist in our database.</p>
        <Link href="/list" className="mt-6 inline-block bg-[#f85a47] text-white px-6 py-2.5 rounded-lg font-bold">
          Back to Workspaces
        </Link>
      </div>
    );
  }

  // Calculate pricing
  const basePrice = property.price;
  const rawTotal = basePrice * duration;
  // Apply discount for longer durations
  let discount = 0;
  if (duration >= 12) discount = 0.20; // 20% off for a year
  else if (duration >= 6) discount = 0.10; // 10% off for 6 months
  else if (duration >= 3) discount = 0.05; // 5% off for 3 months

  const discountAmount = rawTotal * discount;
  const finalTotal = rawTotal - discountAmount;

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!startDate) {
      alert('Please select a start date');
      return;
    }
    // Generate mock reference
    const ref = 'SP-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(ref);
    setBookingConfirmed(true);
  };

  return (
    <div className="py-10 px-4 md:px-8 max-w-6xl mx-auto relative">
      {/* Back link */}
      <Link href="/list" className="inline-flex items-center text-sm font-manrope text-gray-500 hover:text-[#f85a47] mb-6 transition-colors">
        <AiOutlineArrowLeft className="mr-2" /> Back to Workspaces
      </Link>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Side: Property details */}
        <div className="lg:w-2/3 flex flex-col">
          {/* Main Visual Image */}
          <div className="relative h-[25rem] rounded-2xl overflow-hidden shadow-sm border border-gray-100 mb-6">
            <img src={property.coverPhoto.url} alt={property.title} className="w-full h-full object-cover" />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-black font-manrope font-bold text-xs uppercase px-3 py-1.5 rounded shadow-sm">
              {property.workspaceType}
            </div>
            <div className="absolute bottom-4 left-4 flex items-center bg-black/60 text-white font-manrope text-xs font-bold px-3 py-1.5 rounded">
              <AiFillStar className="text-yellow-400 mr-1.5 text-sm" />
              <span>{property.rating} Verified Rating</span>
            </div>
          </div>

          {/* Title & Metadata */}
          <h1 className="text-3xl md:text-4xl font-manrope font-extrabold text-black tracking-tight leading-tight">
            {property.title}
          </h1>

          <div className="flex flex-wrap items-center mt-3 text-sm text-gray-500 font-manrope gap-4 border-b border-gray-100 pb-6">
            <span className="flex items-center">
              <FiMapPin className="text-[#f85a47] mr-1.5 text-base" /> {property.location}
            </span>
            <span className="flex items-center">
              <FiUsers className="text-[#f85a47] mr-1.5 text-base" /> {property.rooms} Conf. Rooms
            </span>
            <span className="flex items-center">
              <FiClock className="text-[#f85a47] mr-1.5 text-base" /> {property.baths} Call Booths
            </span>
          </div>

          {/* Space Description */}
          <div className="py-6 border-b border-gray-100">
            <h2 className="text-lg font-manrope font-extrabold text-black mb-3">About this Workspace</h2>
            <p className="text-sm font-manrope text-gray-600 leading-relaxed">
              {property.description}
            </p>
          </div>

          {/* Amenities Grid */}
          <div className="py-6 border-b border-gray-100">
            <h2 className="text-lg font-manrope font-extrabold text-black mb-4">Workspace Amenities</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {property.amenities.map((amenity) => (
                <div key={amenity} className="flex items-center text-xs font-manrope text-gray-700 bg-gray-50 p-2.5 rounded-lg border border-gray-100/50">
                  <span className="w-5 h-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center mr-2.5 flex-shrink-0">
                    <FiCheck className="text-[0.7rem]" />
                  </span>
                  {amenity}
                </div>
              ))}
            </div>
          </div>

          {/* Host Info */}
          <div className="py-6">
            <h2 className="text-lg font-manrope font-extrabold text-black mb-4">Workspace Manager</h2>
            <div className="flex items-center bg-gray-50 p-4 rounded-xl border border-gray-100">
              <div className="w-12 h-12 bg-[#f85a47]/10 text-[#f85a47] flex items-center justify-center rounded-full font-manrope font-bold text-lg mr-4">
                {property.hostName.charAt(0)}
              </div>
              <div className="flex-grow">
                <h3 className="font-manrope font-bold text-sm text-black">{property.hostName}</h3>
                <span className="text-[0.7rem] text-gray-500">Facility Manager - SmartSpace {property.country}</span>
              </div>
              <div className="flex space-x-2">
                <a href={`tel:${property.hostPhone}`} aria-label="Call Host" className="w-9 h-9 border border-gray-200 hover:border-[#f85a47] hover:text-[#f85a47] text-gray-600 flex items-center justify-center rounded-lg transition-all">
                  <AiOutlinePhone />
                </a>
                <a href={`mailto:host@smartspace.com`} aria-label="Email Host" className="w-9 h-9 border border-gray-200 hover:border-[#f85a47] hover:text-[#f85a47] text-gray-600 flex items-center justify-center rounded-lg transition-all">
                  <AiOutlineMail />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Booking Panel Card */}
        <div className="lg:w-1/3 w-full">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg sticky top-24">
            <div className="flex justify-between items-end border-b border-gray-100 pb-4 mb-6">
              <div>
                <span className="text-[0.7rem] font-manrope font-bold text-gray-400 uppercase tracking-wider">Desks starting from</span>
                <div className="flex items-baseline mt-0.5">
                  <span className="text-2xl font-extrabold text-black">${basePrice}</span>
                  <span className="text-gray-500 font-manrope text-xs ml-1">/ month</span>
                </div>
              </div>
              <span className="text-xs font-bold font-manrope text-green-600 bg-green-50 px-2.5 py-1 rounded">
                Available Now
              </span>
            </div>

            <form onSubmit={handleBook} className="space-y-4">
              {/* Desk Type Selection */}
              <div>
                <label className="block text-xs font-bold font-manrope text-gray-500 uppercase tracking-wider mb-2">
                  Space Selection
                </label>
                <select
                  value={deskType}
                  onChange={(e) => setDeskType(e.target.value)}
                  className="w-full text-sm font-manrope border border-gray-200 rounded-lg p-2.5 outline-none bg-white focus:border-[#f85a47]"
                  required
                >
                  <option value="Hot Desk">Hot Desk (Shared workspace)</option>
                  <option value="Dedicated Desk">Dedicated Desk (Reserved seat)</option>
                  <option value="Private Office">Private Suite (Entire locked space)</option>
                  <option value="Coliving Space">Coliving Studio (Accommodation + Desk)</option>
                </select>
              </div>

              {/* Start Date picker */}
              <div>
                <label className="block text-xs font-bold font-manrope text-gray-500 uppercase tracking-wider mb-2">
                  Start Date
                </label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full text-sm font-manrope border border-gray-200 rounded-lg p-2.5 outline-none focus:border-[#f85a47]"
                  required
                />
              </div>

              {/* Rental Duration Selector */}
              <div>
                <label className="block text-xs font-bold font-manrope text-gray-500 uppercase tracking-wider mb-2">
                  Rental Duration
                </label>
                <select
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="w-full text-sm font-manrope border border-gray-200 rounded-lg p-2.5 outline-none bg-white focus:border-[#f85a47]"
                  required
                >
                  <option value={1}>1 Month (Monthly Roll)</option>
                  <option value={3}>3 Months (Save 5%)</option>
                  <option value={6}>6 Months (Save 10%)</option>
                  <option value={12}>12 Months (Save 20%)</option>
                </select>
              </div>

              {/* Price Breakdown */}
              <div className="bg-gray-50 rounded-xl p-4 mt-6 border border-gray-100 space-y-2">
                <div className="flex justify-between text-xs font-manrope text-gray-600">
                  <span>Base rate ({duration} mo)</span>
                  <span>${rawTotal}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-xs font-manrope text-green-600 font-medium">
                    <span>Duration Discount ({(discount * 100)}%)</span>
                    <span>-${discountAmount}</span>
                  </div>
                )}
                <div className="flex justify-between text-xs font-manrope text-gray-600">
                  <span>Workspace Onboarding Fee</span>
                  <span className="text-green-600 font-bold">FREE</span>
                </div>
                <div className="border-t border-gray-200/50 my-2 pt-2 flex justify-between text-sm font-manrope font-extrabold text-black">
                  <span>Total Cost</span>
                  <span className="text-[#f85a47]">${finalTotal}</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#f85a47] hover:bg-red-700 text-white font-bold text-sm py-3 rounded-xl transition-all shadow-md mt-6"
              >
                Reserve Workspace
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Confirmation Overlay Modal */}
      {bookingConfirmed && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-gray-100 relative slide-bottom text-center">
            <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
              <AiOutlineCheckCircle />
            </div>
            
            <h3 className="text-2xl font-manrope font-extrabold text-black mb-1">Reservation Confirmed!</h3>
            <p className="text-gray-500 font-manrope text-sm mb-6">Your desk is locked in. Our team will contact you shortly.</p>

            {/* Ticket Details */}
            <div className="bg-slate-50 border border-slate-200/50 rounded-2xl p-5 text-left font-manrope text-xs space-y-3 mb-6 relative overflow-hidden">
              {/* Ticket cutouts */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2.5 w-5 h-5 bg-white rounded-full border-r border-slate-200/50" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2.5 w-5 h-5 bg-white rounded-full border-l border-slate-200/50" />

              <div className="flex justify-between font-bold text-gray-500 uppercase tracking-wide border-b border-dashed border-slate-200 pb-2 mb-2">
                <span>Booking Reference</span>
                <span className="text-[#f85a47]">{bookingRef}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Space Name:</span>
                <span className="font-bold text-black">{property.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Space Category:</span>
                <span className="font-bold text-black">{deskType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Start Date:</span>
                <span className="font-bold text-black">{startDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Duration:</span>
                <span className="font-bold text-black">{duration} Month(s)</span>
              </div>
              <div className="flex justify-between border-t border-slate-100 pt-2 font-bold text-sm">
                <span className="text-black">Paid Total:</span>
                <span className="text-text-orange">${finalTotal}</span>
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <button
                onClick={() => setBookingConfirmed(false)}
                className="w-full bg-black hover:bg-gray-800 text-white font-bold text-sm py-3 rounded-xl transition-all"
              >
                Close Receipt
              </button>
              <button
                onClick={() => router.push('/list')}
                className="w-full text-xs font-semibold text-gray-500 hover:text-black py-2"
              >
                Return to Workspace Listings
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
