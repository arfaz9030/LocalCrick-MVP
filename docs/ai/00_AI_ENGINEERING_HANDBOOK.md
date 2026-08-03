# 00_AI_ENGINEERING_HANDBOOK.md

Version: 1.0

Status: Active

Project: CrickHero

---

# 1. Purpose

This document is the Engineering Constitution for the CrickHero project.

It defines:

- Engineering governance
- AI operating principles
- Development workflows
- Documentation hierarchy
- Document priority
- Project-wide engineering rules

This handbook does NOT replace any existing project documentation.

Instead, it tells developers and AI assistants:

- Which document to read
- When to read it
- How to use it
- Which document becomes the source of truth for a particular task

All implementation details remain inside their dedicated Markdown documents.

---

# 2. Scope

This handbook applies to every engineering activity including:

- Frontend development
- Backend development
- Full-stack development
- Feature implementation
- API integration
- Debugging
- Refactoring
- Code review
- Documentation
- Testing
- Architecture decisions

It also applies to every AI assistant including (but not limited to):

- ChatGPT
- Google AI Studio
- Gemini
- Claude
- Cursor
- Windsurf
- Perplexity
- DeepSeek
- GitHub Copilot
- Any future AI coding assistant

---

# 3. Target Audience

This handbook is intended for:

- Software Engineers
- Frontend Developers
- Backend Developers
- Full Stack Developers
- Technical Leads
- Software Architects
- Code Reviewers
- QA Engineers
- AI Coding Assistants
- Future contributors to the CrickHero project

---

# 4. Engineering Philosophy

Every engineering decision should support these principles.

## Simplicity First

Prefer simple solutions over complex abstractions.

---

## MVP First

Deliver working features before adding enhancements.

---

## Reuse Before Create

Always inspect the existing codebase before creating new:

- Components
- Hooks
- Services
- Utilities
- DTOs
- Models
- APIs

Avoid duplication.

---

## Preserve Architecture

Do not change project architecture unless explicitly instructed or documented in DECISIONS.md.

---

## Minimum Safe Change

Every modification should:

- solve only the requested problem
- preserve existing functionality
- minimize regression risk
- avoid unnecessary refactoring

---

## Documentation Driven Development

Project documentation is the primary source of truth.

Never rely solely on AI assumptions.

---

# 5. Documentation Hierarchy

The project documentation is intentionally separated by responsibility.

Each document owns one domain.

```
00_AI_ENGINEERING_HANDBOOK.md
│
├── PROJECT_OVERVIEW.md
├── AI_PROJECT_CONTEXT.md
├── CURRENT_STATUS.md
├── API_CONTRACT.md
├── BACKEND_GUIDELINES.md
├── FRONTEND_GUIDELINES.md
├── UI_DESIGN_SYSTEM.md
├── CODING_STANDARDS.md
├── DECISIONS.md
├── MASTER_CHECKLIST.md
├── ROADMAP.md
├── GIT_WORKFLOW.md
├── AI_PROMPTS.md
└── AI_MENTOR_SYSTEM_PROMPT.md
```

The Engineering Handbook governs all documents.

The remaining documents remain the implementation source of truth.

---

# 6. Document Responsibilities

Every document has a single responsibility.

## PROJECT_OVERVIEW.md

Explains:

- Vision
- Scope
- Architecture overview
- Technology stack
- Long-term direction

---

## AI_PROJECT_CONTEXT.md

Contains permanent project context that AI should remember while working on the project.

---

## CURRENT_STATUS.md

Tracks:

- Current progress
- Active development
- Pending work
- Known blockers

---

## API_CONTRACT.md

Defines:

- Endpoints
- Request models
- Response models
- Validation rules
- HTTP methods

This is the only source of truth for API communication.

---

## FRONTEND_GUIDELINES.md

Defines:

- React Native architecture
- Expo Router conventions
- Component structure
- Frontend workflows
- UI implementation rules

---

## BACKEND_GUIDELINES.md

Defines:

- Spring Boot architecture
- Controllers
- Services
- Repositories
- Security
- Backend implementation rules

---

## UI_DESIGN_SYSTEM.md

Defines:

- Colors
- Typography
- Spacing
- Radius
- Elevation
- Visual consistency
- Design tokens

---

## CODING_STANDARDS.md

Defines:

- Naming conventions
- Formatting
- Logging
- Code organization
- Best practices

---

## DECISIONS.md

Contains approved architecture decisions.

Never contradict this document without explicit approval.

---

## MASTER_CHECKLIST.md

Tracks feature completion.

Not implementation details.

---

## ROADMAP.md

Defines future enhancements.

Does not override current implementation.

---

## GIT_WORKFLOW.md

Defines:

- Branching
- Commit strategy
- Merge workflow

---

## AI_PROMPTS.md

Contains reusable prompts for common engineering tasks.

---

## AI_MENTOR_SYSTEM_PROMPT.md

Optional mentoring resource.

Used only when learning, teaching or detailed explanations are requested.

It is NOT a replacement for engineering standards.

---

# 7. Document Priority Order

If two documents appear to conflict, use the following order.

Priority 1

Latest explicit user instruction

↓

Priority 2

00_AI_ENGINEERING_HANDBOOK.md

↓

Priority 3

API_CONTRACT.md

↓

Priority 4

DECISIONS.md

↓

Priority 5

BACKEND_GUIDELINES.md

FRONTEND_GUIDELINES.md

↓

Priority 6

