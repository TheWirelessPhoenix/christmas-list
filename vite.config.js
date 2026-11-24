import { defineConfig } from 'vite'

// Relative asset URLs, so the site works at a project-page subpath
// (https://<user>.github.io/christmas-list/) as well as at a domain root.
export default defineConfig({
  base: './',
})
