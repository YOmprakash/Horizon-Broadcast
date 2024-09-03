// src/utils/translations.js

const translations = {
    Home: {
      French: 'Accueil',
      German: 'Zuhause',
      Russian: 'Главная',
      Spanish: 'Inicio',
      Chinese: '主页',
    },
    Movies: {
      French: 'Films',
      German: 'Filme',
      Russian: 'Фильмы',
      Spanish: 'Películas',
      Chinese: '电影',
    },
    'TV Shows': {
      French: 'Émissions de télévision',
      German: 'Fernsehsendungen',
      Russian: 'Телепередачи',
      Spanish: 'Programas de TV',
      Chinese: '电视节目',
    },
    Sports: {
      French: 'Des sports',
      German: 'Sportarten',
      Russian: 'Виды спорта',
      Spanish: 'Deportes',
      Chinese: '体育',
    },
    Live: {
      French: 'En direct',
      German: 'Leben',
      Russian: 'Прямой эфир',
      Spanish: 'En Vivo',
      Chinese: '直播',
    },
    Settings: {
      French: 'Paramètres',
      German: 'Einstellungen',
      Russian: 'Настройки',
      Spanish: 'Configuración',
      Chinese: '设置',
    },
  };
  
  export const translate = (menu, language) => {
    if (language === 'English') return menu;
    return translations[menu]?.[language] || menu;
  };
  