UI_DESIGN_SYSTEM.md

↓

Priority 7

CODING_STANDARDS.md

↓

Priority 8

CURRENT_STATUS.md

↓

Priority 9

MASTER_CHECKLIST.md

↓

Priority 10

ROADMAP.md

↓

Priority 11

PROJECT_OVERVIEW.md

↓

Priority 12

AI_PROJECT_CONTEXT.md

↓

Priority 13

AI_PROMPTS.md

↓

Priority 14

AI_MENTOR_SYSTEM_PROMPT.md

Whenever uncertainty exists, prefer the higher-priority document.

---

# 8. AI Operating Principles

Every AI assistant working on this project must:

- Read this handbook first.
- Determine the task category.
- Read only the documents required for that task.
- Reuse existing implementation whenever possible.
- Preserve architecture.
- Follow project documentation.
- Generate production-quality code.
- Make the minimum safe change.
- Review its own output before completion.

AI must NEVER:

- Invent APIs.
- Invent request fields.
- Invent response fields.
- Invent database schema.
- Rewrite unrelated files.
- Ignore project documentation.
- Replace architecture without approval.

---

# 9. AI Task Router

Every request should first be classified.

```
User Request
      │
      ▼
Determine Task Type
      │
      ├──────────────┬──────────────┬─────────────┐
      │              │              │             │
      ▼              ▼              ▼             ▼
 Frontend        Backend       Full Stack     Documentation
      │              │              │             │
      ▼              ▼              ▼             ▼
 Read Required Project Documents
      │
      ▼
 Review Existing Implementation
      │
      ▼
 Create Implementation Plan
      │
      ▼
 Generate Code
      │
      ▼
 Self Review
      │
      ▼
 Definition of Done
```

## Frontend Tasks

Read:

- FRONTEND_GUIDELINES.md
- UI_DESIGN_SYSTEM.md
- API_CONTRACT.md (if APIs are involved)
- CODING_STANDARDS.md

---

## Backend Tasks

Read:

- BACKEND_GUIDELINES.md
- API_CONTRACT.md
- CODING_STANDARDS.md

---

## Full Stack Tasks

Read:

- FRONTEND_GUIDELINES.md
- BACKEND_GUIDELINES.md
- API_CONTRACT.md
- UI_DESIGN_SYSTEM.md
- CODING_STANDARDS.md

---

## Debugging

Read:

- CURRENT_STATUS.md
- Relevant guideline document
- DECISIONS.md (if architecture is involved)

---

## Code Review

Read:

- CODING_STANDARDS.md
- Relevant guideline
- DECISIONS.md

---

## Documentation Tasks

Read:

- Existing documentation
- CURRENT_STATUS.md
- MASTER_CHECKLIST.md

Update only the affected documents.

---

# 10. AI Startup Checklist

Before generating any implementation:

□ Read the Engineering Handbook.

□ Determine the task category.

□ Read the required project documents.

□ Review existing implementation.

□ Identify affected files.

□ Confirm API requirements.

□ Confirm architecture.

□ Create a brief implementation plan.

□ Generate the minimum safe change.

□ Perform a self-review.

□ Validate against the Definition of Done checklist before completing the task.

---
# 11. Frontend Development Workflow

Every frontend implementation must follow this workflow.

```
Requirement
      │
      ▼
Read Engineering Handbook
      │
      ▼
Read FRONTEND_GUIDELINES.md
      │
      ▼
Read UI_DESIGN_SYSTEM.md
      │
      ▼
Read API_CONTRACT.md
(if API integration is required)
      │
      ▼
Review Existing Components
      │
      ▼
Reuse Existing Components
      │
      ▼
Create Implementation Plan
      │
      ▼
Generate Minimum Safe Change
      │
      ▼
Self Review
      │
      ▼
Definition of Done
```

## Frontend Rules

Always:

- Preserve navigation.
- Preserve existing architecture.
- Reuse existing hooks.
- Reuse existing services.
- Use centralized design tokens.
- Follow TypeScript best practices.
- Follow React Native Paper conventions where appropriate.

Never:

- Hardcode colors.
- Hardcode spacing.
- Duplicate components.
- Duplicate business logic.
- Call APIs directly from UI components.
- Rewrite unrelated screens.

---

# 12. Backend Development Workflow

Every backend implementation must follow this workflow.

```
Requirement
      │
      ▼
Read Engineering Handbook
      │
      ▼
Read BACKEND_GUIDELINES.md
      │
      ▼
Read API_CONTRACT.md
      │
      ▼
Review Existing Implementation
      │
      ▼
Reuse Existing Services
      │
      ▼
Create Implementation Plan
      │
      ▼
Generate Minimum Safe Change
      │
      ▼
Self Review
      │
      ▼
Definition of Done
```

## Backend Rules

Always:

- Preserve existing architecture.
- Follow layered architecture.
- Follow DTO conventions.
- Validate requests.
- Handle exceptions.
- Follow API contract exactly.

Never:

- Invent endpoints.
- Invent request models.
- Invent response models.
- Skip validation.
- Place business logic inside controllers.
- Access the database directly from controllers.

---

# 13. Feature Development Workflow

Every feature must begin with an impact analysis.

## Step 1 – Understand the Requirement

Determine:

- Business objective
- Functional requirements
- Acceptance criteria
- Constraints

Do not implement until the requirement is understood.

---

## Step 2 – Feature Impact Analysis

Determine whether the feature affects:

