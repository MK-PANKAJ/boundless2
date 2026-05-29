/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
        "inverse-surface": "#30312e",
        "surface-bright": "#fbf9f4",
        "on-tertiary-fixed-variant": "#5e411d",
        "inverse-primary": "#b4cdb8",
        "surface-dim": "#dbdad5",
        "surface": "#fbf9f4",
        "on-primary-fixed-variant": "#364c3c",
        "primary-fixed": "#d0e9d4",
        "error": "#ba1a1a",
        "on-surface": "#1b1c19",
        "on-tertiary-container": "#b18c61",
        "surface-variant": "#e4e2dd",
        "surface-container-low": "#f5f3ee",
        "outline-variant": "#c3c8c1",
        "on-error-container": "#93000a",
        "on-secondary": "#ffffff",
        "background": "#fbf9f4",
        "inverse-on-surface": "#f2f1ec",
        "primary-container": "#1b3022",
        "tertiary-container": "#3f2604",
        "on-error": "#ffffff",
        "on-primary-fixed": "#0b2013",
        "secondary-fixed-dim": "#ffb68a",
        "on-primary-container": "#819986",
        "primary": "#061b0e",
        "surface-container-highest": "#e4e2dd",
        "tertiary-fixed-dim": "#e9bf90",
        "secondary": "#944a10",
        "surface-container-lowest": "#ffffff",
        "outline": "#737973",
        "surface-container": "#f0eee9",
        "on-secondary-fixed": "#321300",
        "on-tertiary-fixed": "#2b1700",
        "surface-tint": "#4d6453",
        "on-secondary-container": "#753500",
        "primary-fixed-dim": "#b4cdb8",
        "error-container": "#ffdad6",
        "on-primary": "#ffffff",
        "on-background": "#1b1c19",
        "tertiary": "#241300",
        "on-secondary-fixed-variant": "#743500",
        "secondary-fixed": "#ffdbc8",
        "on-tertiary": "#ffffff",
        "tertiary-fixed": "#ffddb9",
        "secondary-container": "#ff9e60",
        "on-surface-variant": "#434843",
        "surface-container-high": "#eae8e3"
      },
      "borderRadius": {
        "DEFAULT": "1rem",
        "lg": "2rem",
        "xl": "3rem",
        "full": "9999px"
      },
      "spacing": {
        "base": "8px",
        "lg": "48px",
        "sm": "12px",
        "xs": "4px",
        "md": "24px",
        "xl": "80px",
        "container-max": "1280px",
        "gutter": "24px"
      },
      "fontFamily": {
        "subheadline-script": ["bricolageGrotesque", "cursive"],
        "headline-lg": ["anybody", "sans-serif"],
        "body-lg": ["beVietnamPro", "sans-serif"],
        "body-md": ["beVietnamPro", "sans-serif"],
        "label-caps": ["anybody", "sans-serif"],
        "headline-lg-mobile": ["anybody", "sans-serif"],
        "display-hero": ["anybody", "sans-serif"]
      },
      "fontSize": {
        "subheadline-script": ["24px", { "lineHeight": "32px", "fontWeight": "400" }],
        "headline-lg": ["48px", { "lineHeight": "52px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
        "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
        "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
        "label-caps": ["12px", { "lineHeight": "16px", "letterSpacing": "0.1em", "fontWeight": "600" }],
        "headline-lg-mobile": ["32px", { "lineHeight": "36px", "fontWeight": "700" }],
        "display-hero": ["84px", { "lineHeight": "90px", "letterSpacing": "-0.04em", "fontWeight": "800" }]
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
