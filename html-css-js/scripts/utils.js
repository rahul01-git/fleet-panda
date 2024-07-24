export function handleAuthentication() {
  return localStorage.length > 0;
}

export function setupEventListeners(events) {
  events.forEach(({ element, event, handler }) => {
    element.addEventListener(event, handler);
  });
}
