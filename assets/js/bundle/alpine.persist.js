(() => {
  // packages/persist/src/index.js
  function src_default(Alpine) {
    Alpine.magic("persist", (el, {interceptor}) => {
      return interceptor((initialValue, getter, setter, path, key) => {
        let initial = localStorage.getItem(path) ? localStorage.getItem(path) : initialValue;
        setter(initialValue);
        Alpine.effect(() => {
          let value = getter();
          localStorage.setItem(path, value);
          setter(value);
        });
        return initial;
      });
    });
  }

  // packages/persist/builds/cdn.js
  document.addEventListener("alpine:init", () => {
    window.Alpine.plugin(src_default);
  });
})();
