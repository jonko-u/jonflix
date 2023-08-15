"use client";
import '@/styles/globals.css';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getSession, signOut } from 'next-auth/react';

export default function Home() {

  const router = useRouter();
  const targetPageURL='/auth';
  const redirectionDelay = 3000; // 3 seconds

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push(targetPageURL);
    }, redirectionDelay);

    return () => {
      clearTimeout(timer);
    };
  }, [router]);

  return (
    <div>
      Redirecting...
    </div>
  );
};