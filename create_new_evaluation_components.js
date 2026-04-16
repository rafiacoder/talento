/**
 * Talento Create New Evaluation Components
 * Reusable UI building blocks for the Create new evaluation screen.
 */
const CreateNewEvaluationComponents = (function() {
  'use strict';

  const Icons = {
    basicInformation: `<svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M7.25 2.25a1.9 1.9 0 0 0-1.9 1.9v11.7a1.9 1.9 0 0 0 1.9 1.9h5.5a1.9 1.9 0 0 0 1.9-1.9V4.15a1.9 1.9 0 0 0-1.9-1.9h-.54a2.2 2.2 0 0 0-4.42 0h-.54Zm1.8 1a1.05 1.05 0 1 1 0 2.1h1.9a1.05 1.05 0 1 1 0-2.1h-1.9Zm-.85 5a.7.7 0 0 1 .7-.7h2.9a.7.7 0 1 1 0 1.4H8.9a.7.7 0 0 1-.7-.7Zm0 3a.7.7 0 0 1 .7-.7h3.8a.7.7 0 1 1 0 1.4H8.9a.7.7 0 0 1-.7-.7Zm0 3a.7.7 0 0 1 .7-.7h2.2a.7.7 0 1 1 0 1.4H8.9a.7.7 0 0 1-.7-.7Z"/></svg>`,
    addEmployees: `<svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M7.25 4.2a2.45 2.45 0 1 1 0 4.9 2.45 2.45 0 0 1 0-4.9Zm6.4.35a.7.7 0 0 1 .7.7v1.8h1.8a.7.7 0 1 1 0 1.4h-1.8v1.8a.7.7 0 0 1-1.4 0v-1.8h-1.8a.7.7 0 1 1 0-1.4h1.8v-1.8a.7.7 0 0 1 .7-.7ZM4.1 13.8a3.9 3.9 0 0 1 6.3-1.02.7.7 0 0 1-.45 1.22H4.92c-.46 0-.72-.54-.42-.9Z"/><path d="M10.2 14.25a.7.7 0 0 1 .66-.48h3.39a1.4 1.4 0 0 1 1.28 1.96H10.1a.7.7 0 0 1-.66-.94Z"/></svg>`,
    evaluatorsSetup: `<svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M6.1 5.1a2.15 2.15 0 1 1 0 4.3 2.15 2.15 0 0 1 0-4.3Zm6.1.25a1.85 1.85 0 1 1 0 3.7 1.85 1.85 0 0 1 0-3.7ZM3.1 14a3.45 3.45 0 0 1 6-.98.7.7 0 0 1-.57 1.08H3.8A.7.7 0 0 1 3.1 14Zm7.1-.05a2.85 2.85 0 0 1 4.72-.86.7.7 0 0 1-.52 1.16H10.9a.7.7 0 0 1-.7-.3Zm5.25-6.35.27.78a.5.5 0 0 0 .32.31l.78.27a.5.5 0 0 1 0 .94l-.78.27a.5.5 0 0 0-.32.31l-.27.78a.5.5 0 0 1-.94 0l-.27-.78a.5.5 0 0 0-.31-.31l-.79-.27a.5.5 0 0 1 0-.94l.79-.27a.5.5 0 0 0 .31-.31l.27-.78a.5.5 0 0 1 .94 0Z"/></svg>`,
    reviewLaunch: `<svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M6.85 2.25A1.85 1.85 0 0 0 5 4.1v11.8c0 1.02.83 1.85 1.85 1.85h6.3A1.85 1.85 0 0 0 15 15.9V4.1a1.85 1.85 0 0 0-1.85-1.85h-.52a2.05 2.05 0 0 0-4.26 0h-.52Zm2 .95a.95.95 0 0 1 .95-.95h.4a.95.95 0 1 1 0 1.9h-.4a.95.95 0 0 1-.95-.95Zm4.03 5.08a.7.7 0 0 1 0 .99l-3.13 3.12a.7.7 0 0 1-.99 0l-1.64-1.63a.7.7 0 1 1 .99-.99l1.14 1.14 2.63-2.63a.7.7 0 0 1 .99 0Zm-4.68 6.2a.7.7 0 0 1 .7-.7h3.95a.7.7 0 0 1 0 1.4H8.9a.7.7 0 0 1-.7-.7Z"/></svg>`,
    info: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#8F64F7"/><path d="M12 10.2v5.1" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="7.2" r="1.1" fill="#ffffff"/></svg>`,
    calendar: `<svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M5.5 2.6a.7.7 0 0 1 .7.7v.75h7.6V3.3a.7.7 0 1 1 1.4 0v.75h.55A1.65 1.65 0 0 1 17.4 5.7v8.8a1.65 1.65 0 0 1-1.65 1.65h-11.5A1.65 1.65 0 0 1 2.6 14.5V5.7a1.65 1.65 0 0 1 1.65-1.65h.55V3.3a.7.7 0 0 1 .7-.7Zm-1.25 4.55v7.35c0 .14.11.25.25.25h11.5a.25.25 0 0 0 .25-.25V7.15H4.25Z"/></svg>`,
    chevronDown: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`,
    chevronLeft: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`,
    chevronRightAccent: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2CF7B3" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`
  };

  function getIcon(name) {
    return Icons[name] || '';
  }

  function PageHeader(config) {
    const title = config && config.title ? config.title : 'Create new evaluation';

    if (typeof PerformanceEvaluationComponents !== 'undefined' &&
      typeof PerformanceEvaluationComponents.PageHeader === 'function') {
      return PerformanceEvaluationComponents.PageHeader({
        title: title,
        actions: []
      });
    }

    return `
      <div class="pe-header-row">
        <h1 class="pe-title">${title}</h1>
        <div class="pe-header-actions"></div>
      </div>
    `;
  }

  function Stepper(config) {
    const steps = config && Array.isArray(config.steps) ? config.steps : [];

    return `
      <section class="ce-stepper-card">
        <div class="ce-stepper-grid">
          ${steps.map(function(step, index) {
            const status = step.status || 'upcoming';
            const isLast = index === steps.length - 1;
            const classes = [
              'ce-step-item',
              `ce-step-item--${status}`,
              isLast ? 'ce-step-item--last' : ''
            ].filter(Boolean).join(' ');

            return `
              <div class="${classes}">
                <span class="ce-step-icon">${getIcon(step.icon)}</span>
                <span class="ce-step-label">${step.label}</span>
              </div>
            `;
          }).join('')}
        </div>
      </section>
    `;
  }

  function Field(config) {
    const type = config && config.type ? config.type : 'text';
    const label = config && config.label ? config.label : '';
    const placeholder = config && config.placeholder ? config.placeholder : '';
    const value = config && typeof config.value === 'string' ? config.value : '';
    const required = config && config.required ? ' *' : '';
    const rows = config && config.rows ? config.rows : 3;

    let control = '';

    if (type === 'textarea') {
      control = `<textarea class="ce-field-control ce-field-control--textarea" rows="${rows}" placeholder="${placeholder}">${value}</textarea>`;
    } else if (type === 'date') {
      control = `
        <button type="button" class="ce-field-control ce-field-control--button ce-field-control--date ce-field-control--muted">
          <span class="ce-field-control__content">
            <span class="ce-field-control__lead">${Icons.calendar}</span>
            <span class="ce-field-control__value">${value || placeholder}</span>
          </span>
        </button>
      `;
    } else if (type === 'select') {
      control = `
        <button type="button" class="ce-field-control ce-field-control--button">
          <span class="ce-field-control__value">${value || placeholder}</span>
          <span class="ce-field-control__tail">${Icons.chevronDown}</span>
        </button>
      `;
    } else {
      control = `<input class="ce-field-control" type="text" value="${value}" placeholder="${placeholder}" />`;
    }

    return `
      <label class="ce-field">
        <span class="ce-field-label">${label}${required}</span>
        ${control}
      </label>
    `;
  }

  function FieldRow(config) {
    const fields = config && Array.isArray(config.fields) ? config.fields : [];

    return `
      <div class="ce-field-row">
        ${fields.map(Field).join('')}
      </div>
    `;
  }

  function InfoBanner(config) {
    const title = config && config.title ? config.title : '';
    const description = config && config.description ? config.description : '';

    return `
      <div class="ce-info-banner">
        <span class="ce-info-banner__icon">${Icons.info}</span>
        <div class="ce-info-banner__copy">
          <p class="ce-info-banner__title">${title}</p>
          <p class="ce-info-banner__text">${description}</p>
        </div>
      </div>
    `;
  }

  function SetupCard(config) {
    const title = config && config.title ? config.title : 'Setup your evaluation cycle';
    const banner = config && config.banner ? config.banner : {};
    const fields = config && Array.isArray(config.fields) ? config.fields : [];

    return `
      <section class="ce-panel-card">
        <div class="ce-panel-head">
          <h2 class="ce-panel-title">${title}</h2>
          ${InfoBanner(banner)}
        </div>
        <div class="ce-panel-form">
          ${fields.map(function(field) {
            if (field.layout === 'row') {
              return FieldRow(field);
            }
            return Field(field);
          }).join('')}
        </div>
      </section>
    `;
  }

  function FooterActions(config) {
    const backLabel = config && config.backLabel ? config.backLabel : 'Back';
    const nextLabel = config && config.nextLabel ? config.nextLabel : 'Next step';

    return `
      <div class="ce-footer-bar">
        <div class="ce-footer-actions">
          <button type="button" class="ce-footer-btn ce-footer-btn--ghost">
            ${Icons.chevronLeft}
            <span>${backLabel}</span>
          </button>
          <button type="button" class="ce-footer-btn ce-footer-btn--primary">
            <span>${nextLabel}</span>
            ${Icons.chevronRightAccent}
          </button>
        </div>
      </div>
    `;
  }

  return {
    Icons,
    PageHeader,
    Stepper,
    Field,
    FieldRow,
    SetupCard,
    FooterActions
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CreateNewEvaluationComponents;
}
