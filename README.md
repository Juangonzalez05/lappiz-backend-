# Lappiz Backend — API de Gestión de Interesados

API REST construida con **NestJS** para gestionar los interesados en la Demo de Lappiz LowCode.
Permite registrar y consultar personas mediante dos endpoints en memoria, sin necesidad de base de datos.

---

## 📋 Requisitos previos

| Herramienta | Versión mínima recomendada |
|-------------|---------------------------|
| Node.js     | v18.x o superior          |
| npm         | v9.x o superior           |
| NestJS CLI  | v10.x (opcional)          |

Verifica tu versión con:
```bash
node -v
npm -v
```

---

## 🚀 Instalación y ejecución

### 1. Clonar el repositorio
```bash
git clone https://github.com/Juangonzalez05/lappiz-backend-.git
cd lappiz-backend
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Levantar el servidor en modo desarrollo
```bash
npm run start:dev
```

El servidor quedará disponible en:
```
http://localhost:3000
```

Verás en consola:
```
🚀 Server running on http://localhost:3000
[Nest] LOG [NestApplication] Nest application successfully started
```

---

## 🌐 Puerto por defecto

| Entorno     | Puerto |
|-------------|--------|
| Desarrollo  | `3000` |

Para cambiar el puerto, modifica `main.ts`:
```typescript
await app.listen(3001); // cambia al puerto deseado
```

---

## 📡 Endpoints disponibles

### `POST /addPerson`
Registra un nuevo interesado en memoria.

- **URL:** `http://localhost:3000/addPerson`
- **Método:** `POST`
- **Content-Type:** `application/json`

**Body (JSON):**
```json
{
  "name": "Juan Pérez",
  "email": "juan@example.com"
}
```

**Respuesta exitosa `200`:**
```json
{
  "id": 1,
  "name": "Juan Pérez",
  "email": "juan@example.com"
}
```

---

### `GET /getPeople`
Retorna la lista de todos los interesados registrados en memoria.

- **URL:** `http://localhost:3000/getPeople`
- **Método:** `GET`

**Respuesta exitosa `200`:**
```json
[
  {
    "id": 1,
    "name": "Juan Pérez",
    "email": "juan@example.com"
  }
]
```

> Los datos son almacenados **en memoria**. Al reiniciar el servidor, los registros se pierden.

---

## 🧪 Pruebas rápidas

### PowerShell (Windows)
```powershell
# POST - Agregar persona
Invoke-WebRequest -Uri "http://localhost:3000/addPerson" `
  -Method POST `
  -Headers @{"Content-Type" = "application/json"} `
  -Body '{"name": "Juan Perez", "email": "juan@example.com"}'

# GET - Obtener personas
Invoke-WebRequest -Uri "http://localhost:3000/getPeople" -Method GET
```

### curl (Linux/Mac o curl.exe en Windows)
```bash
# POST - Agregar persona
curl -X POST http://localhost:3000/addPerson \
  -H "Content-Type: application/json" \
  -d '{"name": "Juan Pérez", "email": "juan@example.com"}'

# GET - Obtener personas
curl http://localhost:3000/getPeople
```

---

## 📁 Estructura del proyecto

```
src/
├── people/
│   ├── people.module.ts       # Módulo de personas
│   ├── people.service.ts      # Lógica de negocio + almacenamiento en memoria
│   └── people.controller.ts   # Definición de endpoints
├── app.module.ts              # Módulo raíz
└── main.ts                    # Bootstrap + CORS habilitado
```

---

## ⚙️ Scripts disponibles

| Comando               | Descripción                              |
|-----------------------|------------------------------------------|
| `npm run start:dev`   | Inicia con hot-reload (desarrollo)       |
| `npm run start`       | Inicia en modo normal                    |
| `npm run build`       | Compila el proyecto                      |
| `npm run test`        | Ejecuta los tests unitarios              |

---

## 🔒 CORS

CORS está habilitado globalmente en `main.ts` para permitir peticiones desde el frontend Angular:

```typescript
app.enableCors({
  origin: '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
});
```

