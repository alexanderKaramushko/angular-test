export const enum StorageKeys {
  PROJECTS = 'PROJECTS',
}

export function saveProjects(projects: string) {
  window.localStorage.setItem(StorageKeys.PROJECTS, projects);
}

export function getProjects() {
  return window.localStorage.getItem(StorageKeys.PROJECTS);
}
