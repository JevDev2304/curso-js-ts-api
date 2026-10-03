# Ejemplo de despliegue en Vercel (nivel 8)

> **Esta rama es un EJEMPLO resuelto.** Publica la **Pokédex (paso 7)** en Vercel con exactamente el mismo método que tú usarás para publicar tu proyecto de Dragon Ball.
> Tu trabajo se hace en **tu propio repositorio**, y la rama que **tú** despliegas es **`nivel-8`**, no esta. Lee esta rama, entiéndela y haz lo equivalente con tu proyecto.

- 🌐 **Página publicada de este ejemplo:** mira el campo *Website* en la parte superior derecha de este repositorio en GitHub.
- 🔍 **Qué cambia respecto a `main`** (solo 2 archivos): [ver la comparación](https://github.com/JevDev2304/curso-js-ts-api/compare/main...deploy-vercel-pokeapi-nivel-8)
  - `vercel.toml` (la configuración del despliegue, con comentarios)
  - `DEPLOY-VERCEL.md` (este archivo)

---

## 1. Qué es Vercel y qué hace aquí

Vercel es un servicio de *hosting*: toma tu repositorio de GitHub, prepara tu página y la deja en internet con una URL pública (`algo.vercel.app`). Cada vez que haces `git push`, vuelve a publicar sola.

Para saber **qué hacer** con tu repositorio, Vercel necesita contestar tres preguntas:

1. ¿Qué instalo? → las dependencias (aquí, TypeScript).
2. ¿Qué ejecuto para construir la página? → compilar los `.ts` a `.js`.
3. ¿Qué carpeta publico? → la que tiene el `index.html` final.

Esas tres respuestas están en el archivo [`vercel.toml`](vercel.toml).

---

## 2. El archivo `vercel.toml`, línea por línea

> ℹ️ Vercel acepta su configuración en `vercel.toml` o en [`vercel.toml`](https://vercel.com/docs/project-configuration/vercel-toml) (solo se usa **uno**). Elegimos **TOML** porque, a diferencia de JSON, **permite comentarios**: el archivo se explica solo. Abre [`vercel.toml`](vercel.toml) y léelo de arriba abajo.

```toml
# Ayuda al editor a autocompletar y avisar errores. No afecta el despliegue.
"$schema" = "https://openapi.vercel.sh/vercel.json"

# 1) ¿QUÉ INSTALO? Las dependencias del proyecto (TypeScript).
installCommand = "npm install"

# 2) ¿QUÉ EJECUTO PARA CONSTRUIR? Compila los .ts a .js (el navegador no entiende TypeScript).
buildCommand = "npm run build:pokedex"

# 3) ¿QUÉ CARPETA PUBLICO? Solo esta carpeta llega a internet; debe existir después de construir.
outputDirectory = "03-pokedex-pasos/paso7"
```

(No hay línea `framework`: la página no usa ningún framework.)

| Campo | Qué significa | En este ejemplo | **En tu proyecto de Dragon Ball** |
|---|---|---|---|
| `"$schema"` | Ayuda al editor a autocompletar y validar el archivo | (déjalo igual) | (déjalo igual) |
| `installCommand` | Comando que descarga las dependencias | `npm install` | `npm install` |
| `buildCommand` | Comando que **construye** la página (aquí: compila TypeScript) | `npm run build:pokedex` | `npm run build` |
| `outputDirectory` | **La carpeta que Vercel publica en internet** | `03-pokedex-pasos/paso7` | `04-proyecto/dragonball/nivel7` |

> 💡 Entre este ejemplo y tu proyecto solo cambian dos líneas: el comando de build y la carpeta que se publica. Fíjate que en ambos casos el comando de build es un script del `package.json` de la raíz.

---

## 3. Qué hice yo en Vercel (paso a paso)

1. Entré a <https://vercel.com> con mi cuenta de GitHub.
2. **Add New → Project** y elegí el repositorio `curso-js-ts-api`, luego **Import**.
3. El primer despliegue lo hace Vercel sobre `main`, que en este repositorio no tiene la página que quiero publicar. **Esto puede fallar y es normal.**
4. En el proyecto: **Settings → Environments → Production → Branch Tracking**. Cambié el nombre de la rama de `main` a `deploy-vercel-pokeapi-nivel-8` y pulsé **Save**. Vercel publica como «producción» la rama que le indiques ahí.
5. **No toqué** Root Directory, Build Command ni Output Directory: los toma de `vercel.toml`.
6. Pestaña **Deployments → Create Deployment**, escribí el nombre de la rama (`deploy-vercel-pokeapi-nivel-8`) y pulsé **Create Deployment**. Esperé el registro (*Build Logs*) hasta que terminó bien.

   > ⚠️ **No uses el botón «Redeploy» para esto.** Redeploy repite el *mismo código* del último despliegue (el de `main`) y no deja elegir otra rama. Para desplegar otra rama usa **Create Deployment**, o simplemente haz un `git push` en esa rama.
7. Probé la página en el computador y en el celular.
8. Copié la URL en el campo *Website* del repositorio.

**Tú harás lo mismo en tu repositorio, pero desplegando tu rama `nivel-8`** (la del bonus) en lugar de esta.

---

## 4. Traducción: de este ejemplo a tu proyecto

| Este ejemplo | Tu proyecto |
|---|---|
| Repositorio `curso-js-ts-api` | **Tu** repositorio público |
| Rama desplegada: `deploy-vercel-pokeapi-nivel-8` | Rama desplegada: **`nivel-8`** (creada desde `nivel-7`: `git checkout nivel-7`, `git checkout -b nivel-8`, `git push -u origin nivel-8`) |
| Branch Tracking de Production = `deploy-vercel-pokeapi-nivel-8` | Branch Tracking de Production = **`nivel-8`** |
| Página: Pokédex paso 7 (`03-pokedex-pasos/paso7`) | Página: tu `04-proyecto/dragonball/nivel7` |
| Script de build: `npm run build:pokedex` | Script de build: `npm run build` |
| `vercel.toml` de esta rama | **Tu repositorio ya trae un `vercel.toml` listo** (viene en `main` y llega a tus ramas). Ábrelo y compruébalo contra la tabla de la sección 2 |

---

## 5. Checklist para tu despliegue

- [ ] Mi repositorio de GitHub es **público**.
- [ ] `npm run build` compila sin errores en mi computador.
- [ ] Existe `04-proyecto/dragonball/nivel7/index.html` y mi `main.ts`.
- [ ] Creé la rama `nivel-8` desde `nivel-7` y la subí con `git push -u origin nivel-8`.
- [ ] En GitHub, la rama `nivel-8` muestra mi carpeta `04-proyecto/dragonball/nivel7`.
- [ ] Revisé que mi `vercel.toml` apunta a `04-proyecto/dragonball/nivel7` y usa `npm run build`.
- [ ] En Vercel importé **mi** repositorio, puse `nivel-8` en el Branch Tracking de Production y creé el despliegue de esa rama (Deployments → Create Deployment), sin cambiar los demás ajustes.
- [ ] Abrí la URL en mi **celular** y funcionan el buscador, los filtros y el detalle.
- [ ] Puse la URL en mi `README.md` y adjunté una captura del celular.

---

## 6. Preguntas para entender (respóndelas en tu README, con tus palabras)

1. ¿Por qué `outputDirectory` apunta a una subcarpeta y no a la raíz del repositorio?
2. ¿Qué pasaría si borras la línea `buildCommand`? ¿Qué archivo faltaría para que el navegador funcione?
3. ¿Quién genera el `main.js` en Vercel? ¿Y en tu computador?
4. ¿Por qué el primer despliegue (de `main`) puede fallar? ¿Qué rama publica Vercel como «producción» y dónde se cambia? ¿Por qué el botón «Redeploy» no sirve para cambiar de rama?
5. Haces un cambio y `git push`. ¿Qué pasa en Vercel sin que hagas nada más?

---

## 7. Si algo falla

Mira [`docs/SOLUCION-PROBLEMAS.md`](docs/SOLUCION-PROBLEMAS.md), sección **Vercel (bonus)**. El error más común es `No Output Directory named "public" found`: significa que Vercel no encontró la carpeta de `outputDirectory`. Revisa que existe en la rama que estás desplegando.
