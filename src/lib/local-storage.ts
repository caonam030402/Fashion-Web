export const getProfileFromLS = () => {
  if (typeof window !== "undefined") {
    const result = localStorage.getItem("profile");
    return result ? JSON.parse(result) : null;
  }
};

export const setProfileToLS = (profile: User) =>
  localStorage.setItem("profile", JSON.stringify(profile));
