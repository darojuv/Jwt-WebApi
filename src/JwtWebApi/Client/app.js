"use strict";

/**
 * @ngdoc overview
 * @name jwtScafApp
 * @description
 * # jwtScafApp
 *
 * Main module of the application.
 */
angular
    .module("jwtWebApp", [
        "ngAnimate",
        "ngAria",
        "ngCookies",
        "ngMessages",
        "ngResource",
        "ngRoute",
        "ngSanitize",
        "ngTouch",
        "ui.router"
    ])
    .config(
    [
        "$stateProvider", "$urlRouterProvider", "$locationProvider", "$httpProvider",
        function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

            $urlRouterProvider.otherwise("/");

            $stateProvider
                .state("home", {
                    url: "/",
                    views: {
                        'header': {
                            templateUrl: "client/home/header.html",
                            controller: "HomeCtrl"
                        },
                        'content': {
                            templateUrl: "client/home/home.html",
                            controller: "HomeCtrl"
                        },
                        'footer': {
                            templateUrl: "client/home/footer.html",
                            controller: "HomeCtrl"
                        }
                    }
                })
                .state("books", {
                    url: "/books",
                    views: {
                        'header': {
                            templateUrl: "client/home/header.html",
                            controller: "HomeCtrl"
                        },
                        'content@': {
                            templateUrl: "client/books/books.html",
                            controller: "BooksCtrl"
                        },
                        'footer': {
                            templateUrl: "client/home/footer.html",
                            controller: "HomeCtrl"
                        }
                    }
                })
                .state("books.detail", {
                    url: "/:id",
                    views: {
                        'header': {
                            templateUrl: "client/home/header.html",
                            controller: "HomeCtrl"
                        },
                        'detail@books': {
                            templateUrl: "client/books/book-detail.html",
                            controller: "BooksDetailCtrl"
                        },
                        'footer': {
                            templateUrl: "client/home/footer.html",
                            controller: "HomeCtrl"
                        }
                    }
                })
                .state("login", {
                    url: "/login",
                    views: {
                        'header': {
                            templateUrl: "client/home/header.html",
                            controller: "HomeCtrl"
                        },
                        'content': {
                            templateUrl: "client/account/login.html",
                            controller: "LoginCtrl"
                        },
                        'footer': {
                            templateUrl: "client/home/footer.html",
                            controller: "HomeCtrl"
                        }
                    }
                })
                .state("register", {
                    url: "/register",
                    views: {
                        'header': {
                            templateUrl: "client/home/header.html",
                            controller: "HomeCtrl"
                        },
                        'content': {
                            templateUrl: "client/account/register.html",
                            controller: "RegisterCtrl"
                        },
                        'footer': {
                            templateUrl: "client/home/footer.html",
                            controller: "HomeCtrl"
                        }
                    }
                });

            $locationProvider.html5Mode(true);

            $httpProvider.interceptors.push("authinterceptor");

        }
    ]);