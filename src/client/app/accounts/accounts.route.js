(function() {
  'use strict';

  angular
    .module('app.accounts')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'accounts',
        config: {
          url: '/',
          templateUrl: 'app/accounts/accounts.html',
          controller: 'AccountsController',
          controllerAs: 'vm',
          title: 'accounts',
          settings: {
            nav: 1,
            content: '<i class="fa fa-accounts"></i> Accounts'
          }
        }
      }
    ];
  }
})();
