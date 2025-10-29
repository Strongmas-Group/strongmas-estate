module.exports = [
"[project]/src/app/blog/data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "blogPosts",
    ()=>blogPosts
]);
const blogPosts = [
    {
        slug: "elysian-rise-in-victoria-island",
        title: "Elysian Rise in Victoria Island: Why Off-Plan Buyers Stand to Gain the Most",
        author: "Strongmas Residence Team",
        date: "August 22, 2025",
        image: "https://res.cloudinary.com/dbczzmftw/image/upload/v1753102780/elysian-rise-facade.jpg",
        metaDescription: "Invest early in Elysian Rise by Strongmas Residence, Victoria Island’s signature high-rise. Enjoy 10–15% annual ROI, 25–45% value growth, and flexible payment options that guarantee future capital appreciation.",
        tags: [
            "Elysian Rise",
            "Strongmas Residence",
            "Victoria Island Real Estate",
            "Off-plan Property Lagos",
            "Luxury Apartments Victoria Island",
            "Property Investment Nigeria"
        ],
        content: `
  <p>In Lagos’ competitive luxury real estate market, good timing determines returns. The most successful investors understand that maximum ROI lie not in waiting for property completion, but in identifying value before the market does. Rising prominently on 3A Musa Yar’Adua Street, Victoria Island, <strong>Elysian Rise</strong> by Strongmas Residence stands as a 13-floor architectural masterpiece — a seamless blend of smart innovation, modern design, and wealth-building potential.</p>
  
  <h2>Appreciation that Outperforms the Market</h2>
  <p>Positioned in one of Lagos’ most exclusive districts, Elysian Rise enjoys the unrivaled advantage of Victoria Island’s limited land availability and enduring demand. Properties in this location record a 10–15% location-driven ROI annually, driven by the area’s dual reputation as a corporate hub and lifestyle destination.</p>
  <p>By buying into Elysian Rise at the off-plan stage, investors benefit from today’s pricing while capturing an additional 5–15% value gain during construction. This compound appreciation positions early buyers for exponential returns as the project nears completion.</p>
  
  <img src="https://res.cloudinary.com/dbczzmftw/image/upload/v1753102780/elysian-rise-rooftop.jpg" alt="elysian-rise-rooftop-pool-victoria-island" class="rounded-2xl my-8" />
  
  <h2>Early Investment, Elevated Returns</h2>
  <p>With Lagos’ premium real estate market appreciating 25–45% annually, each delay in acquisition can mean millions lost in unrealized gains. Early buyers at Elysian Rise are perfectly positioned to leverage both construction-stage appreciation and post-completion demand surge.</p>
  
  <h2>Crafted for Luxury, Designed for Longevity</h2>
  <p>Elysian Rise by Strongmas Residence redefines luxury through technological precision and timeless design. The development integrates AI-powered smart automation, EV charging stations, rooftop infinity pools, private cinemas, play zones, clubhouse lounges, concierge and spa facilities — all within a fully powered, secure environment.</p>
  
  <img src="https://res.cloudinary.com/dbczzmftw/image/upload/v1753102780/elysian-rise-night.jpg" alt="elysian-rise-night-view-victoria-island" class="rounded-2xl my-8" />
  
  <h2>Flexible Payment. Lasting Leverage.</h2>
  <p>With an initial 40% deposit and balance spread across 12–18 months, buyers secure high-value assets without overextending liquidity. Compared to ready-to-move properties demanding full payment upfront, off-plan ownership at Elysian Rise creates a built-in hedge against inflation and price escalation.</p>
  
  <h2>Now Selling — Few Units Available</h2>
  <p>Timing is everything in real estate, and the window to buy at today’s prices is closing quickly. With construction advancing rapidly and limited units remaining, those who hesitate risk paying significantly higher rates upon completion.</p>
  
  <p><strong>Elysian Rise:</strong> Where Vision Becomes Structure.</p>
  
  <p><em>Call +234 802 894 0857, +234 901 077 7777 or visit <a href="https://www.strongmasresidence.com/elysianrise" target="_blank">www.strongmasresidence.com/elysianrise</a> to book a private or virtual property tour.</em></p>
      `
    }
];
}),
"[project]/src/app/blog/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlogPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$blog$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/blog/data.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function BlogPage() {
    const post = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$blog$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blogPosts"][0]; // show only this one blog
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-16 px-6 md:px-16",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-5xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-bold mb-8 text-gray-800",
                        children: "Our Insights"
                    }, void 0, false, {
                        fileName: "[project]/src/app/blog/page.tsx",
                        lineNumber: 15,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 gap-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: post.image,
                                    alt: post.title,
                                    width: 700,
                                    height: 450,
                                    className: "rounded-2xl w-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/blog/page.tsx",
                                    lineNumber: 18,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/blog/page.tsx",
                                lineNumber: 17,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-semibold text-gray-900 mb-3",
                                        children: post.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/blog/page.tsx",
                                        lineNumber: 27,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-700 mb-6",
                                        children: post.metaDescription
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/blog/page.tsx",
                                        lineNumber: 30,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/blog/${post.slug}`,
                                        className: "text-blue-600 font-medium hover:underline",
                                        children: "Read More →"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/blog/page.tsx",
                                        lineNumber: 33,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/blog/page.tsx",
                                lineNumber: 26,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/blog/page.tsx",
                        lineNumber: 16,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/blog/page.tsx",
                lineNumber: 14,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/blog/page.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/blog/page.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_app_blog_368a6d2d._.js.map