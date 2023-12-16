import { Collection } from "backbone";
import { reportDataUrl } from "../../data/loader";

export default class GraphCollection extends Collection {
  url = function() {
    return "widgets/status-chart-il.json";
  };

  fetch(options) {
    return reportDataUrl(this.url(), "application/json").then((value) =>
      super.fetch({ ...options, url: value }),
    );
  }
}
