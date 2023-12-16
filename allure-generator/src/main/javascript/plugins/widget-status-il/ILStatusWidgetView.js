import { Model } from "backbone";
import { View } from "backbone.marionette";
import PieChartView from "../../components/graph-pie-chart/PieChartView";
import { className, regions } from "../../decorators";
import template from "./ILStatusWidgetView.hbs";

@className("status-widget")
@regions({
  il: ".il-status-widget__content",
})
class ILStatusWidgetView extends View {
  template = template;

  onRender() {
    this.showChildView(
      "il",
      new PieChartView({
        model: this.getStatusChartData(),
        showLegend: true,
      })
    );
  }

  getStatusChartData() {
    this.items = this.model.get("items");
    const statistic = this.items.reduce(
      (stats, testResult) => {
        stats[testResult.status.toLowerCase()]++;
        return stats;
      },
      {
        total: this.items.length,
        failed: 0,
        broken: 0,
        skipped: 0,
        passed: 0,
        unknown: 0,
      },
    );
    return new Model({ statistic });
  }
}

export default ILStatusWidgetView;
