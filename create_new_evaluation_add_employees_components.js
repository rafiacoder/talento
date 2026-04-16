/**
 * Talento Create New Evaluation Add Employees Components
 * Reusable UI building blocks for the add employees step.
 */
const CreateNewEvaluationAddEmployeesComponents = (function() {
  'use strict';

  const FallbackIcons = {
    search: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A09AAB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
    filter: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="6" x2="13" y2="6"/><line x1="5" y1="12" x2="10" y2="12"/><line x1="5" y1="18" x2="15" y2="18"/><circle cx="16.5" cy="6" r="1.6"/><circle cx="13.5" cy="12" r="1.6"/><circle cx="18.5" cy="18" r="1.6"/></svg>`,
    close: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round"><path d="M6 6l12 12"/><path d="M18 6 6 18"/></svg>`,
    sort: `<svg width="12" height="12" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M7 5l3-3 3 3"/><path d="M10 2v7"/><path d="M13 15l-3 3-3-3"/><path d="M10 18v-7"/></svg>`
  };

  function getIcon(name) {
    if (typeof PerformanceEvaluationComponents !== 'undefined' &&
        PerformanceEvaluationComponents.Icons &&
        PerformanceEvaluationComponents.Icons[name]) {
      return PerformanceEvaluationComponents.Icons[name];
    }

    if (typeof CreateNewEvaluationComponents !== 'undefined' &&
        CreateNewEvaluationComponents.Icons &&
        CreateNewEvaluationComponents.Icons[name]) {
      return CreateNewEvaluationComponents.Icons[name];
    }

    return FallbackIcons[name] || '';
  }

  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function getInitials(name) {
    return String(name || '')
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map(function(part) { return part.charAt(0).toUpperCase(); })
      .join('') || 'EA';
  }

  function Avatar(employee, extraClass) {
    const classes = ['ae-avatar', extraClass || ''].filter(Boolean).join(' ');

    if (employee && employee.avatar) {
      return `<img class="${classes}" src="${escapeHtml(employee.avatar)}" alt="${escapeHtml(employee.name)}" />`;
    }

    return `<span class="${classes} ae-avatar--fallback">${escapeHtml(getInitials(employee && employee.name))}</span>`;
  }

  function SelectionChip(employee) {
    return `
      <button type="button" class="ae-chip" data-remove-selected="${escapeHtml(employee.id)}" aria-label="Remove ${escapeHtml(employee.name)}">
        ${Avatar(employee, 'ae-chip-avatar')}
        <span class="ae-chip-name">${escapeHtml(employee.name)}</span>
        <span class="ae-chip-remove">${getIcon('close')}</span>
      </button>
    `;
  }

  function SelectedEmployees(config) {
    const employees = config && Array.isArray(config.employees) ? config.employees : [];

    if (!employees.length) {
      return '';
    }

    return `
      <div class="ae-chip-list" aria-label="Selected employees">
        ${employees.map(SelectionChip).join('')}
      </div>
    `;
  }

  function SearchToolbar(config) {
    const placeholder = config && config.searchPlaceholder ? config.searchPlaceholder : 'Search';
    const value = config && config.searchValue ? config.searchValue : '';
    const filtersCount = config && typeof config.filtersCount === 'number' ? config.filtersCount : 0;

    return `
      <div class="ae-toolbar-row">
        <label class="search-box ae-search-box">
          ${getIcon('search')}
          <input type="search" value="${escapeHtml(value)}" placeholder="${escapeHtml(placeholder)}" data-employee-search />
        </label>
        <button type="button" class="filter-btn ae-filter-btn" data-employee-filter>
          ${getIcon('filter')}
          <span>Filters</span>
          <span class="ae-filter-count">${filtersCount}</span>
        </button>
      </div>
    `;
  }

  function SortLabel(text) {
    return `
      <span class="ae-sort-label">
        <span>${escapeHtml(text)}</span>
        ${getIcon('sort')}
      </span>
    `;
  }

  function EmployeeNameCell(employee) {
    return `
      <div class="ae-employee-cell">
        ${Avatar(employee)}
        <div class="ae-employee-copy">
          <span class="ae-employee-name">${escapeHtml(employee.name)}</span>
          <span class="ae-employee-role">${escapeHtml(employee.role)}</span>
        </div>
      </div>
    `;
  }

  function EmployeeRow(employee) {
    const checkedAttr = employee && employee.checked ? ' checked="checked"' : '';

    return `
      <tr data-employee-row="${escapeHtml(employee.id)}">
        <td>${EmployeeNameCell(employee)}</td>
        <td><span class="ae-manager-name">${escapeHtml(employee.manager)}</span></td>
        <td class="ae-check-cell">
          <input
            type="checkbox"
            class="ae-table-check"
            data-employee-check="${escapeHtml(employee.id)}"
            aria-label="Select ${escapeHtml(employee.name)}"
            ${checkedAttr}
          />
        </td>
      </tr>
    `;
  }

  function EmptyState(config) {
    const title = config && config.title ? config.title : 'No employees found';
    const description = config && config.description ? config.description : 'Try another search term or clear the selected filters.';

    return `
      <div class="ae-empty-state">
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(description)}</p>
      </div>
    `;
  }

  function EmployeeTable(config) {
    const rows = config && Array.isArray(config.rows) ? config.rows : [];
    const selectAllChecked = !!(config && config.selectAll && config.selectAll.checked);
    const checkedAttr = selectAllChecked ? ' checked="checked"' : '';

    if (!rows.length) {
      return EmptyState({
        title: 'No employees match your search',
        description: 'Update the search input to find another employee.'
      });
    }

    return `
      <div class="ae-table-shell">
        <div class="table-scroll-wrap">
          <table class="data-table ae-data-table">
            <thead>
              <tr>
                <th class="ae-col-name">${SortLabel('Employee name')}</th>
                <th class="ae-col-manager">${SortLabel('Direct manager')}</th>
                <th class="ae-col-select">
                  <label class="ae-select-all">
                    <span>Mark all</span>
                    <input type="checkbox" class="ae-table-check" data-employee-select-all aria-label="Select all visible employees"${checkedAttr} />
                  </label>
                </th>
              </tr>
            </thead>
            <tbody>
              ${rows.map(EmployeeRow).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  function SelectionCard(config) {
    const title = config && config.title ? config.title : 'Add employees to be evaluated';
    const description = config && config.description ? config.description : '';
    const rows = config && Array.isArray(config.rows) ? config.rows : [];
    const selectedEmployees = config && Array.isArray(config.selectedEmployees) ? config.selectedEmployees : [];

    return `
      <section class="ae-panel-card">
        <div class="ae-panel-head">
          <h2 class="ae-panel-title">${escapeHtml(title)}</h2>
          <p class="ae-panel-text">${escapeHtml(description)}</p>
        </div>
        <div class="ae-panel-body">
          ${SearchToolbar(config)}
          ${SelectedEmployees({ employees: selectedEmployees })}
          ${EmployeeTable({
            rows: rows,
            selectAll: config && config.selectAll ? config.selectAll : { checked: false }
          })}
        </div>
      </section>
    `;
  }

  return {
    SelectionChip,
    SelectedEmployees,
    SearchToolbar,
    EmployeeTable,
    SelectionCard
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CreateNewEvaluationAddEmployeesComponents;
}
