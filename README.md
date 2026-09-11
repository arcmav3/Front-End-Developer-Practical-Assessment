# User Management - Front-End Practical Assessment

A responsive user management page built with HTML, CSS, Bootstrap 5, and vanilla JavaScript.

## How to Run

1. Download or clone the project files.
2. Keep `index.html`, `styles.css`, and `scripts.js` in the same folder.
3. Open `index.html` in a web browser.

No installation, build process, backend, or database is required. An internet connection is needed for Bootstrap 5 and Bootstrap Icons because they are loaded through CDN.

## Approach

I recreated the reference layout using Bootstrap 5 for common UI components and responsive behavior, with custom CSS to match the provided design more closely.

The user list uses mock data stored in JavaScript. The table is rendered dynamically so search, filters, pagination, and user actions can update the displayed data without reloading the page.

The page includes:

- Top navigation and sidebar navigation
- User search with selectable search fields
- Status, region, and division filters
- Pagination with 10 users per page
- Add and edit user modal
- Enable/disable user action
- Responsive sidebar for smaller screens
- Feedback messages after user actions

## Assumptions

- This is a front-end-only prototype, so user changes are kept in memory and reset when the page is refreshed.
- No authentication or permission handling is required.
- Navigation links are included for layout purposes and do not lead to separate pages.
- Mock user information is used instead of real user data.
- Bootstrap and Bootstrap Icons are loaded from a CDN.

## UI/UX Changes

I kept the overall structure and appearance close to the reference while making a few small usability improvements:

- Added responsive behavior for desktop, tablet, and mobile.
- Converted the sidebar into a collapsible menu on smaller screens.
- Added an empty-state message when no users match the search or filters.
- Added a modal for adding and editing users instead of navigating to another page.
- Added visual feedback when a user is enabled, disabled, added, or updated.
- Added horizontal scrolling to the user table on smaller screens so all columns remain accessible.
- Added a clear filters option to quickly reset the current search and filters.
