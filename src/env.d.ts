/// <reference types="astro/client" />

declare module '*.astro' {
  const component: import('astro').AstroComponentFactory;
  export default component;
}
