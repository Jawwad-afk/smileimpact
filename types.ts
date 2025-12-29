import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

export interface FeatureItem {
  title: string;
  description: string;
  image: string;
  type: 'chart' | 'list' | 'video';
}

export interface BenefitTag {
  label: string;
  color: string;
  rotation: number;
}

export interface TestimonialItem {
  id: number;
  type: 'image' | 'quote' | 'image-with-doodle';
  content?: string;
  author?: string;
  role?: string;
  imageUrl?: string;
  doodle?: 'star' | 'squiggle' | 'flower' | 'circle';
  span?: number; // Grid column span
}