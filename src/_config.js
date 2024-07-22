export const process = {
    dev: true,
};

export const site = {
    home: process.dev ? "/" : "timeheat.ru"
};

export const app = {
    title: "Template",
}

export const links = [
    {
        title: "Home",
        alias:  "home",
        url: "/"
    },
    {
        title: "About",
        alias:  "about",
        url: "/about"
    },

]