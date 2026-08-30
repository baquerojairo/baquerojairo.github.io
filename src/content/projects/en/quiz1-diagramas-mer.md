---
title: "Quiz 1 Correction – ER Diagrams"
description: "Quiz 1 correction for Database Design: entity-relationship modeling including ternary relationships, specialization, and aggregation."
pubDate: 2026-08-29
cover: "/projects/puntos_1_2.png"
tags: ["Databases", "ER", "MER", "Academia"]
featured: true
links: []
toc: "side"
lang: "en"
---

## Overview

This document presents the correction for **Quiz 1** of the Database Design course, focused on data modeling using **Entity-Relationship (ER) Diagrams**. Three exercises are covered, each testing the ability to represent real-world scenarios using standard ER notation.

---

## Exercise 1 – Owner and Pet

Models the relationship between an **OWNER** and their **PET** (1:N relationship), with their respective attributes:

**Entities and attributes:**

| Entity | Attributes |
|--------|------------|
| OWNER | ID, Full_name, Phone, Address |
| PET | Pet_id, Name, Date_of_birth, DNI, City |

The pet is **attended** by a **VETERINARIAN**, who has attributes such as `Professional_board`, `Name`, and `Specialty`.

The attendance relationship has its own attributes: `Date_of_visit`, `Reason`, `Fee`.

---

## Exercise 2 – Loan System (Library)

Models a book loan system with the following entities:

**Main entities:**

| Entity | Key attributes |
|--------|----------------|
| TITLE | ISBN, Name, New edition, Current edition, Year |
| BOOK | Status, Checkout_date, Amount, Returned_price |
| LIBRARY | Bank/Agreement, Institutional_name |
| USER | ID, Name (composite: Second Surname, First Surname, Second Name) |

**Relationships:**
- `TITLE` **belongs to** `LIBRARY` (1:N)
- `LIBRARY` **lends** `BOOK` (1:N)
- `USER` **borrows** `BOOK` (N:N)

---

## Exercise 3 – Advanced Concepts

### a) Ternary Relationship

Illustrates the difference between a binary and a **ternary relationship** in a medical context:

- **Binary:** `DOCTOR` — attends → `PATIENT`
- **Ternary:** `DOCTOR` — attends → `PATIENT` + `CONSULTATION_ROOM`

> Ternary relationships **are not equivalent** to two binary relationships. A ternary captures that all three entities participate simultaneously in the same instance. For example: Dr. Juan Gómez attends a patient in room 7. With two binary relationships we cannot determine whether that doctor attended that specific patient in that specific room.

### b) Specialization

Shows a specialization hierarchy where the **USER** entity is specialized into two subtypes:

```
USER
  ├── FACULTY
  └── STUDENT
```

Notation: Is-a specialization arc indicating that FACULTY and STUDENT are subtypes of USER.

### c) Aggregation

Models the concept of **aggregation**, where a complete relationship acts as a participating entity in another relationship:

```
[ PARTICIPATION ]
  FACULTY — WORKS ON → PROJECT
       ↓
   REQUIRES
       ↓
   EQUIPMENT
```

The `PARTICIPATION` relationship (between FACULTY and PROJECT) is treated as a unit to relate to `EQUIPMENT` through `REQUIRES`.

---

## Diagrams

### Points 1 and 2

![Quiz 1 Correction – Points 1 and 2](/projects/puntos_1_2.png)

### Point 3

![Quiz 1 Correction – Point 3](/projects/punto_3.png)
