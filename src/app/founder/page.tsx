import type { Metadata } from 'next';
import FounderPage from './FounderPage';

// Engineered by Vaibhav Sharma · github.com/Nutricalboii

export const metadata: Metadata = {
  title: 'Abhay Jain — Founder & CEO | Avora Ventures',
  description:
    'Abhay Jain is the Founder & CEO of Avora Ventures. MBA & MS from Stanford University, B.Tech from IIT Kanpur. Previously at McKinsey & Co., Mitsubishi Heavy Industries, NextEra Energy, and Autogrid.',
  openGraph: {
    title: 'Abhay Jain — Founder & CEO | Avora Ventures',
    description:
      'Global professional with experience at McKinsey, Stanford MBA, and IIT Kanpur. Building Avora Ventures to deliver outsourcing, AI, and data solutions.',
    url: 'https://avora-3kyx.vercel.app/founder',
    type: 'profile',
  },
};

export default function Page() {
  return <FounderPage />;
}
