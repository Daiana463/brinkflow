# FLUJO 02 — CUSTOMER DECISION PROFILES

## Propósito

Construir 2-3 perfiles de decisión del cliente ideal del cliente. No buyer personas demográficas. Perfiles psicológicos de cómo se toma la decisión de compra real.

**Cuándo invocar:** una vez al inicio (después del Flujo 01). Se actualiza con datos reales después de 30-60 días de operación.

**Output esperado:** 2-3 perfiles completos con deseos, ansiedades, objeciones, mensajes que convierten y mensajes que espantan.

---

## Cómo invocar este flujo

> "Flujo 02 — Customer Decision Profiles para [cliente]. Adjunto BRIEF y diagnóstico del Flujo 01."

Si ya hay MEMORY con datos offline, también pegarlo. Cambia mucho la profundidad del output.

---

## Lo que Claude debe hacer (instrucciones internas)

### Antes de producir, razoná internamente

1. **Identificá el nivel de conciencia (Schwartz) de la mayoría de los prospectos actuales.**
   - Nivel 1: Inconsciente del problema
   - Nivel 2: Consciente del problema, no busca solución
   - Nivel 3: Consciente de soluciones, no conoce la nuestra
   - Nivel 4: Consciente del producto, no decidió
   - Nivel 5: Listo para comprar, necesita el camino claro

   El nivel define qué mensaje usar y por qué.

2. **Aplicá Jobs-to-be-done de Christensen.** El cliente no contrata un servicio, contrata un trabajo emocional. Identificalo:
   - En clínicas estéticas: contrata "verme como siempre me sentí por dentro", no "tratamiento de armonización"
   - En wellness: contrata "permiso para parar sin culpa", no "spa"
   - En fitness boutique: contrata "comunidad sin presión social", no "clases"

3. **Diferenciá deseo declarado vs deseo real.** El cliente dice "quiero adelgazar" pero el deseo real es "quiero verme con autoridad social". Trabajá ambos niveles.

4. **Aplicá mapeo de ansiedades de Bob Moesta.** Toda decisión de compra tiene ansiedades:
   - Ansiedad de hacer algo nuevo
   - Ansiedad por el costo (no solo monetario)
   - Ansiedad por el resultado
   - Ansiedad por el juicio social

5. **Identificá disparadores de decisión reales.** Qué hace que actúe ahora y no en 6 meses.

6. **Distinguí mensaje que convierte de mensaje que solo gusta.** Mensajes "premium" pueden gustar y no convertir. Buscamos los que mueven a acción.

### Producción del output

Devolvé esta estructura para CADA perfil (mínimo 2, máximo 3):

```
PERFIL [N° + Nombre descriptivo del perfil]
═══════════════════════════════════════════

DESCRIPCIÓN BREVE
[Quién es esta persona en una frase. Identidad social, no demografía.]

DATOS BASE
Edad aproximada:
Situación vital:
Nivel socioeconómico:
Cómo se identifica a sí misma:

NIVEL DE CONCIENCIA (SCHWARTZ)
[1/2/3/4/5]
Implicación: [qué significa esto para la comunicación]

JOB EMOCIONAL CONTRATADO
Trabajo declarado: [el servicio que pide]
Trabajo emocional real: [lo que verdaderamente busca al contratarlo]

DESEOS
Deseo superficial: [el resultado del servicio]
Deseo real: [la identidad / emoción / transformación que busca]
Deseo aspiracional: [cómo quiere verse en 1 año si todo va bien]

ANSIEDADES
Ansiedad #1 (la que más frena):
Ansiedad #2:
Ansiedad #3:

OBJECIONES ANTICIPADAS (lo que dice antes de cerrar)
Objeción #1: [texto típico] → Reencuadre que la disuelve: [cómo responderla]
Objeción #2:
Objeción #3:

DISPARADORES DE DECISIÓN
Qué la hace actuar ahora: [evento, momento, condición]
Qué la hace postergar: [evento, momento, condición]
Tiempo promedio de decisión estimado: [rápida / media / larga]

VALIDACIÓN SOCIAL QUE NECESITA
[Reseñas, casos reales, autoridad del profesional, prueba de pertenencia, etc.]

FRICCIÓN EMOCIONAL
[Qué la frena aunque quiera comprar — más allá del precio]

MENSAJE QUE LA CONVIERTE
[Frase o idea que hace que diga "esto es para mí". Específica, no genérica.]
Ejemplo de hook que activaría a este perfil:
"[hook concreto]"

MENSAJE QUE LA ESPANTA
[Lenguaje o promesa que genera rechazo o desconfianza. Igual de importante que el anterior.]

CANAL DONDE VIVE
[Instagram / TikTok / Google / WhatsApp / Referidos]

FORMATO QUE CONSUME
[Video corto / carrusel / texto / reseñas / antes-después si aplica con respeto]

LO QUE NO PODEMOS SABER SIN DATA OFFLINE
[Qué partes de este perfil son hipótesis que se confirman/refutan con feedback real del cliente]
```

### Cierre del output

Después de los 2-3 perfiles, agregá:

```
PRIORIZACIÓN
Perfil prioritario para arrancar: [cuál de los 2-3]
Razón: [por qué este primero, ya sea por volumen, ticket o fit estratégico]

PERFIL QUE EXISTE PERO NO TRABAJAMOS (todavía)
[Si detectás un perfil que llega pero no es estratégico, lo señalás. Es importante saber a quién NO le hablamos.]

PRÓXIMA ACCIÓN
- Estos perfiles se validan/ajustan con primer feedback offline (ver MEMORY).
- Después de 30 días de operación, este flujo se actualiza con datos reales.
```

---

## Frameworks senior que activás

- **Niveles de conciencia de Eugene Schwartz**: el mensaje correcto depende de dónde está la audiencia, no de qué queremos vender.
- **Jobs-to-be-done de Clayton Christensen**: la gente contrata productos para hacer trabajos emocionales o funcionales.
- **Forces of progress de Bob Moesta**: ansiedad del nuevo + apego al actual vs push del actual + pull del nuevo.
- **Categorías de Robert Cialdini**: autoridad, prueba social, escasez, reciprocidad, compromiso, simpatía — aplicar las que correspondan al perfil, no todas.
- **Especificidad sobre generalidad**: cada perfil debe ser específico al punto de que parezca "esa persona que conozco".

---

## Qué hace que estos perfiles sean senior y no genéricos

- No son demografía. Son psicología de decisión.
- Distinguen deseo declarado de deseo real.
- Incluyen el "mensaje que espanta" (no solo el que convierte).
- Marcan honestamente qué es hipótesis y qué se valida con datos.
- Identifican un perfil prioritario, no tratan a todos por igual.
- Si hay un perfil que llega pero no queremos, lo nombran.

---

## Validación de Vero (Capa 4)

```
☐ ¿Cada perfil es específico al punto de que reconozco una persona real al leerlo?
☐ ¿El "deseo real" es realmente el trabajo emocional, o es el servicio disfrazado?
☐ ¿Las objeciones son las que escucho en el sector, o suenan a manual?
☐ ¿El "mensaje que espanta" tiene precisión real?
☐ ¿La priorización tiene sustento estratégico?
☐ ¿Yo le mostraría estos perfiles al cliente como entendimiento profundo de su mercado?
```

---

*Output se guarda en `/clients/[cliente]/customer_profiles.md`. Se actualiza después de 30 días con datos reales del feedback offline.*