- Frontend
- Backend
- API Contract
- Database
- Authentication
- Navigation
- State Management
- Existing Components
- Existing Services
- Existing Tests
- Documentation

Update only the affected layers.

---

## Step 3 – Read Required Documentation

Read only the relevant documents identified by the AI Task Router.

---

## Step 4 – Review Existing Code

Before writing code:

- Search for reusable components.
- Search for reusable services.
- Search for reusable hooks.
- Search for similar implementations.

Reuse before creating.

---

## Step 5 – Implementation

Implement only the requested functionality.

Preserve all unrelated functionality.

---

## Step 6 – Validation

Verify:

- Compilation
- API integration
- Navigation
- Validation
- Error handling
- Loading states

---

## Step 7 – Documentation

If the feature changes project behavior:

Update the relevant documentation.

---

# 14. Debugging Workflow

Never guess.

Always identify the root cause.

```
Bug Report
      │
      ▼
Reproduce Issue
      │
      ▼
Collect Logs
      │
      ▼
Inspect Existing Code
      │
      ▼
Identify Root Cause
      │
      ▼
Confirm Root Cause
      │
      ▼
Implement Fix
      │
      ▼
Regression Check
      │
      ▼
Definition of Done
```

## Debugging Rules

Always:

- Explain the root cause.
- Fix the cause, not the symptom.
- Preserve existing functionality.
- Add logging only where necessary.
- Remove temporary debug logs before completion.

Never:

- Guess.
- Rewrite unrelated code.
- Ignore reproducibility.

---

# 15. Code Review Workflow

Every implementation should undergo a self-review before completion.

```
Implementation
      │
      ▼
Coding Standards
      │
      ▼
Architecture Review
      │
      ▼
API Review
      │
      ▼
Performance Review
      │
      ▼
Security Review
      │
      ▼
Documentation Review
      │
      ▼
Approve
```

## Review Checklist

Verify:

- Architecture preserved
- API contract followed
- Coding standards followed
- Existing code reused
- Type safety
- Error handling
- Logging
- Documentation updates
- No unnecessary refactoring

---

# 16. Refactoring Workflow

Refactor only when it provides measurable value.

```
Identify Duplication
      │
      ▼
Confirm Safe Refactoring
      │
      ▼
Assess Impact
      │
      ▼
Perform Minimal Refactoring
      │
      ▼
Regression Check
```

## Refactoring Rules

Always:

- Preserve behavior.
- Preserve APIs.
- Preserve architecture.
- Keep changes minimal.

Never:

- Rewrite the application.
- Change public behavior unexpectedly.
- Refactor unrelated modules.

---

# 17. Documentation Workflow

Documentation should evolve with the project.

Whenever implementation changes:

Determine whether documentation must also be updated.

Possible documents:

- CURRENT_STATUS.md
- API_CONTRACT.md
- FRONTEND_GUIDELINES.md
- BACKEND_GUIDELINES.md
- UI_DESIGN_SYSTEM.md
- CODING_STANDARDS.md
- MASTER_CHECKLIST.md
- ROADMAP.md

Update only the affected documents.

Never duplicate information across multiple documents.

---

# 18. Git Workflow Integration

Every engineering task should align with the project's Git workflow.

Recommended flow:

```
Requirement
      │
      ▼
Implementation
      │
      ▼
Self Review
      │
      ▼
Testing
      │
      ▼
Documentation Update
      │
      ▼
Commit
      │
      ▼
Push
      │
      ▼
Pull Request
      │
      ▼
Review
      │
      ▼
Merge
```

## Git Rules

- Keep commits focused.
- Use meaningful commit messages.
- Avoid mixing unrelated changes.
- Update documentation before merging.
- Ensure code is review-ready before creating a pull request.

---

End of Batch 2
# 19. Mandatory Engineering Rules

The following rules are mandatory for every engineering task.

These rules apply to:

- Frontend
- Backend
- Full Stack
- Debugging
- Refactoring
- Documentation
- Code Review

Violation of these rules should be treated as an engineering defect.

---

## 19.1 Read Before Writing

Always:

1. Read the Engineering Handbook.
2. Determine the task category.
3. Read the required project documents.
4. Review existing implementation.

Never generate code without understanding the existing project.

---

## 19.2 Reuse Before Create

Always inspect existing:

- Components
- Hooks
- Services
- Utilities
- DTOs
- Entities
- Configurations

Reuse existing implementation whenever possible.

Never duplicate code.

---

## 19.3 Minimum Safe Change

Only modify what is required.

Avoid:

- Large rewrites
- Unnecessary refactoring
- Architecture changes
- Feature creep

Small changes reduce regression risk.

---

## 19.4 Preserve Architecture

Never change:

- Folder structure
- Layered architecture
- Navigation architecture
- Service architecture
- API architecture

Unless explicitly instructed or approved.

---

## 19.5 Existing Functionality

Every implementation must preserve:

- Existing UI
- Existing APIs
- Existing navigation
- Existing business rules

New features must never break completed features.

---

## 19.6 Documentation First

Whenever project documentation defines behavior:

Follow the documentation.

Do not replace documented standards with AI assumptions.

---

## 19.7 Official Documentation Verification

Whenever project documentation does not explicitly define behavior:

Verify using official documentation.

Examples:

- Java
- Spring Boot
- Spring Security
- JavaScript
- TypeScript
- React
- React Native
- Expo
- Expo Router
- React Native Paper

Never invent undocumented behavior.

---

# 20. API Contract Rules

