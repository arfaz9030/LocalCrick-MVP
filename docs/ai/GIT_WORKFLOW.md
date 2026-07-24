# CrickHero Git Workflow

Version: 1.0

Status: Active

Last Updated: July 2026

---

# Purpose

This document defines the Git workflow for the CrickHero project.

Goals

- Clean commit history
- Easy rollback
- Simple branching
- Predictable releases
- AI-friendly workflow

---

# Workflow Philosophy

For the MVP:

Keep Git simple.

Avoid complex GitFlow.

Small commits.

Small pull requests.

Small features.

---

# Branch Strategy

Main Branch

main

Always stable.

Always deployable.

Never commit experimental code directly.

---

Development Branch

develop

Integration branch.

Contains completed work ready for testing.

---

Feature Branches

feature/<feature-name>

Examples

feature/authentication

feature/team-management

feature/live-scoring

feature/profile

---

Bug Fix Branches

fix/<bug-name>

Examples

fix/otp-verification

fix/login-persistence

fix/team-list-crash

---

Hotfix Branches

hotfix/<issue>

Examples

hotfix/crash-on-launch

hotfix/jwt-expiry

---

Documentation Branches

docs/<topic>

Examples

docs/api-contract

docs/project-overview

---

# Branch Workflow

main

↓

develop

↓

feature/authentication

↓

develop

↓

main

Never merge unfinished work into main.

---

# Commit Strategy

Every commit should represent

ONE logical change.

Good

✔ Add OTP verification

✔ Fix login persistence

✔ Update API contract

Bad

✘ Login

✘ Changes

✘ Update

✘ Final

---

# Commit Message Standard

Use Conventional Commits.

Format

type(scope): description

Examples

feat(auth): add OTP verification

fix(auth): resolve login persistence

docs(api): update authentication contract

refactor(team): simplify team service

style(ui): format onboarding screen

test(auth): add OTP API tests

chore(build): update dependencies

This style makes commit history easier to understand and supports automated tooling. :contentReference[oaicite:1]{index=1}

---

# Allowed Commit Types

feat

New feature

fix

Bug fix

docs

Documentation

style

Formatting only

refactor

Internal improvement

perf

Performance improvement

test

Testing

build

Build changes

ci

CI/CD

chore

Maintenance

revert

Undo previous commit

---

# Commit Rules

Every commit must

✔ Compile

✔ Be reviewable

✔ Solve one problem

✔ Include meaningful message

Never commit

Generated files

Secrets

Passwords

API Keys

Large binaries

---

# Before Every Commit

Checklist

- Project builds
- TypeScript passes
- No unused imports
- Tests (if applicable)
- Documentation updated (if needed)

---

# Pull Request Rules

Title

Same style as commit.

Example

feat(auth): add login persistence

Description

Purpose

Changes

Testing

Screenshots (if UI)

Checklist

---

# Merge Rules

Merge only after

✔ Build passes

✔ Code review complete

✔ Documentation updated

✔ API contract updated (if changed)

✔ No merge conflicts

---

# Versioning

Use Semantic Versioning

Major

Breaking changes

Minor

New features

Patch

Bug fixes

---

# Tags

Examples

v0.1.0

Authentication

v0.2.0

Teams

v0.3.0

Players

v0.4.0

Matches

v1.0.0

Production MVP

---

# Ignore Rules

Never commit

.env

*.keystore

node_modules

build/

dist/

.idea/

.vscode/settings.json

---

# AI Development Workflow

Requirement

↓

Architecture Decision

↓

Implementation

↓

Commit

↓

Review

↓

Merge

↓

Test

↓

Release

---

# Release Checklist

Before release

- Authentication stable
- APIs stable
- No critical bugs
- Documentation updated
- CHANGELOG updated
- Version tag created

---

# Emergency Rollback

If production issue occurs

1. Identify bad commit
2. Revert commit
3. Test
4. Deploy
5. Document incident

---

# Solo Developer Rules

Since CrickHero is currently developed by a single developer

Always

- Commit frequently
- Push daily
- Keep commits small
- Update MASTER_CHECKLIST.md

Avoid long-lived feature branches.

---

# Future Team Rules

When additional developers join

Require

- Code Reviews
- Pull Requests
- Protected main branch
- Branch naming standards
- Documentation updates

---

# References

Recommended practices

- Conventional Commits
- Semantic Versioning
- Git best practices

---

End of Document

Version 1.0