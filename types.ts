// FIX: Import React to solve "Cannot find namespace 'React'" error on line 5.
import React from 'react';

export interface Generator {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  creditsUsed: number;
  creditsTotal: number;
  refreshTime: string;
  accountUrl?: string;
}

export type GenerationType = 'Image' | 'Video' | 'Text';
