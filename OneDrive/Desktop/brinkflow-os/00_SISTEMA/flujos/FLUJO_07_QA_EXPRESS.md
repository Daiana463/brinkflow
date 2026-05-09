# FLUJO 07 — QA EXPRESS

## Propósito

Validar que cualquier pieza producida (copy, concepto creativo, email, landing) cumple con los estándares senior de BrinkFlow antes de salir al cliente o a la plataforma.

**Cuándo invocar:** ANTES de enviar cualquier pieza al cliente o publicar. Es el último filtro.

**Output esperado:** veredicto APROBADO / AJUSTAR / VETO con razón concreta.

---

## Cómo invocar este flujo

> "Flujo 07 — QA Express sobre [pieza]. Adjunto la pieza completa."

---

## Lo que Claude debe hacer (instrucciones internas)

Aplicar 6 filtros en orden. Si CUALQUIERA falla, la pieza no sale.

### Filtro 1 — Estratégico

```
☐ ¿La pieza responde a un objetivo claro?
   Objetivo: [conversión / autoridad / retención / reactivación]
☐ ¿Está dirigida a un Customer Decision Profile específico?
☐ ¿Corresponde a la fase correcta del funnel? [TOFU / MOFU / BOFU]
☐ ¿Ataca el cuello de botella real del cliente?
```

Si alguno falla → AJUSTAR antes de continuar.

### Filtro 2 — Creativo

```
☐ ¿Una sola idea central? (si hay dos, hay cero)
☐ ¿El hook funciona en 3 segundos / primera línea?
☐ ¿Genera tensión emocional o curiosidad real, no neutralidad?
☐ ¿Test de intercambiabilidad: si cambio el nombre del cliente, sigue funcionando para la competencia?
   - Si SÍ → AJUSTAR (es genérico)
   - Si NO → continuar
☐ ¿El CTA es único y claro?
☐ ¿Tiene punto de vista? (no es neutral ni descriptivo)
```

### Filtro 3 — Psicológico

```
☐ ¿Activa el disparador emocional correcto para el perfil objetivo?
☐ ¿Habla al deseo real, no al servicio superficial?
☐ ¿El nivel de conciencia del mensaje coincide con el del prospecto?
   (Si la audiencia está en nivel 2, el mensaje no puede asumir nivel 4)
☐ ¿Resuelve una ansiedad real sin manipular?
☐ ¿Si es BOFU, hay reencuadre de la objeción principal?
```

### Filtro 4 — Visual (si aplica - hay descripción visual / brief / imagen)

```
☐ ¿El hook visual / primer frame interrumpe el scroll?
☐ ¿La jerarquía visual lleva el ojo al elemento correcto?
☐ ¿La paleta es coherente con la marca del cliente?
☐ ¿Comunica algo sin necesidad de leer?
☐ ¿Podría firmarse sin leerla? (coherencia de marca visual)
☐ ¿El nivel de producción es coherente con el posicionamiento premium del cliente?
```

### Filtro 5 — COMPLIANCE (binario, no scoring)

```
☐ ¿Contiene claims médicos no respaldados? → SÍ = VETO
☐ ¿Promete resultados específicos sin respaldo? → SÍ = REFORMULAR o VETO
☐ ¿Usa palabras de la lista de cuarentena? → SÍ = REVISAR
☐ ¿Explota inseguridades de forma degradante? → SÍ = REFORMULAR
☐ ¿Before/after que implique resultado garantizado? → SÍ = VETO
☐ ¿Viola políticas de Meta Ads? → SÍ = REFORMULAR
☐ ¿Viola políticas de Google Ads? → SÍ = REFORMULAR
☐ ¿Riesgo RGPD? → SÍ = SEÑALAR
☐ ¿Urgencia artificial? → SÍ = REFORMULAR
☐ ¿El tono respeta al cliente ideal? → NO = REFORMULAR
```

**Un solo veto detiene todo. No hay score parcial en compliance.**

### Filtro 6 — Marca

```
☐ ¿El tono coincide con el Brand DNA del cliente (no de BrinkFlow, del cliente)?
☐ ¿Es coherente con el territorio narrativo seleccionado?
☐ ¿Suma autoridad a la marca o la diluye?
☐ ¿Es una pieza que el cliente estaría orgulloso de que vea su cliente ideal?
   - Si "dudoso" o "no" → REFORMULAR
```

### Producción del output

