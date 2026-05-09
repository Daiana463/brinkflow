# CAPA 4 — SISTEMA DE VALIDACIÓN DE VERO

## Tu rol: Directora, no validadora pasiva

Vero, este documento es para vos. No para Claude.

Tu función en BrinkFlow OS es **dirigir y validar**, no aprobar lo que sale automáticamente. La diferencia es brutal:

- **Validadora pasiva**: lee lo que produjo Claude, le parece bien, lo aprueba. Resultado: nivel medio sostenido en el tiempo. Fatiga. Sensación de no aportar valor.

- **Directora**: lee lo que produjo Claude, lo cuestiona, lo ajusta, lo eleva. Resultado: nivel senior real. Aprendizaje continuo. Sistema mejora cada semana.

**El test que define tu rol cada día:**

> *"¿Yo, como directora de BrinkFlow, firmaría este output y se lo mandaría hoy mismo a un cliente que paga 820€/mes?"*

Si la respuesta no es sí sin dudar, el output no sale. Punto.

---

## Tu rutina de validación semanal

### Validación A — Documentos estratégicos (1 vez por cliente, al inicio)

**Tiempo: 60 minutos.**

Cuando arrancás un cliente nuevo y corrés Flujos 01, 02 y 03:

1. Leés los outputs sin distracciones.
2. Aplicás el checklist de validación de cada flujo (está al final de cada documento de flujo).
3. Si algo no cierra, le pedís a Claude que ajuste con observación específica:
   - NO: "ajustá el diagnóstico"
   - SÍ: "el problema real que identificaste es captación, pero el cliente reporta no-shows del 40% — eso es problema de proceso comercial, no de pauta. Reformulá el diagnóstico considerando esto."

4. Recién cuando los 3 documentos pasan tu test del 820€, los aprobás.

### Validación B — Outputs creativos (semanal)

**Tiempo: 30 minutos por cliente activo.**

Cada semana, para cada cliente:

1. Mirás los copys / piezas que Claude produjo (Flujo 04).
2. Antes de aprobarlos, los pasás por Flujo 07 (QA Express). Claude lo hace, pero VOS validás el QA.
3. **Aplicás tu propio test rápido:**

```
TEST RÁPIDO DE VERO (30 segundos por pieza)

1. ¿Esto suena a BrinkFlow o suena a cualquier agencia?
2. ¿Si cambio el nombre del cliente, sigue funcionando para la competencia?
3. ¿Hay UNA sola idea o hay tres apretadas?
4. ¿El hook me detendría a mí en 3 segundos si lo viera en feed?
5. ¿Yo se lo mandaría sin avergonzarme a un cliente Plan Dirección?

Si hay un solo NO → vuelve a Flujo 04 con observación específica.
```

### Validación C — Decisiones de performance (semanal)

**Tiempo: 30 minutos por cliente activo.**

Cada semana, después de actualizar STATE del cliente con KPIs:

1. Corrés Flujo 05 (Diagnóstico de Performance).
2. **Validás el diagnóstico antes de ejecutar la decisión:**

```
TEST DE DIAGNÓSTICO DE VERO

1. ¿La causa raíz que Claude identificó es realmente la causa, o es el primer síntoma?
2. ¿Tengo data suficiente (mínimo 7 días) o me estoy precipitando?
3. ¿La decisión cambia UNA variable o varias?
4. ¿El offline está integrado, o me dejé llevar solo por dato digital?
5. ¿Yo defendería esta decisión si el cliente me pregunta por qué?

Si hay un solo NO → pedís a Claude que profundice antes de ejecutar.
```

### Validación D — Reporte mensual (1 vez por cliente, fin de mes)

**Tiempo: 45 minutos por cliente.**

Antes de mandar el reporte mensual al cliente:

```
TEST DE REPORTE MENSUAL DE VERO

1. ¿El cliente entendería este reporte sin diccionario de marketing?
2. ¿La sección "qué no funcionó" tiene honestidad real?
3. ¿La decisión que pido al cliente es UNA sola y específica?
4. ¿Cabe en una página?
5. ¿Yo me siento cómoda firmando esto con mi nombre?

Si hay NO → ajustás antes de mandar.
```

---

## Cómo dar feedback a Claude para que el sistema mejore

**Mal feedback (no le sirve a Claude para mejorar):**
- "está bien"
- "ajustalo un poco"
- "no me convence"
- "más premium"
- "mejor"

