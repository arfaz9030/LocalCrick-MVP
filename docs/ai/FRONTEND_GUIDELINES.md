# CrickHero Frontend Guidelines

Version: 1.0

Status: Active

Platform: React Native + Expo

---

# Purpose

This document defines the frontend architecture, development rules,
component standards, navigation conventions and UI principles for
the CrickHero mobile application.

Every frontend developer and AI assistant must follow these guidelines.

---

# Tech Stack

Framework

- React Native

Application Framework

- Expo

Navigation

- Expo Router

Language

- TypeScript

UI Library

- React Native Paper

State

- React Hooks

Backend Communication

- Fetch API

---

# Frontend Philosophy

Build simple.

Build reusable.

Build predictable.

Avoid unnecessary abstraction.

Finish MVP before polishing.

---

# Folder Structure

app/

components/

features/

hooks/

services/

theme/

constants/

types/

utils/

assets/

Do NOT place business logic inside app/.

---

# Expo Router Guidelines

Use Expo Router as the official navigation system.

Rules

- Every screen belongs inside app/
- Every route exports one default component.
- Use route groups like (tabs) and (auth).
- Keep _layout.tsx focused on navigation and providers.
- Do not place reusable UI inside app/.

---

# Component Structure

Each component should have one responsibility.

Example

PlayerCard

Responsible only for displaying player information.

NOT

Fetching player data

Navigation

Business calculations

---

# Screen Responsibilities

Screens should:

- Compose UI
- Call hooks
- Trigger services
- Handle navigation

Screens should NOT:

- Contain API logic
- Perform database logic
- Contain reusable business rules

---

# Hooks

Custom hooks belong inside:

hooks/

Examples

useAuth()

useTeams()

useMatch()

useScore()

Rules

Hooks should:

- Encapsulate logic
- Be reusable
- Never render UI

---

# API Layer

Every backend request goes through:

services/

Never call fetch directly from UI components.

Good

Screen

↓

Service

↓

API

Bad

Screen

↓

fetch()

---

# Theme

All colors must come from

theme/

Never hardcode colors.

Use centralized:

Colors

Typography

Spacing

Border Radius

Elevation

---

# Styling

Use

StyleSheet.create()

for component styles.

Prefer shared spacing and typography tokens.

Avoid duplicate styles.

---

# Component Naming

PascalCase

Examples

TeamCard

PlayerTile

MatchHeader

OTPInput

PhoneInput

---

# File Naming

Components

PascalCase.tsx

Hooks

useSomething.ts

Services

authService.ts

teamService.ts

Utilities

camelCase.ts

---

# Props

Always define props using interfaces or types.

Avoid any.

Prefer explicit typing.

---

# State Management

Keep state local whenever possible.

Use custom hooks for shared logic.

Avoid unnecessary global state.

---

# Forms

Every form should include:

- Validation
- Loading state
- Error state
- Success feedback

---

# Loading States

Never leave users wondering.

Use:

ActivityIndicator

Skeleton

Button loading

Progress indicator

---

# Error Handling

Always display user-friendly messages.

Never expose backend exceptions.

---

# React Native Paper

Use Paper components whenever suitable.

Examples

Button

TextInput

Card

Dialog

Snackbar

FAB

Maintain a consistent Material Design experience.

---

# Accessibility

Every interactive component should include:

- Accessibility label (where appropriate)
- Readable text
- Sufficient touch target
- Color contrast

---

# Performance

Avoid unnecessary re-renders.

Memoize only when it provides measurable value.

Keep components focused and lightweight.

---

# Navigation

Use:

router.push()

router.replace()

router.back()

Avoid deeply nested navigation logic.

---

# TypeScript

Strict typing required.

Avoid:

any

Prefer:

interfaces

type aliases

readonly where applicable

---

# Reusable Components

Before creating a new component ask:

Can this be reused?

If yes

Extract it.

---

# Logging

Temporary console logs only during debugging.

Remove unnecessary logs before merging.

---

# Testing Checklist

Before marking a frontend feature complete:

- UI works
- Validation works
- Loading works
- Error handling works
- Navigation works
- API integration works
- TypeScript passes
- No unused imports

---

# Code Review Checklist

Frontend reviewers verify:

- Follows component structure
- Uses theme
- No duplicated code
- No hardcoded values
- Correct navigation
- Proper TypeScript
- Responsive layout
- API contract followed

---

# AI Rules

When generating frontend code:

Always:

- Follow Expo Router conventions.
- Use TypeScript.
- Use React Native Paper where appropriate.
- Follow CODING_STANDARDS.md.
- Follow API_CONTRACT.md.

Never:

- Introduce a new state-management library without approval.
- Change navigation architecture.
- Hardcode API URLs.
- Duplicate business logic.

---

# Future Enhancements

Potential future additions:

- Redux Toolkit
- React Query
- Offline caching
- Dark theme
- Localization
- Push notifications
- Accessibility audit

---

# References

Follow official documentation for:

- React
- React Native
- Expo
- Expo Router
- React Native Paper
- TypeScript

When project rules conflict with examples, follow this project's documented standards unless a change is intentionally approved.

---

End of Document

Version 1.0