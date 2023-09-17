export const useValid = (form) => Object.values(form).every((k) => !!k);
