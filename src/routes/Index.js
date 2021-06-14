import { Calendar, Details, Back } from "../exports/Index";

export const Routes = [
  { path: "/", Component: Calendar, name: "home" },
  { path: "/:id", Component: Details, name: "Details" },
  { path: "*", Component: Back, name: "Back" },
];
