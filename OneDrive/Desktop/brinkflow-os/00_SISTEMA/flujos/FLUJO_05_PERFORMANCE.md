# FLUJO 05 — DIAGNÓSTICO DE PERFORMANCE

## Propósito

Leer los KPIs de la semana/mes, identificar la causa raíz del problema (no el síntoma), y producir una decisión concreta: qué pausar, qué escalar, qué ajustar.

**Cuándo invocar:** semanal (revisión) y mensual (cierre). También cuando hay anomalía.

**Output esperado:** diagnóstico estructurado + decisión + próxima acción.

---

## Cómo invocar este flujo

> "Flujo 05 — Diagnóstico de performance para [cliente], semana del [fecha]. Adjunto KPIs y feedback offline si hay."

KPIs mínimos necesarios:
- Inversión, leads, CPL, CTR, frecuencia
- Si hay: leads → cita, no-shows, cierres, calidad de lead (1-5)

---

## Lo que Claude debe hacer (instrucciones internas)

### Antes de diagnosticar, razoná internamente

1. **Aplicá el árbol de causa raíz, no diagnostiques en superficie.**

   ```
   Síntoma: CPL alto / pocos leads
       ↓
   ¿CTR bajo? (< 1% en feed) → problema del anuncio (hook / creativo)
   ¿CPC alto? → problema de subasta (audiencia muy pequeña / competencia)
   ¿Landing convierte mal? → problema de landing (copy / formulario / velocidad)
   ¿Leads malos aunque sean muchos? → segmentación atrae al perfil equivocado
   ¿Proceso comercial falla? → el problema NO es la pauta
   ```

   ```
   Síntoma: Buen CPL, mal ROAS / pocas ventas
       ↓
   ¿Tiempo de respuesta del lead > 2h? → problema de proceso, no de pauta
   ¿Lead frío sin contexto? → falta secuencia de nurturing
   ¿Equipo sin herramientas para cerrar? → proceso comercial offline
   ¿Precio genera abandono? → problema de percepción de valor, no de precio
   ```

2. **Distinguí dato digital vs dato offline.** Si hay conflicto, **el offline gana**:
   - ROAS alto + calidad de lead 2/5 = problema, no éxito
   - CPL bajo + no-shows 60% = pérdida, no logro

3. **Aplicá criterio de tiempo.** No diagnosticás performance con menos de 7 días de data. Si el período es corto, lo decís y pedís más tiempo.

4. **Detectá fatiga creativa antes de que aparezca en métricas pesadas:**
   - Frecuencia > 3.0 en audiencias frías
   - CTR cae > 30% respecto al mejor momento
   - CPL sube > 40% sin cambios de presupuesto
   - Comentarios negativos aumentan

5. **Aplicá matriz de decisión:**

   ```
                  Calidad lead alta │ Calidad lead baja
   ─────────────┼───────────────────┼──────────────────
   CPL bajo     │ ESCALAR           │ REVISAR MENSAJE
                │ (el sueño)        │ (atrae mal perfil)
   ─────────────┼───────────────────┼──────────────────
   CPL alto     │ OPTIMIZAR         │ PAUSAR Y
                │ (lead bueno,      │ REDISEÑAR
                │ caro de traer)    │ (todo falla)
   ```

6. **Nunca cambies más de una variable a la vez.** Si lo hacés, no podés saber qué causó la mejora o el deterioro.

7. **Validá con compliance**: si la decisión implica empujar más algo que tiene riesgo de plataforma, advertir.

### Producción del output

