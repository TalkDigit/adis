const sources = [
    {
        "context": {
            "name": "sitemap:urls",
            "description": "Set with the `sitemap.urls` config."
        },
        "urls": [],
        "sourceType": "user"
    },
    {
        "context": {
            "name": "nuxt:pages",
            "description": "Generated from your static page files.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:pages'] }`."
            ]
        },
        "urls": [
            {
                "loc": "/aboutUs"
            },
            {
                "loc": "/contact"
            },
            {
                "loc": "/exampleModulePage"
            },
            {
                "loc": "/"
            },
            {
                "loc": "/page"
            },
            {
                "loc": "/projects"
            },
            {
                "loc": "/search"
            },
            {
                "loc": "/sitemap.xml"
            }
        ],
        "sourceType": "app"
    }
];

export { sources };
//# sourceMappingURL=global-sources.mjs.map
