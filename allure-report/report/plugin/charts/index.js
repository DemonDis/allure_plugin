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

allure.api.addTab('behaviors', {
    title: 'tab.behaviors.name', icon: 'fa fa-list',
    route: 'behaviors(/)(:testGroup)(/)(:testResult)(/)(:testResultTab)(/)',
    onEnter: (function (testGroup, testResult, testResultTab) {
        return new allure.components.TreeLayout({
            testGroup: testGroup,
            testResult: testResult,
            testResultTab: testResultTab,
            tabName: 'tab.behaviors.name',
            baseUrl: 'behaviors',
            url: 'data/behaviors.json',
            csvUrl: 'data/behaviors.csv'
        });
    })
});

allure.api.addWidget('widgets', 'behaviors', allure.components.WidgetStatusView.extend({
    rowTag: 'a',
    title: 'widget.behaviors.name',
    baseUrl: 'behaviors',
    showLinks: true
}));
