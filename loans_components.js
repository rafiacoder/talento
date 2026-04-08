/**
 * Talento Loans Module Components
 * File: loans_components.js
 * Reusable UI components for the Loans module
 */
const LoansComponents = (function() {
  'use strict';

  // ═══════════════════════════════════════════════════════════════════════════
  // ICONS - SVG icon library
  // ═══════════════════════════════════════════════════════════════════════════
  const Icons = {
    search: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
    filter: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>`,
    download: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
    plus: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
    moreVertical: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="2.5"/><circle cx="12" cy="12" r="2.5"/><circle cx="12" cy="19" r="2.5"/></svg>`,
    trendUp: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
    trendDown: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/></svg>`,
    gear: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
    wallet: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/></svg>`,
    coins: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18"/><path d="M7 6h1v4"/><path d="m16.71 13.88.7.71-2.82 2.82"/></svg>`,
    fileText: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>`,
    creditCard: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>`,
    dollarSign: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
    alertCircle: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
    arrowRight: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // LOAN SUMMARY CARD - Reusable component for summary metrics
  // ═══════════════════════════════════════════════════════════════════════════
  function LoanSummaryCard(config) {
    const {
      icon,
      label,
      value,
      change = null, // e.g., "+4.2% Up from last month"
      changeDirection = 'up', // 'up' | 'down' | 'neutral'
      iconColor = '#1e1033',
      linkText = null,
      linkHref = '#',
      linkIcon = Icons.arrowRight
    } = config;

    // Trend icon based on direction
    const trendIcon = changeDirection === 'down' ? Icons.trendDown : 
                      changeDirection === 'up' ? Icons.trendUp : '';

    // Change color based on direction
    const changeColor = changeDirection === 'down' ? '#DC2626' : 
                       changeDirection === 'up' ? '#16A34A' : '#787085';

    const changeHTML = change ? `
      <div style="display:flex;align-items:center;gap:4px;margin-top:6px;">
        <span style="color:${changeColor};display:inline-flex;align-items:center;">
          ${trendIcon}
        </span>
        <span style="font-size:12px;color:#787085;line-height:1.3;">${change}</span>
      </div>
    ` : '';

    const linkHTML = linkText ? `
      <a href="${linkHref}" style="display:inline-flex;align-items:center;gap:4px;margin-top:6px;font-size:12px;color:#1e1033;text-decoration:none;transition:opacity 150ms;">
        <span>${linkText}</span>
        ${linkIcon}
      </a>
    ` : '';

    return `
      <div class="loan-summary-card">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;">
          <span style="display:inline-flex;align-items:center;justify-content:center;color:${iconColor};">
            ${icon}
          </span>
          <span style="font-size:14px;color:#787085;line-height:1.4;">${label}</span>
        </div>
        <div style="font-size:22px;font-weight:500;color:#1e1033;line-height:1.3;">${value}</div>
        ${changeHTML}
        ${linkHTML}
      </div>
    `;
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // PAGE HEADER
  // Renders: Title + Quick action buttons (Loans summary, Loan installments, etc.)
  // ═══════════════════════════════════════════════════════════════════════════
  function PageHeader(config) {
    const {
      title = 'Loans',
      actions = [] // Array of { label, href, icon }
    } = config;

    const actionsHTML = actions.map(action => `
      <a href="${action.href || '#'}" class="loans-action-btn" style="text-decoration:none;">
        ${action.icon || ''}
        <span>${action.label}</span>
      </a>
    `).join('');

    return `
      <div class="loans-page-header">
        <h1 class="loans-page-title">${title}</h1>
        <div class="loans-header-actions">
          ${actionsHTML}
        </div>
      </div>
    `;
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // SEARCH & FILTER BAR
  // Renders: Search input + Filters button + Export + Create new
  // ═══════════════════════════════════════════════════════════════════════════
  function SearchFilterBar(config) {
    const {
      searchPlaceholder = 'Search',
      showFilters = true,
      filterCount = 0,
      showExport = true,
      exportText = 'Export all',
      showCreateNew = true,
      createNewText = 'Create new loan'
    } = config;

    const filtersHTML = showFilters ? `
      <button class="loans-filter-btn">
        ${Icons.filter}
        Filters
        ${filterCount > 0 ? `<span style="color:#787085;font-size:13px;margin-left:2px;">${filterCount}</span>` : ''}
      </button>
    ` : '';

    const exportHTML = showExport ? `
      <button class="loans-toolbar-btn">
        ${exportText}
        ${Icons.download}
      </button>
    ` : '';

    const createNewHTML = showCreateNew ? `
      <button class="loans-create-btn">
        ${createNewText}
        ${Icons.plus}
      </button>
    ` : '';

    return `
      <div class="loans-search-filter-bar">
        <div class="loans-search-input-wrap">
          ${Icons.search}
          <input type="text" placeholder="${searchPlaceholder}" />
        </div>
        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
          ${filtersHTML}
          ${exportHTML}
          ${createNewHTML}
        </div>
      </div>
    `;
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // LOAN TABLE ROW
  // Renders a single loan row with all columns
  // ═══════════════════════════════════════════════════════════════════════════
  function LoanTableRow(config) {
    const {
      code,
      codeSubtext = '',
      employeeName,
      employeeAvatar = '',
      nextInstallment = 'No date',
      status = 'active',
      paidAmount = 'SAR 0',
      paidPercentage = '0',
      totalAmount = 'SAR 0',
      remainingAmount = 'SAR 0',
      remainingPercentage = '0'
    } = config;

    // Status badge configuration
    const statusConfig = {
      active: { bg: '#EDF8F3', text: '#15803D', label: 'Active' },
      paid: { bg: '#E8E7EB', text: '#4B405C', label: 'Paid' },
      pending: { bg: '#FEF3C7', text: '#B45309', label: 'Pending' },
      rejected: { bg: '#F9F1F3', text: '#DC2626', label: 'Rejected' }
    };

    const statusStyle = statusConfig[status] || statusConfig.active;

    // Progress bar color based on percentage
    const paidColor = parseInt(paidPercentage) >= 75 ? '#7C3AED' : 
                     parseInt(paidPercentage) >= 50 ? '#3B82F6' : 
                     parseInt(paidPercentage) >= 25 ? '#EAB308' : '#DC2626';

    const remainingColor = parseInt(remainingPercentage) >= 75 ? '#EAB308' :
                          parseInt(remainingPercentage) >= 50 ? '#F59E0B' :
                          parseInt(remainingPercentage) >= 25 ? '#F97316' : '#DC2626';

    return `
      <tr class="loan-table-row">
        <!-- Code -->
        <td style="padding:16px 12px;">
          <div style="display:flex;flex-direction:column;gap:2px;">
            <span style="font-size:14px;color:#1e1033;font-weight:500;line-height:1.4;">${code}</span>
            ${codeSubtext ? `<span style="font-size:12px;color:#787085;line-height:1.3;">${codeSubtext}</span>` : ''}
          </div>
        </td>
        
        <!-- Employee name -->
        <td style="padding:16px 12px;">
          <div style="display:flex;align-items:center;gap:8px;">
            ${employeeAvatar ? `<img src="${employeeAvatar}" alt="${employeeName}" style="width:28px;height:28px;border-radius:50%;object-fit:cover;flex-shrink:0;" />` : ''}
            <span style="font-size:14px;color:#1e1033;line-height:1.4;">${employeeName}</span>
          </div>
        </td>
        
        <!-- Next installment -->
        <td style="padding:16px 12px;">
          <span style="font-size:14px;color:#4b405c;line-height:1.4;">${nextInstallment}</span>
        </td>
        
        <!-- Status -->
        <td style="padding:16px 12px;">
          <span class="status-badge" style="background:${statusStyle.bg};color:${statusStyle.text};font-size:12px;padding:4px 10px;border-radius:100px;font-weight:500;display:inline-block;line-height:1.5;">
            ${statusStyle.label}
          </span>
        </td>
        
        <!-- Paid amount -->
        <td style="padding:16px 12px;">
          <div style="display:flex;flex-direction:column;gap:6px;min-width:120px;">
            <div style="display:flex;align-items:baseline;gap:4px;">
              <span style="font-size:14px;color:#1e1033;font-weight:500;line-height:1.4;">${paidAmount}</span>
              <span style="font-size:12px;color:#787085;line-height:1.3;">${paidPercentage}%</span>
            </div>
            <div style="width:100%;height:4px;background:#E8E7EB;border-radius:2px;overflow:hidden;">
              <div style="width:${paidPercentage}%;height:100%;background:${paidColor};border-radius:2px;"></div>
            </div>
          </div>
        </td>
        
        <!-- Total amount -->
        <td style="padding:16px 12px;">
          <span style="font-size:14px;color:#1e1033;font-weight:500;line-height:1.4;">${totalAmount}</span>
        </td>
        
        <!-- Remaining amount -->
        <td style="padding:16px 12px;">
          <div style="display:flex;flex-direction:column;gap:6px;min-width:120px;">
            <div style="display:flex;align-items:baseline;gap:4px;">
              <span style="font-size:14px;color:#1e1033;font-weight:500;line-height:1.4;">${remainingAmount}</span>
              <span style="font-size:12px;color:#787085;line-height:1.3;">${remainingPercentage}%</span>
            </div>
            <div style="width:100%;height:4px;background:#E8E7EB;border-radius:2px;overflow:hidden;">
              <div style="width:${remainingPercentage}%;height:100%;background:${remainingColor};border-radius:2px;"></div>
            </div>
          </div>
        </td>
        
        <!-- Actions -->
        <td style="padding:16px 12px;text-align:right;">
          <button class="loan-actions-btn" style="background:transparent;border:none;cursor:pointer;color:#787085;padding:4px;display:inline-flex;align-items:center;justify-content:center;border-radius:4px;transition:background 150ms;">
            ${Icons.moreVertical}
          </button>
        </td>
      </tr>
    `;
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // PUBLIC API
  // ═══════════════════════════════════════════════════════════════════════════
  return {
    Icons,
    LoanSummaryCard,
    PageHeader,
    SearchFilterBar,
    LoanTableRow
  };
})();
