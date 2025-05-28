import { IPage } from "shared/types";

export const MOCK_DATA: IPage[] = [
    {
    id: 1,
    startDate: 1970,
    endDate: 1976,
    name: 'Ранние технологии',
    items: [
      { date: 1970, description: 'Появление первых концепций персональных компьютеров.' },
      { date: 1973, description: 'Motorola разработала первый мобильный телефон.' },
      { date: 1975, description: 'Основана компания Microsoft.' },
      { date: 1976, description: 'Создан первый компьютер Apple I.' },
    ],
  },
  {
    id: 2,
    startDate: 1980,
    endDate: 1986,
    name: 'История',
    items: [
      { date: 1980, description: 'Вышла первая версия стандарта Ethernet.' },
      { date: 1981, description: 'IBM выпустила свой первый персональный компьютер.' },
      { date: 1982, description: 'Создан первый компакт-диск (CD).' },
      { date: 1983, description: 'Официально представлен протокол TCP/IP.' },
      { date: 1984, description: 'Apple выпускает Macintosh.' },
      { date: 1986, description: 'Создана первая версия стандарта GIF.' },
    ],
  },
  {
    id: 3,
    startDate: 1990,
    endDate: 1996,
    name: 'Интернет',
    items: [
      { date: 1990, description: 'Тим Бернерс-Ли предложил концепцию World Wide Web.' },
      { date: 1991, description: 'Запущен первый веб-сайт.' },
      { date: 1992, description: 'Создан первый браузер с графическим интерфейсом — Mosaic.' },
      { date: 1993, description: 'Появление первых интернет-рекламных баннеров.' },
      { date: 1994, description: 'Основана компания Yahoo!.' },
      { date: 1996, description: 'Началась эпоха поисковых систем — появление Google не за горами.' },
    ],
  },
  {
    id: 4,
    startDate: 2000,
    endDate: 2006,
    name: 'Социальные сети',
    items: [
      { date: 2000, description: 'Запущена первая версия Habbo Hotel.' },
      { date: 2001, description: 'Появился сервис Wikipedia.' },
      { date: 2003, description: 'Запуск MySpace.' },
      { date: 2004, description: 'Марк Цукерберг запускает Facebook.' },
      { date: 2005, description: 'Создан YouTube.' },
      { date: 2006, description: 'Появляется Twitter.' },
    ],
  },
  {
    id: 5,
    startDate: 2010,
    endDate: 2015,
    name: 'Мобильные технологии',
    items: [
      { date: 2010, description: 'Появление первого iPad от Apple.' },
      { date: 2011, description: 'Запуск голосового помощника Siri.' },
      { date: 2012, description: 'Google представляет Google Now.' },
      { date: 2013, description: 'Запуск первого Samsung Galaxy Gear.' },
      { date: 2015, description: 'Apple выпускает Apple Watch.' },
    ],
  },
  {
    id: 6,
    startDate: 2015,
    endDate: 2022,
    name: 'Наука',
    items: [
      {
        date: 2015,
        description: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
      },
      {
        date: 2016,
        description: 'Компания Nikitosha Inc официально представила первый в мире электрический воздух',
      },
      {
        date: 2017,
        description: '53 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды',
      },
      {
        date: 2018,
        description: '53 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды',
      },
    ],
  },
];
