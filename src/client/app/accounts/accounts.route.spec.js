/* jshint -W117, -W030 */
describe('accounts routes', function() {
  describe('state', function() {
    var view = 'app/accounts/accounts.html';

    beforeEach(function() {
      module('app.accounts', bard.fakeToastr);
      bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
    });

    beforeEach(function() {
      $templateCache.put(view, '');
    });

    bard.verifyNoOutstandingHttpRequests();

    it('should map state accounts to url / ', function() {
      expect($state.href('accounts', {})).to.equal('/');
    });

    it('should map /accounts route to accounts View template', function() {
      expect($state.get('accounts').templateUrl).to.equal(view);
    });

    it('of accounts should work with $state.go', function() {
      $state.go('accounts');
      $rootScope.$apply();
      expect($state.is('accounts'));
    });
  });
});
