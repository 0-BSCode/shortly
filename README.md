# Project Idea: URL Shortener API

## Overview:

A URL shortener API takes long URLs and converts them into shorter, more manageable links. This project allows you to practice backend development while building a practical application.

## Features:

- URL Shortening: Create short links from long URLs.
- URL Expansion: Retrieve the original URL from a short link.
- Custom Short Links: Allow users to specify their desired short link.
- Click Tracking: Optionally, track the number of clicks on a shortened link.
- API Usage Limits: Implement rate limiting or API keys to prevent abuse.

## Data Model:

### ShortenedUrl:

- short_id (unique identifier)
- original_url (full URL)
- created_at (timestamp)
- click_count (integer, optional)

## API Endpoints:

- POST /shorten: Create a new short link.
- GET /:short_id: Redirect to the original URL or return the original URL.
- GET /stats/:short_id: Retrieve click statistics for a short link (optional).

## Technology Stack:

Backend: Node.js, Express.js
Database: MongoDB (or any preferred database)
Testing: Jest (or any preferred testing framework)

## Additional Considerations:

- Error handling: Handle invalid URLs, duplicate short links, and API rate limits.
- Data validation: Validate input data to prevent malicious URLs.
- Security: Implement measures to protect against URL injection and other vulnerabilities.
- Performance: Optimize the API for speed and scalability.
- This project can be extended to include features like custom domains, branded links, and analytics.

### Notes

1. Setup instructions for husky in Nx: [here](https://www.thisdot.co/blog/linting-formatting-and-type-checking-commits-in-an-nx-monorepo-with-husky)
2. Commitlint setup: [here](https://commitizen.github.io/cz-cli/)