```
DIAGNÓSTICO DE PERFORMANCE — [CLIENTE]
═══════════════════════════════════════════
Período analizado: [fechas]
Días de datos: [X]
¿Período suficiente para conclusiones? SÍ / NO + por qué

═══════════════════════════════════════════

LECTURA DE LA SEMANA/MES

Inversión: €[X]
Leads: [X]
CPL: €[X] (objetivo: €[X], variación: [+/-X%])
CTR: [X]% 
Frecuencia: [X]
Anuncio ganador: [breve]
Anuncio en fatiga / pausa sugerida: [breve]

CALIDAD DE LEADS (offline)
[Si hay data offline: análisis. Si no hay: marcar que se pide al cliente.]

CONVERSIÓN OFFLINE (si aplica)
- Leads → Cita: [X]%
- No-shows: [X]%
- Cita → Cliente: [X]%
- Cuello de botella detectado: [Captación / Contacto / Cierre / No-show]

═══════════════════════════════════════════

DIAGNÓSTICO DE CAUSA RAÍZ

Síntoma visible: [el que aparece en KPIs]
Causa raíz real: [identificada por árbol de diagnóstico]

Por qué creemos que es esta causa y no otra:
[Razonamiento estratégico — qué evidencia descarta otras hipótesis]

═══════════════════════════════════════════

DECISIÓN

Acción concreta para esta semana:
[Una sola variable cambiada, con razón clara]

Lo que NO vamos a hacer aunque tengamos la tentación:
[Tan importante como lo que sí hacemos]

═══════════════════════════════════════════

ESCALADO / PAUSA / OPTIMIZACIÓN

¿Qué se pausa esta semana?
[Anuncios o conjuntos, con razón]

¿Qué se escala? (con cuánto y cuándo)
- Solo si CPL estable o en descenso 7+ días + calidad confirmada
- Aumento máximo recomendado: 20-30% cada 3-4 días
- Nunca > 50% de golpe (reinicia fase de aprendizaje)

¿Qué se introduce nuevo?
[Si hace falta nuevo creativo por fatiga, marcar y pasar a Flujo 04]

═══════════════════════════════════════════

ALERTAS Y RIESGOS

[Si detectás fatiga creativa, riesgo de plataforma, problema offline crítico, lo nombrás aquí]

═══════════════════════════════════════════

PREGUNTAS AL CLIENTE (data offline pendiente)

[Si falta info offline para cerrar el diagnóstico, listarla. Sin esa data, parte del análisis es incompleto y se marca.]

═══════════════════════════════════════════

PRÓXIMA ACCIÓN

1. [Acción inmediata, con responsable y deadline]
2. [Próxima revisión: cuándo]
3. [Si hay aprendizaje sistémico, marcar para MEMORY]
```

---

## Frameworks senior que activás

- **Árbol de causa raíz** (5 Whys aplicado a performance digital).
- **Matriz CPL × Calidad de lead** (cuadrante de decisión).
- **Criterio de tiempo mínimo** (7 días, 50 conversiones para Meta).
- **Aprendizaje incremental** (una variable a la vez).
- **Detección temprana de fatiga** (frecuencia, CTR, comentarios).
- **Integración digital + offline** (el offline manda en conflicto).

---

## Qué hace que este diagnóstico sea senior y no genérico

- Distingue **causa raíz** de síntoma.
- **Se niega a diagnosticar** con poca data.
- Toma **una sola decisión por ciclo**.
- Marca explícitamente **qué NO hacer**.
- Integra **dato offline** y le da prioridad cuando hay conflicto.
- **Pregunta al cliente** lo que necesita en lugar de adivinar.

---

## Validación de Vero (Capa 4)

```
☐ ¿La causa raíz identificada es realmente la causa, o es el primer síntoma que vi?
☐ ¿Tengo data suficiente para esta conclusión, o estoy presionada por entregar diagnóstico?
☐ ¿La decisión cambia una sola variable?
☐ ¿El "qué NO hacer" tiene coraje real?
☐ ¿El offline está integrado en el análisis, o me dejé llevar solo por métricas digitales?
☐ ¿Yo defendería este diagnóstico ante un cliente exigente que me pregunta por qué?
```

---

*Output se guarda en `/clients/[cliente]/diagnosticos/[fecha].md`. Si genera aprendizaje sistémico, va a MEMORY. Si el patrón se repite en varios clientes del sector, va al playbook.*
