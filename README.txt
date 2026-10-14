# HuertoHogar

Tienda online de productos frescos, orgánicos y lácteos, hecha con **React** para la evaluación de Full Stack.

**Integrante:** [Tu nombre]
**Repositorio:** https://github.com/dannyhenry14/huertohogar-react

---

## Funcionalidades

- **Inicio:** página de bienvenida.
- **Productos:** catálogo con tarjetas de producto y botón para agregar al carrito.
- **Detalle de producto:** información de cada producto.
- **Carrito:** sumar, restar y eliminar productos, con total en pesos chilenos. Se guarda en `localStorage`.
- **Crear usuario:** formulario con validación de RUN, correo, contraseña, fecha de nacimiento, dirección, región y comuna.
- **Iniciar sesión:** valida correo y contraseña contra los usuarios guardados.
- **Contacto:** formulario con validación y contador de 500 caracteres.
- **Nosotros** y **Blog** (con detalle de cada artículo).

## Tecnologías

| Herramienta | Uso |
|---|---|
| React 19 | Interfaz y componentes |
| Vite | Servidor de desarrollo y compilación |
| React Router | Navegación entre páginas |
| Bootstrap 5 | Estilos (incluye las alertas) |
| Karma + Jasmine | Ejecución y escritura de pruebas |
| Testing Library | Dibujar componentes y simular al usuario |
| ESLint | Revisión de código |

## Instalación y uso

Necesitas tener **Node.js** y **Google Chrome** instalados.

```bash
git clone https://github.com/dannyhenry14/huertohogar-react.git
cd huertohogar-react
npm install
```

| Comando | Qué hace |
|---|---|
| `npm run dev` | Abre la página en modo desarrollo (normalmente en `http://localhost:5173`) |
| `npm test` | Corre las pruebas y genera el informe de cobertura |
| `npm run build` | Genera la versión final en la carpeta `dist` |
| `npm run preview` | Muestra la versión compilada |
| `npm run lint` | Revisa el código con ESLint |

## Estructura del proyecto

```
src/
├── components/     Navbar, Footer, Home, Carrito, ProductCard, ProductList
├── paginas/        Productos, DetalleProducto, IniciarSesion, CrearUsuario,
│                   Contacto, Nosotros, Blog, DetalleArticulo
├── utilidades/     usuarios.js (usuarios y sesión en localStorage)
├── data/           productos.js, articulos.js, regiones.js
├── pruebas/        archivos *.spec.jsx
├── App.jsx         rutas y estado del carrito
└── main.jsx        punto de entrada
```

## Componentes reutilizables

**`ProductCard`** es la tarjeta de cada producto. No tiene datos fijos: recibe todo por props (`producto` y `onAgregar`), por eso un solo componente sirve para todo el catálogo.

El recorrido de los datos es:

`App` → `Productos` → `ProductList` (recorre la lista con `map`) → `ProductCard`

## Pruebas

Las pruebas están en `src/pruebas/` y se ejecutan con `npm test` (Karma abre Chrome sin interfaz). Cada prueba sigue tres pasos: dibujar el componente con `render`, simular al usuario con `fireEvent` y revisar el resultado con `expect`.

| Archivo | Qué comprueba |
|---|---|
| `configuracion.spec.jsx` | Que el entorno de pruebas dibuja un componente de React |
| `Carrito.spec.jsx` | Mensaje de carrito vacío, total, botones + y Eliminar, y compra con sesión |
| `Contacto.spec.jsx` | Errores del formulario vacío y límite de 500 caracteres |
| `CrearUsuario.spec.jsx` | Validación del RUN (inválido muestra error, válido no) |
| `IniciarSesion.spec.jsx` | Contraseña incorrecta muestra aviso y no guarda sesión |
| `Navbar.spec.jsx` | Muestra "Iniciar sesión" o el saludo, y cierra la sesión |

Total: 12 pruebas. El informe de cobertura queda en `coverage/html/index.html`.

## Alertas

Los mensajes de éxito y error usan las clases de Bootstrap (`alert alert-success` y `alert alert-danger`) y se muestran con renderizado condicional según un estado de `useState`:

- `Carrito.jsx`: compra realizada.
- `Contacto.jsx`: mensaje enviado.
- `IniciarSesion.jsx`: correo o contraseña incorrectos.

## Mejoras pendientes

- Convertir las alertas en un componente `Alerta` reutilizable, con el tipo y el mensaje por props.
- Conectar `onVaciar` en `App.jsx` para que el botón "Comprar" vacíe el carrito en la página real.