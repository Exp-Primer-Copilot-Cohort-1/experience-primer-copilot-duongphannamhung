function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'templates/skills-member.html',
        scope: {
            member: '='
        },
        controller: function($scope) {
            $scope.skills = $scope.member.skills;
        },
        link: function(scope, element, attrs) {
            element.on('click', function() {
                element.find('ul').toggleClass('hidden');
            });
        },
        replace: true
    }
}