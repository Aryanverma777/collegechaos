module.exports = [
"[project]/app/graveyard/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GraveyardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.0-canary.19_@open_5a9a74e53b1dfaab6254c8314ff591bf/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.0-canary.19_@open_5a9a74e53b1dfaab6254c8314ff591bf/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.0-canary.19_@open_5a9a74e53b1dfaab6254c8314ff591bf/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
// ── Seed data ──────────────────────────────────────────────────────────────
const SEED_GRAVES = [
    {
        _id: "g1",
        title: "DBMS Assignment #3",
        subject: "Database Management",
        dueDate: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5),
        status: "missed",
        epitaph: "Here lies query optimization. It ran too slow and was never seen again.",
        bloomed: false,
        createdAt: new Date()
    },
    {
        _id: "g2",
        title: "OS Lab Report",
        subject: "Operating Systems",
        dueDate: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2),
        status: "missed",
        epitaph: "Gone but not forgotten. Like a deadlock — eternal, unresolved.",
        bloomed: false,
        createdAt: new Date()
    },
    {
        _id: "g3",
        title: "Math Internal Test",
        subject: "Engineering Mathematics",
        dueDate: new Date(Date.now() - 1000 * 60 * 60 * 24 * 8),
        status: "missed",
        epitaph: "May it rest in the integral it never solved.",
        bloomed: true,
        createdAt: new Date()
    },
    {
        _id: "g4",
        title: "CN Presentation",
        subject: "Computer Networks",
        dueDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 1),
        status: "pending",
        epitaph: "Still breathing... for now. OSI model wept.",
        bloomed: false,
        createdAt: new Date()
    },
    {
        _id: "g5",
        title: "Java Mini Project",
        subject: "OOP with Java",
        dueDate: new Date(Date.now() - 1000 * 60 * 60 * 24 * 12),
        status: "missed",
        epitaph: "NullPointerException: life not found.",
        bloomed: false,
        createdAt: new Date()
    },
    {
        _id: "g6",
        title: "DSA Quiz #2",
        subject: "Data Structures",
        dueDate: new Date(Date.now() - 1000 * 60 * 60 * 24 * 1),
        status: "submitted",
        epitaph: "Submitted 11:58 PM. Two minutes of courage.",
        bloomed: false,
        createdAt: new Date()
    },
    {
        _id: "g7",
        title: "Software Engineering Doc",
        subject: "SE & Project Mgmt",
        dueDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3),
        status: "pending",
        epitaph: "A waterfall of procrastination. The end is near.",
        bloomed: false,
        createdAt: new Date()
    },
    {
        _id: "g8",
        title: "IOT Lab Practical",
        subject: "Internet of Things",
        dueDate: new Date(Date.now() - 1000 * 60 * 60 * 24 * 20),
        status: "missed",
        epitaph: "The things were not connected. Neither was the student.",
        bloomed: false,
        createdAt: new Date()
    }
];
const FLOWER_COLORS = [
    "#ff2d78",
    "#ff6bca",
    "#ff9ef0",
    "#00f5ff",
    "#39ff14",
    "#ffaa00",
    "#fff",
    "#c084fc",
    "#fb923c",
    "#f472b6",
    "#a3e635"
];
const FLOWER_SHAPES = [
    "flower",
    "petal",
    "star"
];
function randomBetween(a, b) {
    return a + Math.random() * (b - a);
}
// ── Flower Petal SVG ───────────────────────────────────────────────────────
function FlowerSVG({ color, shape, size }) {
    if (shape === "star") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
            points: "12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26",
            fill: color,
            style: {
                filter: `drop-shadow(0 0 4px ${color})`
            }
        }, void 0, false, {
            fileName: "[project]/app/graveyard/page.tsx",
            lineNumber: 53,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/graveyard/page.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
    if (shape === "petal") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
            cx: "12",
            cy: "12",
            rx: "4",
            ry: "10",
            fill: color,
            style: {
                filter: `drop-shadow(0 0 3px ${color})`
            }
        }, void 0, false, {
            fileName: "[project]/app/graveyard/page.tsx",
            lineNumber: 59,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/graveyard/page.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 32 32",
        children: [
            [
                0,
                60,
                120,
                180,
                240,
                300
            ].map((deg, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                    cx: "16",
                    cy: "16",
                    rx: "5",
                    ry: "9",
                    transform: `rotate(${deg} 16 16) translate(0 -5)`,
                    fill: color,
                    opacity: "0.85"
                }, i, false, {
                    fileName: "[project]/app/graveyard/page.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "16",
                cy: "16",
                r: "4",
                fill: "#fff8"
            }, void 0, false, {
                fileName: "[project]/app/graveyard/page.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/graveyard/page.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
// ── Grave Card ─────────────────────────────────────────────────────────────
function GraveCard({ grave, index, onBloom, onAdd }) {
    const [risen, setRisen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [blooming, setBlooming] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const t = setTimeout(()=>setRisen(true), index * 120 + 100);
        return ()=>clearTimeout(t);
    }, [
        index
    ]);
    const handleBloom = ()=>{
        if (grave.bloomed) return;
        setBlooming(true);
        onBloom(grave._id);
        setTimeout(()=>setBlooming(false), 1200);
    };
    const statusColors = {
        missed: {
            col: "#ff2d78",
            label: "💀 MISSED"
        },
        pending: {
            col: "#ffaa00",
            label: "⚠️ PENDING"
        },
        submitted: {
            col: "#39ff14",
            label: "✅ SUBMITTED"
        }
    };
    const sc = statusColors[grave.status];
    const daysAgo = Math.round((Date.now() - grave.dueDate.getTime()) / (1000 * 60 * 60 * 24));
    const overdue = grave.dueDate < new Date();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grave-wrap",
        style: {
            transitionDelay: `${index * 80}ms`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ground-crack"
            }, void 0, false, {
                fileName: "[project]/app/graveyard/page.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `grave-card ${risen ? "grave-risen" : "grave-hidden"} ${grave.bloomed ? "grave-bloomed" : ""} ${blooming ? "grave-shaking" : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-3 right-3 w-2 h-2 rounded-full pulse-dot",
                        style: {
                            background: sc.col,
                            boxShadow: `0 0 8px ${sc.col}`
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/graveyard/page.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center mb-3",
                        children: grave.status === "submitted" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grave-symbol",
                            style: {
                                borderColor: "#39ff14",
                                boxShadow: "0 0 10px #39ff1466"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-orbitron text-[#39ff14] text-xs font-black",
                                children: "✓"
                            }, void 0, false, {
                                fileName: "[project]/app/graveyard/page.tsx",
                                lineNumber: 121,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/graveyard/page.tsx",
                            lineNumber: 120,
                            columnNumber: 13
                        }, this) : grave.status === "pending" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grave-symbol",
                            style: {
                                borderColor: "#ffaa00",
                                boxShadow: "0 0 10px #ffaa0066"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-orbitron text-[#ffaa00] text-xs font-black",
                                children: "!"
                            }, void 0, false, {
                                fileName: "[project]/app/graveyard/page.tsx",
                                lineNumber: 125,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/graveyard/page.tsx",
                            lineNumber: 124,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "cross-wrap",
                            style: {
                                filter: `drop-shadow(0 0 6px ${grave.bloomed ? "#ff2d78" : "#ff2d7866"})`
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "cross-v",
                                    style: {
                                        background: grave.bloomed ? "#ff2d78" : "#ff2d7866"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/graveyard/page.tsx",
                                    lineNumber: 129,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "cross-h",
                                    style: {
                                        background: grave.bloomed ? "#ff2d78" : "#ff2d7866"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/graveyard/page.tsx",
                                    lineNumber: 130,
                                    columnNumber: 15
                                }, this),
                                grave.bloomed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bloom-burst"
                                }, void 0, false, {
                                    fileName: "[project]/app/graveyard/page.tsx",
                                    lineNumber: 131,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/graveyard/page.tsx",
                            lineNumber: 128,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/graveyard/page.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "subject-chip",
                        style: {
                            borderColor: sc.col + "66",
                            color: sc.col,
                            background: sc.col + "11"
                        },
                        children: grave.subject.toUpperCase()
                    }, void 0, false, {
                        fileName: "[project]/app/graveyard/page.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-orbitron text-[0.72rem] font-bold text-white text-center tracking-wide leading-snug my-2 px-1",
                        children: grave.title
                    }, void 0, false, {
                        fileName: "[project]/app/graveyard/page.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-tech text-[0.58rem] text-center mb-2",
                        style: {
                            color: sc.col
                        },
                        children: overdue ? `${Math.abs(daysAgo)}d overdue` : `due in ${daysAgo === 0 ? "TODAY" : `${Math.abs(daysAgo)}d`}`
                    }, void 0, false, {
                        fileName: "[project]/app/graveyard/page.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-tech text-[0.6rem] text-white/30 text-center italic leading-relaxed px-2 mb-3 border-t border-white/5 pt-2",
                        children: [
                            '"',
                            grave.epitaph,
                            '"'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/graveyard/page.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center mb-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-orbitron text-[0.48rem] tracking-widest px-2 py-1 border",
                            style: {
                                color: sc.col,
                                borderColor: sc.col + "55",
                                background: sc.col + "11"
                            },
                            children: sc.label
                        }, void 0, false, {
                            fileName: "[project]/app/graveyard/page.tsx",
                            lineNumber: 161,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/graveyard/page.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this),
                    grave.status === "missed" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleBloom,
                        disabled: grave.bloomed,
                        className: `bloom-btn w-full ${grave.bloomed ? "bloomed" : ""}`,
                        children: grave.bloomed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex items-center justify-center gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "🌸"
                                }, void 0, false, {
                                    fileName: "[project]/app/graveyard/page.tsx",
                                    lineNumber: 173,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "BLOOMED"
                                }, void 0, false, {
                                    fileName: "[project]/app/graveyard/page.tsx",
                                    lineNumber: 174,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/graveyard/page.tsx",
                            lineNumber: 172,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex items-center justify-center gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "🌺"
                                }, void 0, false, {
                                    fileName: "[project]/app/graveyard/page.tsx",
                                    lineNumber: 178,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "BLOOM"
                                }, void 0, false, {
                                    fileName: "[project]/app/graveyard/page.tsx",
                                    lineNumber: 179,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/graveyard/page.tsx",
                            lineNumber: 177,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/graveyard/page.tsx",
                        lineNumber: 169,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/graveyard/page.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grave-mound",
                style: {
                    boxShadow: grave.bloomed ? `0 0 20px ${sc.col}44` : undefined
                }
            }, void 0, false, {
                fileName: "[project]/app/graveyard/page.tsx",
                lineNumber: 187,
                columnNumber: 7
            }, this),
            grave.bloomed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grave-flowers",
                children: [
                    "🌸",
                    "🌺",
                    "🌼"
                ].map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "grave-flower-emoji",
                        style: {
                            animationDelay: `${i * 0.3}s`
                        },
                        children: f
                    }, i, false, {
                        fileName: "[project]/app/graveyard/page.tsx",
                        lineNumber: 192,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/graveyard/page.tsx",
                lineNumber: 190,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/graveyard/page.tsx",
        lineNumber: 106,
        columnNumber: 5
    }, this);
}
// ── Add Grave Modal ────────────────────────────────────────────────────────
function AddGraveModal({ onClose, onAdd }) {
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        title: "",
        subject: "",
        dueDate: "",
        status: "missed",
        epitaph: ""
    });
    const submit = ()=>{
        if (!form.title || !form.subject || !form.dueDate) return;
        onAdd({
            ...form,
            dueDate: new Date(form.dueDate)
        });
        onClose();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md px-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-md bg-[#02020a] relative",
            style: {
                border: "1px solid #ff2d7844",
                boxShadow: "0 0 40px #ff2d7811"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-px",
                    style: {
                        background: "linear-gradient(90deg, transparent, #ff2d78, #00f5ff, transparent)"
                    }
                }, void 0, false, {
                    fileName: "[project]/app/graveyard/page.tsx",
                    lineNumber: 211,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between px-5 py-4 border-b border-white/5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-orbitron text-sm font-black text-white tracking-wider",
                            children: "⚰️ ADD TO GRAVEYARD"
                        }, void 0, false, {
                            fileName: "[project]/app/graveyard/page.tsx",
                            lineNumber: 213,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "text-white/30 hover:text-[#ff2d78] transition-colors",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/app/graveyard/page.tsx",
                            lineNumber: 214,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/graveyard/page.tsx",
                    lineNumber: 212,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-5 flex flex-col gap-3",
                    children: [
                        [
                            {
                                label: "ASSIGNMENT TITLE",
                                key: "title",
                                placeholder: "What died today..."
                            },
                            {
                                label: "SUBJECT",
                                key: "subject",
                                placeholder: "Which class claimed it..."
                            },
                            {
                                label: "DUE DATE",
                                key: "dueDate",
                                placeholder: "",
                                type: "date"
                            },
                            {
                                label: "EPITAPH (optional)",
                                key: "epitaph",
                                placeholder: "Last words..."
                            }
                        ].map(({ label, key, placeholder, type })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "font-orbitron text-[0.5rem] tracking-[0.25em] text-[#ff2d7888] mb-1.5 block",
                                        children: [
                                            "> ",
                                            label
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/graveyard/page.tsx",
                                        lineNumber: 224,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: type ?? "text",
                                        className: "modal-input",
                                        placeholder: placeholder,
                                        value: form[key],
                                        onChange: (e)=>setForm({
                                                ...form,
                                                [key]: e.target.value
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/app/graveyard/page.tsx",
                                        lineNumber: 225,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, key, true, {
                                fileName: "[project]/app/graveyard/page.tsx",
                                lineNumber: 223,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "font-orbitron text-[0.5rem] tracking-[0.25em] text-[#ff2d7888] mb-1.5 block",
                                    children: "> STATUS"
                                }, void 0, false, {
                                    fileName: "[project]/app/graveyard/page.tsx",
                                    lineNumber: 230,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        "missed",
                                        "pending",
                                        "submitted"
                                    ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setForm({
                                                    ...form,
                                                    status: s
                                                }),
                                            className: "flex-1 py-2 font-orbitron text-[0.5rem] tracking-widest border transition-all",
                                            style: {
                                                borderColor: form.status === s ? s === "missed" ? "#ff2d78" : s === "pending" ? "#ffaa00" : "#39ff14" : "#ffffff11",
                                                color: form.status === s ? s === "missed" ? "#ff2d78" : s === "pending" ? "#ffaa00" : "#39ff14" : "#ffffff33",
                                                background: form.status === s ? s === "missed" ? "#ff2d7811" : s === "pending" ? "#ffaa0011" : "#39ff1411" : "transparent"
                                            },
                                            children: s.toUpperCase()
                                        }, s, false, {
                                            fileName: "[project]/app/graveyard/page.tsx",
                                            lineNumber: 233,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/graveyard/page.tsx",
                                    lineNumber: 231,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/graveyard/page.tsx",
                            lineNumber: 229,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 mt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    className: "flex-1 py-3 font-orbitron text-[0.58rem] tracking-widest text-white/25 border border-white/10 hover:border-white/20 transition-all",
                                    children: "CANCEL"
                                }, void 0, false, {
                                    fileName: "[project]/app/graveyard/page.tsx",
                                    lineNumber: 246,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: submit,
                                    className: "flex-1 py-3 font-orbitron text-[0.58rem] tracking-widest text-[#ff2d78] border border-[#ff2d78] hover:bg-[#ff2d7811] transition-all",
                                    style: {
                                        boxShadow: "0 0 8px #ff2d7833"
                                    },
                                    children: "BURY IT"
                                }, void 0, false, {
                                    fileName: "[project]/app/graveyard/page.tsx",
                                    lineNumber: 247,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/graveyard/page.tsx",
                            lineNumber: 245,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/graveyard/page.tsx",
                    lineNumber: 216,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/graveyard/page.tsx",
            lineNumber: 210,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/graveyard/page.tsx",
        lineNumber: 209,
        columnNumber: 5
    }, this);
}
function GraveyardPage() {
    const [graves, setGraves] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(SEED_GRAVES);
    const [petals, setPetals] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showModal, setShowModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const petalId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    const spawnPetals = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((burst = false)=>{
        const count = burst ? 60 : 25;
        const newPetals = Array.from({
            length: count
        }, ()=>({
                id: petalId.current++,
                x: randomBetween(0, 100),
                size: randomBetween(burst ? 18 : 14, burst ? 34 : 26),
                color: FLOWER_COLORS[Math.floor(Math.random() * FLOWER_COLORS.length)],
                delay: randomBetween(0, burst ? 0.4 : 0.8),
                duration: randomBetween(3.5, 6.5),
                rotation: randomBetween(0, 360),
                swing: randomBetween(-40, 40),
                shape: FLOWER_SHAPES[Math.floor(Math.random() * FLOWER_SHAPES.length)]
            }));
        setPetals((p)=>[
                ...p,
                ...newPetals
            ]);
        setTimeout(()=>{
            const ids = new Set(newPetals.map((p)=>p.id));
            setPetals((p)=>p.filter((x)=>!ids.has(x.id)));
        }, 8000);
    }, []);
    const handleBloom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        setGraves((prev)=>prev.map((g)=>g._id === id ? {
                    ...g,
                    bloomed: true
                } : g));
        spawnPetals(true);
    }, [
        spawnPetals
    ]);
    const handleAdd = (data)=>{
        setGraves((prev)=>[
                {
                    ...data,
                    _id: Math.random().toString(36).slice(2),
                    bloomed: false,
                    createdAt: new Date()
                },
                ...prev
            ]);
    };
    const filtered = filter === "all" ? graves : graves.filter((g)=>g.status === filter);
    const missedCount = graves.filter((g)=>g.status === "missed").length;
    const pendingCount = graves.filter((g)=>g.status === "pending").length;
    const bloomedCount = graves.filter((g)=>g.bloomed).length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700;900&family=Share+Tech+Mono&display=swap');
        *, *::before, *::after { box-sizing: border-box; }
        .font-orbitron { font-family: 'Orbitron', sans-serif; }
        .font-tech { font-family: 'Share Tech Mono', monospace; }

        .glow-pink  { text-shadow: 0 0 8px #ff2d78, 0 0 20px #ff2d78; }
        .glow-cyan  { text-shadow: 0 0 8px #00f5ff, 0 0 20px #00f5ff; }
        .glow-green { text-shadow: 0 0 8px #39ff14, 0 0 20px #39ff14; }

        /* Fog / mist background */
        .graveyard-bg {
          background: radial-gradient(ellipse at 20% 80%, rgba(255,45,120,0.06) 0%, transparent 50%),
                      radial-gradient(ellipse at 80% 20%, rgba(0,245,255,0.04) 0%, transparent 50%),
                      radial-gradient(ellipse at 50% 100%, rgba(57,255,20,0.04) 0%, transparent 40%),
                      #01010a;
          background-attachment: fixed;
        }

        /* Grid */
        .grid-bg {
          background-image: linear-gradient(rgba(255,45,120,0.025) 1px,transparent 1px),
                            linear-gradient(90deg,rgba(255,45,120,0.025) 1px,transparent 1px);
          background-size: 44px 44px;
        }

        /* Ground strip */
        .ground-strip {
          position: fixed; bottom: 72px; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, transparent, #39ff1433, #ff2d7833, #39ff1433, transparent);
          z-index: 5;
        }

        /* Grave wrapper */
        .grave-wrap {
          display: flex; flex-direction: column; align-items: center;
          transition: transform 0.2s;
        }
        .grave-wrap:hover { transform: translateY(-4px); }

        /* Grave card */
        .grave-card {
          background: linear-gradient(180deg, #0a0415 0%, #060210 100%);
          border: 1px solid #ff2d7833;
          padding: 1rem;
          width: 200px;
          position: relative;
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 0 15px rgba(255,45,120,0.08), inset 0 1px 0 rgba(255,255,255,0.03);
        }
        .grave-hidden { opacity: 0; transform: translateY(60px) scale(0.85); }
        .grave-risen  { opacity: 1; transform: translateY(0) scale(1); }
        .grave-bloomed {
          border-color: #ff2d7888;
          box-shadow: 0 0 25px rgba(255,45,120,0.2), 0 0 50px rgba(255,45,120,0.08);
        }
        .grave-shaking {
          animation: shake 0.5s ease-in-out;
        }
        @keyframes shake {
          0%,100% { transform: translateX(0) rotate(0); }
          20% { transform: translateX(-4px) rotate(-1.5deg); }
          40% { transform: translateX(4px) rotate(1.5deg); }
          60% { transform: translateX(-3px) rotate(-1deg); }
          80% { transform: translateX(3px) rotate(1deg); }
        }

        /* Cross */
        .cross-wrap { position: relative; width: 28px; height: 34px; }
        .cross-v { position: absolute; left: 50%; top: 0; transform: translateX(-50%); width: 4px; height: 100%; border-radius: 2px; }
        .cross-h { position: absolute; top: 35%; left: 0; width: 100%; height: 4px; border-radius: 2px; }
        .bloom-burst {
          position: absolute; inset: -8px; border-radius: 50%;
          background: radial-gradient(circle, #ff2d7844 0%, transparent 70%);
          animation: burst 2s ease-out infinite;
        }
        @keyframes burst { 0%{transform:scale(0.5);opacity:1} 100%{transform:scale(2);opacity:0} }

        /* Grave symbol circle */
        .grave-symbol {
          width: 32px; height: 32px; border-radius: 50%;
          border: 2px solid; display: flex; align-items: center; justify-content: center;
        }

        /* Subject chip */
        .subject-chip {
          font-family: 'Orbitron', sans-serif;
          font-size: 0.42rem; letter-spacing: 0.15em;
          border: 1px solid; padding: 2px 8px; text-align: center;
          margin: 0 auto; display: block; width: fit-content;
        }

        /* Ground crack */
        .ground-crack {
          width: 160px; height: 8px;
          background: linear-gradient(90deg, transparent, rgba(255,45,120,0.3), transparent);
          margin-top: 2px; position: relative;
        }
        .ground-crack::before {
          content: ''; position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
          width: 60%; height: 1px;
          background: linear-gradient(90deg, transparent, #ff2d7888, transparent);
        }

        /* Grave mound */
        .grave-mound {
          width: 180px; height: 18px;
          background: linear-gradient(180deg, #1a0a1a, #0a0510);
          border: 1px solid #ff2d7822; border-top: none;
          border-radius: 0 0 50% 50%;
        }

        /* Flowers on bloomed grave */
        .grave-flowers { display: flex; gap: 4px; margin-top: 4px; }
        .grave-flower-emoji {
          font-size: 14px; animation: flower-bounce 2s ease-in-out infinite;
        }
        @keyframes flower-bounce {
          0%,100% { transform: translateY(0) rotate(-5deg); }
          50% { transform: translateY(-4px) rotate(5deg); }
        }

        /* Bloom button */
        .bloom-btn {
          font-family: 'Orbitron', sans-serif;
          font-size: 0.55rem; letter-spacing: 0.15em;
          padding: 0.55rem; text-transform: uppercase;
          border: 1px solid #ff2d78;
          color: #ff2d78; background: transparent;
          cursor: pointer; transition: all 0.25s;
          box-shadow: 0 0 8px #ff2d7833;
        }
        .bloom-btn:hover:not(:disabled) {
          background: #ff2d7822;
          box-shadow: 0 0 16px #ff2d78, 0 0 30px #ff2d7844;
          transform: scale(1.02);
        }
        .bloom-btn.bloomed {
          border-color: #ff2d7844; color: #ff2d7888;
          cursor: default; box-shadow: none;
          background: #ff2d7808;
        }

        /* Falling petals */
        .petal-container {
          position: fixed; inset: 0; pointer-events: none; z-index: 100; overflow: hidden;
        }
        .falling-petal {
          position: absolute; top: -60px;
          animation: petal-fall linear forwards;
        }
        @keyframes petal-fall {
          0%   { transform: translateY(0) rotate(0deg) translateX(0); opacity: 1; }
          20%  { opacity: 1; }
          80%  { opacity: 0.8; }
          100% { transform: translateY(110vh) rotate(720deg) translateX(var(--swing)); opacity: 0; }
        }

        /* Stat cards */
        .stat-card {
          background: #06060f; border: 1px solid #ff2d7822;
          padding: 1rem 1.25rem; flex: 1;
          transition: border-color 0.3s;
        }
        .stat-card:hover { border-color: #ff2d7855; }

        /* Filter buttons */
        .filter-btn { transition: all 0.2s; cursor: pointer; }

        /* Modal input */
        .modal-input {
          width:100%; background:#03030c; border:1px solid #ff2d7822;
          padding:0.6rem 0.8rem; font-family:'Share Tech Mono',monospace;
          font-size:0.8rem; color:#e0e0ff; outline:none; transition:border-color 0.2s;
          caret-color:#ff2d78;
        }
        .modal-input::placeholder { color:#ffffff18; }
        .modal-input:focus { border-color:#ff2d7855; }
        .modal-input[type="date"] { color-scheme: dark; }

        @keyframes pulse-dot { 0%,100%{opacity:1} 50%{opacity:0.2} }
        .pulse-dot { animation: pulse-dot 1.4s ease-in-out infinite; }
        @keyframes flicker { 0%,95%,100%{opacity:1} 96%{opacity:0.5} 97%{opacity:1} 98%{opacity:0.3} 99%{opacity:1} }
        .flicker { animation: flicker 5s infinite; }

        /* Scrollbar */
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-thumb { background: #ff2d7833; }

        /* Moon */
        .moon {
          position: fixed; top: 80px; right: 60px;
          width: 64px; height: 64px; border-radius: 50%;
          background: radial-gradient(circle at 35% 35%, #fffde0, #ffe57a);
          box-shadow: 0 0 20px #ffe57a88, 0 0 60px #ffe57a33;
          pointer-events: none; z-index: 1;
          animation: moon-glow 4s ease-in-out infinite;
        }
        @keyframes moon-glow { 0%,100%{box-shadow:0 0 20px #ffe57a88,0 0 60px #ffe57a33} 50%{box-shadow:0 0 30px #ffe57acc,0 0 80px #ffe57a55} }

        /* Mist */
        .mist {
          position: fixed; bottom: 68px; left: 0; right: 0; height: 80px;
          background: linear-gradient(to top, rgba(57,255,20,0.04), transparent);
          pointer-events: none; z-index: 4;
        }
      `
            }, void 0, false, {
                fileName: "[project]/app/graveyard/page.tsx",
                lineNumber: 302,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "petal-container",
                children: petals.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "falling-petal",
                        style: {
                            left: `${p.x}%`,
                            animationDuration: `${p.duration}s`,
                            animationDelay: `${p.delay}s`,
                            "--swing": `${p.swing}px`
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                transform: `rotate(${p.rotation}deg)`
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FlowerSVG, {
                                color: p.color,
                                shape: p.shape,
                                size: p.size
                            }, void 0, false, {
                                fileName: "[project]/app/graveyard/page.tsx",
                                lineNumber: 521,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/graveyard/page.tsx",
                            lineNumber: 520,
                            columnNumber: 13
                        }, this)
                    }, p.id, false, {
                        fileName: "[project]/app/graveyard/page.tsx",
                        lineNumber: 513,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/graveyard/page.tsx",
                lineNumber: 511,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "graveyard-bg grid-bg min-h-screen font-tech",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "moon"
                    }, void 0, false, {
                        fileName: "[project]/app/graveyard/page.tsx",
                        lineNumber: 530,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mist"
                    }, void 0, false, {
                        fileName: "[project]/app/graveyard/page.tsx",
                        lineNumber: 533,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ground-strip"
                    }, void 0, false, {
                        fileName: "[project]/app/graveyard/page.tsx",
                        lineNumber: 536,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "sticky top-0 z-40 bg-[#01010a]/95 backdrop-blur-md border-b border-[#ff2d7822] px-4 py-3 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex items-center gap-3 transition-opacity duration-500 ${mounted ? "opacity-100" : "opacity-0"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: "font-orbitron font-black text-sm text-[#00f5ff] glow-cyan flicker tracking-widest",
                                        children: [
                                            "COLLEGE",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#ff2d78] glow-pink",
                                                children: "CHAOS"
                                            }, void 0, false, {
                                                fileName: "[project]/app/graveyard/page.tsx",
                                                lineNumber: 542,
                                                columnNumber: 22
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/graveyard/page.tsx",
                                        lineNumber: 541,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white/20 font-tech text-xs",
                                        children: "/"
                                    }, void 0, false, {
                                        fileName: "[project]/app/graveyard/page.tsx",
                                        lineNumber: 544,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-orbitron text-[0.6rem] tracking-[0.2em] text-[#ff2d78] glow-pink",
                                        children: "GRAVEYARD"
                                    }, void 0, false, {
                                        fileName: "[project]/app/graveyard/page.tsx",
                                        lineNumber: 545,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/graveyard/page.tsx",
                                lineNumber: 540,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowModal(true),
                                className: "font-orbitron text-[0.58rem] tracking-widest px-4 py-2 border border-[#ff2d78] text-[#ff2d78] hover:bg-[#ff2d7811] transition-all",
                                style: {
                                    boxShadow: "0 0 10px #ff2d7833"
                                },
                                children: "+ ADD GRAVE"
                            }, void 0, false, {
                                fileName: "[project]/app/graveyard/page.tsx",
                                lineNumber: 547,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/graveyard/page.tsx",
                        lineNumber: 539,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `px-6 py-8 text-center transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-orbitron text-[0.55rem] tracking-[0.35em] text-[#ff2d78] glow-pink mb-3",
                                children: "// DEADLINE_GRAVEYARD"
                            }, void 0, false, {
                                fileName: "[project]/app/graveyard/page.tsx",
                                lineNumber: 556,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-orbitron font-black text-4xl md:text-5xl text-white tracking-tight leading-none mb-2",
                                children: [
                                    "HERE LIE YOUR",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/app/graveyard/page.tsx",
                                        lineNumber: 558,
                                        columnNumber: 26
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#ff2d78] glow-pink",
                                        children: "DEADLINES"
                                    }, void 0, false, {
                                        fileName: "[project]/app/graveyard/page.tsx",
                                        lineNumber: 559,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/graveyard/page.tsx",
                                lineNumber: 557,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-tech text-sm text-white/25 mt-3",
                                children: "May they rest in the peace you never gave them."
                            }, void 0, false, {
                                fileName: "[project]/app/graveyard/page.tsx",
                                lineNumber: 561,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>spawnPetals(false),
                                className: "mt-4 font-orbitron text-[0.55rem] tracking-[0.2em] px-5 py-2.5 border border-[#ff2d7855] text-[#ff2d78] hover:bg-[#ff2d7811] hover:border-[#ff2d78] transition-all",
                                style: {
                                    boxShadow: "0 0 12px #ff2d7822"
                                },
                                children: "🌸 SHOWER PETALS"
                            }, void 0, false, {
                                fileName: "[project]/app/graveyard/page.tsx",
                                lineNumber: 564,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/graveyard/page.tsx",
                        lineNumber: 555,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex gap-3 px-6 mb-6 max-w-xl mx-auto transition-all duration-500 delay-200 ${mounted ? "opacity-100" : "opacity-0"}`,
                        children: [
                            {
                                label: "BURIED",
                                val: missedCount,
                                col: "#ff2d78"
                            },
                            {
                                label: "PENDING",
                                val: pendingCount,
                                col: "#ffaa00"
                            },
                            {
                                label: "BLOOMED",
                                val: bloomedCount,
                                col: "#ff2d78"
                            },
                            {
                                label: "TOTAL",
                                val: graves.length,
                                col: "#00f5ff"
                            }
                        ].map(({ label, val, col })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "stat-card text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-orbitron text-2xl font-black",
                                        style: {
                                            color: col,
                                            textShadow: `0 0 10px ${col}`
                                        },
                                        children: val
                                    }, void 0, false, {
                                        fileName: "[project]/app/graveyard/page.tsx",
                                        lineNumber: 580,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-orbitron text-[0.42rem] tracking-widest text-white/25 mt-0.5",
                                        children: label
                                    }, void 0, false, {
                                        fileName: "[project]/app/graveyard/page.tsx",
                                        lineNumber: 581,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, label, true, {
                                fileName: "[project]/app/graveyard/page.tsx",
                                lineNumber: 579,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/graveyard/page.tsx",
                        lineNumber: 572,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center gap-2 flex-wrap mb-8 px-4",
                        children: [
                            [
                                "all",
                                "ALL",
                                "#00f5ff"
                            ],
                            [
                                "missed",
                                "💀 MISSED",
                                "#ff2d78"
                            ],
                            [
                                "pending",
                                "⚠️ PENDING",
                                "#ffaa00"
                            ],
                            [
                                "submitted",
                                "✅ SUBMITTED",
                                "#39ff14"
                            ]
                        ].map(([s, l, col])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setFilter(s),
                                className: "filter-btn font-orbitron text-[0.5rem] tracking-widest px-3 py-1.5 border",
                                style: {
                                    borderColor: filter === s ? col : "#ffffff11",
                                    color: filter === s ? col : "#ffffff33",
                                    background: filter === s ? col + "11" : "transparent",
                                    boxShadow: filter === s ? `0 0 8px ${col}44` : "none"
                                },
                                children: l
                            }, s, false, {
                                fileName: "[project]/app/graveyard/page.tsx",
                                lineNumber: 589,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/graveyard/page.tsx",
                        lineNumber: 587,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 pb-32 max-w-6xl mx-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap justify-center gap-6",
                            children: [
                                filtered.map((g, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(GraveCard, {
                                        grave: g,
                                        index: i,
                                        onBloom: handleBloom
                                    }, g._id, false, {
                                        fileName: "[project]/app/graveyard/page.tsx",
                                        lineNumber: 606,
                                        columnNumber: 15
                                    }, this)),
                                filtered.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-20",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-orbitron text-white/15 text-sm tracking-widest",
                                            children: "NO GRAVES HERE"
                                        }, void 0, false, {
                                            fileName: "[project]/app/graveyard/page.tsx",
                                            lineNumber: 610,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-tech text-white/10 text-xs mt-2",
                                            children: "your deadlines are safe... for now"
                                        }, void 0, false, {
                                            fileName: "[project]/app/graveyard/page.tsx",
                                            lineNumber: 611,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/graveyard/page.tsx",
                                    lineNumber: 609,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/graveyard/page.tsx",
                            lineNumber: 604,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/graveyard/page.tsx",
                        lineNumber: 603,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed bottom-0 left-0 right-0 z-40 bg-[#01010a]/95 backdrop-blur-md border-t border-[#ff2d7822]",
                        style: {
                            boxShadow: "0 -4px 30px rgba(255,45,120,0.06)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-px",
                                style: {
                                    background: "linear-gradient(90deg,transparent,#00f5ff55,#ff2d7855,#39ff1455,transparent)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/graveyard/page.tsx",
                                lineNumber: 620,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-around px-2 py-1 max-w-lg mx-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: "group flex flex-col items-center gap-0.5 py-2 px-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "23",
                                                height: "23",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "rgba(255,255,255,0.3)",
                                                strokeWidth: "1.8",
                                                className: "transition-all group-hover:stroke-[#00f5ff] group-hover:scale-110",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/graveyard/page.tsx",
                                                        lineNumber: 624,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                        points: "9 22 9 12 15 12 15 22"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/graveyard/page.tsx",
                                                        lineNumber: 624,
                                                        columnNumber: 75
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/graveyard/page.tsx",
                                                lineNumber: 623,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-orbitron text-[0.4rem] tracking-widest text-white/25 group-hover:text-[#00f5ff] transition-colors",
                                                children: "CANTEEN"
                                            }, void 0, false, {
                                                fileName: "[project]/app/graveyard/page.tsx",
                                                lineNumber: 626,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/graveyard/page.tsx",
                                        lineNumber: 622,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/graveyard",
                                        className: "group flex flex-col items-center gap-0.5 py-2 px-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "23",
                                                height: "23",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "#ff2d78",
                                                strokeWidth: "1.8",
                                                className: "transition-all",
                                                style: {
                                                    filter: "drop-shadow(0 0 6px #ff2d78)"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: "3",
                                                        y: "11",
                                                        width: "18",
                                                        height: "11",
                                                        rx: "1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/graveyard/page.tsx",
                                                        lineNumber: 630,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M12 3v8M8 7l4-4 4 4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/graveyard/page.tsx",
                                                        lineNumber: 630,
                                                        columnNumber: 67
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/graveyard/page.tsx",
                                                lineNumber: 629,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-orbitron text-[0.4rem] tracking-widest",
                                                style: {
                                                    color: "#ff2d78",
                                                    textShadow: "0 0 6px #ff2d78"
                                                },
                                                children: "GRAVEYARD"
                                            }, void 0, false, {
                                                fileName: "[project]/app/graveyard/page.tsx",
                                                lineNumber: 632,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/graveyard/page.tsx",
                                        lineNumber: 628,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowModal(true),
                                        className: "flex flex-col items-center gap-0.5 py-1 px-2 -mt-4 group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-12 h-12 flex items-center justify-center border-2 border-[#ff2d78] bg-[#ff2d7811] group-hover:bg-[#ff2d7822] transition-all group-hover:scale-105",
                                                style: {
                                                    boxShadow: "0 0 12px #ff2d7866"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "22",
                                                    height: "22",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "#ff2d78",
                                                    strokeWidth: "2.2",
                                                    style: {
                                                        filter: "drop-shadow(0 0 6px #ff2d78)"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                            x1: "12",
                                                            y1: "5",
                                                            x2: "12",
                                                            y2: "19"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/graveyard/page.tsx",
                                                            lineNumber: 638,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                            x1: "5",
                                                            y1: "12",
                                                            x2: "19",
                                                            y2: "12"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/graveyard/page.tsx",
                                                            lineNumber: 638,
                                                            columnNumber: 57
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/graveyard/page.tsx",
                                                    lineNumber: 637,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/graveyard/page.tsx",
                                                lineNumber: 635,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-orbitron text-[0.4rem] tracking-widest text-[#ff2d78] mt-0.5",
                                                children: "BURY"
                                            }, void 0, false, {
                                                fileName: "[project]/app/graveyard/page.tsx",
                                                lineNumber: 641,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/graveyard/page.tsx",
                                        lineNumber: 634,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/attendance",
                                        className: "group flex flex-col items-center gap-0.5 py-2 px-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "23",
                                                height: "23",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "rgba(255,255,255,0.3)",
                                                strokeWidth: "1.8",
                                                className: "transition-all group-hover:stroke-[#39ff14] group-hover:scale-110",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/graveyard/page.tsx",
                                                        lineNumber: 645,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                        points: "14 2 14 8 20 8"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/graveyard/page.tsx",
                                                        lineNumber: 645,
                                                        columnNumber: 87
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "16",
                                                        y1: "13",
                                                        x2: "8",
                                                        y2: "13"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/graveyard/page.tsx",
                                                        lineNumber: 645,
                                                        columnNumber: 122
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/graveyard/page.tsx",
                                                lineNumber: 644,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-orbitron text-[0.4rem] tracking-widest text-white/25 group-hover:text-[#39ff14] transition-colors",
                                                children: "ATTENDANCE"
                                            }, void 0, false, {
                                                fileName: "[project]/app/graveyard/page.tsx",
                                                lineNumber: 647,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/graveyard/page.tsx",
                                        lineNumber: 643,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/roast",
                                        className: "group flex flex-col items-center gap-0.5 py-2 px-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "23",
                                                height: "23",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "rgba(255,255,255,0.3)",
                                                strokeWidth: "1.8",
                                                className: "transition-all group-hover:stroke-[#ffaa00] group-hover:scale-110",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                        points: "16 18 22 12 16 6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/graveyard/page.tsx",
                                                        lineNumber: 651,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                        points: "8 6 2 12 8 18"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/graveyard/page.tsx",
                                                        lineNumber: 651,
                                                        columnNumber: 54
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/graveyard/page.tsx",
                                                lineNumber: 650,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-orbitron text-[0.4rem] tracking-widest text-white/25 group-hover:text-[#ffaa00] transition-colors",
                                                children: "ROAST CODE"
                                            }, void 0, false, {
                                                fileName: "[project]/app/graveyard/page.tsx",
                                                lineNumber: 653,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/graveyard/page.tsx",
                                        lineNumber: 649,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/graveyard/page.tsx",
                                lineNumber: 621,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-1"
                            }, void 0, false, {
                                fileName: "[project]/app/graveyard/page.tsx",
                                lineNumber: 656,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/graveyard/page.tsx",
                        lineNumber: 618,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/graveyard/page.tsx",
                lineNumber: 527,
                columnNumber: 7
            }, this),
            showModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$19_$40$open_5a9a74e53b1dfaab6254c8314ff591bf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AddGraveModal, {
                onClose: ()=>setShowModal(false),
                onAdd: handleAdd
            }, void 0, false, {
                fileName: "[project]/app/graveyard/page.tsx",
                lineNumber: 660,
                columnNumber: 21
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=app_graveyard_page_tsx_2df90d0c._.js.map