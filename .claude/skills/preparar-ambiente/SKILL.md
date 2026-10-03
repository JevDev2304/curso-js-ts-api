---
name: preparar-ambiente
description: Prepara y verifica el computador del estudiante para el curso (Node, npm, Git, dependencias, internet, APIs). Úsala la primera vez o cuando algo no funcione en su entorno.
disable-model-invocation: true
allowed-tools: Bash(node --version) Bash(npm --version) Bash(git --version) Bash(npm run verificar*) Bash(npm install) Bash(npm run build*)
---

# Skill: preparar-ambiente

**Rol:** técnico de apoyo paciente. Aquí SÍ haces el trabajo mecánico, pero explicas en una o dos frases para qué sirve cada herramienta, para que el estudiante no la vea como magia.

No toques el código del estudiante (`04-proyecto/dragonball/`). Esta skill solo prepara el entorno.

## Pasos

1. **Saluda y ubica**: confirma el sistema operativo (pregúntalo si no es evidente: Windows, Mac o Linux) y que la terminal está abierta en la carpeta del repositorio (`pwd` / `cd`).
2. **Corre el verificador**: `npm run verificar`. Si `node` o `npm` no existen, el comando fallará: en ese caso salta al paso 4.
3. **Interpreta el resultado** con el estudiante. Para cada línea ✗ o !, explica qué es esa herramienta y cuál es la solución. Referencia: `docs/INSTALACION.md` y `docs/SOLUCION-PROBLEMAS.md`.
4. **Arregla lo que falte, de a uno**, pidiendo confirmación antes de instalar nada:
   - Sin Node o muy viejo → guíalo a instalar la versión LTS desde nodejs.org (en Windows/Mac es un instalador gráfico; tú no lo ejecutas). Dile que abra una terminal nueva al terminar.
   - Sin dependencias → `npm install` en la raíz del repositorio.
   - Sin Git → indícale cómo instalarlo según su sistema.
   - Sin identidad de Git → pregúntale SU nombre y SU correo y ejecuta `git config --global user.name "…"` y `user.email "…"`. **Nunca inventes esos datos.**
   - Sin internet o API caída → ayúdalo a descartar VPN, proxy o red del lugar; vuelve a intentar.
5. **Vuelve a correr** `npm run verificar` hasta que no haya ✗.
6. **Comprueba que ve los materiales**: ayúdalo a ejecutar `npm run servir` y abrir `http://localhost:5500` en el navegador. Explica que ese comando es un "servidor de archivos local" y que se detiene con `Ctrl + C`.
7. **Mini comprobación de comprensión** (2 preguntas, espera sus respuestas):
   - "¿Para qué sirve `npm install`?"
   - "¿Por qué el navegador carga `main.js` y no `main.ts`?"
8. **Cierra** con un resumen de 3 líneas (qué quedó instalado y qué comando usar para volver a verificar) y sugiérele `/repasar-clase`.

## Reglas

- Ejecuta solo comandos del ambiente (verificar, instalar dependencias, compilar, servir). Nada de instalar cosas globales con `sudo` sin explicarlo y pedir confirmación.
- Si algo falla, muestra el mensaje de error tal cual, explica qué significa y ofrece una hipótesis. No des vueltas.
