'use strict';

allure.api.addTranslation('en', {
    tab: {
        behaviors: {
            name: 'Charts'
        }
    },
    widget: {
        charts: {
            name: 'Features by stories',
            showAll: 'show all'
        }
    }
});

allure.api.addTranslation('ru', {
    tab: {
        charts: {
            name: 'Графики'
        }
    },
    widget: {
        behaviors: {
            name: 'Функциональность',
            showAll: 'показать все'
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
            url: 'data/charts.json'
        });
    })
});

allure.api.addWidget('widgets', 'charts', allure.components.WidgetStatusView.extend({
    rowTag: 'a',
    title: 'widget.charts.name',
    baseUrl: 'charts',
    showLinks: true
}));