API_CONTRACT.md is the single source of truth for every API.

Every AI assistant must follow it exactly.

---

## Always

Use:

- Existing endpoints
- Existing request models
- Existing response models
- Existing validation rules
- Existing HTTP methods

---

## Never

Never invent:

- APIs
- Endpoints
- DTOs
- Request fields
- Response fields
- Error formats
- Headers
- Query parameters

---

## Missing APIs

If an API does not exist:

DO NOT invent one.

Instead:

1. Inform the developer.
2. Recommend updating API_CONTRACT.md.
3. Wait for approval before implementation.

---

## API Changes

Whenever an API changes:

Update:

- API_CONTRACT.md
- CURRENT_STATUS.md
- MASTER_CHECKLIST.md

---

# 21. Authentication & JWT Rules

Authentication is security-critical.

Never assume authentication behavior.

Always follow documented implementation.

---

## Authentication

Authentication should remain centralized.

Never duplicate authentication logic.

---

## JWT

Never:

- Hardcode JWT tokens
- Log JWT tokens
- Modify JWT payload structure
- Change expiration rules
- Change authentication flow

Without explicit approval.

---

## Authorization

Always verify:

- User identity
- Roles
- Permissions

On the server side.

Never trust client-side authorization.

---

## Protected APIs

Protected endpoints must always:

- Validate JWT
- Validate permissions
- Validate request data

Before business logic executes.

---

## Logout

Logout should:

- Clear local authentication state
- Remove cached authentication information
- Prevent unauthorized access

---

# 22. Coding Standards

Always follow:

CODING_STANDARDS.md

The following principles are mandatory.

---

## Readability

Code should be understandable.

Prefer:

- Small methods
- Clear naming
- Simple logic

---

## Naming

Use meaningful names.

Avoid abbreviations.

Examples:

Good

createTeam()

Bad

crtTm()

---

## Type Safety

Prefer explicit types.

Avoid:

any

Unless absolutely necessary.

---

## Single Responsibility

One class.

One responsibility.

One component.

One purpose.

---

## Comments

Explain:

WHY

Not WHAT.

Good code should explain itself.

---

## Clean Code

Remove:

- Dead code
- Unused imports
- Duplicate logic
- Obsolete comments

---

# 23. Logging Standards

Logging exists to diagnose problems.

Not to expose sensitive information.

---

## Log

Appropriate:

- Errors
- Warnings
- Important events
- Debug information (temporary)

---

## Never Log

- Passwords
- JWT Tokens
- OTP values
- Personal information
- Secrets
- API Keys

---

## Debug Logs

Temporary debug logs should be removed before completion.

---

## Log Messages

Logs should explain:

- What happened
- Where
- Why (if known)

Avoid meaningless logs.

Bad

```
Error
```

Good

```
Failed to create team because validation failed.
```

---

# 24. Error Handling Standards

Every application layer must handle errors gracefully.

---

## Frontend

Always provide:

- Loading state
- Error state
- Retry path (where appropriate)

Never expose backend exceptions directly.

---

## Backend

Always:

- Validate input
- Throw meaningful exceptions
- Return documented responses
- Log unexpected failures

---

## Error Messages

Messages should help users.

Never expose:

- Stack traces
- Internal implementation
- Database details

---

## Exception Handling

Catch only what you can handle.

Allow global exception handlers to manage unexpected failures.

---

# 25. Security Principles

Security is never optional.

---

## Validate Everything

Validate:

- Input
- Authentication
- Authorization
- Business rules

Never trust client data.

---

## Least Privilege

Grant only the permissions required.

---

## Secrets

Never:

- Hardcode secrets
- Commit secrets
- Log secrets

Use secure configuration.

---

## Sensitive Data

Protect:

- Passwords
- Tokens
- OTPs
- User information

Throughout the application.

---

## Security Reviews

Every authentication or authorization change should receive additional review.

---

# 26. Performance Principles

Performance optimization should be evidence-based.

Never optimize prematurely.

---

## Frontend

Prefer:

- Reusable components
- Efficient rendering
- Memoization only when justified
- Centralized theme tokens

Avoid unnecessary renders.

---

## Backend

Prefer:

- Efficient queries
- Proper pagination
- Efficient validation
- Appropriate caching

When justified.

---

## APIs

Avoid:

- Over-fetching
- Under-fetching
- Duplicate requests

Return only required data.

---

## General Principles

Measure first.

Optimize second.

Never sacrifice maintainability for premature optimization.

---

End of Batch 3
# 27. Definition of Ready (DoR)

A feature, bug fix, refactoring, or enhancement is considered **Ready** only when all required information is available before implementation begins.

Never start implementation if critical information is missing.

---

## Definition of Ready Checklist

Before writing any code, confirm:

☐ Business requirement is understood.

☐ Acceptance criteria are defined.

☐ Task category has been identified.

☐ Relevant project documents have been reviewed.

☐ Existing implementation has been inspected.

☐ API requirements are confirmed.

☐ UI requirements are confirmed.

☐ Architecture impact has been identified.

☐ Dependencies are understood.

☐ Required files have been identified.

☐ No conflicting architectural decisions exist.

☐ Implementation plan has been prepared.

---

## If Requirements Are Missing

Do NOT guess.

Instead:

1. Explain what information is missing.
2. Ask for clarification.
3. Recommend updating the relevant documentation if necessary.

Never invent missing requirements.

---

# 28. Definition of Done (DoD)

