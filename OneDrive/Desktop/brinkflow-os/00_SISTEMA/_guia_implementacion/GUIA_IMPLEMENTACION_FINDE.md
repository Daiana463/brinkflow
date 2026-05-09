# GUÍA DE IMPLEMENTACIÓN — FIN DE SEMANA

## Para Vero — orden de trabajo del sábado y domingo

Este documento te dice exactamente qué hacer y en qué orden. Está diseñado para que el lunes a primera hora estés operando el sistema con BrinkFlow como cliente cero.

**Tiempo total estimado:** 8-10 horas distribuidas en 2 días.

---

## SÁBADO (4-5 horas)

### Bloque 1 — Mañana (1.5 horas) — CARGAR PROJECT CLAUDE

**Tarea:** crear el Project en Claude.ai y cargar los 3 documentos de identidad + los 8 flujos.

**Pasos concretos:**

1. Entrá a Claude.ai → Projects → New Project.
2. Nombrá el Project: **"BrinkFlow OS"**.
3. En las instrucciones del Project (campo de "Custom instructions"), pegá el contenido de **`03_OPERATING_PROTOCOL.md`** completo.
4. En "Project knowledge" (archivos cargados), subí estos archivos:
   - `01_BRINKFLOW_DNA.md`
   - `02_COMPLIANCE_RULES.md`
   - `FLUJO_01_DIAGNOSTICO_INICIAL.md`
   - `FLUJO_02_CUSTOMER_PROFILES.md`
   - `FLUJO_03_BIG_IDEA.md`
   - `FLUJO_04_PRODUCCION_COPY.md`
   - `FLUJO_05_PERFORMANCE.md`
   - `FLUJO_06_REPORTE_MENSUAL.md`
   - `FLUJO_07_QA_EXPRESS.md`
   - `FLUJO_08_OFERTA_POSICIONAMIENTO.md`

**Validación:** abrí un chat nuevo en el Project y escribí: *"Resumime tu rol y los flujos que tenés disponibles."* Si Claude responde correctamente con identidad de BrinkFlow OS y los 8 flujos, el Project está cargado bien.

---

### Bloque 2 — Mañana/mediodía (1 hora) — ESTRUCTURA VS CODE

**Tarea:** crear las carpetas locales en VS Code y poner los archivos en su sitio.

**Pasos concretos:**

