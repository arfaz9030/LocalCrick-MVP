# CrickHero Architecture Decision Log (ADR)

**Version:** 1.0
**Status:** Active
**Created:** July 2026

---

# Purpose

This document records all important technical and architectural decisions made during the CrickHero project.

Every significant decision should answer:

- What was decided?
- Why was it decided?
- What alternatives were considered?
- What are the consequences?
- Can this decision change later?

This document is the single source of truth for architectural decisions.

---

# Decision Status

Use one of the following statuses:

- Proposed
- Accepted
- Superseded
- Rejected
- Deprecated

---

# ADR-001

## Title

Use React Native for Mobile Development

### Status

Accepted

### Date

July 2026

### Context

The application is mobile-first and should support Android initially with future iOS support.

### Alternatives

- Flutter
- Native Android
- Kotlin Multiplatform

### Decision

Use React Native.

### Reason

- JavaScript ecosystem
- Large community
- Fast development
- Excellent Expo support
- Easier hiring

### Consequences

Pros

- Faster development
- Shared codebase

Cons

- Native modules occasionally required

---

# ADR-002

## Title

Use Expo Framework

### Status

Accepted

### Context

Need rapid MVP development.

### Alternatives

- React Native CLI

### Decision

Use Expo.

### Reason

- OTA Updates
- Faster setup
- Easier development
- Better developer experience

### Consequences

Pros

- Faster MVP

Cons

- Some native limitations

---

# ADR-003

## Title

Use Expo Router

### Status

Accepted

### Alternatives

- React Navigation

### Decision

Use Expo Router.

### Reason

- Official Expo recommendation
- File-based routing
- Cleaner project organization

### Consequences

Pros

- Less navigation boilerplate
- Easier maintenance

Cons

- Learning curve

---

# ADR-004

## Title

Use React Native Paper

### Status

Accepted

### Alternatives

- NativeBase
- UI Kitten
- React Native Elements

### Decision

React Native Paper

### Reason

- Material Design
- Good documentation
- Strong component library

### Consequences

Pros

- Consistent UI
- Accessible components

Cons

- Material Design look and feel

---

# ADR-005

## Title

Use Spring Boot Backend

### Status

Accepted

### Alternatives

- Node.js
- Django
- Laravel

### Decision

Spring Boot

### Reason

- Existing Java experience
- Mature ecosystem
- Excellent security
- Enterprise-grade

### Consequences

Pros

- Scalable
- Reliable

Cons

- More boilerplate than some alternatives

---

# ADR-006

## Title

Use PostgreSQL

### Status

Accepted

### Alternatives

- MySQL
- MongoDB

### Decision

PostgreSQL

### Reason

- Strong relational support
- ACID compliance
- Excellent indexing
- Mature ecosystem

### Consequences

Pros

- Reliable
- Scalable

Cons

- Slightly steeper learning curve

---

# ADR-007

## Title

OTP Authentication

### Status

Accepted

### Decision

Authenticate users with mobile OTP.

### Reason

- No password management
- Better user experience
- Faster onboarding

Future

JWT authentication after OTP verification.

---

# ADR-008

## Title

Guest Login

### Status

Accepted

### Decision

Allow guest access.

### Reason

Reduce friction.

Allow users to explore before registration.

---

# ADR-009

## Title

Frontend Architecture

### Status

Accepted

### Decision

Feature-first architecture.

Example

app/

components/

services/

hooks/

theme/

assets/

Reason

Simple

Scalable

Easy onboarding

---

# ADR-010

## Title

Backend Architecture

### Status

Accepted

### Decision

Layered Architecture

Controller

↓

Service

↓

Repository

↓

Database

Reason

Separation of concerns.

---

# ADR-011

## Title

Project Documentation

### Status

Accepted

### Decision

Store documentation inside

docs/ai/

Reason

Version controlled.

Lives with code.

Easy onboarding.

---

# ADR-012

## Title

AI Development Strategy

### Status

Accepted

### Decision

Separate AI chats by responsibility.

Tech Lead

Frontend

Backend

Debugging

Architecture

Learning

Reviewer

Reason

Reduce context switching.

Improve AI consistency.

---

# ADR-013

## Title

MVP First

### Status

Accepted

### Decision

Always complete a working feature before polishing UI.

Reason

Shipping is more important than perfection.

---

# ADR-014

## Title

Official Documentation First

### Status

Accepted

### Decision

Whenever uncertainty exists:

- JavaScript documentation
- React documentation
- React Native documentation
- Expo documentation
- React Native Paper documentation
- Spring Boot documentation

Reason

Reduce AI hallucinations.

Increase correctness.

---

# ADR-015

## Title

Code Generation Strategy

### Status

Accepted

### Decision

Use multiple AI tools.

ChatGPT

Architecture

Planning

Reviews

Google AI Studio

Frontend implementation

Teaching

Perplexity

Large code generation

Reason

Use the strengths of each tool.

---

# Future Decisions

The following ADRs will be added later.

- Offline Scoring
- Push Notifications
- Live Streaming
- Match Sync
- Tournament Module
- Admin Dashboard
- Premium Subscription
- Analytics
- Crash Reporting
- CI/CD Pipeline

---

# ADR Template

## ADR-XXX

Title

Status

Date

Context

Alternatives

Decision

Reason

Consequences

Future Considerations

---

End of Document

Version 1.0