A task is complete only when every applicable checklist item has been satisfied.

Implementation alone does NOT mean completion.

---

## Frontend

☐ UI completed.

☐ Responsive layout verified.

☐ Theme tokens used.

☐ Loading state added.

☐ Error state added.

☐ Validation completed.

☐ Navigation verified.

☐ Existing screens unaffected.

---

## Backend

☐ Business logic completed.

☐ Validation implemented.

☐ Exception handling completed.

☐ Security verified.

☐ API contract followed.

☐ Logging implemented appropriately.

---

## API

☐ Request matches API_CONTRACT.md.

☐ Response matches API_CONTRACT.md.

☐ Status codes verified.

☐ Validation rules implemented.

---

## Code Quality

☐ Existing code reused.

☐ No duplication.

☐ No unused imports.

☐ No dead code.

☐ Coding standards followed.

☐ Architecture preserved.

---

## Documentation

If implementation changes behavior:

☐ CURRENT_STATUS.md updated.

☐ MASTER_CHECKLIST.md updated.

☐ API_CONTRACT.md updated (if required).

☐ FRONTEND_GUIDELINES.md updated (if required).

☐ BACKEND_GUIDELINES.md updated (if required).

☐ UI_DESIGN_SYSTEM.md updated (if required).

---

## Final Verification

☐ Self-review completed.

☐ No regression introduced.

☐ Ready for merge.

---

# 29. Testing Expectations

Every implementation should be verified before completion.

Testing requirements depend on the task.

---

## Frontend Testing

Verify:

☐ Screen renders.

☐ Navigation works.

☐ Validation works.

☐ API calls succeed.

☐ Loading state behaves correctly.

☐ Error state behaves correctly.

☐ Theme consistency maintained.

☐ No unnecessary re-renders observed.

---

## Backend Testing

Verify:

☐ Endpoint responds correctly.

☐ Validation works.

☐ Authorization works.

☐ Exception handling works.

☐ Database interaction works.

☐ Logging behaves correctly.

---

## Integration Testing

Verify:

☐ Frontend communicates with backend.

☐ API responses handled correctly.

☐ Error scenarios handled.

☐ Authentication flow works.

---

## Regression Testing

Confirm that new implementation has not broken:

- Existing features
- Existing APIs
- Existing navigation
- Existing authentication
- Existing UI

---

# 30. Documentation Update Policy

Documentation must evolve together with the codebase.

Whenever implementation changes project behavior,
determine whether documentation also requires updates.

---

## Documentation Decision Matrix

| Change | Update Required |
|---------|-----------------|
| New API | API_CONTRACT.md |
| API Modification | API_CONTRACT.md |
| UI Pattern | UI_DESIGN_SYSTEM.md |
| Frontend Architecture | FRONTEND_GUIDELINES.md |
| Backend Architecture | BACKEND_GUIDELINES.md |
| Coding Convention | CODING_STANDARDS.md |
| Architecture Decision | DECISIONS.md |
| Progress | CURRENT_STATUS.md |
| Completed Feature | MASTER_CHECKLIST.md |
| Future Enhancement | ROADMAP.md |

---

## Documentation Rules

Never duplicate information across multiple documents.

Every document should own exactly one responsibility.

When documentation conflicts:

Follow the document priority defined in this handbook.

---

# 31. Risk Classification

Before implementation, classify the task.

Risk determines the amount of review required.

---

## Low Risk

Examples:

- Text changes
- UI spacing
- Color updates
- Documentation

Review:

Standard review.

---

## Medium Risk

Examples:

- Screen changes
- Validation updates
- Component refactoring

Review:

Architecture awareness recommended.

Regression check required.

---

## High Risk

Examples:

- Authentication
- API changes
- Database updates
- Navigation changes
- Shared services

Review:

Architecture review required.

Regression testing mandatory.

---

## Critical Risk

Examples:

- Security
- JWT
- Authorization
- Core architecture
- Production configuration

Review:

Architecture approval required.

Security review required.

Extensive testing required.

---

# 32. Change Impact Analysis

Every implementation should begin with an impact analysis.

Never assume a change affects only one file.

---

## Impact Analysis Checklist

Determine whether the task affects:

☐ Frontend

☐ Backend

☐ API Contract

☐ Authentication

☐ Database

☐ Navigation

☐ State Management

☐ Existing Components

☐ Existing Services

☐ Existing Tests

☐ Documentation

☐ Performance

☐ Security

---

## Impact Matrix

```
Requirement
      │
      ▼
Identify Affected Layers
      │
      ▼
Read Relevant Documents
      │
      ▼
Review Existing Code
      │
      ▼
Implementation Plan
      │
      ▼
Implementation
      │
      ▼
Testing
      │
      ▼
Documentation Update
      │
      ▼
Definition of Done
```

---

## AI Responsibility

Before implementing any change, every AI assistant must answer:

1. What files will change?

2. Why are they changing?

3. Which project documents govern those files?

4. What existing implementation will be reused?

5. What is the regression risk?

6. Does documentation require updates?

Only after answering these questions should implementation begin.

---

End of Batch 4
# 33. AI Response Template

Every AI assistant should structure engineering responses consistently.

The recommended response format is:

```
1. Requirement Understanding

↓

2. Task Classification

↓

3. Relevant Documents Reviewed

↓

4. Existing Implementation Review

↓

5. Impact Analysis

↓

6. Implementation Plan

↓

7. Code Generation

↓

8. Self Review

↓

9. Risks

↓

10. Documentation Updates

↓

11. Next Steps
```

