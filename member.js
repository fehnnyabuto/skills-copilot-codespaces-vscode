function skillsMember() {
    return{
        restrict: 'E',
        templateUrl: 'modules/skills/vies/member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vn',
        bindToController: true,
        scope: {
            member: 'm'
        }
    };
}