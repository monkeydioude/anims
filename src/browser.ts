export class Browser {
    onReady(cb: () => void) {
        document.addEventListener("DOMContentLoaded", cb);
    }
}
