$(document).foundation();

function getSplash() {
    $(".hideAll").hide();
    $(".splash-container").show();
}

function getCart() {
    $(".hideAll").hide();
    $(".cart-container").show();
}

function getCheckout() {
    $(".hideAll").hide();
    $(".checkout-container").show();
}

function getPayment() {
    $(".hideAll").hide();
    $(".payment-container").show();
}

function getConfirm() {
    $(".hideAll").hide();
    $(".confirm-container").show();
}

function getComplete() {
    $(".hideAll").hide();
    $(".complete-container").show();
}

function getLogin() {
    $(".hideAll").hide();
    $(".login-container").show();
}

function getDepartment(id) {
    $(".hideAll").hide();
    $(".main-container").show();
}


$(window).on("load", function () {
    
    /*  EventHandlers for clicks */
    
    $(".go-splash").click(
        function () {
            location.href = `#/home/`;
        }
    );
    
    $(".go-cart").click(
        function () {
            location.href = `#/cart/`;
        }
    );
    
    $(".go-login").click(
        function () {
            location.href = `#/login/`;
        }
    );
    
    $(".go-checkout").click(
        function () {
            location.href = `#/checkout/`;
        }
    );
    
    $(".go-payment").click(
        function () {
            location.href = `#/payment/`;
        }
    );
    
    $(".go-confirm").click(
        function () {
            location.href = `#/confirm/`;
        }
    );
    
    $(".go-complete").click(
        function () {
            location.href = `#/complete/`;
        }
    );
    
    $(".go-department").click(
        function () {
            let id = $(this).attr("data-id");
            location.href = `#/department/${id}`;
        }
    );
    
    /* The Routing */
    

    // SAMMY ROUTING
    // Controller in MVC

    var app = $.sammy(function () {

        this.get('#/home/', function () {
            getSplash();
        });

        this.get('#/department/:id', function () {
            let id = this.params["id"];
            getDepartment(id);
        });

        this.get('#/search/:id', function () {
            let id = this.params["id"];
            getSearch(id);
        });

        this.get('#/cart/', function () {
            getCart();
        });

        this.get('#/checkout/', function () {
            getCheckout();
        });

        this.get('#/payment/', function () {
            getPayment();
        });

        this.get('#/confirm/', function () {
            getConfirm();
        });

        this.get('#/complete/', function () {
            getComplete();
        });

        this.get('#/login/', function () {
            getLogin();
        });

    });

    // default when page first loads
    $(function () {
        app.run('#/home/');
    });
});