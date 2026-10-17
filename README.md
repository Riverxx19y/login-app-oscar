# login-app-oscar

Formulario de inicio de sesión hecho con HTML, CSS y JavaScript como proyecto integrador del taller de control de versiones con Git y GitHub (CECAR, Electiva Profesional en Ingeniería de Software).

## Funcionalidad

- Campos de usuario y contraseña.
- Botón **Ingresar**.
- Validación básica: si algún campo está vacío se muestra un mensaje de error debajo del campo.

## Cómo probarlo

Abre `index.html` en el navegador. No requiere instalar nada.

## Estrategia de ramas: GitHub Flow

Se eligió **GitHub Flow**:

- `main` siempre contiene una versión estable y lista para publicar.
- Cada funcionalidad se desarrolla en una rama corta (por ejemplo `feature/formulario-login`).
- Los cambios entran a `main` solo mediante un Pull Request revisado por otra persona.
- El workflow de GitHub Actions verifica cada Pull Request antes de fusionarlo.

**Justificación:** el proyecto es pequeño, lo desarrolla un equipo de dos personas y no maneja varias versiones en soporte, así que Git Flow (con `develop`, `release` y `hotfix`) agregaría pasos innecesarios. GitHub Flow mantiene las ramas cortas, facilita la Integración Continua y deja la revisión de código como parte natural del proceso.

## Convención de commits

Se usa [Conventional Commits](https://www.conventionalcommits.org/es/v1.0.0/): `feat:`, `fix:`, `docs:`, `style:`, `refactor:` y `ci:`.

## Autor

Oscar Mezar - Ingeniería de Sistemas, CECAR.
