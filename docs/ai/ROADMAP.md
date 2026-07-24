# CrickHero Development Roadmap

**Version:** 1.0

**Status:** Active Development

**Project Type:** Mobile MVP

**Target Platform:** Android (Phase 1)

**Estimated MVP Duration:** 2 Weeks

---

# Purpose

This roadmap defines the execution plan for CrickHero.

It describes:

- Development phases
- Milestones
- Dependencies
- Deliverables
- Success criteria
- Risks

This document is updated whenever priorities change.

---

# Project Vision

Deliver a production-ready MVP that allows users to:

- Login
- Create Teams
- Create Matches
- Score Live Matches
- View Scorecards
- Share Results

---

# Development Philosophy

We follow:

Build

↓

Test

↓

Review

↓

Refactor

↓

Release

Never:

Build

↓

Forget

↓

Debug everything later

---

# MVP Timeline

Week 1

Project Foundation

↓

Authentication

↓

Teams

↓

Players

↓

Match Creation

Week 2

Live Scoring

↓

Scoreboard

↓

Summary

↓

Testing

↓

Bug Fixing

↓

APK Release

---

# Phase 1 — Foundation

Status

🟢 Nearly Complete

Deliverables

- Expo Router
- Theme
- Navigation
- Spring Boot
- PostgreSQL
- Project Structure
- Documentation
- API Contract

Success Criteria

- Frontend and backend communicate successfully.
- Project structure is stable.

---

# Phase 2 — Authentication

Status

🟡 In Progress

Deliverables

- OTP Request
- OTP Verification
- JWT Authentication
- Login Persistence
- Guest Login
- Logout
- Session Restore

Dependencies

Phase 1

Success Criteria

User remains logged in after restarting the app.

---

# Phase 3 — Teams

Status

⚪ Planned

Deliverables

- Create Team
- Edit Team
- Delete Team
- Team List

Dependencies

Authentication

Success Criteria

User can manage teams.

---

# Phase 4 — Players

Status

⚪ Planned

Deliverables

- Add Player
- Edit Player
- Delete Player
- Player List

Dependencies

Teams

Success Criteria

Every team contains players.

---

# Phase 5 — Match Creation

Status

⚪ Planned

Deliverables

- Create Match
- Select Teams
- Toss
- Playing XI
- Match Settings

Dependencies

Teams

Players

Success Criteria

Ready to start a match.

---

# Phase 6 — Live Scoring

Status

⚪ Planned

Deliverables

- Runs
- Wickets
- Extras
- Overs
- Strike Rotation
- Bowling Figures
- Undo Ball

Dependencies

Match Creation

Success Criteria

Entire innings can be scored digitally.

---

# Phase 7 — Scoreboard

Status

⚪ Planned

Deliverables

- Live Score
- Batting Card
- Bowling Card
- Partnership
- Fall of Wickets

Dependencies

Live Scoring

Success Criteria

Complete scorecard displayed correctly.

---

# Phase 8 — Match Summary

Status

⚪ Planned

Deliverables

- Result
- Winner
- Statistics
- Share Scorecard

Dependencies

Scoreboard

Success Criteria

Match officially completed.

---

# Phase 9 — Quality Assurance

Status

⚪ Planned

Deliverables

- Manual Testing
- API Testing
- UI Testing
- Performance Testing
- Bug Fixes

Dependencies

All Features

Success Criteria

No critical bugs remain.

---

# Phase 10 — MVP Release

Status

⚪ Planned

Deliverables

- Android APK
- Documentation Review
- Version Tag
- Backup

Success Criteria

Users can install and complete an entire cricket match.

---

# Milestones

| Milestone | Target |
|-----------|--------|
| M1 | Foundation Complete |
| M2 | Authentication Complete |
| M3 | Teams Complete |
| M4 | Players Complete |
| M5 | Match Creation Complete |
| M6 | Live Scoring Complete |
| M7 | Scoreboard Complete |
| M8 | MVP Release |

---

# Critical Path

Foundation

↓

Authentication

↓

Teams

↓

Players

↓

Match Creation

↓

Live Scoring

↓

Scoreboard

↓

Summary

↓

Testing

↓

Release

---

# Risks

High

- Live scoring complexity

Medium

- Authentication edge cases

Low

- UI polish

---

# Non-Goals (MVP)

These are intentionally postponed:

- Tournament Management
- Push Notifications
- Live Streaming
- AI Analytics
- Offline Sync
- Admin Dashboard
- Premium Features

---

# Definition of Success

The MVP is successful when a user can:

✓ Login

✓ Create Team

✓ Add Players

✓ Create Match

✓ Toss

✓ Score Every Ball

✓ Finish Match

✓ View Scorecard

✓ Share Result

---

# Weekly Review Checklist

Every Sunday review:

☐ Completed milestones

☐ Blockers

☐ Technical debt

☐ Documentation updates

☐ Priority changes

☐ Risks

---

# Release Strategy

Version 0.1.0

Authentication

Version 0.2.0

Teams & Players

Version 0.3.0

Matches

Version 0.4.0

Live Scoring

Version 0.5.0

Scoreboard

Version 1.0.0

Production MVP

---

End of Document

Version 1.0