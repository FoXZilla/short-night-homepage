export function createElementInBody() {
    const elt = document.createElement('div');
    document.body.appendChild(elt);

    return elt;
}