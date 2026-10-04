/* Yousaf Journal — local site settings
   Frontend-only by design. No backend, database, cookies, or external auth.
*/
window.YJSettings = (() => {
  const KEY = "yj-settings-v1";
  const defaults = {
    theme: "light",
    fontSize: "normal",
    reducedMotion: false,
    readerName: "",
    readerEmail: ""
  };

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      return {...defaults, ...(raw ? JSON.parse(raw) : {})};
    } catch {
      return {...defaults};
    }
  }

  function save(patch) {
    const next = {...load(), ...patch};
    try { localStorage.setItem(KEY, JSON.stringify(next)); } catch {}
    return next;
  }

  function reset() {
    try { localStorage.removeItem(KEY); } catch {}
    return {...defaults};
  }

  return {defaults, load, save, reset};
})();
