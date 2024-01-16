import { IoHomeOutline } from "react-icons/io5";
import { BsInfoSquare } from "react-icons/bs";
import { CiStar } from "react-icons/ci";
import { TiContacts } from "react-icons/ti";
import { LuKanbanSquare } from "react-icons/lu";

import {
  MdRestaurant,
  MdDirectionsBus,
  MdHome,
  MdShoppingCart,
  MdSchool,
  MdFitnessCenter,
  MdLocalHospital,
  MdAttachMoney,
  MdMusicNote,
  MdLocalMovies,
  MdLocalGroceryStore,
  MdFlight,
  MdDirectionsCar,
  MdSportsSoccer,
  MdWork,
  MdLaptop,
  MdLibraryBooks,
  MdLocalCafe,
  MdEvent,
  MdWc,
  MdLocalLaundryService,
  MdWifi,
  MdBeachAccess,
} from "react-icons/md";

const linksHeaderLanding = [
  {
    label: "Home",
    href: "/",
    icon: IoHomeOutline,
  },
  {
    label: "Sobre",
    href: "#about",
    icon: BsInfoSquare,
  },
  {
    label: "Features",
    href: "#feature",
    icon: CiStar,
  },
  {
    label: "Contato",
    href: "#contact",
    icon: TiContacts,
  },
];

const linksHeaderDashboard = [
  {
    icon: LuKanbanSquare,
    href: "/dashboard",
    label: "Dashboard",
  },
];

const expenseCategories = [
  { value: "Alimentação", label: MdRestaurant },
  { value: "Transporte", label: MdDirectionsBus },
  { value: "Moradia", label: MdHome },
  { value: "Compras", label: MdShoppingCart },
  { value: "Educação", label: MdSchool },
  { value: "Academia", label: MdFitnessCenter },
  { value: "Saúde", label: MdLocalHospital },
  { value: "Finanças", label: MdAttachMoney },
  { value: "Entretenimento", label: MdMusicNote },
  { value: "Filmes", label: MdLocalMovies },
  { value: "Praia", label: MdBeachAccess },
  { value: "Supermercado", label: MdLocalGroceryStore },
  { value: "Viagem", label: MdFlight },
  { value: "Carro", label: MdDirectionsCar },
  { value: "Esportes", label: MdSportsSoccer },
  { value: "Trabalho", label: MdWork },
  { value: "Tecnologia", label: MdLaptop },
  { value: "Livros", label: MdLibraryBooks },
  { value: "Café", label: MdLocalCafe },
  { value: "Eventos", label: MdEvent },
  { value: "Banheiro", label: MdWc },
  { value: "Lavanderia", label: MdLocalLaundryService },
  { value: "Internet", label: MdWifi },
];

const currencies = [
  { name: "United States Dollar", code: "USD" },
  { name: "Euro", code: "EUR" },
  { name: "Japanese Yen", code: "JPY" },
  { name: "British Pound Sterling", code: "GBP" },
  { name: "Canadian Dollar", code: "CAD" },
  { name: "Australian Dollar", code: "AUD" },
  { name: "Swiss Franc", code: "CHF" },
  { name: "Singapore Dollar", code: "SGD" },
  { name: "Hong Kong Dollar", code: "HKD" },
  { name: "Swedish Krona", code: "SEK" },
  { name: "Norwegian Krone", code: "NOK" },
  { name: "Danish Krone", code: "DKK" },
  { name: "Polish Złoty", code: "PLN" },
  { name: "Czech Koruna", code: "CZK" },
  { name: "Mexican Peso", code: "MXN" },
  { name: "Brazilian Real", code: "BRL" },
  { name: "Indian Rupee", code: "INR" },
  { name: "Chinese Yuan", code: "CNY" },
  { name: "South Korean Won", code: "KRW" },
  { name: "New Zealand Dollar", code: "NZD" },
];

export {
  linksHeaderLanding,
  expenseCategories,
  linksHeaderDashboard,
  currencies,
};
