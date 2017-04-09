(function() {
  'use strict';

  angular
    .module('app.accounts')
    .controller('AccountsController', AccountsController);

  AccountsController.$inject = ['$q', 'dataservice', 'logger'];
  /* @ngInject */
  function AccountsController($q, dataservice, logger) {
    var vm = this;
    vm.news = {
      title: 'finapp',
      description: 'Hot Towel Angular is a SPA template for Angular developers.'
    };
    vm.messageCount = 0;
    vm.people = [];
    vm.title = 'Accounts';

    activate();

    function activate() {
      var promises = [getMessageCount(), getPeople()];
      return $q.all(promises).then(function() {
        logger.info('Activated Accounts View');
      });
    }

    function getMessageCount() {
      return dataservice.getMessageCount().then(function(data) {
        vm.messageCount = data;
        return vm.messageCount;
      });
    }

    function getPeople() {
      return dataservice.getPeople().then(function(data) {
        vm.people = data;
        return vm.people;
      });
    }
  }
})();
