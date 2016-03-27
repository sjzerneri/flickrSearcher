angular.module('flickrSearch', ['ngAnimate'])

.controller('flickrCtrl', function ($scope, $http) {

    $scope.searching = "Nothing To Search For Yet";

    $scope.submit = function (searchTag) {

        var tag = $scope.input.searchTag;

        console.log(tag);

        var reqParams = {
            method: 'flickr.photos.search',
            api_key: '47c3c2b8fc1d1715986e7a3697bb8dd4',
            tags: searchTag,
            format: 'json',
            nojsoncallback: 1
        };

        var config = {
            params: reqParams
        };
    }
});
