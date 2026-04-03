# Table & Badge Standardization Guide

## Overview
This document describes the standardization applied to ensure consistent table and badge styling across all modules in the Talento HR platform.

## Changes Made

### 1. Standardized Table Component (shared-styles.css)
Created reusable table wrapper classes that ALL pages should use:

```html
<div class="table-container">
  <div class="table-scroll-wrap">
    <table class="data-table">
      <!-- Table content -->
    </table>
  </div>
</div>
```

**Key Features:**
- `.table-container` - Provides **rounded corners (12px border-radius)** and border
- `.table-scroll-wrap` - Handles horizontal scrolling on small screens
- `.data-table` - Standardized table styling with proper headers and rows
- Consistent header background: `#F6F5F7`
- Hover states on rows: `#faf9fc`
- Proper padding and borders throughout

### 2. Standardized Badge Classes (shared-styles.css)
All badges now follow consistent styling with:
- Border-radius: `100px` (pill shape)
- Font-size: `12px`
- Height: `22px`
- Padding: `0 10px`

**Available Badge Classes:**

#### Leave Module Badges
- `.badge-approved` - Green (#D7FFE7 bg, #15803d text)
- `.badge-review` - Yellow (#fef3c7 bg, #b45309 text)
- `.badge-pending` - Gray (#f3f4f6 bg, #6b7280 text)
- `.badge-rejected` - Red (#fee2e2 bg, #dc2626 text)
- `.badge-default` - Light (#F6F5F7 bg, #4b405c text)

#### Business Missions Badges
- `.badge-done` - Green (#D7FFE7 bg, #16a34a text)
- `.badge-need-to-pay` - Yellow (#fef3c7 bg, #b45309 text)
- `.badge-personal` - Gray (#f3f4f6 bg, #6b7280 text)
- `.badge-business-trip` - Light blue (#eef2ff bg, #4B405C text)
- `.badge-leave` - Standard (#E8E7EB bg, #4b405c text)
- `.badge-business-mission` - Standard (#E8E7EB bg, #4b405c text)

#### Generic Badges
- `.badge-type` - For types/categories (#E8E7EB bg, #4B405C text)
- `.tag-badge` - For tags (#eef2ff bg, #4B405C text)

### 3. Files Updated

#### air-tickets.html
**Before:** 
- Custom `.air-tickets-table` class
- Custom badge styles
- No rounded corners on table

**After:**
- Uses `.table-container` > `.table-scroll-wrap` > `.data-table`
- Uses shared badge classes from `shared-styles.css`
- **Table now has rounded corners** ✅
- Removed duplicate CSS

#### business-missions-trip.html
**Before:**
- Custom `.missions-table` class
- Custom badge definitions
- No rounded corners on table

**After:**
- Uses `.table-container` > `.table-scroll-wrap` > `.data-table`
- Uses shared badge classes from `shared-styles.css`
- **Table now has rounded corners** ✅
- Removed all custom table and badge CSS

#### shared-styles.css
**Added:**
- `.table-container` - Rounded corner wrapper (NEW)
- `.table-scroll-wrap` - Horizontal scroll wrapper (NEW)
- `.data-table` - Standardized table class (NEW)
- `.badge-done`, `.badge-need-to-pay` (NEW)
- `.badge-personal`, `.badge-business-trip` (NEW)
- `.badge-leave`, `.badge-business-mission` (NEW)

## Design Specifications (from design-tokens.js)

### Colors
- Active sidebar: `#E7E4E9`
- Table header: `#F6F5F7`
- Badge background: `#E8E7EB`
- Border color: `#E8E7EB`

### Typography
- Font family: `'Alexandria', Helvetica, sans-serif`
- Badge font size: `12px`

### Spacing & Borders
- Badge border-radius: `100px` (pill shape)
- Table container border-radius: `12px`
- Standard transitions: `150ms`

## Usage Guidelines

### For New Tables
Always use the standardized structure:

```html
<div class="table-container">
  <div class="table-scroll-wrap">
    <table class="data-table">
      <thead>
        <tr>
          <th>Column Name
            <svg class="sort-icon" width="14" height="14">...</svg>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Data</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
```

### For New Badges
Use existing badge classes instead of creating custom ones:

```html
<!-- DO THIS ✅ -->
<span class="badge-done">Done</span>
<span class="badge-need-to-pay">Need to pay</span>

<!-- DON'T DO THIS ❌ -->
<span style="background: #D7FFE7; color: #16a34a; ...">Done</span>
```

## Benefits

1. **Consistency** - All tables look identical across modules
2. **Maintainability** - Single source of truth for styling
3. **Scalability** - Easy to add new pages using existing components
4. **Performance** - Reduced CSS duplication
5. **Responsiveness** - Built-in horizontal scrolling for small screens

## Next Steps

When creating new pages:
1. Use `.table-container` wrapper for ALL tables
2. Use `.data-table` for the table element
3. Use shared badge classes from `shared-styles.css`
4. Never create custom table or badge CSS unless absolutely necessary
5. If new badge variants are needed, add them to `shared-styles.css`

## Files Reference

- **shared-styles.css** - Source of truth for all shared styles
- **design-tokens.js** - Design system specifications
- **air-tickets.html** - Example implementation
- **business-missions-trip.html** - Example implementation
- **leave.html** - Original reference implementation
