videoSite.controller('videoSiteController', function ($scope, videoService) {
    $scope.info = []
    $scope.info = videoService.getAllVideos()
    $scope.addCar = function (newCarForm) {
        newCarForm.comments = [
            {
                username: '',
                content: '',
                date: new Date().toDateString(),
                likes: '',
                websiteUrl: ''
            },
            {
                username: '',
                content: '',
                date: new Date().toDateString(),
                likes: '',
                websiteUrl: ''
            }

        ]
        $scope.info.push(newCarForm)
    }
}
);