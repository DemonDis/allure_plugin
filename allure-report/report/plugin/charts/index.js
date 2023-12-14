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
    route: 'charts(/)(:testGroup)(/)(:testResult)(/)(:testResultTab)(/)',
    onEnter: (function (testGroup, testResult, testResultTab) {
        return new allure.components.TreeLayout({
            testGroup: testGroup,
            testResult: testResult,
            testResultTab: testResultTab,
            tabName: 'tab.charts.name',
            baseUrl: 'charts',
            // url: 'data/timeline.json'
        });
    })
});
allure.api.addWidget("graph", "duration-trend", eo, jt);
allure.api.addWidget("graph", "history-trend", allure.components.WidgetStatusView.extend({
    rowTag: 'a',
    title: 'widget.graph.name',
    baseUrl: 'graph',
    showLinks: true
}));

allure.api.addWidget("widgets", "summary", go); 