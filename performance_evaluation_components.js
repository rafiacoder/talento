/**
 * Talento Performance Evaluation Components
 * Reusable UI building blocks for the Performance evaluation screen.
 */
const PerformanceEvaluationComponents = (function() {
  'use strict';

  const Icons = {
    allAppraisals: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="7" x2="10" y2="7"/><line x1="14" y1="7" x2="20" y2="7"/><polyline points="8 4 11 7 8 10"/><line x1="20" y1="17" x2="14" y2="17"/><line x1="10" y1="17" x2="4" y2="17"/><polyline points="16 14 13 17 16 20"/></svg>`,
    activeStatus: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.2v5.1l3.2 1.9"/></svg>`,
    pencil: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/></svg>`,
    completedStatus: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="3"/><polyline points="8 12 11 15 16 9"/></svg>`,
    search: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A09AAB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
    filter: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="6" x2="13" y2="6"/><line x1="5" y1="12" x2="10" y2="12"/><line x1="5" y1="18" x2="15" y2="18"/><circle cx="16.5" cy="6" r="1.6"/><circle cx="13.5" cy="12" r="1.6"/><circle cx="18.5" cy="18" r="1.6"/></svg>`,
    arrowUpRight: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7"/><path d="M9 7h8v8"/></svg>`,
    download: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
    plus: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
    moreVertical: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/></svg>`
  };

  const StatusConfig = {
    draft: { label: 'Draft', className: 'badge-pending pe-status-badge' },
    active: { label: 'Active', className: 'badge-approved pe-status-badge' },
    completed: { label: 'Completed', className: 'pe-status-badge pe-status-badge--completed' }
  };

  function getIcon(name) {
    return Icons[name] || '';
  }

  function HeaderButton(config) {
    const text = config && config.text ? config.text : '';
    const icon = config && config.icon ? getIcon(config.icon) : '';
    const action = config && config.action ? config.action : '';
    const extraClass = config && config.className ? config.className : '';
    const classes = ['toolbar-btn', 'pe-toolbar-btn', extraClass].filter(Boolean).join(' ');

    return `
      <button type="button" class="${classes}"${action ? ` data-header-action="${action}"` : ''}>
        <span>${text}</span>
        ${icon}
      </button>
    `;
  }

  function PageHeader(config) {
    const title = config && config.title ? config.title : 'Performance evaluation';
    const actions = config && Array.isArray(config.actions) ? config.actions : [];

    return `
      <div class="pe-header-row">
        <h1 class="pe-title">${title}</h1>
        <div class="pe-header-actions">
          ${actions.map(HeaderButton).join('')}
        </div>
      </div>
    `;
  }

  function AppraisalTabs(config) {
    const tabs = config && Array.isArray(config.tabs) ? config.tabs : [];
    const activeTab = config && config.activeTab ? config.activeTab : 'all';

    return `
      <div class="pe-tabs-bar">
        ${tabs.map(function(tab) {
          const isActive = tab.id === activeTab;
          return `
            <button
              type="button"
              class="pe-tab${isActive ? ' active' : ''}"
              data-evaluation-tab="${tab.id}"
            >
              ${getIcon(tab.icon)}
              <span>${tab.label}</span>
            </button>
          `;
        }).join('')}
      </div>
    `;
  }

  function SearchToolbar(config) {
    const placeholder = config && config.searchPlaceholder ? config.searchPlaceholder : 'Search';
    const value = config && config.searchValue ? config.searchValue : '';
    const filtersCount = config && typeof config.filtersCount === 'number' ? config.filtersCount : 0;

    return `
      <div class="pe-toolbar-row">
        <label class="search-box pe-search-box">
          ${Icons.search}
          <input type="search" value="${value}" placeholder="${placeholder}" data-evaluation-search />
        </label>
        <button type="button" class="filter-btn pe-filter-btn" data-evaluation-filter>
          ${Icons.filter}
          <span>Filters</span>
          <span class="pe-filter-count">${filtersCount}</span>
        </button>
      </div>
    `;
  }

  function StatusBadge(status) {
    const normalized = String(status || 'draft').toLowerCase();
    const ui = StatusConfig[normalized] || StatusConfig.draft;
    return `<span class="${ui.className}">${ui.label}</span>`;
  }

  function ParticipantsCell(config) {
    const current = config && typeof config.current === 'number' ? config.current : 0;
    const total = config && typeof config.total === 'number' ? config.total : null;
    const percent = config && typeof config.percent === 'number' ? config.percent : 0;
    const safePercent = Math.max(0, Math.min(100, percent));
    const countLabel = total !== null ? `${current}/${total}` : String(current);

    return `
      <div class="pe-participants-cell">
        <div class="pe-participants-meta">
          <span class="pe-participants-count">${countLabel}</span>
          <span class="pe-participants-percent">${safePercent}%</span>
        </div>
        <div class="pe-progress-track">
          <div class="pe-progress-fill" style="width:${safePercent}%;"></div>
        </div>
      </div>
    `;
  }

  function RowActionGroup(config) {
    const label = config && config.label ? config.label : 'View';
    const variant = config && config.variant ? config.variant : 'primary';
    const iconName = config && config.icon ? config.icon : (variant === 'primary' ? 'arrowUpRight' : 'pencil');
    const buttonClass = variant === 'secondary'
      ? 'pe-row-action-btn pe-row-action-btn--secondary'
      : 'pe-row-action-btn pe-row-action-btn--primary';

    return `
      <div class="pe-row-actions">
        <button type="button" class="${buttonClass}">
          <span>${label}</span>
          ${getIcon(iconName)}
        </button>
        <button type="button" class="pe-more-btn" aria-label="More actions">
          ${Icons.moreVertical}
        </button>
      </div>
    `;
  }

  function EvaluationRow(row) {
    return `
      <tr>
        <td class="pe-checkbox-cell">
          <input type="checkbox" class="table-checkbox" data-evaluation-row-check aria-label="Select evaluation ${row.name}" />
        </td>
        <td><span class="pe-name">${row.name}</span></td>
        <td>${StatusBadge(row.status)}</td>
        <td>${ParticipantsCell(row.participants)}</td>
        <td>${row.evaluationFrom}</td>
        <td>${row.evaluationTo}</td>
        <td><span class="pe-frequency">${row.frequency}</span></td>
        <td>${RowActionGroup(row.action)}</td>
      </tr>
    `;
  }

  function EmptyState(config) {
    const title = config && config.title ? config.title : 'No evaluations found';
    const description = config && config.description ? config.description : 'Try adjusting your search or selected tab.';

    return `
      <div class="pe-empty-state">
        <h2>${title}</h2>
        <p>${description}</p>
      </div>
    `;
  }

  function EvaluationTable(config) {
    const columns = config && Array.isArray(config.columns) ? config.columns : [];
    const rows = config && Array.isArray(config.rows) ? config.rows : [];

    if (!rows.length) {
      return EmptyState({
        title: 'No matching evaluations',
        description: 'There are no evaluations that match the current tab or search term.'
      });
    }

    return `
      <div class="table-container pe-table-container">
        <div class="table-scroll-wrap">
          <table class="data-table pe-data-table">
            <thead>
              <tr>
                ${columns.map(function(column) {
                  const width = column.width ? ` style="width:${column.width};"` : '';
                  if (column.type === 'checkbox') {
                    return `
                      <th${width} class="pe-checkbox-head">
                        <input type="checkbox" class="table-checkbox" data-evaluation-select-all aria-label="Select all evaluations" />
                      </th>
                    `;
                  }
                  return `<th${width}>${column.label}</th>`;
                }).join('')}
              </tr>
            </thead>
            <tbody>
              ${rows.map(EvaluationRow).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  return {
    Icons,
    PageHeader,
    AppraisalTabs,
    SearchToolbar,
    EvaluationTable,
    StatusBadge,
    ParticipantsCell,
    RowActionGroup
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PerformanceEvaluationComponents;
}
