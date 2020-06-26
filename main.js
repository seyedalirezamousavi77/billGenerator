
let discountPercent = { fivePercent: '5', tenPercent: '10', fiftyPercent: '50' };
let discountPrice = { ten: '10000', fifty: '50000' };



$(document).change(function () {
    let burger = $('#burger .price p').html() * $('#burger input').val();
    $('#burger .all-price p').html(burger);
    let chize = $('#chize .price p').html() * $('#chize input').val();
    $('#chize .all-price p').html(chize);
    let doble = $('#doble .price p').html() * $('#doble input').val();
    $('#doble .all-price p').html(doble);
    let perfect = $('#perfect .price p').html() * $('#perfect input').val();
    $('#perfect .all-price p').html(perfect);
    let special = $('#special .price p').html() * $('#special input').val();
    $('#special .all-price p').html(special);
    let totalPrice = special + chize + doble + perfect + burger;
    $('#total-price p').html(totalPrice);
    let servicePrice = totalPrice * (9 / 100);
    $('#service-price p').html(servicePrice);
    let finalyPrice = servicePrice + totalPrice;
    $('#finaly-price p').html(finalyPrice);



    $('.input-discount button').click(function (e) {


        let keys = $.each(discountPercent, function (value, key) {
            if ($('.input-discount input').val() === value) {
                let discountPrice = finalyPrice / key;
                $('#discount-price p').html(discountPrice);
                finalyPrice -= discountPrice;
                $('#finaly-price p').html(finalyPrice);
                $('.input-discount input').remove();
                $('.input-discount button').remove();
            }
        });
        let keysDis = $.each(discountPrice, function (value, key) {
            if ($('.input-discount input').val() === value) {
                let discountPrice = key;
                $('#discount-price p').html(discountPrice);
                finalyPrice -= discountPrice;
                $('#finaly-price p').html(finalyPrice);
                $('.input-discount input').remove();
                $('.input-discount button').remove();
            }
        });
        $('.input-discount input').val("");
    });
});