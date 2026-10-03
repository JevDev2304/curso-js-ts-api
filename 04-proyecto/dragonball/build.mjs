// Compila cada nivel que tenga un main.ts (main.ts -> main.js) y revisa los tipos.
// Uso:  npm run build
import { existsSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import ts from "typescript";

const root = dirname(fileURLToPath(import.meta.url));
const niveles = readdirSync(root, { withFileTypes: true })
  .filter((d) => d.isDirectory() && /^nivel\d+$/.test(d.name))
  .map((d) => d.name)
  .sort();

const conTs = niveles.filter((n) => existsSync(join(root, n, "main.ts")));

if (conTs.length === 0) {
  console.log("Todavía no hay niveles con main.ts.");
  console.log("Crea el nivel 3 con:  npm run nivel -- 3   (los niveles 1 y 2 no usan TypeScript)");
  process.exit(0);
}

let fallos = 0;
for (const nivel of conTs) {
  const cfgPath = join(root, nivel, "tsconfig.json");
  if (!existsSync(cfgPath)) {
    console.error(`✗ ${nivel}: falta ${nivel}/tsconfig.json. Créalo con:  npm run nivel -- ${nivel.replace("nivel", "")}`);
    fallos++;
    continue;
  }
  const cfg = ts.readConfigFile(cfgPath, ts.sys.readFile);
  const parsed = ts.parseJsonConfigFileContent(cfg.config, ts.sys, dirname(cfgPath));
  const program = ts.createProgram(parsed.fileNames, parsed.options);
  const result = program.emit();
  const diags = ts.getPreEmitDiagnostics(program).concat(result.diagnostics);
  if (diags.length) {
    fallos++;
    console.error(`✗ ${nivel}: hay errores de tipos (el main.js se generó igual, pero corrígelos):`);
    console.error(ts.formatDiagnosticsWithColorAndContext(diags, {
      getCanonicalFileName: (f) => f, getCurrentDirectory: () => root, getNewLine: () => "\n",
    }));
  } else {
    console.log(`✓ ${nivel}: main.ts compilado sin errores → main.js`);
  }
}
process.exit(fallos ? 1 : 0);