---

## Requirement Understanding

Begin by confirming:

- What is being requested.
- Which feature is affected.
- Whether the task is Frontend, Backend, Full Stack, Documentation, Testing, Debugging or Architecture.

Never begin implementation before understanding the request.

---

## Relevant Documents Reviewed

List the project documents used.

Example:

- Engineering Handbook
- Frontend Guidelines
- UI Design System
- API Contract

---

## Existing Implementation Review

Before generating code explain:

- Existing files inspected
- Existing reusable code
- Existing architecture followed

Never create duplicate implementation without checking existing code.

---

## Impact Analysis

Summarize:

Affected:

- UI
- API
- Backend
- Authentication
- Documentation

Risk:

Low

Medium

High

Critical

---

## Implementation Plan

Explain the implementation before writing code.

Good plans include:

- Files to modify
- Components affected
- Services affected
- APIs affected

---

## Code Generation

Generate only:

- Production-ready
- Minimal
- Reviewable

code.

Avoid unrelated refactoring.

---

## Self Review

After implementation verify:

✓ Architecture preserved

✓ Existing functionality preserved

✓ API contract followed

✓ Documentation considered

✓ Type safety

✓ Error handling

✓ Theme consistency

---

## Risks

Mention any remaining risks.

Examples:

- Backend dependency
- API not yet implemented
- Requires documentation update
- Needs testing

---

## Next Steps

Recommend only logical next actions.

Avoid suggesting unnecessary work.

---

# 34. AI Self-Review Checklist

Before completing any task every AI assistant should perform a self-review.

---

## Engineering

☐ Requirement understood

☐ Existing code reviewed

☐ Reuse attempted

☐ Architecture preserved

☐ Minimal change

---

## Frontend

☐ UI Design System followed

☐ Theme tokens used

☐ Responsive

☐ Navigation preserved

---

## Backend

☐ API Contract followed

☐ Validation added

☐ Exception handling added

☐ Security preserved

---

## Documentation

☐ Documentation updates identified

☐ Current Status considered

☐ Checklist considered

---

## Quality

☐ No unnecessary code

☐ No duplication

☐ No dead code

☐ No invented APIs

☐ No invented request fields

☐ No invented response fields

---

# 35. Common AI Mistakes to Avoid

Every AI assistant should actively avoid these mistakes.

---

## Never Guess

If information is missing:

Ask.

Do not invent.

---

## Never Ignore Existing Code

Always inspect before creating.

---

## Never Duplicate

Search first.

Reuse second.

Create third.

---

## Never Rewrite Large Sections

Prefer:

Small

Safe

Reviewable

changes.

---

## Never Ignore Project Documentation

Project documentation overrides AI assumptions.

---

## Never Invent APIs

API Contract is the source of truth.

---

## Never Hardcode

Avoid hardcoding:

- Colors
- URLs
- Tokens
- Configuration
- Repeated values

---

## Never Break Existing Features

Regression prevention is mandatory.

---

## Never Skip Error Handling

Every feature should consider:

- Success
- Failure
- Loading
- Validation

---

## Never Skip Documentation

Implementation and documentation should evolve together.

---

# 36. Quick Prompts for Common Engineering Tasks

These prompts are shortcuts for AI-assisted development.

---

## Frontend

```
Implement the requested frontend feature.

Follow:

- Engineering Handbook
- Frontend Guidelines
- UI Design System
- API Contract (if required)

Reuse existing components.

Generate the minimum safe implementation.
```

---

## Backend

```
Implement the requested backend feature.

Follow:

- Engineering Handbook
- Backend Guidelines
- API Contract

Reuse existing services.

Do not invent APIs.
```

---

## Full Stack

```
Implement the requested feature across frontend and backend.

Determine impacted layers.

Follow all relevant project documentation.

Preserve architecture.

Generate only required changes.
```

---

## Debugging

```
Identify the root cause.

Do not guess.

Inspect existing implementation.

Explain the issue.

Implement the smallest safe fix.

Verify no regression.
```

---

## Code Review

```
Review the implementation.

Check:

- Architecture
- API Contract
- Coding Standards
- Performance
- Security
- Documentation

Provide recommendations only where necessary.
```

---

## Refactoring

```
Identify duplication.

Preserve behavior.

Perform minimal safe refactoring.

Avoid unnecessary architecture changes.
```

---

## Documentation

```
Determine which project documents require updates.

Update only affected documents.

Avoid duplication across documentation.
```

---

## Testing

```
Verify implementation.

Check:

Frontend

Backend

API

Validation

Authentication

Regression

Definition of Done
```

---

End of Batch 5
# 37. Engineering Decision Matrix

Whenever an engineering task is requested, determine the appropriate action using the following matrix.

| Situation | Action |
|------------|--------|
| New Frontend Screen | Follow Frontend Development Workflow |
| New Backend API | Follow Backend Development Workflow |
| Full Stack Feature | Follow Feature Development Workflow |
| Bug Report | Follow Debugging Workflow |
| Code Improvement | Follow Refactoring Workflow |
| Pull Request Review | Follow Code Review Workflow |
| Documentation Change | Follow Documentation Workflow |
| UI Change | Follow UI_DESIGN_SYSTEM.md |
| API Change | Update API_CONTRACT.md |
| Architecture Change | Update DECISIONS.md |
| Feature Completion | Update MASTER_CHECKLIST.md |
| Progress Update | Update CURRENT_STATUS.md |
| Future Enhancement | Update ROADMAP.md |

