import { writable } from 'svelte/store';

const scopeStore = writable({
  ADDITIONAL_REQUIREMENTS: '',
  AS_BASELINE: '',
  CONFORMANCE_TARGET: 'AA',
  SITE_NAME: '',
  WCAG_VERSION: '2.1',
  WEBSITE_SCOPE: ''
});

export default scopeStore;
