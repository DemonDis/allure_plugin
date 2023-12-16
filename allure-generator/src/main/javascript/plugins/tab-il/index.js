import ILLayout from "./ILLayout";

allure.api.addTab("il", {
  title: "tab.il.name",
  icon: "fa fa-flask ",
  route: "il",
  onEnter: () => new ILLayout(),
});
