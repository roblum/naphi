var myApp = angular.module('myApp', []);

myApp.factory('Roster', function() {
    var Roster = {};
    Roster.list = [
            {
                pName : 'Rage'
                ,name : 'Bailey Peng'
                ,number : '1'
                ,pClass : 'alpha'
                ,image : 'images/epsilon.png'
            }
            ,{
                pName : 'Method'
                ,name : 'Peter Yu'
                ,number : '27'
                ,pClass : 'alpha'
            }
            ,{
                pName : 'Shock'
                ,name : 'Tyler Yao'
                ,number : '74'
                ,pClass : 'alpha'
            }
            ,{
                pName : 'Mammoth'
                ,name : 'Eugene Eng'
                ,number : '77'
                ,pClass : 'alpha'
            }
            ,{
                pName : 'Bounce'
                ,name : 'Regis Tsai'
                ,number : '99'
                ,pClass : 'alpha'
            }
            ,{
                pName : 'Anakin'
                ,name : 'George Kurien'
                ,number : '14'
                ,pClass : 'beta'
            }
            ,{
                pName : 'Streakz'
                ,name : 'Wei Zhu'
                ,number : '24'
                ,pClass : 'beta'
            }
            ,{
                pName : 'Zippo'
                ,name : 'Stefan Nobbe'
                ,number : '57'
                ,pClass : 'beta'
            }
            ,{
                pName : 'Titan'
                ,name : 'Jimmy Lin'
                ,number : '19'
                ,pClass : 'delta'
            }
            ,{
                pName : 'Spawn'
                ,name : 'Marco Xiang'
                ,number : '00'
                ,pClass : 'epsilon'
            }
            ,{
                pName : 'Lance'
                ,name : 'Chi Ho Li'
                ,number : '22'
                ,pClass : 'zeta'
            }
            ,{
                pName : 'Venom'
                ,name : 'Sam Van Tran'
                ,number : '16'
                ,pClass : 'kappa'
            }
            ,{
                pName : 'Onslaught'
                ,name : 'Raymond Chen'
                ,number : '23'
                ,birthday : 'March 23, 1989'
                ,pClass : 'lambda'
            }
            ,{
                pName : 'Renegade'
                ,name : 'James Ha'
                ,number : '26'
                ,birthday : 'August 26, 1989'
                ,pClass : 'mu'
            }
            ,{
                pName : 'Hades'
                ,name : 'Danny Lau'
                ,number : '44'
                ,pClass : 'mu'
            }
            ,{
                pName : 'Jalapeno'
                ,name : 'Robert Lum'
                ,number : '29'
                ,birthday : 'December 28, 1990'
                ,pClass : 'omicron'
            }
            ,{
                pName : 'Nano'
                ,name : 'Ricky Cai'
                ,number : '89'
                ,birthday : 'May 24, 1989'
                ,pClass : 'omicron'
            }
            ,{
                pName : 'Catalyst'
                ,name : 'Michael Chen'
                ,number : '92'
                ,birthday : 'January 4, 1992'
                ,pClass : 'pi'
            }
            ,{
                pName : 'Hollow'
                ,name : 'Chris Quach'
                ,number : '55'
                ,birthday : 'April 12, 1992'
                ,pClass : 'pi'
            }
            ,{
                pName : 'Glitch'
                ,name : 'Chuan Chen'
                ,number : '8'
                ,birthday : 'August 10, 1991'
                ,pClass : 'pi'
            }
            ,{
                pName : 'Spur'
                ,name : 'Pan Chan'
                ,number : '97'
                ,birthday : 'December 25, 1991'
                ,pClass : 'rho'
            }];
    return Roster;
})

function RosterCtrl($scope, Roster) {
    $scope.roster = Roster;
}
