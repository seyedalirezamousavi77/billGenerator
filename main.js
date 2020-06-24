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

});