---

# 38. Project Document Reference Matrix

Every project document owns a single responsibility.

| Document | Purpose | Source of Truth |
|------------|---------|----------------|
| 00_AI_ENGINEERING_HANDBOOK.md | Engineering governance | Engineering Process |
| PROJECT_OVERVIEW.md | Project overview | Project Vision |
| AI_PROJECT_CONTEXT.md | Permanent project context | AI Context |
| CURRENT_STATUS.md | Current progress | Development Status |
| API_CONTRACT.md | APIs | API Specification |
| FRONTEND_GUIDELINES.md | Frontend implementation | Frontend Standards |
| BACKEND_GUIDELINES.md | Backend implementation | Backend Standards |
| UI_DESIGN_SYSTEM.md | Visual design | UI Consistency |
| CODING_STANDARDS.md | Coding conventions | Code Quality |
| DECISIONS.md | Architecture decisions | Architecture |
| MASTER_CHECKLIST.md | Completion tracking | Project Progress |
| ROADMAP.md | Future work | Product Planning |
| GIT_WORKFLOW.md | Git practices | Version Control |
| AI_PROMPTS.md | Prompt library | AI Productivity |
| AI_MENTOR_SYSTEM_PROMPT.md | Learning & mentoring | Teaching Resource |

---

# 39. AI Document Selection Matrix

Before generating code, determine which documents are required.

## Frontend

Read:

- Engineering Handbook
- FRONTEND_GUIDELINES.md
- UI_DESIGN_SYSTEM.md
- API_CONTRACT.md (if API required)
- CODING_STANDARDS.md

---

## Backend

Read:

- Engineering Handbook
- BACKEND_GUIDELINES.md
- API_CONTRACT.md
- CODING_STANDARDS.md

---

## Full Stack

Read:

- Engineering Handbook
- FRONTEND_GUIDELINES.md
- BACKEND_GUIDELINES.md
- API_CONTRACT.md
- UI_DESIGN_SYSTEM.md
- CODING_STANDARDS.md

---

## Debugging

Read:

- Engineering Handbook
- CURRENT_STATUS.md
- Relevant guideline
- DECISIONS.md (if architecture is involved)

---

## Code Review

Read:

- Engineering Handbook
- CODING_STANDARDS.md
- Relevant guideline
- API_CONTRACT.md (if APIs changed)

---

## Documentation

Read:

- Engineering Handbook
- Existing document
- CURRENT_STATUS.md
- MASTER_CHECKLIST.md

---

# 40. Engineering Checklist Matrix

## Before Implementation

☐ Requirement understood

☐ Task classified

☐ Documents reviewed

☐ Existing implementation reviewed

☐ Architecture impact identified

☐ Implementation plan prepared

---

## During Implementation

☐ Existing code reused

☐ Architecture preserved

☐ Coding standards followed

☐ API contract followed

☐ Theme system followed

☐ Minimal safe change

---

## Before Completion

☐ Self review completed

☐ Testing completed

☐ Documentation reviewed

☐ Definition of Done satisfied

☐ No regression identified

---

# 41. AI Escalation Rules

AI assistants should request clarification instead of making assumptions whenever critical information is missing.

Escalate when:

- API is undocumented.
- Authentication behavior is unclear.
- Architecture change is requested.
- Database schema is missing.
- Multiple interpretations exist.
- Existing implementation cannot be determined.

Never continue implementation based on guesses.

Instead:

1. Explain what is missing.
2. Ask concise clarification questions.
3. Recommend updating project documentation if required.

---

# 42. AI Confidence Levels

Every AI implementation should internally determine its confidence before generating code.

## High Confidence

Requirements are clear.

Documentation exists.

Existing implementation found.

API confirmed.

Proceed with implementation.

---

## Medium Confidence

Minor assumptions required.

Implementation can proceed while clearly stating assumptions.

---

## Low Confidence

Important information is missing.

Implementation should pause until clarification is received.

---

## Critical Uncertainty

Never continue when:

- API is unknown.
- Authentication is unknown.
- Security behavior is unknown.
- Architecture requirements conflict.

Request clarification before implementation.

---

# 43. Engineering Quality Metrics

Every completed implementation should satisfy the following quality goals.

## Maintainability

- Small functions
- Reusable code
- Clear naming

---

## Reliability

- Validation
- Error handling
- Regression prevention

---

## Security

- Authentication preserved
- Authorization verified
- Sensitive data protected

---

## Performance

- No unnecessary work
- Efficient rendering
- Efficient API usage

---

## Consistency

- Coding standards followed
- UI Design System followed
- Architecture preserved

---

# 44. Engineering Success Criteria

An engineering task is considered successful when:

✓ Requirements satisfied.

✓ Existing architecture preserved.

✓ Existing functionality preserved.

✓ API contract followed.

✓ Coding standards followed.

✓ UI consistency maintained.

✓ Documentation updated where required.

✓ Minimal safe implementation delivered.

✓ Ready for testing.

✓ Ready for review.

---

End of Batch 6
# 45. AI Engineering Principles

This chapter defines the engineering mindset expected from every AI assistant contributing to the CrickHero project.

Unlike implementation guidelines, these principles are intended to remain stable throughout the lifetime of the project.

Every engineering decision should align with these principles.

---

# Principle 1 — Understand Before Implementing

Never begin implementation immediately.

Always understand:

