angular.module('flickrSearch', ['ngAnimate'])

.controller('flickrCtrl', function ($scope, $http, $q) {

    var flickrCall = this;
    flickrCall.response = [];

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
                flickrCall.response = response;
                console.log('Response Returned To Controller', flickrCall.response);
                var results = response.data.photos.total;

                $scope.array = response.data.photos.photo;

                $scope.searching = 'Showing ' + results + ' results for ' + tag;


            }, function (response) {
                console.log('Flickr Response Failed');
            });


    }
});
