
(function() {
'use strict';

    angular
        .module('esale')
        .config(config);
    function config($stateProvider, $urlRouterProvider) {

        var carteiraState = {
            name: 'carteira',
            url: '/carteira',
            controller: 'CarteiraController as vm',
            templateUrl: 'e-sale/components/carteira/carteira.html', 
            params: {}
        }

        var despesasState = {
            name: 'despesas',
            url: '/url',
            templateUrl: 'e-sale/components/despesas/despesas.html',
            controller: 'DespesasController as vm',
            params: {}
        }

        var dashboardState = {
            name: '/',
            url: '/',
            templateUrl: 'e-sale/components/dashboard/dashboard.html',
            controller: 'DashboardController as vm',
            params: {}
        }

        $urlRouterProvider.otherwise('/');
        $stateProvider.state(carteiraState);
        $stateProvider.state(despesasState);

    }
})();