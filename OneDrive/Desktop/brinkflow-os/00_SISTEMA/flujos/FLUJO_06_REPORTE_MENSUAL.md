# FLUJO 06 — REPORTE MENSUAL AL CLIENTE

## Propósito

Producir el reporte ejecutivo mensual que se entrega al cliente. Una página, lenguaje de negocio (no de agencia), con foco en decisiones que el cliente necesita tomar.

**Cuándo invocar:** fin de mes, después de cerrar STATE del cliente.

**Output esperado:** reporte de 1 página listo para enviar al cliente (con su edición/aprobación de Vero).

---

## Cómo invocar este flujo

> "Flujo 06 — Reporte mensual para [cliente], mes de [mes]. Adjunto STATE del mes, MEMORY actualizada y KPIs."

---

## Lo que Claude debe hacer (instrucciones internas)

### Antes de escribir, razoná internamente

1. **Identificá el lector real.** ¿Quién lee este reporte? ¿Dueño del negocio? ¿Marketing manager? ¿CFO? El lenguaje y foco cambian. Por defecto: dueño del negocio que entiende facturación pero no marketing técnico.

2. **Traducí métricas de marketing a métricas de negocio.** Esto es lo que diferencia a una agencia senior:
   - NO: "El CTR fue 2.3% y el CPM bajó 15%"
   - SÍ: "Conseguimos 47 leads nuevos a un costo promedio de €12 cada uno. De esos, 18 agendaron consulta."

3. **Identificá la decisión que el cliente necesita tomar este mes.** Todo reporte termina con UNA decisión, no con cinco "considera evaluar...".

4. **Sé honesto cuando algo no funcionó.** No maquilles. Si el mes fue débil, lo decís con datos y con plan de corrección. La credibilidad de BrinkFlow se gana en los meses difíciles, no en los buenos.

5. **Hacé visible el trabajo invisible.** Lo que el cliente NO ve: el sistema, el compliance, el QA, el análisis de fatiga, las decisiones evitadas. Eso es valor que pagó.

6. **Una página máximo.** Si necesitás más, hay un anexo. Pero el reporte ejecutivo es UNA PÁGINA.

### Producción del output

```
REPORTE MENSUAL — [CLIENTE] — [MES/AÑO]
═══════════════════════════════════════════
Para: [nombre del decisor del cliente]
De: BrinkFlow
Fecha: [fecha de envío]

───────────────────────────────────────────
RESUMEN EN 3 LÍNEAS
───────────────────────────────────────────

[Línea 1: lo más importante que pasó este mes]
[Línea 2: el resultado concreto en términos de negocio]
[Línea 3: lo que viene en [mes siguiente]]

───────────────────────────────────────────
RESULTADOS DEL MES
───────────────────────────────────────────

INVERSIÓN PUBLICITARIA: €[X]
LEADS GENERADOS: [X] (vs objetivo de [X])
COSTE POR LEAD: €[X]

CONSULTAS / CITAS AGENDADAS: [X]
CLIENTES NUEVOS: [X]
COSTE DE ADQUISICIÓN REAL (CAC): €[X]
TICKET PROMEDIO DE NUEVOS CLIENTES: €[X]

[Si aplica - retención]
RECOMPRAS EN EL MES: [X]
NUEVAS RESEÑAS: [X] / NOTA PROMEDIO: [X]

───────────────────────────────────────────
QUÉ FUNCIONÓ Y POR QUÉ
───────────────────────────────────────────

[2-3 puntos concretos en lenguaje de negocio. NO "el CTR mejoró", SÍ "el ángulo X logró atraer al perfil de cliente que más cierra"]

───────────────────────────────────────────
QUÉ NO FUNCIONÓ Y QUÉ ESTAMOS HACIENDO
───────────────────────────────────────────

[Si el mes tuvo cosas que no funcionaron, las nombramos. Con plan concreto de cambio. La honestidad es valor.]

───────────────────────────────────────────
DECISIONES TOMADAS ESTE MES
───────────────────────────────────────────

[3-5 decisiones operativas con su razón. Ej: "Pausamos el anuncio que apuntaba a perfil joven porque la calidad de lead era 2/5"]

───────────────────────────────────────────
QUÉ VIENE EN [MES SIGUIENTE]
───────────────────────────────────────────

Prioridad #1:
[La acción más importante del mes próximo]

Otras acciones:
- 
-
-

───────────────────────────────────────────
LO QUE NECESITAMOS DE TI ESTE MES
───────────────────────────────────────────

[UNA sola decisión que el cliente necesita tomar. Específica. Con deadline. Si no hay decisión pendiente, omitir esta sección.]

───────────────────────────────────────────

[Firma]
[Nombre del operador, no "el equipo de BrinkFlow"]

───────────────────────────────────────────
```

---

## Frameworks senior que activás

- **Lenguaje del CFO**: traducí cada métrica al impacto en facturación.
- **Una decisión por ciclo**: el reporte no informa de todo, pide una sola decisión.
- **Honestidad estratégica**: lo que no funcionó se nombra. Construye confianza.
- **Trabajo invisible visible**: explicá lo que el cliente no ve para que entienda lo que paga.
- **Brevedad ejecutiva**: una página o no se lee.

---

## Qué hace que este reporte sea senior y no genérico

- Habla en **lenguaje de negocio**, no de agencia.
- **No esconde** lo que no funcionó.
- Pide **una decisión clara**, no cinco "consideraciones".
- **Una página máximo**.
- La firma es **personal** (Vero), no corporativa ("el equipo BrinkFlow").
- Conecta cada acción con **impacto económico**.

---

## Validación de Vero (Capa 4)

```
☐ ¿El cliente entendería este reporte sin diccionario de marketing?
☐ ¿La sección "qué no funcionó" tiene honestidad real, o se quedó en lo cómodo?
☐ ¿La decisión que pido al cliente es UNA sola y específica?
☐ ¿Cabe en una página?
☐ ¿El cliente sabría inmediatamente qué hacer después de leerlo?
☐ ¿Yo me sentiría cómoda firmando este reporte con mi nombre?
```

---

*Output se guarda en `/clients/[cliente]/reportes/[mes_año].md`. Después se exporta a PDF (formato Notion / Google Slides / Looker) y se envía al cliente.*
