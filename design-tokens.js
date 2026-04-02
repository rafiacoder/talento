/**
 * Talento Design Tokens
 * Centralized design system constants for consistent styling across all modules
 */
const DesignTokens = (function() {
  'use strict';

  return {
    // ═══════════════════════════════════════════════════════════════════════════
    // TYPOGRAPHY
    // ═══════════════════════════════════════════════════════════════════════════
    fonts: {
      primary: "'Alexandria', Helvetica, sans-serif"
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // COLORS
    // ═══════════════════════════════════════════════════════════════════════════
    colors: {
      // Primary
      primary: '#1E1033',
      primaryHover: '#2a1745',
      accent: '#2CF7B3',

      // Background
      bgPrimary: '#FFFFFF',
      bgSecondary: '#F6F5F7',
      bgTertiary: '#E7E4E9',
      
      // Active states
      sidebarActive: '#E7E4E9',
      tableHeaderBg: '#F6F5F7',
      
      // Text
      textPrimary: '#1E1033',
      textSecondary: '#4B405C',
      textMuted: '#787085',
      textPlaceholder: '#A09AAB',
      
      // Borders
      borderPrimary: '#E8E7EB',
      borderSecondary: '#F0EEF6',
      
      // Badge backgrounds
      badgeBg: '#E8E7EB',
      badgeApproved: '#D7FFE7',
      badgeApprovedText: '#15803D',
      badgeReview: '#FEF3C7',
      badgeReviewText: '#B45309',
      badgePending: '#F3F4F6',
      badgePendingText: '#6B7280',
      badgeRejected: '#FEE2E2',
      badgeRejectedText: '#DC2626',
      
      // Status colors
      statusSuccess: '#16A34A',
      statusWarning: '#F59E0B',
      statusError: '#DC2626',
      statusInfo: '#3B82F6',
      
      // Hover states
      hoverLight: 'rgba(236, 233, 239, 0.55)',
      hoverMedium: '#ECE9EF',
      hoverDark: '#F5F3FB'
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SPACING
    // ═══════════════════════════════════════════════════════════════════════════
    spacing: {
      xs: '4px',
      sm: '8px',
      md: '12px',
      lg: '16px',
      xl: '20px',
      xxl: '24px'
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // BORDER RADIUS
    // ═══════════════════════════════════════════════════════════════════════════
    borderRadius: {
      xs: '4px',
      sm: '6px',
      md: '8px',
      lg: '16px',
      xl: '20px',
      pill: '100px',
      full: '999px'
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // BADGE SPECIFICATIONS
    // ═══════════════════════════════════════════════════════════════════════════
    badge: {
      borderRadius: '100px',
      fontSize: '12px',
      fontSizeSmall: '11px',
      height: '22px',
      padding: '0 10px',
      paddingSmall: '0 8px'
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // FONT SIZES
    // ═══════════════════════════════════════════════════════════════════════════
    fontSize: {
      xs: '10px',
      sm: '11px',
      base: '12px',
      md: '13px',
      lg: '15px',
      xl: '22px'
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // TRANSITIONS
    // ═══════════════════════════════════════════════════════════════════════════
    transition: {
      fast: '120ms',
      normal: '150ms',
      slow: '300ms'
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SHADOWS
    // ═══════════════════════════════════════════════════════════════════════════
    shadows: {
      sm: '0 0.5px 1px rgba(30, 16, 51, 0.12)',
      md: '0 0.5px 1px rgba(30, 16, 51, 0.15)',
      lg: '0 4px 12px rgba(30, 16, 51, 0.25)',
      inset: 'inset -3px -4px 4px #E6E4E9'
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // Z-INDEX
    // ═══════════════════════════════════════════════════════════════════════════
    zIndex: {
      overlay: 30,
      sidebar: 40,
      modal: 50,
      tooltip: 60
    }
  };
})();

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DesignTokens;
}
