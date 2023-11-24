import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const creelBayDigitalTheme: CustomThemeConfig = {
    name: 'creel-bay-digital',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-family-heading": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "8px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "0 0 0",
		// =~= Theme Colors  =~=
		// primary | #0A2463 
		"--color-primary-50": "218 222 232", // #dadee8
		"--color-primary-100": "206 211 224", // #ced3e0
		"--color-primary-200": "194 200 216", // #c2c8d8
		"--color-primary-300": "157 167 193", // #9da7c1
		"--color-primary-400": "84 102 146", // #546692
		"--color-primary-500": "10 36 99", // #0A2463
		"--color-primary-600": "9 32 89", // #092059
		"--color-primary-700": "8 27 74", // #081b4a
		"--color-primary-800": "6 22 59", // #06163b
		"--color-primary-900": "5 18 49", // #051231
		// secondary | #0F7173 
		"--color-secondary-50": "219 234 234", // #dbeaea
		"--color-secondary-100": "207 227 227", // #cfe3e3
		"--color-secondary-200": "195 220 220", // #c3dcdc
		"--color-secondary-300": "159 198 199", // #9fc6c7
		"--color-secondary-400": "87 156 157", // #579c9d
		"--color-secondary-500": "15 113 115", // #0F7173
		"--color-secondary-600": "14 102 104", // #0e6668
		"--color-secondary-700": "11 85 86", // #0b5556
		"--color-secondary-800": "9 68 69", // #094445
		"--color-secondary-900": "7 55 56", // #073738
		// tertiary | #3590F3 
		"--color-tertiary-50": "225 238 253", // #e1eefd
		"--color-tertiary-100": "215 233 253", // #d7e9fd
		"--color-tertiary-200": "205 227 252", // #cde3fc
		"--color-tertiary-300": "174 211 250", // #aed3fa
		"--color-tertiary-400": "114 177 247", // #72b1f7
		"--color-tertiary-500": "53 144 243", // #3590F3
		"--color-tertiary-600": "48 130 219", // #3082db
		"--color-tertiary-700": "40 108 182", // #286cb6
		"--color-tertiary-800": "32 86 146", // #205692
		"--color-tertiary-900": "26 71 119", // #1a4777
		// success | #84cc16 
		"--color-success-50": "237 247 220", // #edf7dc
		"--color-success-100": "230 245 208", // #e6f5d0
		"--color-success-200": "224 242 197", // #e0f2c5
		"--color-success-300": "206 235 162", // #ceeba2
		"--color-success-400": "169 219 92", // #a9db5c
		"--color-success-500": "132 204 22", // #84cc16
		"--color-success-600": "119 184 20", // #77b814
		"--color-success-700": "99 153 17", // #639911
		"--color-success-800": "79 122 13", // #4f7a0d
		"--color-success-900": "65 100 11", // #41640b
		// warning | #EAB308 
		"--color-warning-50": "252 244 218", // #fcf4da
		"--color-warning-100": "251 240 206", // #fbf0ce
		"--color-warning-200": "250 236 193", // #faecc1
		"--color-warning-300": "247 225 156", // #f7e19c
		"--color-warning-400": "240 202 82", // #f0ca52
		"--color-warning-500": "234 179 8", // #EAB308
		"--color-warning-600": "211 161 7", // #d3a107
		"--color-warning-700": "176 134 6", // #b08606
		"--color-warning-800": "140 107 5", // #8c6b05
		"--color-warning-900": "115 88 4", // #735804
		// error | #D41976 
		"--color-error-50": "249 221 234", // #f9ddea
		"--color-error-100": "246 209 228", // #f6d1e4
		"--color-error-200": "244 198 221", // #f4c6dd
		"--color-error-300": "238 163 200", // #eea3c8
		"--color-error-400": "225 94 159", // #e15e9f
		"--color-error-500": "212 25 118", // #D41976
		"--color-error-600": "191 23 106", // #bf176a
		"--color-error-700": "159 19 89", // #9f1359
		"--color-error-800": "127 15 71", // #7f0f47
		"--color-error-900": "104 12 58", // #680c3a
		// surface | #E2E2E2 
		"--color-surface-50": "251 251 251", // #fbfbfb
		"--color-surface-100": "249 249 249", // #f9f9f9
		"--color-surface-200": "248 248 248", // #f8f8f8
		"--color-surface-300": "243 243 243", // #f3f3f3
		"--color-surface-400": "235 235 235", // #ebebeb
		"--color-surface-500": "226 226 226", // #E2E2E2
		"--color-surface-600": "203 203 203", // #cbcbcb
		"--color-surface-700": "170 170 170", // #aaaaaa
		"--color-surface-800": "136 136 136", // #888888
		"--color-surface-900": "111 111 111", // #6f6f6f
		
	}
}