
import React from 'react';

// Simplified/generic icons inspired by the services

export const LeonardoIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const PikaIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 5L16 12L8 19V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="2" y="3" width="20" height="18" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const RunwayIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 20L12 4L22 20H2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 12L7 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 12L17 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const MidjourneyIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.9 18.39C20.37 17.65 19.54 17.15 18.6 17H12.5C12.16 17 11.83 17.07 11.53 17.21L3.13 21.01C2.56 21.29 2.19 21.84 2.19 22.45V22.45C2.19 23.3 2.89 24 3.74 24H19.26C20.11 24 20.81 23.3 20.81 22.45V22.45C20.81 20.91 21.63 19.49 22.95 18.68L20.9 18.39Z" fill="currentColor" opacity="0.4"/>
        <path d="M3 17.81V7.75C3 6.13 4.34 4.79 5.96 4.79H18.04C19.66 4.79 21 6.13 21 7.75V11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const CustomGeneratorIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 8V12M12 12V16M12 12H16M12 12H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M5 3.55362C5 3.03376 5.40294 2.63082 5.9228 2.63082H18.0772C18.5971 2.63082 19 3.03376 19 3.55362V20.4464C19 20.9662 18.5971 21.3692 18.0772 21.3692H5.9228C5.40294 21.3692 5 20.9662 5 20.4464V3.55362Z" stroke="currentColor" strokeWidth="2"/>
    </svg>
);
