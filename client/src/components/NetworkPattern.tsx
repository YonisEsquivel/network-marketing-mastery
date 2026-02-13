/**
 * NetworkPattern - Patrón SVG de red de conexiones para fondos
 * Representa la esencia del marketing en red: personas conectadas
 */

export default function NetworkPattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.03]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="network-pattern"
          x="0"
          y="0"
          width="200"
          height="200"
          patternUnits="userSpaceOnUse"
        >
          {/* Nodos (círculos que representan personas) */}
          <circle cx="0" cy="0" r="3" fill="currentColor" />
          <circle cx="100" cy="0" r="3" fill="currentColor" />
          <circle cx="200" cy="0" r="3" fill="currentColor" />
          <circle cx="50" cy="87" r="3" fill="currentColor" />
          <circle cx="150" cy="87" r="3" fill="currentColor" />
          <circle cx="0" cy="173" r="3" fill="currentColor" />
          <circle cx="100" cy="173" r="3" fill="currentColor" />
          <circle cx="200" cy="173" r="3" fill="currentColor" />
          
          {/* Conexiones (líneas que representan relaciones) */}
          <line x1="0" y1="0" x2="50" y2="87" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
          <line x1="100" y1="0" x2="50" y2="87" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
          <line x1="100" y1="0" x2="150" y2="87" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
          <line x1="200" y1="0" x2="150" y2="87" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
          <line x1="50" y1="87" x2="100" y2="173" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
          <line x1="150" y1="87" x2="100" y2="173" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#network-pattern)" />
    </svg>
  );
}
