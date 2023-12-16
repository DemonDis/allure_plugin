'use strict';

allure.api.addTranslation('en', {
    tab: {
        charts: {
            name: 'Charts'
        }
    }
});

allure.api.addTranslation('ru', {
    tab: {
        charts: {
            name: 'Графики'
        }
    }
});

allure.api.addTab('charts', {
    title: 'tab.charts.name', icon: 'fa fa-bug',
    route: '(:testresult)(/):uid(/)(:tabName)(/)(:testresultPage)(/)',
    onEnter: (function (tabName, testresultPage) {
        return new allure.components.TreeLayout({
            tabName: tabName,
            testresultPage: testresultPage,
            tabName: 'tab.charts.name',
            baseUrl: 'charts',
            url: 'data/timeline.json'
        });
    })
});
// allure.api.addWidget("graph", "duration-trend", eo, jt);
// allure.api.addTestResultTab("history", "testResult.history.name", qo);
allure.api.addWidget("graph", "history-trend", allure.components.WidgetStatusView.extend({
    rowTag: 'xa',
    title: 'widget.graph.name',
    baseUrl: 'graph',
    showLinks: true
}));
// allure.api.addWidget("graph", "duration-trend", eo, jt);
// allure.api.addWidget("widgets", "summary", go); 