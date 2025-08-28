export const getInitials = (initname: string) => {
  return initname
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
};