export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export const generateUniqueId = () => {
    return Math.random().toString(36).substring(2, 9);
};