1. En tu computadora, creá la carpeta raíz `brinkflow-os/`.
2. Abrí esa carpeta con VS Code.
3. Abrí terminal en VS Code (Ctrl+`).
4. Ejecutá:

```bash
mkdir -p 00_SISTEMA/flujos 00_SISTEMA/_capa_validacion 00_SISTEMA/_guia_implementacion
mkdir -p _templates clients/_PLANTILLA_CLIENTE_NUEVO/diagnosticos clients/_PLANTILLA_CLIENTE_NUEVO/copies clients/_PLANTILLA_CLIENTE_NUEVO/reportes clients/_PLANTILLA_CLIENTE_NUEVO/qa_logs
mkdir -p clients/brinkflow/diagnosticos clients/brinkflow/copies clients/brinkflow/reportes clients/brinkflow/qa_logs
mkdir -p playbooks _archivo
```

5. Movés los archivos a sus ubicaciones:
   - **3 documentos de identidad** → `00_SISTEMA/`
   - **8 flujos** → `00_SISTEMA/flujos/`
   - **Capa 4 validación** → `00_SISTEMA/_capa_validacion/`
   - **3 templates de cliente** (BRIEF/MEMORY/STATE) → `_templates/`
   - **Plantilla de playbook** → `playbooks/_PLANTILLA_PLAYBOOK.md`
   - **Esta guía** → `00_SISTEMA/_guia_implementacion/`

6. En `_PLANTILLA_CLIENTE_NUEVO/`, copiá las 3 plantillas:
```bash
cp _templates/BRIEF_TEMPLATE.md clients/_PLANTILLA_CLIENTE_NUEVO/BRIEF.md
cp _templates/MEMORY_TEMPLATE.md clients/_PLANTILLA_CLIENTE_NUEVO/MEMORY.md
cp _templates/STATE_TEMPLATE.md clients/_PLANTILLA_CLIENTE_NUEVO/STATE.md
```

7. Hacé lo mismo en `clients/brinkflow/`:
```bash
cp _templates/BRIEF_TEMPLATE.md clients/brinkflow/BRIEF.md
cp _templates/MEMORY_TEMPLATE.md clients/brinkflow/MEMORY.md
cp _templates/STATE_TEMPLATE.md clients/brinkflow/STATE.md
```

8. (Opcional pero recomendado) Inicializá Git:
```bash
git init
git add .
git commit -m "Inicial: estructura base BrinkFlow OS"
```

**Validación:** la estructura debe verse como el plano de VS Code. Si todo está en su lugar → continuá.

---

### Bloque 3 — Tarde (2 horas) — COMPLETAR BRIEF DE BRINKFLOW

**Tarea:** completar el `BRIEF.md` de BrinkFlow como cliente cero.

**Pasos:**

1. Abrí `clients/brinkflow/BRIEF.md` en VS Code.
2. Completá las 9 secciones con todo lo que ya sabés de BrinkFlow:
   - Identificación: nombre, web, RRSS, plan que se asigna a sí misma (sugerido: Plan Dirección 820€ porque es lo que se está auto-prestando).
   - Negocio y oferta: descripción, los 5 planes con precios.
   - Objetivos: 3-5 clientes en 60 días vía Meta Ads.
   - Marca y estética: paleta, tipografías, tono.
   - Funnel: cómo van a llegar los clientes (orgánico LinkedIn + Meta + referidos).
   - Competidores: 3 agencias premium del sector que conozcas.
   - Datos offline: ya sabés qué objeciones aparecen porque las viviste con BrinkHub.
   - Restricciones: no prometer resultados, RGPD, foco en sectores específicos.
   - Acuerdos de trabajo: vos misma sos el cliente, así que esto es claro.

3. **No escribas con Claude. Escribilo vos.** Esto es lo que define a BrinkFlow. Tiene que salir de tu cabeza.

4. Cuando termines, releélo y preguntate: *"Si fuera otra persona la que lee este BRIEF, ¿podría hacer marketing senior para BrinkFlow con esta info?"* Si la respuesta es no, ajustá lo que falta.

**Validación:** BRIEF completo, claro, con criterio.

---

## DOMINGO (4-5 horas)

### Bloque 4 — Mañana (2 horas) — CORRER FLUJOS 01, 02, 03 PARA BRINKFLOW

**Tarea:** correr los 3 flujos estratégicos sobre BrinkFlow y validar outputs.

**Pasos:**

1. **FLUJO 01 — Diagnóstico Inicial:**
   - Abrí Project Claude → nuevo chat.
   - Escribí: *"Flujo 01 — Diagnóstico inicial para BrinkFlow. Adjunto BRIEF."*
   - Pegá el contenido completo de `BRIEF.md` de BrinkFlow.
   - Recibís el output.
   - **Validación con tu checklist** (Capa 4): aplicá las 6 preguntas del Flujo 01.
   - Si pasa → guardalo como `clients/brinkflow/diagnosticos/2026-MM-DD_diagnostico_inicial.md`.
   - Si no pasa → pedís ajuste con observación específica. Releés. Aprobás cuando pase tu test del 820€.

2. **FLUJO 02 — Customer Decision Profiles:**
   - Nuevo chat en el Project.
   - Escribí: *"Flujo 02 — Customer Decision Profiles para BrinkFlow. Adjunto BRIEF y diagnóstico."*
   - Pegá BRIEF + el diagnóstico recién aprobado.
   - Validás output con checklist del Flujo 02.
   - Guardalo en `clients/brinkflow/customer_profiles.md`.

3. **FLUJO 03 — Big Idea y Ángulos:**
   - Nuevo chat en el Project.
   - *"Flujo 03 — Big Idea y ángulos para BrinkFlow. Adjunto BRIEF, diagnóstico y perfiles."*
   - Pegás los 3 documentos.
   - Validás con checklist del Flujo 03.
   - Guardalo en `clients/brinkflow/big_idea_inicial.md`.

4. **Anotá en MEMORY de BrinkFlow:**
   - Las 2-3 decisiones estratégicas clave (qué territorio narrativo, qué ángulo prioritario, qué perfil arrancamos).

**Validación de cierre del bloque:**
- ¿Los 3 outputs están alineados? (el diagnóstico, los perfiles y la Big Idea cuentan la misma historia coherente)
- ¿Te emocionan, o son "están bien"?
  - Si te emocionan → el sistema funciona.
  - Si son "están bien" → algo en el brief o en los flujos no está funcionando. Anotalo y ajustamos lunes.

---

### Bloque 5 — Mediodía (1 hora) — CORRER FLUJO 04 (PRODUCCIÓN DE COPY)

**Tarea:** generar los primeros copys para BrinkFlow y validar.

**Pasos:**

1. Elegí el ángulo prioritario del Flujo 03.
2. Nuevo chat en el Project: *"Flujo 04 — 3 variantes de copy para BrinkFlow. Ángulo: [el que elegiste]. Formato: Reel. Adjunto BRIEF, perfiles, Big Idea, MEMORY."*
3. Pegás todos los documentos.
4. Recibís 3 variantes.
5. **Test de comparación senior**:
   - Abrí otro chat (no Project, chat normal de Claude).
   - Pedí: *"Generá 3 copys para una agencia de performance marketing premium en España"*.
   - Compará los outputs.
   - **Si la diferencia es notoria → el sistema funciona.**
   - Si la diferencia es chica → algo del flujo o del brief no está activando bien.

6. Pasá las 3 variantes ganadoras por **Flujo 07 (QA Express)**:
   - Nuevo chat en Project: *"Flujo 07 — QA Express sobre estos 3 copys. Adjunto."*
   - Pegás los 3.
   - Recibís veredicto.
   - Si APROBADO → guardás en `/copies/`.
   - Si AJUSTAR → pedís reformulación.

**Validación del bloque:** ¿Los copys aprobados pasan tu test del 820€?

---

### Bloque 6 — Tarde (1.5 horas) — IMPLEMENTAR NOTION

**Tarea:** crear la estructura de Notion siguiendo el plano.

**Pasos:**

1. Abrí Notion.
2. Seguí el `PLANO_NOTION.md` paso a paso.
3. Tiempo estimado: 1.5 horas para tener todas las bases de datos creadas + dashboard configurado.
4. Cargá tus clientes actuales (los 10) en la base de Clientes con sus datos básicos.

**Validación:** abrí el Dashboard. ¿En 30 segundos entendés el estado de la operación?

---

### Bloque 7 — Cierre del domingo (30 min) — REFLEXIÓN Y AJUSTE

**Tarea:** decidir si el sistema queda como está o necesita ajustes el lunes.

**Preguntas:**

1. ¿Los flujos produjeron outputs senior para BrinkFlow?
2. ¿La estructura de archivos en VS Code se mantiene clara?
3. ¿Notion es navegable en 30 segundos?
4. ¿Hay algún flujo que sentís incompleto?
5. ¿El sistema te genera más claridad o más fricción que antes?

**Si todo es positivo:** el sistema está validado. Lunes arrancás a cargar clientes reales.

**Si hay áreas grises:** anotalas. Ajustás antes de cargar clientes reales.

---

## LUNES (cuando vuelvas a trabajar)

### Primer paso del lunes (30 min)

1. Releé el `CAPA_4_VALIDACION_VERO.md` con calma.
2. Decidí qué cliente real cargar primero. Sugerencia: el más estratégico de tus 10 (mejor relación / mayor potencial / mejor caso de éxito).
3. Copiá la carpeta `_PLANTILLA_CLIENTE_NUEVO/` y renombrala con el nombre del cliente.
4. Empezá el onboarding completando su BRIEF.

A partir de ahí, el sistema funciona solo con tu dirección.

---

## Si algo falla durante el finde

**Si un flujo no produce un output que te convenza tras 2 intentos de ajuste:**
- No insistas. Es un problema del flujo, no de Claude.
- Anotalo y ajustamos lunes. El flujo se reescribe en 15 minutos.

**Si la estructura de VS Code se vuelve confusa:**
- Probablemente agregaste cosas que no están en el plano.
- Volvé al plano original. Eliminá lo que sumaste.

**Si Notion se vuelve lento o caótico:**
- Probablemente metiste contenido largo (lo que tiene que estar en VS Code).
- Sacá ese contenido. Notion es solo gestión visual.

---

## Lo que NO vas a hacer este finde

❌ Crear nuevos flujos.
❌ Agregar capas conceptuales nuevas.
❌ Cargar clientes reales antes de validar con BrinkFlow.
❌ Ejecutar perfeccionamientos infinitos. **El sistema arranca imperfecto y mejora con uso real.**

---

## Mantra del finde

> "Mejor un sistema imperfecto operando que un sistema perfecto en el papel."

Si el lunes a primera hora estás cargando un cliente real al sistema, ganaste el finde.
Si el lunes seguís perfeccionando documentos, perdiste.

Buena suerte. Vas a estar bien.

---

*Esta guía se guarda en `/00_SISTEMA/_guia_implementacion/GUIA_IMPLEMENTACION_FINDE.md` para que puedas consultarla durante el finde.*