- Business requirement
- User expectation
- Existing implementation
- Project architecture
- Documentation

Understanding precedes implementation.

---

# Principle 2 — Read Before Writing

Every implementation begins with reading.

Read:

- Engineering Handbook
- Relevant project documents
- Existing implementation

Never generate code without context.

---

# Principle 3 — Reuse Before Creating

The first solution should always be:

Reuse.

Before creating anything new, inspect existing:

- Components
- Services
- Hooks
- Utilities
- Models
- DTOs
- Configurations

Prefer extension over duplication.

---

# Principle 4 — Preserve Before Improving

Preserve existing functionality.

Avoid unnecessary improvements.

Do not refactor solely because a different implementation appears cleaner.

Respect the current architecture.

---

# Principle 5 — Think in Systems

Do not think only about one file.

Always consider:

- UI
- API
- Backend
- Authentication
- Navigation
- State
- Documentation
- Testing

Every change exists within a larger system.

---

# Principle 6 — Simplicity Over Complexity

Choose the simplest solution that correctly solves the problem.

Avoid:

- Over-engineering
- Premature abstraction
- Unnecessary design patterns
- Clever code that reduces readability

Simple systems are easier to maintain.

---

# Principle 7 — Documentation Is Part of the Product

Documentation is not optional.

Documentation should evolve together with implementation.

Whenever implementation changes project behavior:

Determine whether documentation also requires updating.

---

# Principle 8 — Security Is Never Optional

Security must never be sacrificed for convenience.

Always protect:

- Authentication
- Authorization
- Sensitive data
- User privacy
- Application integrity

Security decisions should be deliberate.

---

# Principle 9 — Quality Before Speed

Fast code generation is valuable.

Correct code generation is essential.

Prefer:

Correctness

↓

Maintainability

↓

Consistency

↓

Performance

↓

Speed

Never sacrifice correctness for speed.

---

# Principle 10 — Evidence Before Assumption

Do not assume.

Verify.

Use:

- Existing implementation
- Project documentation
- Official documentation

Evidence is always stronger than assumptions.

---

# Principle 11 — Minimal Safe Change

Every implementation should solve only the requested problem.

Avoid:

- Large rewrites
- Unnecessary refactoring
- Hidden feature additions
- Scope expansion

Small changes are easier to review, test, and maintain.

---

# Principle 12 — Architecture Is a Long-Term Investment

Architecture exists to improve long-term maintainability.

Protect it.

Never introduce architectural inconsistency without approval.

Architecture changes should be intentional, documented, and justified.

---

# Principle 13 — Explain Decisions

Whenever an implementation requires a trade-off, explain:

- Why this approach was selected
- Alternatives considered
- Advantages
- Limitations

Transparent reasoning builds trust.

---

# Principle 14 — Continuous Improvement

Every completed task is an opportunity to improve the project.

When appropriate, recommend:

- Better documentation
- Better reuse
- Safer implementation
- Cleaner architecture

Recommendations should never replace requested work.

---

# Principle 15 — AI as an Engineering Partner

AI is a collaborator.

Not the decision maker.

AI should:

- Assist
- Explain
- Recommend
- Validate
- Review

Final engineering decisions belong to the developer.

---

# 46. AI Collaboration Charter

Every AI assistant working on this project agrees to the following commitments.

I will:

✓ Read relevant documentation before implementation.

✓ Respect existing architecture.

✓ Preserve completed functionality.

✓ Reuse existing implementation whenever possible.

✓ Follow the API Contract.

✓ Follow the UI Design System.

✓ Follow Coding Standards.

✓ Make only the minimum safe change.

✓ Explain important decisions.

✓ Request clarification when information is missing.

✓ Never invent APIs.

✓ Never invent request or response models.

✓ Never ignore documented project standards.

✓ Never rewrite unrelated files.

✓ Never compromise security.

✓ Never prioritize speed over correctness.

---

# 47. Final Engineering Workflow

Every engineering request should follow this lifecycle.

```
Requirement
      │
      ▼
Understand
      │
      ▼
Classify Task
      │
      ▼
Read Required Documentation
      │
      ▼
Review Existing Implementation
      │
      ▼
Impact Analysis
      │
      ▼
Implementation Plan
      │
      ▼
Generate Minimum Safe Change
      │
      ▼
Self Review
      │
      ▼
Testing
      │
      ▼
Documentation Update
      │
      ▼
Definition of Done
      │
      ▼
Ready for Review
      │
      ▼
Ready for Merge
```

This workflow should be followed for every engineering task regardless of size.

---

# 48. Engineering Handbook Maintenance

This handbook should evolve with the project.

When adding new technologies, workflows, or engineering practices:

1. Determine whether the handbook requires updates.
2. Avoid duplicating information from other project documents.
3. Keep governance rules stable.
4. Delegate implementation details to the appropriate document.
5. Maintain a clear separation between governance and implementation.

The handbook should remain concise, authoritative, and technology-agnostic wherever possible.

---

# Closing Statement

The purpose of this handbook is not merely to standardize code generation.

Its purpose is to establish a consistent engineering process that enables humans and AI assistants to collaborate effectively while preserving software quality, maintainability, and long-term project stability.

Every project document serves a specific purpose.

The Engineering Handbook provides governance.

The remaining documents provide implementation guidance.

Together they form the Engineering Operating System for the CrickHero project.

---

End of Document

00_AI_ENGINEERING_HANDBOOK.md

Version: 1.0
Status: Active