# Ejemplo de despliegue en Vercel (nivel 8)

> **Esta rama es un EJEMPLO resuelto.** Publica la **Pokédex (paso 7)** en Vercel con exactamente el mismo método que tú usarás para publicar tu proyecto de Dragon Ball.
> Tu trabajo se hace en **tu propio repositorio, en la rama `main`**, no aquí. Lee esta rama, entiéndela y haz lo equivalente con tu proyecto.

- 🌐 **Página publicada de este ejemplo:** mira el campo *Website* en la parte superior derecha de este repositorio en GitHub.
- 🔍 **Qué cambia respecto a `main`** (solo 2 archivos): [ver la comparación](https://github.com/JevDev2304/curso-js-ts-api/compare/main...deploy-vercel-pokeapi-nivel-8)
  - `vercel.json` (la configuración del despliegue)
  - `DEPLOY-VERCEL.md` (este archivo)

---

## 1. Qué es Vercel y qué hace aquí

Vercel es un servicio de *hosting*: toma tu repositorio de GitHub, prepara tu página y la deja en internet con una URL pública (`algo.vercel.app`). Cada vez que haces `git push`, vuelve a publicar sola.

Para saber **qué hacer** con tu repositorio, Vercel necesita contestar tres preguntas:

1. ¿Qué instalo? → las dependencias (aquí, TypeScript).
2. ¿Qué ejecuto para construir la página? → compilar los `.ts` a `.js`.
3. ¿Qué carpeta publico? → la que tiene el `index.html` final.

Esas tres respuestas están en el archivo [`vercel.json`](vercel.json).

---

## 2. El archivo `vercel.json`, línea por línea

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "framework": null,
  "installCommand": "npm install",
  "buildCommand": "npm run build:pokedex",
  "outputDirectory": "03-pokedex-pasos/paso7"
}
```

| Campo | Qué significa | En este ejemplo | **En tu proyecto de Dragon Ball** |
|---|---|---|---|
| `$schema` | Ayuda al editor a autocompletar y validar el archivo | (déjalo igual) | (déjalo igual) |
| `framework` | Qué framework usa tu página. `null` = ninguno (HTML, CSS y TS a secas) | `null` | `null` |
| `installCommand` | Comando que descarga las dependencias | `npm install` | `npm install` |
| `buildCommand` | Comando que **construye** la página (aquí: compila TypeScript) | `npm run build:pokedex` | `npm run build` |
| `outputDirectory` | **La carpeta que Vercel publica en internet** | `03-pokedex-pasos/paso7` | `04-proyecto/dragonball/nivel7` |

> 💡 Los tres campos que cambian son el comando de build y la carpeta que se publica. Fíjate que en ambos casos el comando de build es un script del `package.json` de la raíz.

---

## 3. Qué hice yo en Vercel (paso a paso)

1. Entré a <https://vercel.com> con mi cuenta de GitHub.
2. **Add New → Project** y elegí el repositorio `curso-js-ts-api`.
3. En **Production Branch** (Settings → Git) puse `deploy-vercel-pokeapi-nivel-8`. Vercel publica como «producción» la rama que le indiques.
4. **No toqué** Root Directory, Build Command ni Output Directory: los toma de `vercel.json`.
5. Pulsé **Deploy**, esperé el registro (*Build Logs*) y abrí la URL pública.
6. Probé la página en el computador y en el celular.
7. Copié la URL en el campo *Website* del repositorio.

**Tú harás lo mismo en tu repositorio, pero con la rama `main`** (la rama de producción por defecto) y tu carpeta `nivel7`.

---

## 4. Traducción: de este ejemplo a tu proyecto

| Este ejemplo | Tu proyecto |
|---|---|
| Repositorio `curso-js-ts-api` | **Tu** repositorio público |
| Rama desplegada: `deploy-vercel-pokeapi-nivel-8` | Rama desplegada: **`main`** (tras `git merge nivel-7` y `git push`) |
| Página: Pokédex paso 7 (`03-pokedex-pasos/paso7`) | Página: tu `04-proyecto/dragonball/nivel7` |
| Script de build: `npm run build:pokedex` | Script de build: `npm run build` |
| `vercel.json` ya escrito | **Tu repositorio ya trae un `vercel.json` listo en `main`.** Ábrelo y compruébalo contra la tabla de arriba |

---

## 5. Checklist para tu despliegue

- [ ] Mi repositorio de GitHub es **público**.
- [ ] `npm run build` compila sin errores en mi computador.
- [ ] Existe `04-proyecto/dragonball/nivel7/index.html` y mi `main.ts`.
- [ ] Hice `git checkout main`, `git merge nivel-7` y `git push`.
- [ ] En GitHub, la rama `main` muestra mi carpeta `nivel7`.
- [ ] Revisé que mi `vercel.json` apunta a `04-proyecto/dragonball/nivel7` y usa `npm run build`.
- [ ] En Vercel importé **mi** repositorio y pulsé Deploy sin cambiar los ajustes.
- [ ] Abrí la URL en mi **celular** y funcionan el buscador, los filtros y el detalle.
- [ ] Puse la URL en mi `README.md` y adjunté una captura del celular.

---

## 6. Preguntas para entender (respóndelas en tu README, con tus palabras)

1. ¿Por qué `outputDirectory` apunta a una subcarpeta y no a la raíz del repositorio?
2. ¿Qué pasaría si borras la línea `buildCommand`? ¿Qué archivo faltaría para que el navegador funcione?
3. ¿Quién genera el `main.js` en Vercel? ¿Y en tu computador?
4. Esta rama se despliega distinta a `main`. ¿Qué rama publica Vercel como «producción» y dónde se cambia?
5. Haces un cambio y `git push`. ¿Qué pasa en Vercel sin que hagas nada más?

---

## 7. Si algo falla

Mira [`docs/SOLUCION-PROBLEMAS.md`](docs/SOLUCION-PROBLEMAS.md), sección **Vercel (bonus)**. El error más común es `No Output Directory named "public" found`: significa que Vercel no encontró la carpeta de `outputDirectory`. Revisa que existe en la rama que estás desplegando.
