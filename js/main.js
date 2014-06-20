var myApp = angular.module('myApp', []);

myApp.factory('Roster', function() {
    var Roster = {};
    Roster.list = [{
        alpha : {
            one : {
                pName : 'Rage'
                ,name : 'Bailey Peng'
                ,number : '1'
            }
            ,two : {
                pName : 'Method'
                ,name : 'Peter Yu'
                ,number : '27'
            }
            ,three : {
                pName : 'Shock'
                ,name : 'Tyler Yao'
                ,number : '74'
            }
            ,four : {
                pName : 'Mammoth'
                ,name : 'Eugene Eng'
                ,number : '77'
            }
            ,five : {
                pName : 'Bounce'
                ,name : 'Regis Tsai'
                ,number : '99'
            }
        },beta : {
            one : {
                pName : 'Anakin'
                ,name : 'George Kurien'
                ,number : '14'
            }
            ,two : {
                pName : 'Streakz'
                ,name : 'Wei Zhu'
                ,number : '24'
            }
            ,three : {
                pName : 'Zippo'
                ,name : 'Stefan Nobbe'
                ,number : '57'
            }
        },gamma : {
            one : {
                pName : ''
                ,name : ''
                ,number : ''
            }
        },delta : {
            one : {
                pName : 'Titan'
                ,name : 'Jimmy Lin'
                ,number : '19'
            }
        },epsilon : {

        },zeta : {
            one : {
                pName : 'Spawn'
                ,name : 'Marco Xiang'
                ,number : '00'
            }
            ,two : {
                pName : 'Lance'
                ,name : 'Chi Ho Li'
                ,number : '22'
            }
        },eta : {

        },theta : {

        },iota : {
            one : {
                pName : ''
                ,name : ''
                ,number : ''
            }
        },kappa : {
            one : {
                pName : 'Venom'
                ,name : 'Sam Van Tran'
                ,number : '16'
            }
        },lambda : {
            one : {
                pName : 'Onslaught'
                ,name : 'Raymond Chen'
                ,number : '23'
                ,birthday : 'March 23, 1989'
            }
        },mu : {
            one : {
                pName : 'Renegade'
                ,name : 'James Ha'
                ,number : '26'
                ,birthday : 'August 26, 1989'
            }
            ,two : {
                pName : 'Hades'
                ,name : 'Danny Lau'
                ,number : '44'
            }
        },nu : {
            one : {
                pName : ''
                ,name : ''
                ,number : ''
            }
            ,two : {
                pName : ''
                ,name : ''
                ,number : ''
            }
        },xi : {
            one : {
                pName : ''
                ,name : ''
                ,number : ''
            }
            ,two : {
                pName : ''
                ,name : ''
                ,number : ''
            }
        },omicron : {
            one : {
                pName : 'Jalapeno'
                ,name : 'Robert Lum'
                ,number : '29'
                ,birthday : 'December 28, 1990'
            }
            ,two : {
                pName : 'Nano'
                ,name : 'Ricky Cai'
                ,number : '89'
                ,birthday : 'May 24, 1989'
            }
        },pi : {
            one : {
                pName : 'Catalyst'
                ,name : 'Michael Chen'
                ,number : '92'
                ,birthday : 'January 4, 1992'
            }
            ,two : {
                pName : 'Hollow'
                ,name : 'Chris Quach'
                ,number : '55'
                ,birthday : 'April 12, 1992'
            }
            ,three : {
                pName : 'Glitch'
                ,name : 'Chuan Chen'
                ,number : '8'
                ,birthday : 'August 10, 1991'
            }
        },rho : {
            one : {
                pName : 'Spur'
                ,name : 'Pan Chan'
                ,number : '97'
                ,birthday : 'December 25, 1991'
            }
        },sigma : {

        },tau : {

        }

      }];
    return Roster;
})

function RosterCtrl($scope, Roster) {
    $scope.roster = Roster;
}