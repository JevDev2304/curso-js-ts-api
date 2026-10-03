# 04 · Proyecto Dragon Ball

**El encargo:** tu sobrino quiere una página para ver sus personajes favoritos de Dragon Ball. Te contrataron y te dieron la paleta de colores de la serie. Tú la diseñas y la construyes.

## Qué hay aquí

| Archivo o carpeta | Qué es |
|---|---|
| [`proyecto-estudiante.html`](proyecto-estudiante.html) | **El enunciado completo**: partes A a D, niveles, entrega, sustentación y rúbrica. Tus respuestas se guardan solas en el navegador |
| [`wireframe-dragonball.html`](wireframe-dragonball.html) | El boceto de las 2 pantallas (listado y detalle) en web y móvil, con los campos de la API |
| [`dragonball/`](dragonball/) | **Tu carpeta de trabajo.** Aquí construyes los niveles |

## Cómo abrir el enunciado

```bash
npm run servir          # desde la raíz del repositorio
```

y entra a <http://localhost:5500/04-proyecto/proyecto-estudiante.html>. También funciona con doble clic.

## Orden de trabajo

1. **Parte A · Explora la API**: abre las URLs en el navegador, completa la tabla comparativa y escribe tus `interface`.
2. **Parte B · Diseña**: con el wireframe y la paleta, genera el diseño completo (web y móvil) en [Claude Design](https://claude.ai/design) o [Google Stitch](https://stitch.withgoogle.com). Guarda tu prompt y una iteración.
3. **Parte C · Construye** los niveles 1 a 7 dentro de `dragonball/`, **una rama de Git por nivel**.
4. **Parte D · Analiza tu código**: 8 preguntas abiertas (un párrafo mínimo, con tus palabras) y 4 de selección múltiple.
5. **Bonus · Nivel 8**: publica en Vercel.

## Cómo crear cada nivel

Dentro de la carpeta del repositorio:

```bash
npm run nivel -- 1     # crea dragonball/nivel1/ (carpeta vacía)
npm run nivel -- 3     # crea dragonball/nivel3/ con tsconfig.json y un main.ts vacío
```

Tú acomodas el contenido (el código te lo propone la IA por piezas pequeñas; tú decides dónde va, lo ejecutas y lo entiendes):

- **Niveles 1 y 2:** `index.html` (y `styles.css` en el 2).
- **Niveles 3 a 7:** `index.html`, `main.ts` y, hasta el nivel 5, `styles.css`.

Para probar tu TypeScript:

```bash
npm run build           # compila cada nivelN/main.ts a main.js y revisa los tipos
npm run servir          # y abre http://localhost:5500/04-proyecto/dragonball/nivel3/
```

> El navegador carga `main.js`, no `main.ts`. Cada vez que cambies tu TypeScript, ejecuta `npm run build` y recarga con `Ctrl+Shift+R`.

## Cómo trabajar con la IA (el ciclo de cada pieza)

1. Pídele **una pieza pequeña** (una función, una sección), con tu contexto: diseño, JSON real de la API, decisiones.
2. Pregúntale **dónde va y por qué** (archivo y lugar exacto).
3. **Acomódala tú** en VS Code.
4. **Ejecútala** (`npm run build` y recarga) y mira qué pasa.
5. Si falla, **entiende el error** antes de pedir el arreglo.
6. **Explícale con tus palabras** qué hace y pídele que te corrija. Luego, la siguiente pieza.

Los prompts listos para esto están en [`../docs/PROMPTS-CHAT.md`](../docs/PROMPTS-CHAT.md).

## Guarda tu avance con Git: una rama por nivel

Cada nivel va en su propia rama, y cada rama nace de la anterior. Los comandos los escribes tú (guía completa en [`../docs/GIT-BASICO.md`](../docs/GIT-BASICO.md); video recomendado: [Curso de Git y GitHub (desde cero)](https://www.youtube.com/watch?v=T3roQrB_Jko&list=PLJ7sTTLrIA6klMtrvcpGXYkBFoUP3rqwo)).

```bash
git status                       # ¿dónde estoy y qué cambió?
git checkout -b nivel-1          # crear la rama del nivel 1 y moverme a ella
# ... trabajas ...
git add .                        # preparar los cambios
git commit -m "Nivel 1: HTML con 5 personajes"   # guardar en mi historial
git push -u origin nivel-1       # subir la rama a mi GitHub (la primera vez)
git checkout -b nivel-2          # el nivel 2 nace desde el 1
```

Para moverte entre niveles: `git checkout nivel-3`. Para traer cambios de GitHub: `git pull`. Al terminar, junta todo en `main` (lo necesita el bonus): `git checkout main`, `git merge nivel-7`, `git push`.

Recuerda: tu repositorio de GitHub debe ser **público**.

Después completa la sección **«Mis comandos de Git»** de tu `README.md` con tus palabras.

## Qué entregas

Tu repositorio con la carpeta `dragonball/` y su `README.md` completo (hay una plantilla lista). Detalles y rúbrica en el enunciado.
