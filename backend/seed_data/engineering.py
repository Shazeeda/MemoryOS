ENGINEERING_ENTRIES = [
    {
        "title": "Deploying FastAPI to AWS",
        "category": "Engineering",
        "tags": "FastAPI, AWS, Deployment, Backend",
        "content": "Before deploying a FastAPI backend, confirm environment variables, database credentials, and production dependencies are configured correctly. The team should test health checks, API routes, and PostgreSQL connectivity before marking the release complete.",
    },
    {
        "title": "Docker Development Guide",
        "category": "Engineering",
        "tags": "Docker, Containers, Backend, Development",
        "content": "Docker should be used to create consistent development environments across the team. Developers should rebuild containers after dependency changes and verify that local services match production settings as closely as possible.",
    },
    {
        "title": "PostgreSQL Backup Strategy",
        "category": "Engineering",
        "tags": "PostgreSQL, Database, Backup, Recovery",
        "content": "PostgreSQL backups should be scheduled regularly and tested before relying on them in production. Backup files should be stored securely and restoration steps should be documented so the team can recover quickly during an outage.",
    },
    {
        "title": "API Authentication Standards",
        "category": "Engineering",
        "tags": "API, Authentication, JWT, Security",
        "content": "All protected API routes should require authentication before returning user or company data. JWT tokens should be validated on every request and sensitive credentials should never be stored directly in the frontend.",
    },
    {
        "title": "Git Branching Strategy",
        "category": "Engineering",
        "tags": "Git, GitHub, Branching, Code Review",
        "content": "Feature work should be completed on separate branches and merged through pull requests. Each pull request should include a clear description, testing notes, and reviewer approval before being merged into main.",
    },
]