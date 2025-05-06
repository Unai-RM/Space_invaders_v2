# Space_Invaders_v2

🛠️ Versión en desarrollo del proyecto **Space Invaders** original que creé hace más de 6 años. Esta nueva versión busca reconstruir el aspecto visual del juego aplicando **mejores prácticas de organización de archivos**, estructura de proyecto más limpia y, incorporando **nuevas tecnologías y lenguajes modernos**.

🔗 [Versión original del proyecto](https://github.com/Unai-RM/Space_invaders)

## 🎯 Objetivos del proyecto
- Reorganización completa del código con enfoque modular
- Mejora del rendimiento y escalabilidad
- Uso de herramientas y tecnologías más actuales (JavaScript moderno, frameworks, etc.)
- Comparación del proceso de aprendizaje y evolución técnica

## 🚀 Cambios Implementados

### Tecnologías y Arquitectura
- Migración completa a React y TypeScript
- Implementación de componentes modulares y reutilizables
- Uso de CSS moderno con enfoque en flexbox y animaciones
- Gestión de estado con React Hooks

### Componentes Separados
- Separación de naves en componentes individuales:
  - `PlayerShip`: Nave controlada por el jugador
  - `EnemyShip`: Nave enemiga con animación automática
  - `Aliens`: Diferentes tipos de aliens (Squid, Crab, Octopus)
  - `Defense`: Estructuras defensivas
  - `Score`: Sistema de puntuación
  - `GameStatus`: Estado del juego

### Mejoras en la Funcionalidad
- Sistema de controles dual:
  - Flechas direccionales (←/→)
  - Teclas alternativas (A/D)
- Popup instructivo al inicio del juego
- Límites de movimiento para mantener la nave en pantalla

### Mejoras Visuales
- Diseño retro mejorado con la fuente 'Press Start 2P'
- Animaciones fluidas para todos los elementos:
  - Movimiento ondulatorio de los aliens
  - Patrón de movimiento complejo para la nave enemiga
- Interfaz más limpia y organizada
- Monitor retro con efectos visuales

### Estructura del Proyecto
```
src/
├── components/
│   ├── aliens/
│   │   ├── Squid.tsx
│   │   ├── Crab.tsx
│   │   ├── Octopus.tsx
│   │   └── EnemyShip.tsx
│   ├── Game.tsx
│   ├── PlayerShip.tsx
│   ├── Defense.tsx
│   └── Score.tsx
└── styles/
    ├── Game.css
    ├── Aliens.css
    └── Score.css
```

### `npm start`
Inicia el juego en modo desarrollo.
Abre [http://localhost:3000](http://localhost:3000) para verlo en el navegador.

### `npm run build`
Construye el juego para producción en la carpeta `build`.