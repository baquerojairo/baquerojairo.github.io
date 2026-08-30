---
title: "Corrección Quiz 1 – Diagramas MER"
description: "Corrección del Quiz 1 de Bases de Datos: modelado de entidad-relación incluyendo relaciones ternarias, especialización y agregación."
pubDate: 2026-08-29
cover: "/projects/puntos_1_2.png"
tags: ["Bases de Datos", "MER", "ER", "Academia"]
featured: true
links: []
toc: "side"
lang: "es"
---

## Descripción general

Este documento presenta la corrección del **Quiz 1** de la asignatura de Bases de Datos, enfocado en el modelado de datos mediante **Diagramas de Entidad-Relación (MER)**. Se abordan tres ejercicios distintos que evalúan la capacidad de representar escenarios del mundo real usando notación ER estándar.

---

## Ejercicio 1 – Dueño y Mascota

Se modela la relación entre un **DUEÑO** y su **MASCOTA** (tiene relación `1:N`), con sus respectivos atributos:

**Entidades y atributos:**

| Entidad | Atributos |
|---------|-----------|
| DUEÑO | Cédula, Nombre_completo, Teléfono, Dirección |
| MASCOTA | Id_mascota, Nombre, Fecha_nacimiento, DNI, Ciudad |

La mascota es **atendida** por un **VETERINARIO**, quien posee atributos como `Junta_profesional`, `Nombre` y `Especialidad`.

La relación de atención incluye atributos propios: `Fecha_atención`, `Motivo`, `Valor`.

---

## Ejercicio 2 – Sistema de Préstamo (Biblioteca)

Se modela un sistema de préstamo de libros con las siguientes entidades:

**Entidades principales:**

| Entidad | Atributos destacados |
|---------|----------------------|
| TÍTULO | ISBN, Nombre, Nueva edición, Edición actual, Año |
| LIBRO | Estado, Fecha_salida, Monto, Precio_devuelto |
| BIBLIOTECA | Banco/Convenio, Nombre institucional |
| USUARIO | R.M., Nombre (compuesto: Segundo Apellido, Primer Apellido, Segundo Nombre) |

**Relaciones:**
- `TÍTULO` **pertenece** a `BIBLIOTECA` (1:N)
- `BIBLIOTECA` **presta** `LIBRO` (1:N)
- `USUARIO` **toma prestado** `LIBRO` (N:N)

---

## Ejercicio 3 – Conceptos Avanzados

### a) Relación Ternaria

Se ilustra la diferencia entre una relación binaria y una **relación ternaria** en el contexto médico:

- **Binaria:** `MÉDICO` — atender → `PACIENTE`
- **Ternaria:** `MÉDICO` — atender → `PACIENTE` + `CONSULTORIO`

> Las relaciones ternarias **no son equivalentes** a dos relaciones binarias. Una ternaria captura que las tres entidades participan simultáneamente en una misma instancia. Por ejemplo: el Dr. Juan Gómez atiende al paciente en el consultorio 7. Con dos binarias no podemos saber si un médico atendió a ese paciente en ese consultorio específico.

### b) Especialización

Muestra una jerarquía de especialización donde la entidad **USUARIO** se especializa en dos subtipos:

```
USUARIO
  ├── DOCENTE
  └── ESTUDIANTE
```

Notación: arco de especialización (Is-a) indicando que DOCENTE y ESTUDIANTE son subtipos de USUARIO.

### c) Agregación

Modela el concepto de **agregación**, donde una relación completa actúa como entidad participante en otra relación:

```
[ PARTICIPACIÓN ]
  DOCENTE — TRABAJA EN → PROYECTO
       ↓
   NECESITAN
       ↓
     EQUIPO
```

La relación `PARTICIPACIÓN` (entre DOCENTE y PROYECTO) es tratada como una unidad para relacionarse con `EQUIPO` a través de `NECESITAN`.

---

## Diagramas

### Puntos 1 y 2

![Corrección Quiz 1 – Puntos 1 y 2](/projects/puntos_1_2.png)

### Punto 3

![Corrección Quiz 1 – Punto 3](/projects/punto_3.png)
