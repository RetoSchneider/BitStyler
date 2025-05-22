(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_dba5b4._.js", {

"[project]/src/components/ui/Button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Button": (()=>Button)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const Button = ({ variant = 'primary', size = 'md', children, className, ...props })=>{
    const baseStyles = 'font-bold uppercase tracking-wider border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
    const variantStyles = {
        primary: 'bg-red-900 hover:bg-red-800 text-gray-200 border-red-700 focus:ring-red-700',
        secondary: 'bg-gray-800 hover:bg-gray-700 text-gray-200 border-gray-600 focus:ring-gray-600',
        destructive: 'bg-black hover:bg-gray-900 text-red-500 border-red-900 focus:ring-red-900'
    };
    const sizeStyles = {
        sm: 'py-1 px-3 text-sm',
        md: 'py-2 px-4 text-base',
        lg: 'py-3 px-6 text-lg'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className || ''}`,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Button.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
};
_c = Button;
var _c;
__turbopack_refresh__.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/Slider.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Slider": (()=>Slider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const Slider = ({ min, max, step = 1, value, onChange, label, id })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full mb-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between mb-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: id,
                        className: "text-sm font-medium text-gray-300",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Slider.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm text-gray-400",
                        children: value
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Slider.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/Slider.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                id: id,
                type: "range",
                min: min,
                max: max,
                step: step,
                value: value,
                onChange: (e)=>onChange(Number(e.target.value)),
                className: "w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-red-700"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Slider.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between text-xs text-gray-500 mt-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: min
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Slider.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: max
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Slider.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/Slider.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/Slider.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
};
_c = Slider;
var _c;
__turbopack_refresh__.register(_c, "Slider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/Select.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Select": (()=>Select)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const Select = ({ options, value, onChange, label, id })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full mb-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: id,
                className: "block text-sm font-medium text-gray-300 mb-1",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Select.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                id: id,
                value: value,
                onChange: (e)=>onChange(e.target.value),
                className: "w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-red-700",
                children: options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: option.value,
                        children: option.label
                    }, option.value, false, {
                        fileName: "[project]/src/components/ui/Select.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Select.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/Select.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
};
_c = Select;
var _c;
__turbopack_refresh__.register(_c, "Select");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/Toggle.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Toggle": (()=>Toggle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const Toggle = ({ checked, onChange, label, id })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-between mb-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: id,
                className: "text-sm font-medium text-gray-300",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Toggle.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                id: id,
                type: "button",
                onClick: ()=>onChange(!checked),
                className: `relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2 ${checked ? 'bg-red-700' : 'bg-gray-700'}`,
                role: "switch",
                "aria-checked": checked,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${checked ? 'translate-x-6' : 'translate-x-1'}`
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Toggle.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Toggle.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/Toggle.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
};
_c = Toggle;
var _c;
__turbopack_refresh__.register(_c, "Toggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/Card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Card": (()=>Card)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const Card = ({ children, title, className })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `bg-gray-900 border-2 border-gray-800 rounded-md overflow-hidden shadow-lg ${className || ''}`,
        children: [
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-800 px-4 py-3 border-b border-gray-700",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-lg font-bold text-red-500 uppercase tracking-wider",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Card.tsx",
                    lineNumber: 16,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Card.tsx",
                lineNumber: 15,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Card.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/Card.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
};
_c = Card;
var _c;
__turbopack_refresh__.register(_c, "Card");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/utils/ascii-converter.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * ASCII Art Converter Utility
 * 
 * This utility provides functions to convert images to ASCII art with various configuration options.
 */ __turbopack_esm__({
    "CHARACTER_SETS": (()=>CHARACTER_SETS),
    "DEFAULT_OPTIONS": (()=>DEFAULT_OPTIONS),
    "imageToAscii": (()=>imageToAscii),
    "imageToColoredAsciiHtml": (()=>imageToColoredAsciiHtml)
});
const DEFAULT_OPTIONS = {
    characterSet: '@%#*+=-:. ',
    width: 80,
    invert: false,
    contrast: 0,
    brightness: 0,
    colored: false,
    lineHeight: 1,
    fontSize: 12,
    fontFamily: 'monospace'
};
const CHARACTER_SETS = {
    standard: '@%#*+=-:. ',
    detailed: '$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI;:,"^`\'. ',
    blocks: '█▓▒░ ',
    simple: '#@%*+=-:. ',
    numbers: '9876543210 ',
    binary: '10 ',
    warhammer: '■Ѱ☠Ѧ◊⚜☣◘■#&%Ѳϟ☣=+Ѩ*∞҈⚙;:. ',
    imperial: '⚜☠☣⚙▓#%&*█▒░◊+*=;:. '
};
/**
 * Converts an image to ASCII art
 * @param imageData - ImageData from canvas context
 * @param options - Configuration options
 * @returns ASCII art as string
 */ /**
 * Detects edges in the image data
 */ const detectEdges = (imageData)=>{
    const canvas = document.createElement('canvas');
    canvas.width = imageData.width;
    canvas.height = imageData.height;
    const ctx = canvas.getContext('2d');
    ctx.putImageData(imageData, 0, 0);
    const output = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = output.data;
    const width = imageData.width;
    const height = imageData.height;
    // Simple Sobel operator for edge detection
    const sobelX = [
        -1,
        0,
        1,
        -2,
        0,
        2,
        -1,
        0,
        1
    ];
    const sobelY = [
        -1,
        -2,
        -1,
        0,
        0,
        0,
        1,
        2,
        1
    ];
    // Create a temporary array to store the original data
    const origData = new Uint8ClampedArray(data);
    for(let y = 1; y < height - 1; y++){
        for(let x = 1; x < width - 1; x++){
            let magX = 0;
            let magY = 0;
            // Apply the convolution
            for(let ky = -1; ky <= 1; ky++){
                for(let kx = -1; kx <= 1; kx++){
                    const idx = ((y + ky) * width + (x + kx)) * 4;
                    const pixVal = (origData[idx] + origData[idx + 1] + origData[idx + 2]) / 3;
                    magX += pixVal * sobelX[(ky + 1) * 3 + (kx + 1)];
                    magY += pixVal * sobelY[(ky + 1) * 3 + (kx + 1)];
                }
            }
            // Calculate gradient magnitude
            const mag = Math.sqrt(magX * magX + magY * magY);
            // Set pixel value
            const outIdx = (y * width + x) * 4;
            data[outIdx] = data[outIdx + 1] = data[outIdx + 2] = Math.min(255, mag);
        }
    }
    return output;
};
/**
 * Enhances the details in the image by combining the original with edge detection
 */ const enhanceDetails = (imageData, edgeWeight = 0.3)=>{
    const edgeData = detectEdges(imageData);
    const canvas = document.createElement('canvas');
    canvas.width = imageData.width;
    canvas.height = imageData.height;
    const ctx = canvas.getContext('2d');
    // Draw original image
    ctx.putImageData(imageData, 0, 0);
    // Overlay edge data with reduced opacity
    const blendedData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = blendedData.data;
    const edgeDataArr = edgeData.data;
    for(let i = 0; i < data.length; i += 4){
        // Blend edge data with original image
        const edgeIntensity = (edgeDataArr[i] + edgeDataArr[i + 1] + edgeDataArr[i + 2]) / 3;
        // Enhance contrast around edges
        data[i] = Math.min(255, data[i] * (1 - edgeWeight) + edgeIntensity * edgeWeight);
        data[i + 1] = Math.min(255, data[i + 1] * (1 - edgeWeight) + edgeIntensity * edgeWeight);
        data[i + 2] = Math.min(255, data[i + 2] * (1 - edgeWeight) + edgeIntensity * edgeWeight);
    }
    return blendedData;
};
const imageToAscii = (imageData, options = {})=>{
    const opts = {
        ...DEFAULT_OPTIONS,
        ...options
    };
    const { width, characterSet, invert } = opts;
    // Calculate a better aspect ratio (characters are taller than wide)
    const aspectRatio = 0.4; // Typical character height/width ratio
    const height = Math.floor(imageData.height / imageData.width * width * aspectRatio);
    const blockWidth = Math.floor(imageData.width / width);
    const blockHeight = Math.floor(imageData.height / height);
    let result = '';
    // Apply brightness and contrast adjustments
    const adjustedData = applyAdjustments(imageData, opts);
    // Enhance details with edge detection
    const enhancedData = enhanceDetails(adjustedData, 0.3);
    // Process blocks and build ASCII art
    for(let y = 0; y < height; y++){
        for(let x = 0; x < width; x++){
            const blockStartX = x * blockWidth;
            const blockStartY = y * blockHeight;
            // Get brightness with smart sampling
            const { brightness, variance } = getSmartSample(enhancedData, blockStartX, blockStartY, blockWidth, blockHeight);
            // Use variance to select characters that represent detail
            let effectiveBrightness = brightness;
            if (variance > 0.2) {
                // Boost contrast in detailed areas
                effectiveBrightness = brightness > 0.5 ? brightness + 0.1 : brightness - 0.1;
                effectiveBrightness = Math.max(0, Math.min(1, effectiveBrightness));
            }
            // Map brightness to character
            const charIndex = invert ? Math.floor((1 - effectiveBrightness) * (characterSet.length - 1)) : Math.floor(effectiveBrightness * (characterSet.length - 1));
            result += characterSet[charIndex];
        }
        result += '\\n';
    }
    return result;
};
const imageToColoredAsciiHtml = (imageData, options = {})=>{
    const opts = {
        ...DEFAULT_OPTIONS,
        ...options
    };
    const { width, characterSet, invert, fontSize, lineHeight, fontFamily } = opts;
    // Better aspect ratio for characters
    const aspectRatio = 0.4; // Typical character height/width ratio
    const height = Math.floor(imageData.height / imageData.width * width * aspectRatio);
    const blockWidth = Math.floor(imageData.width / width);
    const blockHeight = Math.floor(imageData.height / height);
    let result = `<div style="font-family: ${fontFamily}; font-size: ${fontSize}px; line-height: ${lineHeight}; letter-spacing: 0; white-space: pre;">`;
    // Apply brightness and contrast adjustments
    const adjustedData = applyAdjustments(imageData, opts);
    // Enhance details with edge detection
    const enhancedData = enhanceDetails(adjustedData, 0.3);
    // Process blocks and build colored ASCII art
    for(let y = 0; y < height; y++){
        for(let x = 0; x < width; x++){
            const blockStartX = x * blockWidth;
            const blockStartY = y * blockHeight;
            // Get brightness and color with smart sampling
            const { brightness, color, variance } = getSmartSampleWithColor(enhancedData, blockStartX, blockStartY, blockWidth, blockHeight);
            // Use variance to select characters that represent detail
            let effectiveBrightness = brightness;
            if (variance > 0.2) {
                // Boost contrast in detailed areas
                effectiveBrightness = brightness > 0.5 ? brightness + 0.1 : brightness - 0.1;
                effectiveBrightness = Math.max(0, Math.min(1, effectiveBrightness));
            }
            // Map brightness to character
            const charIndex = invert ? Math.floor((1 - effectiveBrightness) * (characterSet.length - 1)) : Math.floor(effectiveBrightness * (characterSet.length - 1));
            const char = characterSet[charIndex];
            // Add colored character with a slight glow effect for Warhammer aesthetic
            const glowEffect = variance > 0.15 ? `text-shadow: 0 0 2px rgb(${color.r}, ${color.g}, ${color.b}, 0.8);` : '';
            result += `<span style="color: rgb(${color.r}, ${color.g}, ${color.b}); ${glowEffect}">${char}</span>`;
        }
        result += '\n';
    }
    result += '</div>';
    return result;
};
/**
 * Gets the average brightness of a block of pixels
 */ const getAverageBrightness = (imageData, startX, startY, width, height)=>{
    let totalBrightness = 0;
    let pixelCount = 0;
    for(let y = 0; y < height; y++){
        for(let x = 0; x < width; x++){
            const pixelX = startX + x;
            const pixelY = startY + y;
            if (pixelX < imageData.width && pixelY < imageData.height) {
                const index = (pixelY * imageData.width + pixelX) * 4;
                const r = imageData.data[index];
                const g = imageData.data[index + 1];
                const b = imageData.data[index + 2];
                // Calculate perceived brightness
                // Using the formula: 0.299*R + 0.587*G + 0.114*B
                const brightness = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
                totalBrightness += brightness;
                pixelCount++;
            }
        }
    }
    return pixelCount > 0 ? totalBrightness / pixelCount : 0;
};
/**
 * Gets the average brightness and color of a block of pixels
 */ /**
 * Gets brightness, color and variance using smart sampling
 */ const getSmartSampleWithColor = (imageData, startX, startY, width, height)=>{
    let totalBrightness = 0;
    let totalR = 0;
    let totalG = 0;
    let totalB = 0;
    let pixelCount = 0;
    const brightnessValues = [];
    // Use adaptive sampling - more samples in high-detail areas
    const sampleStep = Math.max(1, Math.floor(Math.min(width, height) / 8));
    for(let y = 0; y < height; y += sampleStep){
        for(let x = 0; x < width; x += sampleStep){
            const pixelX = startX + x;
            const pixelY = startY + y;
            if (pixelX < imageData.width && pixelY < imageData.height) {
                const index = (pixelY * imageData.width + pixelX) * 4;
                const r = imageData.data[index];
                const g = imageData.data[index + 1];
                const b = imageData.data[index + 2];
                // Calculate perceived brightness with improved formula
                const brightness = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
                brightnessValues.push(brightness);
                totalBrightness += brightness;
                totalR += r;
                totalG += g;
                totalB += b;
                pixelCount++;
            }
        }
    }
    // Calculate variance (measure of detail)
    const avgBrightness = pixelCount > 0 ? totalBrightness / pixelCount : 0;
    let variance = 0;
    for (const b of brightnessValues){
        variance += (b - avgBrightness) ** 2;
    }
    variance = pixelCount > 1 ? variance / (pixelCount - 1) : 0;
    return {
        brightness: avgBrightness,
        color: {
            r: pixelCount > 0 ? Math.floor(totalR / pixelCount) : 0,
            g: pixelCount > 0 ? Math.floor(totalG / pixelCount) : 0,
            b: pixelCount > 0 ? Math.floor(totalB / pixelCount) : 0
        },
        variance
    };
};
/**
 * Gets brightness and variance using smart sampling
 */ const getSmartSample = (imageData, startX, startY, width, height)=>{
    const { brightness, variance } = getSmartSampleWithColor(imageData, startX, startY, width, height);
    return {
        brightness,
        variance
    };
};
/**
 * Gets the average brightness and color of a block of pixels (simple version)
 */ const getAverageBrightnessAndColor = (imageData, startX, startY, width, height)=>{
    const { brightness, color } = getSmartSampleWithColor(imageData, startX, startY, width, height);
    return {
        brightness,
        color
    };
};
/**
 * Applies brightness and contrast adjustments to image data
 */ const applyAdjustments = (imageData, options)=>{
    const { brightness, contrast } = options;
    // Create a copy of the image data
    const canvas = document.createElement('canvas');
    canvas.width = imageData.width;
    canvas.height = imageData.height;
    const ctx = canvas.getContext('2d');
    ctx.putImageData(imageData, 0, 0);
    // Apply brightness and contrast
    if (brightness !== 0 || contrast !== 0) {
        const adjustedData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = adjustedData.data;
        // Convert contrast to factor (range 0-2)
        const contrastFactor = contrast >= 0 ? 1 + contrast : 1 / (1 - contrast);
        // Convert brightness to offset (range -255 to 255)
        const brightnessOffset = brightness * 255;
        for(let i = 0; i < data.length; i += 4){
            // Apply brightness
            data[i] += brightnessOffset;
            data[i + 1] += brightnessOffset;
            data[i + 2] += brightnessOffset;
            // Apply contrast
            data[i] = (data[i] - 128) * contrastFactor + 128;
            data[i + 1] = (data[i + 1] - 128) * contrastFactor + 128;
            data[i + 2] = (data[i + 2] - 128) * contrastFactor + 128;
            // Clamp values
            data[i] = Math.max(0, Math.min(255, data[i]));
            data[i + 1] = Math.max(0, Math.min(255, data[i + 1]));
            data[i + 2] = Math.max(0, Math.min(255, data[i + 2]));
        }
        return adjustedData;
    }
    return imageData;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ascii/AsciiArtGenerator.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "AsciiArtGenerator": (()=>AsciiArtGenerator)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/Slider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/Select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/Toggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/Card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$ascii$2d$converter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/utils/ascii-converter.ts [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
;
const AsciiArtGenerator = ()=>{
    _s();
    const [image, setImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [asciiArt, setAsciiArt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isProcessing, setIsProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [options, setOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$ascii$2d$converter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_OPTIONS"],
        characterSet: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$ascii$2d$converter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHARACTER_SETS"].standard
    });
    const [previewMode, setPreviewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('ascii');
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Create canvas element on component mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AsciiArtGenerator.useEffect": ()=>{
            // Create a canvas element if it doesn't exist
            if (!canvasRef.current) {
                const canvas = document.createElement('canvas');
                canvasRef.current = canvas;
            }
            // Cleanup function to handle component unmount
            return ({
                "AsciiArtGenerator.useEffect": ()=>{
                    canvasRef.current = null;
                }
            })["AsciiArtGenerator.useEffect"];
        }
    }["AsciiArtGenerator.useEffect"], []);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const asciiOutputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Character set options for the select dropdown
    const characterSetOptions = Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$ascii$2d$converter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHARACTER_SETS"]).map(([key])=>({
            value: key,
            label: key.charAt(0).toUpperCase() + key.slice(1)
        }));
    // Handle file input change
    const handleFileChange = (event)=>{
        const file = event.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (e)=>{
            const img = new window.Image();
            img.onload = ()=>{
                setImage(img);
                generateAsciiArt(img);
            };
            img.src = e.target?.result;
        };
        reader.readAsDataURL(file);
    };
    // Handle drag and drop
    const handleDrop = (event)=>{
        event.preventDefault();
        event.stopPropagation();
        const file = event.dataTransfer.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (e)=>{
            const img = new window.Image();
            img.onload = ()=>{
                setImage(img);
                generateAsciiArt(img);
            };
            img.src = e.target?.result;
        };
        reader.readAsDataURL(file);
    };
    // Handle drag over
    const handleDragOver = (event)=>{
        event.preventDefault();
        event.stopPropagation();
    };
    // Generate ASCII art from image
    const generateAsciiArt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AsciiArtGenerator.useCallback[generateAsciiArt]": (imgElement)=>{
            setIsProcessing(true);
            // Use setTimeout to allow the UI to update before processing
            setTimeout({
                "AsciiArtGenerator.useCallback[generateAsciiArt]": ()=>{
                    try {
                        // Create a local copy of the canvas to avoid React lifecycle issues
                        let localCanvas;
                        // Ensure canvas ref exists or create a new one
                        if (!canvasRef.current) {
                            localCanvas = document.createElement('canvas');
                            canvasRef.current = localCanvas;
                        } else {
                            localCanvas = canvasRef.current;
                        }
                        const ctx = localCanvas.getContext('2d');
                        if (!ctx) {
                            throw new Error('Could not get 2D context from canvas');
                        }
                        // Set canvas dimensions
                        localCanvas.width = imgElement.width;
                        localCanvas.height = imgElement.height;
                        // Draw image on canvas
                        ctx.drawImage(imgElement, 0, 0);
                        // Get image data
                        const imageData = ctx.getImageData(0, 0, localCanvas.width, localCanvas.height);
                        // Generate ASCII art
                        let result;
                        if (options.colored) {
                            result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$ascii$2d$converter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["imageToColoredAsciiHtml"])(imageData, options);
                            setAsciiArt(result); // Store HTML string for colored output
                        } else {
                            result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$ascii$2d$converter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["imageToAscii"])(imageData, options);
                            setAsciiArt(result); // Store plain ASCII text
                        }
                        setIsProcessing(false);
                    } catch (error) {
                        console.error('Error generating ASCII art:', error);
                        setIsProcessing(false);
                    }
                }
            }["AsciiArtGenerator.useCallback[generateAsciiArt]"], 0);
        }
    }["AsciiArtGenerator.useCallback[generateAsciiArt]"], [
        options,
        canvasRef,
        asciiOutputRef,
        setAsciiArt,
        setIsProcessing
    ]);
    // Update ASCII art when options change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AsciiArtGenerator.useEffect": ()=>{
            if (image) {
                generateAsciiArt(image);
            }
        }
    }["AsciiArtGenerator.useEffect"], [
        options,
        generateAsciiArt,
        image
    ]);
    // Handle option changes
    const updateOption = (key, value)=>{
        setOptions((prev)=>({
                ...prev,
                [key]: value
            }));
    };
    // Handle character set selection
    const handleCharacterSetChange = (value)=>{
        const selectedSet = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$ascii$2d$converter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHARACTER_SETS"][value] || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$ascii$2d$converter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHARACTER_SETS"].standard;
        updateOption('characterSet', selectedSet);
    };
    // Copy ASCII art to clipboard
    const copyToClipboard = ()=>{
        if (!asciiArt) return;
        navigator.clipboard.writeText(asciiArt.replace(/\\n/g, '\n')).then(()=>{
            alert('ASCII art copied to clipboard!');
        }).catch((err)=>{
            console.error('Failed to copy: ', err);
        });
    };
    // Download ASCII art as text file
    const downloadAsciiArt = ()=>{
        if (!asciiArt) return;
        const element = document.createElement('a');
        const file = new Blob([
            asciiArt.replace(/\\n/g, '\n')
        ], {
            type: 'text/plain'
        });
        element.href = URL.createObjectURL(file);
        element.download = 'ascii-art.txt';
        // Safer approach: don't append to DOM, just simulate click
        element.style.display = 'none';
        element.click();
        // Clean up the URL object
        setTimeout(()=>{
            URL.revokeObjectURL(element.href);
        }, 100);
    };
    // Download as HTML
    const downloadAsHtml = ()=>{
        if (!asciiOutputRef.current) return;
        const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>ASCII Art</title>
        <style>
          body {
            background-color: #111;
            color: ${options.colored ? 'inherit' : '#f0f0f0'};
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            padding: 20px;
            font-family: ${options.fontFamily};
          }
        </style>
      </head>
      <body>
        ${asciiOutputRef.current.innerHTML}
      </body>
      </html>
    `;
        const element = document.createElement('a');
        const file = new Blob([
            htmlContent
        ], {
            type: 'text/html'
        });
        element.href = URL.createObjectURL(file);
        element.download = 'ascii-art.html';
        // Safer approach: don't append to DOM, just simulate click
        element.style.display = 'none';
        element.click();
        // Clean up the URL object
        setTimeout(()=>{
            URL.revokeObjectURL(element.href);
        }, 100);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col lg:flex-row gap-6 w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full lg:w-1/3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    title: "Image Input",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-2 border-dashed border-gray-700 rounded-md p-6 mb-4 text-center cursor-pointer hover:border-red-700 transition-colors",
                            onClick: ()=>fileInputRef.current?.click(),
                            onDrop: handleDrop,
                            onDragOver: handleDragOver,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "file",
                                    ref: fileInputRef,
                                    onChange: handleFileChange,
                                    accept: "image/*",
                                    className: "hidden"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ascii/AsciiArtGenerator.tsx",
                                    lineNumber: 253,
                                    columnNumber: 13
                                }, this),
                                image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: image.src,
                                            alt: "Preview",
                                            width: 200,
                                            height: 150,
                                            className: "max-w-full max-h-48 mb-2 rounded object-contain"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ascii/AsciiArtGenerator.tsx",
                                            lineNumber: 262,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-400 text-sm",
                                            children: "Click or drag to replace"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ascii/AsciiArtGenerator.tsx",
                                            lineNumber: 269,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ascii/AsciiArtGenerator.tsx",
                                    lineNumber: 261,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: "h-12 w-12 text-gray-600 mb-2",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ascii/AsciiArtGenerator.tsx",
                                                lineNumber: 280,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ascii/AsciiArtGenerator.tsx",
                                            lineNumber: 273,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-300 font-medium",
                                            children: "Click or drag image here"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ascii/AsciiArtGenerator.tsx",
                                            lineNumber: 287,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-500 text-sm mt-1",
                                            children: "Supports JPG, PNG, GIF, etc."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ascii/AsciiArtGenerator.tsx",
                                            lineNumber: 288,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ascii/AsciiArtGenerator.tsx",
                                    lineNumber: 272,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ascii/AsciiArtGenerator.tsx",
                            lineNumber: 247,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-red-500 font-bold uppercase tracking-wider mb-2",
                                    children: "Configuration"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ascii/AsciiArtGenerator.tsx",
                                    lineNumber: 295,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                    id: "character-set",
                                    label: "Character Set",
                                    options: characterSetOptions,
                                    value: Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$ascii$2d$converter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHARACTER_SETS"]).find((key)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$ascii$2d$converter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHARACTER_SETS"][key] === options.characterSet) || 'standard',
                                    onChange: handleCharacterSetChange
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ascii/AsciiArtGenerator.tsx",
                                    lineNumber: 297,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                                    id: "width",
                                    label: "Width",
                                    min: 20,
                                    max: 200,
                                    step: 5,
                                    value: options.width,
                                    onChange: (value)=>updateOption('width', value)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ascii/AsciiArtGenerator.tsx",
                                    lineNumber: 307,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                                    id: "contrast",
                                    label: "Contrast",
                                    min: -1,
                                    max: 1,
                                    step: 0.1,
                                    value: options.contrast,
                                    onChange: (value)=>updateOption('contrast', value)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ascii/AsciiArtGenerator.tsx",
                                    lineNumber: 317,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                                    id: "brightness",
                                    label: "Brightness",
                                    min: -1,
                                    max: 1,
                                    step: 0.1,
                                    value: options.brightness,
                                    onChange: (value)=>updateOption('brightness', value)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ascii/AsciiArtGenerator.tsx",
                                    lineNumber: 327,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                                    id: "font-size",
                                    label: "Font Size",
                                    min: 6,
                                    max: 24,
                                    step: 1,
                                    value: options.fontSize,
                                    onChange: (value)=>updateOption('fontSize', value)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ascii/AsciiArtGenerator.tsx",
                                    lineNumber: 337,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                                    id: "line-height",
                                    label: "Line Height",
                                    min: 0.5,
                                    max: 2,
                                    step: 0.1,
                                    value: options.lineHeight,
                                    onChange: (value)=>updateOption('lineHeight', value)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ascii/AsciiArtGenerator.tsx",
                                    lineNumber: 347,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toggle"], {
                                    id: "invert",
                                    label: "Invert Colors",
                                    checked: options.invert,
                                    onChange: (value)=>updateOption('invert', value)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ascii/AsciiArtGenerator.tsx",
                                    lineNumber: 357,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toggle"], {
                                    id: "colored",
                                    label: "Colored Output",
                                    checked: options.colored,
                                    onChange: (value)=>updateOption('colored', value)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ascii/AsciiArtGenerator.tsx",
                                    lineNumber: 364,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2 mt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "primary",
                                            onClick: ()=>image && generateAsciiArt(image),
                                            disabled: !image || isProcessing,
                                            className: "flex-1",
                                            children: isProcessing ? 'Processing...' : 'Generate'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ascii/AsciiArtGenerator.tsx",
                                            lineNumber: 372,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "secondary",
                                            onClick: ()=>setOptions({
                                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$ascii$2d$converter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_OPTIONS"],
                                                    characterSet: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$ascii$2d$converter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHARACTER_SETS"].standard
                                                }),
                                            className: "flex-1",
                                            children: "Reset"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ascii/AsciiArtGenerator.tsx",
                                            lineNumber: 381,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ascii/AsciiArtGenerator.tsx",
                                    lineNumber: 371,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ascii/AsciiArtGenerator.tsx",
                            lineNumber: 294,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ascii/AsciiArtGenerator.tsx",
                    lineNumber: 246,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ascii/AsciiArtGenerator.tsx",
                lineNumber: 245,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full lg:w-2/3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    title: "ASCII Output",
                    className: "h-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: previewMode === 'ascii' ? 'primary' : 'secondary',
                                            size: "sm",
                                            onClick: ()=>setPreviewMode('ascii'),
                                            children: "ASCII"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ascii/AsciiArtGenerator.tsx",
                                            lineNumber: 401,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: previewMode === 'image' ? 'primary' : 'secondary',
                                            size: "sm",
                                            onClick: ()=>setPreviewMode('image'),
                                            disabled: !image,
                                            children: "Original"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ascii/AsciiArtGenerator.tsx",
                                            lineNumber: 408,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ascii/AsciiArtGenerator.tsx",
                                    lineNumber: 400,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "secondary",
                                            size: "sm",
                                            onClick: copyToClipboard,
                                            disabled: !asciiArt,
                                            children: "Copy"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ascii/AsciiArtGenerator.tsx",
                                            lineNumber: 418,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "secondary",
                                            size: "sm",
                                            onClick: downloadAsciiArt,
                                            disabled: !asciiArt,
                                            children: "Download TXT"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ascii/AsciiArtGenerator.tsx",
                                            lineNumber: 426,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "secondary",
                                            size: "sm",
                                            onClick: downloadAsHtml,
                                            disabled: !asciiArt,
                                            children: "Download HTML"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ascii/AsciiArtGenerator.tsx",
                                            lineNumber: 434,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ascii/AsciiArtGenerator.tsx",
                                    lineNumber: 417,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ascii/AsciiArtGenerator.tsx",
                            lineNumber: 399,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative bg-black rounded-md overflow-auto h-[500px] p-4",
                            children: [
                                isProcessing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 z-10",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-red-500 text-xl font-bold",
                                        children: "Processing..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ascii/AsciiArtGenerator.tsx",
                                        lineNumber: 448,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ascii/AsciiArtGenerator.tsx",
                                    lineNumber: 447,
                                    columnNumber: 15
                                }, this),
                                previewMode === 'ascii' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        asciiArt && !options.colored && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-gray-200 whitespace-pre overflow-auto",
                                            ref: asciiOutputRef,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                style: {
                                                    fontFamily: options.fontFamily,
                                                    fontSize: options.fontSize,
                                                    lineHeight: options.lineHeight,
                                                    margin: 0,
                                                    whiteSpace: 'pre-wrap',
                                                    wordBreak: 'break-all'
                                                },
                                                children: asciiArt.replace(/\\n/g, '\n')
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ascii/AsciiArtGenerator.tsx",
                                                lineNumber: 455,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ascii/AsciiArtGenerator.tsx",
                                            lineNumber: 454,
                                            columnNumber: 19
                                        }, this),
                                        asciiArt && options.colored && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ref: asciiOutputRef,
                                            style: {
                                                fontFamily: options.fontFamily,
                                                fontSize: options.fontSize,
                                                lineHeight: options.lineHeight,
                                                color: "#e5e7eb",
                                                background: "black",
                                                borderRadius: "0.375rem",
                                                overflow: "auto",
                                                height: "100%",
                                                padding: "1rem",
                                                whiteSpace: 'pre-wrap',
                                                wordBreak: 'break-all'
                                            },
                                            dangerouslySetInnerHTML: {
                                                __html: asciiArt.replace(/\\n/g, '\n')
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ascii/AsciiArtGenerator.tsx",
                                            lineNumber: 470,
                                            columnNumber: 19
                                        }, this),
                                        !asciiArt && !isProcessing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-center justify-center h-full text-gray-600",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    className: "h-12 w-12 mb-2",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    stroke: "currentColor",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ascii/AsciiArtGenerator.tsx",
                                                        lineNumber: 497,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ascii/AsciiArtGenerator.tsx",
                                                    lineNumber: 490,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-lg font-medium",
                                                    children: "ASCII output will appear here"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ascii/AsciiArtGenerator.tsx",
                                                    lineNumber: 504,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm mt-1",
                                                    children: "Upload an image to get started"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ascii/AsciiArtGenerator.tsx",
                                                    lineNumber: 505,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ascii/AsciiArtGenerator.tsx",
                                            lineNumber: 489,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center h-full",
                                    children: image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: image.src,
                                        alt: "Original",
                                        width: 800,
                                        height: 600,
                                        className: "max-w-full max-h-full object-contain"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ascii/AsciiArtGenerator.tsx",
                                        lineNumber: 512,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-gray-600",
                                        children: "No image selected"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ascii/AsciiArtGenerator.tsx",
                                        lineNumber: 520,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ascii/AsciiArtGenerator.tsx",
                                    lineNumber: 510,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ascii/AsciiArtGenerator.tsx",
                            lineNumber: 445,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 text-gray-500 text-sm",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-red-500 font-bold",
                                        children: "IMPERIUM APPROVED:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ascii/AsciiArtGenerator.tsx",
                                        lineNumber: 528,
                                        columnNumber: 15
                                    }, this),
                                    " For the glory of the Emperor, transform your pict-captures into holy binary script."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ascii/AsciiArtGenerator.tsx",
                                lineNumber: 527,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ascii/AsciiArtGenerator.tsx",
                            lineNumber: 526,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ascii/AsciiArtGenerator.tsx",
                    lineNumber: 398,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ascii/AsciiArtGenerator.tsx",
                lineNumber: 397,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: "hidden"
            }, void 0, false, {
                fileName: "[project]/src/components/ascii/AsciiArtGenerator.tsx",
                lineNumber: 535,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ascii/AsciiArtGenerator.tsx",
        lineNumber: 243,
        columnNumber: 5
    }, this);
};
_s(AsciiArtGenerator, "kVeFuadFOPmYXswD7L1q43zTTYY=");
_c = AsciiArtGenerator;
var _c;
__turbopack_refresh__.register(_c, "AsciiArtGenerator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_dba5b4._.js.map