```
QA EXPRESS — [PIEZA EVALUADA]
═══════════════════════════════════════════

Cliente: [nombre]
Tipo de pieza: [Reel / imagen / carrusel / email / landing / etc.]
Fase del funnel: [TOFU / MOFU / BOFU / Retargeting]

═══════════════════════════════════════════

VEREDICTO: 🟢 APROBADO / 🟡 AJUSTAR / 🔴 VETO

═══════════════════════════════════════════

ANÁLISIS POR FILTRO

FILTRO 1 — ESTRATÉGICO: ✅ / ⚠️ / ❌
[Si hay observación, qué]

FILTRO 2 — CREATIVO: ✅ / ⚠️ / ❌
[Si hay observación, qué]

FILTRO 3 — PSICOLÓGICO: ✅ / ⚠️ / ❌
[Si hay observación, qué]

FILTRO 4 — VISUAL: ✅ / ⚠️ / ❌ / N/A
[Si hay observación, qué]

FILTRO 5 — COMPLIANCE: ✅ APROBADO / 🔴 VETO
[Si hay veto, qué exactamente y por qué]

FILTRO 6 — MARCA: ✅ / ⚠️ / ❌
[Si hay observación, qué]

═══════════════════════════════════════════

SI ES "AJUSTAR" — QUÉ AJUSTAR

[Específico. No "mejorar el copy". Sí: "el hook habla del servicio antes que del cliente — reformular para empezar con el problema reconocible"]

═══════════════════════════════════════════

SI ES "VETO" — QUÉ HAY QUE RESOLVER ANTES DE INTENTAR DE NUEVO

[Específico y accionable]

═══════════════════════════════════════════

PRÓXIMA ACCIÓN

- APROBADO → la pieza puede salir al cliente / a producción / a publicar
- AJUSTAR → reformular [secciones específicas] y volver a pasar QA
- VETO → no se puede arreglar. Reformular desde brief.
```

---

## Versión EXPRESS para piezas simples (caption orgánico, story, etc.)

Cuando la pieza es de bajo riesgo y poco volumen, podés usar esta versión:

```
QA EXPRESS RÁPIDO
1. ¿Una sola idea? SÍ / NO
2. ¿Habla al perfil correcto? SÍ / NO
3. ¿Pasó compliance básico (sin veto)? SÍ / NO
4. ¿Coherente con marca? SÍ / NO
5. ¿Es elite o genérica? ELITE / GENÉRICA

Si hay un NO o GENÉRICA → reformular antes de entregar.
```

Esta versión sirve para piezas pequeñas. Para anuncios de pauta o landing → siempre el QA completo de 6 filtros.

---

## Frameworks senior que activás

- **Test de intercambiabilidad**: el filtro más importante para detectar genericidad.
- **Compliance binario**: no hay "casi cumple". O cumple o no sale.
- **Una sola idea**: principio de Caples. Si tiene dos, no tiene ninguna.
- **Coherencia de marca**: la pieza puede firmarse sin leerla.
- **Filtros independientes**: cada uno bloquea por separado.

---

## Qué hace que este QA sea senior y no genérico

- **6 dimensiones independientes**, no una checklist única.
- **Compliance es binario**, no scoring.
- Si "AJUSTAR", **dice exactamente qué** y por qué.
- **Veta** sin diplomacia cuando hay que vetar.
- El test de intercambiabilidad es **el más exigente** y aplica a TODO.

---

## Anti-patterns que el QA detecta automáticamente

**Anti-pattern 1 — Pieza intercambiable:**
Si cambiás el nombre del negocio y la pieza funciona igual → rechazo automático.

**Anti-pattern 2 — Hook que describe en lugar de interrumpir:**
"En [nombre del negocio] ofrecemos tratamientos de..." → rechazo. Hook debe arrancar con problema/emoción/dato.

**Anti-pattern 3 — Múltiples CTAs:**
"Conocé más / Seguinos / Contactanos / Reservá" → rechazo. UN CTA por pieza.

**Anti-pattern 4 — Promesa increíble:**
"Transformá tu vida en X sesiones" → rechazo. Especificidad real sin garantía.

**Anti-pattern 5 — Estética que contradice posicionamiento:**
Marca premium con visual de Canva genérico → rechazo. Brief visual antes de copy.

**Anti-pattern 6 — Email centrado en la marca, no en el cliente:**
"En [nombre] llevamos X años..." como apertura → rechazo. Primera frase habla del lector.

---

## Validación de Vero (Capa 4)

Vero hace su propio chequeo después del QA de Claude:

```
☐ ¿Le creo al QA de Claude o tengo dudas?
☐ ¿Pasaría el test de intercambiabilidad mejor con otro hook?
☐ ¿Yo mandaría esto sin avergonzarme a un cliente Plan Dirección de 820€?
☐ Si la respuesta es no o dudosa → vuelve a Flujo 04 con observación específica.
```

---

*Output se guarda en `/clients/[cliente]/qa_logs/[fecha]_[pieza].md` solo si es relevante para el aprendizaje. Si es APROBADO directo, no se guarda.*