**Buen feedback (Claude mejora con esto):**
- "El hook habla del servicio antes que del cliente. Reformulá empezando con un problema reconocible del perfil 1."
- "El diagnóstico identifica problema de pauta, pero el feedback offline dice que el 40% de las citas no llegan. Eso es proceso, no pauta. Reformulá el diagnóstico considerando esto."
- "El reporte usa lenguaje de agencia. Traducí cada métrica a impacto en facturación. Específicamente: en lugar de 'CTR 2.3%' decir 'X de cada 100 personas hicieron clic'."
- "La Big Idea se agota en 2 anuncios. Necesito una idea que sostenga 12 meses. Profundizá en la tensión cultural entre [X] y [Y]."

**Regla de oro del feedback:**
Decile QUÉ está mal Y POR QUÉ es mal Y CÓMO ajustarlo. Sin las tres, Claude reformula al azar.

---

## Cuándo NO aprobar nada (señales de alerta)

Hay momentos en los que tenés que parar el sistema, no aprobar más outputs:

🔴 **Si pasaste 3 rondas con un copy y sigue sin convencerte** → el problema no es el copy, es el brief o la Big Idea. Volvé arriba.

🔴 **Si Claude te está dando outputs que "se ven bien" pero no te emocionan** → estás en zona de mediocridad sostenida. Releé los flujos y endurecé los criterios.

🔴 **Si te sentís firmando outputs sin convicción** → parate. Una semana de pausa para recuperar criterio vale más que cuatro semanas de output mediocre.

🔴 **Si el cliente te está aprobando todo sin pedir cambios** → puede ser bueno, pero también puede ser que el cliente no esté leyendo. Mandá una pieza con un error pequeño deliberado a ver si lo detecta. Si no, hay que sentarse con el cliente.

---

## Tu calendario operativo (sugerido)

**Lunes 9:00-10:00 — Validación de la semana**
Mirás todos los STATE de tus clientes. Identificás los que necesitan atención esta semana.

**Lunes a jueves — Producción + Validación creativa**
Cada vez que Claude produce algo, pasás 5-10 minutos validando antes de aprobar.

**Viernes 9:00-11:00 — Diagnósticos de performance**
Corrés Flujo 05 para todos los clientes con campañas activas.

**Último viernes del mes 14:00-18:00 — Reportes mensuales**
Producís Flujo 06 para cada cliente. Validás. Mandás.

**Sábado 30 min — Actualización de MEMORY**
Por cada cliente activo, anotás los aprendizajes de la semana en MEMORY.

**Total semanal estimado para 10 clientes:**
- Validación creativa: 5 horas
- Validación de performance: 2 horas
- Reportes (al fin de mes): 8 horas distribuidas
- Actualización de memorias: 1 hora
- = **~12-15 horas semanales en operación de sistema**

El resto del tiempo: ventas, reuniones con clientes, BrinkHub, descanso.

---

## Cómo entrenar tu ojo crítico

Si recién arrancás y todavía no confiás 100% en tu criterio:

**Ejercicio 1 — Calibración (primera semana):**
Cada vez que Claude produzca un output, antes de leer el QA Express, escribí en una nota tu propio veredicto. Después comparás. Si tu juicio coincide con el QA → buena calibración. Si difieren → analizás por qué.

**Ejercicio 2 — Comparación con benchmark:**
Buscá 1-2 anuncios de agencias premium del mismo sector (no competidores directos, pero del nivel al que aspirás). Compará un output tuyo con el benchmark. ¿Está al mismo nivel? ¿Qué le falta?

**Ejercicio 3 — Test del cliente exigente imaginario:**
Antes de aprobar, imaginate que el cliente más exigente que conocés (o imaginás) está leyendo el output. ¿Lo aprobaría? ¿Te haría preguntas incómodas? ¿Cuáles?

---

## Una verdad incómoda final

El sistema solo va a producir trabajo senior si **vos producís validación senior**.

Si validás con criterio mediocre, los outputs van a ser mediocres aunque los flujos sean perfectos. El sistema no es Claude. **El sistema sos vos + Claude operando juntas.**

Eso significa que tu ojo, tu criterio y tu disciplina son la palanca más importante del sistema, no los documentos.

Buena noticia: el ojo se entrena. Cada semana que validás con rigor, mejorás. En 3 meses sos otra directora que la que arranca esta semana.

---

*Este documento es solo para Vero. No se carga al Project Claude. Se guarda en VS Code en `/brinkflow-os/_capa_validacion/CAPA_4_VALIDACION_VERO.md` para consulta cuando dudes en una validación.*
