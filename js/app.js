angular.module('flickrSearch', ['ngAnimate'])

.controller('flickrCtrl', function ($scope, $http, $q) {

    $scope.submit = function (searchTag) {

        var tag = $scope.input.searchTag;

        $scope.searching = 'Searching for the tag ' + tag + ' ...';

        var defer = $q.defer();

        var reqParams = {
            method: 'flickr.photos.search',
            api_key: '47c3c2b8fc1d1715986e7a3697bb8dd4',
            tags: tag,
            format: 'json',
            nojsoncallback: 1
        };

        var config = {
            params: reqParams
        };

        $http.get('https://api.flickr.com/services/rest', config)
            .then(function (response) {
                console.log('success');
                $scope.searching = 'Showing 25 results for ' + tag;
            }, function (response) {
                console.log('fail');
            });

        return defer.promise;
    }
});
