const localstorage = {
  updateStorage(aula) {
    const disciplinesIdentifier = this.getUpdatedDisciplinesIdentifier(aula);
    this.addDisciplineIdentifierToStorage(disciplinesIdentifier);
  },
  getUpdatedDisciplinesIdentifier(aula) {
    if (aula.ativado) {
      return this.addDisciplineIfNotExists(aula);
    }
    return this.removeDicipline(aula);
  },
  addDisciplineIfNotExists(aula) {
    if (this.haveDisciplineInLocalStorage(aula)) {
      return this.getStoreDisciplineIdentifier();
    }
    return this.getStoreDisciplineIdentifier().concat(aula.identifier);
  },
  haveDisciplineInLocalStorage(aula) {
    return this.getStoreDisciplineIdentifier().some(
      discipline => discipline === aula.identifier
    );
  },
  getStoreDisciplineIdentifier() {
    if (!window.localStorage) {
      return [];
    }
    return (
      JSON.parse(window.localStorage.getItem("disciplinesIdentifier")) || []
    );
  },
  removeDicipline(aula) {
    return this.getStoreDisciplineIdentifier().filter(
      discipline => discipline !== aula.identifier
    );
  },
  addDisciplineIdentifierToStorage(disciplinesIdentifier = []) {
    if (!window.localStorage) return;
    window.localStorage.setItem(
      "disciplinesIdentifier",
      JSON.stringify(disciplinesIdentifier)
    );
  }
}

export default localstorage;