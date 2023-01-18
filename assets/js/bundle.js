import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

/**
 * Global State
 *
 * If you need state that is accessible from all components,
 * define it here and you can then access it via the $store
 * variable inside your components.
 */
document.addEventListener('alpine:init', () => {
	Alpine.store('menuIsOpen', false);
});
