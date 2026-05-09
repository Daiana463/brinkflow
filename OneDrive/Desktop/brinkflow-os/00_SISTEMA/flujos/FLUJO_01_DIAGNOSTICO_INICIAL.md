# FLUJO 01 — DIAGNÓSTICO INICIAL

## Propósito

Producir el diagnóstico estratégico de un cliente nuevo. Identificar el problema económico real (no el síntoma visible), la prioridad de acción y el plan de los primeros 30 días.

**Cuándo invocar:** una vez por cliente, en la primera semana después de completar el BRIEF.

**Output esperado:** documento de 1-2 páginas con diagnóstico, hipótesis, prioridades y plan 30 días.

---

## Cómo invocar este flujo

Vero escribe a Claude en el Project:

> "Flujo 01 — Diagnóstico inicial para [cliente]. Adjunto BRIEF."

Y pega el contenido del BRIEF.md del cliente.

---

## Lo que Claude debe hacer (instrucciones internas)

### Antes de producir, razoná internamente

1. **Identificá el momento del negocio.** Lanzamiento, crecimiento, estancado o rebranding. Cada momento requiere prioridades distintas.

2. **Identificá el cuello de botella económico real.** No el síntoma. El BRIEF dice "no llegan leads" pero el problema real puede ser:
   - Captación (efectivamente faltan leads)
   - Mensaje (atrae al perfil equivocado)
   - Conversión offline (los leads llegan pero no cierran)
   - Capacidad (no podrían atender más aunque llegaran)
   - Oferta (la propuesta no es suficientemente diferenciada)
   - Percepción (la marca no genera la confianza necesaria al ticket que pide)

3. **Aplicá el filtro económico.** ¿Cuál es la palanca de mayor impacto en facturación con el menor esfuerzo? Eso es la prioridad. No "todo lo importante", sino "lo que mueve la aguja primero".

4. **Identificá qué NO hacer aunque parezca urgente.** Esto es marketing senior: tan importante como decir qué hacer.

5. **Pasá por filtro de compliance.** Detectá riesgos en lo que el cliente quiere comunicar.

6. **Validá coherencia con BRINKFLOW_DNA.** Si el cliente no encaja con lo que BrinkFlow representa, lo señalás.

### Producción del output

Devolvé exactamente esta estructura:

```
DIAGNÓSTICO INICIAL — [CLIENTE]
═══════════════════════════════════════════

MOMENTO DEL NEGOCIO
[Lanzamiento / crecimiento / estancado / rebranding + 1-2 líneas explicativas]

PROBLEMA REAL (no el síntoma declarado)
[Una frase que nombra el cuello de botella económico verdadero. Distinto del que el cliente dice tener si corresponde.]

HIPÓTESIS CENTRAL
"Creemos que [acción / cambio] generará [resultado] porque [razón estratégica basada en lo que sabemos del cliente y del sector]."

PRIORIDAD ECONÓMICA #1
[La palanca de mayor impacto en facturación. Específica.]

QUÉ NO HACER AUNQUE PAREZCA URGENTE
[1-3 cosas que el cliente probablemente quiere hacer pero que dispersan o destruyen valor.]

RIESGOS DETECTADOS
- Riesgo de compliance: [si hay]
- Riesgo de plataforma (Meta/Google): [si hay]
- Riesgo reputacional: [si hay]
- Riesgo de fit con BrinkFlow: [si lo detectás]

PLAN 30 DÍAS

Semana 1 — Setup y diagnóstico profundo
- 
- 
-

Semana 2 — Producción inicial
- 
- 
-

Semana 3 — Lanzamiento
- 
- 
-

Semana 4 — Primera lectura y ajuste
- 
- 
-

DATOS QUE NECESITAMOS DEL CLIENTE PARA AVANZAR
[Lista concreta. Si falta algo crítico que ni siquiera el BRIEF cubre.]

FIT CON BRINKFLOW
[Evaluación honesta. ¿Es el cliente correcto para esta agencia? Si hay reservas, las marcás explícitamente.]

PRÓXIMA ACCIÓN
[Qué tiene que hacer Vero esta semana con este diagnóstico.]
```

### Después de devolver el output

7. **Recordá a Vero actualizar MEMORY del cliente** con la primera entrada (decisión estratégica: "Arrancamos con prioridad X porque Y").

---

## Frameworks senior que activás (sin escribirlos en el output)

- **Análisis de cuello de botella económico**: el problema real está donde una mejora del 10% genera 50%+ de impacto en revenue.
- **Identificación de fase del negocio**: lanzamiento requiere percepción + tracción inicial; crecimiento requiere escalado de lo que funciona; estancado requiere diagnóstico de qué cambió en el mercado o en el funnel; rebranding requiere narrativa antes que pauta.
- **Jobs-to-be-done aplicado al cliente del cliente**: ¿qué trabajo emocional contrata el consumidor cuando consume este servicio? Eso define la prioridad estratégica.
- **Coste de oportunidad**: cada acción tiene un costo en lo que dejás de hacer. La prioridad #1 se define por descarte estricto.

---

## Qué hace que este diagnóstico sea senior y no genérico

- Distingue **problema real** de síntoma declarado.
- Tiene **una sola** prioridad #1, no cinco.
- Dice **qué no hacer**, no solo qué hacer.
- Marca **riesgos** que el cliente no preguntó pero deberíamos advertir.
- Evalúa **fit con BrinkFlow** sin maquillarlo.
- El plan 30 días es **ejecutable concreto**, no aspiracional vago.

---

## Validación de Vero (Capa 4)

Antes de aprobar este diagnóstico para presentarlo al cliente, Vero verifica:

```
☐ ¿La prioridad #1 es realmente la palanca económica más fuerte, o es lo que el cliente quiere oír?
☐ ¿El "qué no hacer" tiene coraje real, o evita la incomodidad?
☐ ¿La hipótesis central tiene sustento o es genérica?
☐ ¿El plan 30 días es ejecutable con el plan contratado o sobrepromete?
☐ ¿Los riesgos están señalados con honestidad?
☐ ¿Yo firmaría este diagnóstico para un cliente Plan Dirección de 820€?
```

Si alguna respuesta no es claramente sí, pedís a Claude que ajuste con la observación específica.

---

*Este flujo se ejecuta una sola vez por cliente. El output se guarda en `/clients/[cliente]/diagnostico_inicial.md` y la decisión estratégica derivada va a MEMORY.*
