# CrickHero Project Overview
**Version:** 1.0  
**Status:** Active Development (MVP)  
**Owner:** Mohammad Arfaz Shaik  
**Last Updated:** July 2026

---

# 1. Project Vision

CrickHero is a modern mobile application built to simplify cricket scoring, team management, player statistics, and match organization.

The objective is to provide a fast, intuitive, and reliable experience for players, organizers, scorers, and cricket enthusiasts.

The MVP focuses on delivering the minimum feature set required to conduct a complete cricket match digitally.

---

# 2. Mission

Build a production-ready Cricket Scoring application within two weeks while maintaining clean architecture, scalable code, and high development speed.

The project prioritizes:

- Simplicity
- Maintainability
- Scalability
- Learning
- Production readiness

---

# 3. MVP Scope

## Authentication

- OTP Login
- Guest Login
- JWT Authentication
- Auto Login
- Logout

---

## Teams

- Create Team
- Update Team
- Delete Team
- Team Listing

---

## Players

- Add Player
- Edit Player
- Remove Player

---

## Matches

- Create Match
- Select Teams
- Toss
- Playing XI
- Match Settings

---

## Live Scoring

- Runs
- Wickets
- Extras
- Strike Rotation
- Bowling Figures
- Overs

---

## Scoreboard

- Live Score
- Batting Card
- Bowling Card
- Partnership
- Fall of Wickets

---

## Match Summary

- Result
- Winner
- Scorecard
- Statistics

---

# 4. Target Users

Primary Users

- Local Cricket Players
- Tournament Organizers
- Cricket Academies
- Umpires
- Scorers

Secondary Users

- Coaches
- Spectators
- Team Managers

---

# 5. Technology Stack

## Frontend

- React Native
- Expo
- Expo Router
- TypeScript
- React Native Paper

---

## Backend

- Java 21
- Spring Boot
- Spring Security
- Spring Data JPA
- JWT
- REST API

---

## Database

- PostgreSQL

---

## Development Tools

- VS Code
- Git
- GitHub

---

## AI Tools

- ChatGPT
- Google AI Studio
- Perplexity

---

# 6. Architecture Philosophy

The project follows:

Presentation Layer

↓

Business Logic Layer

↓

Data Layer

↓

Database

Each layer should have a single responsibility.

---

# 7. Project Structure

Frontend

app/

components/

src/

hooks/

services/

theme/

assets/

Backend

controller/

service/

repository/

entity/

dto/

config/

security/

exception/

---

# 8. Core Development Principles

1. MVP First

Complete working features before adding polish.

---

2. Keep It Simple

Avoid unnecessary abstractions.

---

3. Reusable Components

Build once.

Reuse everywhere.

---

4. Separation of Concerns

UI should never contain business logic.

Business logic should never contain database logic.

---

5. Official Documentation First

Whenever there is uncertainty:

- JavaScript Official Documentation
- React Official Documentation
- React Native Official Documentation
- Expo Documentation
- React Native Paper Documentation
- Spring Boot Documentation
- Spring Security Documentation

Never rely solely on AI assumptions.

---

# 9. Coding Standards

- TypeScript everywhere
- Meaningful naming
- Small functions
- Reusable components
- Consistent folder structure
- Error handling
- Logging
- Comments only where helpful

---

# 10. AI Collaboration Strategy

Different AI chats have different responsibilities.

## Project Tech Lead

Makes architecture decisions.

---

## Frontend Engineer

Builds React Native features.

---

## Backend Engineer

Builds Spring Boot APIs.

---

## Debugging Specialist

Finds and fixes bugs.

---

## Architecture Specialist

Designs scalable systems.

---

## Learning Mentor

Explains concepts.

---

## Code Reviewer

Reviews code quality.

---

# 11. AI Workflow

Architecture Decision

↓

Implementation

↓

Code Review

↓

Testing

↓

Bug Fix

↓

Merge

---

# 12. Development Rules

Always prefer:

Small commits

↓

Small features

↓

Frequent testing

↓

Frequent reviews

Avoid:

Large rewrites

Premature optimization

Unnecessary libraries

Duplicate code

---

# 13. Security Principles

- JWT Authentication
- Validate every request
- Never trust client input
- Server-side validation
- Secure password and OTP handling
- Proper exception handling

---

# 14. Performance Goals

- Fast app startup
- Responsive UI
- Minimal unnecessary renders
- Efficient API communication
- Lightweight components

---

# 15. Documentation Rules

Every major feature should have:

Purpose

API

Flow

Future improvements

Known limitations

---

# 16. Current MVP Priority

Priority 1

Authentication

Priority 2

Teams

Priority 3

Players

Priority 4

Match Creation

Priority 5

Live Scoring

Priority 6

Scoreboard

Priority 7

Match Summary

---

# 17. Definition of Done

A feature is considered complete only when:

✓ UI Completed

✓ Backend Completed

✓ API Connected

✓ Error Handling Added

✓ Loading State Added

✓ Validation Added

✓ Code Reviewed

✓ Tested

✓ Documentation Updated

---

# 18. Long-Term Vision

After MVP:

- Tournament Management
- Live Streaming Integration
- Push Notifications
- Player Analytics
- AI Match Insights
- Offline Match Scoring
- Multi-language Support
- Admin Dashboard
- Premium Features

---

# 19. Project Success Criteria

The project is successful when:

- Users can complete an entire cricket match digitally.
- Authentication is reliable.
- Live scoring is stable.
- The application is maintainable.
- The architecture supports future growth.
- New developers can understand the project quickly using the documentation.

---

End of Document
Version 1.0