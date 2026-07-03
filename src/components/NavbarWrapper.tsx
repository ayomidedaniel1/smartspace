'use client';

import React from 'react';
import useSticky from '../hooks/useSticky';
import Navbar from './Navbar';

export default function NavbarWrapper() {
  const { isSticky } = useSticky();
  return <Navbar sticky={isSticky} />;
}
