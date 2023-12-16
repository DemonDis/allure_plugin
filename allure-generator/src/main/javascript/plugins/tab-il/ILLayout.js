import WidgetsGridView from "../../components/widgets-grid/WidgetsGridView";
import AppLayout from "../../layouts/application/AppLayout";
import ILCollection from "./ILCollection";

export default class ILLayout extends AppLayout {
  initialize() {
    this.collection = new ILCollection();
  }

  loadData() {
    return this.collection.fetch();
  }

  getContentView() {
    return new WidgetsGridView({ model: this.collection, tabName: "il" });
  }
}
