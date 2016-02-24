$(document).ready(function(){
    var updateView = function(){
      //hide/show the .empty h3 tags based on the 
      var productsInCart = $('.cart .product');
      var productsSaved = $('.cart .product');
      if(productsInCart.length === 0){
        $('.cart .empty').show();
        $('.cart-total').hide();
      }else{
        $('.cart .empty').hide();
         $('.cart-total').show();
      }
      if(productsSaved.length === 0){
        $('.saved .empty').show();
         //$('.cart-total').hide()]=
      }else{
        $('.saved .empty').hide();
      }


      //update the cart's total
      var totalPrice = 0;
      productsInCart.each(function(){
        totalPrice += Number($(this).data('price'));
      })
    $('.cart-total .red').text("$" + totalPrice.toFixed(2));

    };

    $.get('http://portal.batchacademy.com/api/wdfne/amazoon-products', function(products){

      var productTemplate = $('template#product').html();
  
      for(var i = 0; i < products.length; i++){

      var newProduct = $(productTemplate);

      $('h2', newProduct).text(products[i].name);

      var newManufacturer = $('<span/>').addClass('manufacturer');
      newManufacturer.text("by " + products[i].manufacturer);
      $('h2',newProduct).append(newManufacturer);

      $('img', newProduct).attr("src", products[i].imageSrc);
      $('h3', newProduct).text(products[i].description);
      $('.price, .mobile-price', newProduct).text("$" + products[i].price.toFixed(2));
      //setting the price as key
      $(newProduct).data('price', products[i].price);
      //getting the price 
      //$(newProduct).data('price');

      $('.cart').append(newProduct);
    }
    updateView();

      $('.move').on('click', function(){
      var thisClass = $(this).parents().eq(4).attr('class');
        if(thisClass === 'cart'){
          $(this).text("Add to cart");
          $(this).parents().eq(3).prependTo('.saved');
        }else if(thisClass === 'saved'){
          $(this).text("Save for later");
          $(this).parents().eq(3).prependTo('.cart');
      }
      updateView();
    });
      
    });


    //console.log(products);
    // var products = [
    //   {
    //     name: "Amazon Fire TV",
    //     manufacturer: "Amazoon",
    //     imageSrc: "assets/images/product01.jpg",
    //     description: "Eligible for free shipping and returns",
    //     price: 89.99
    //   },
    //   {
    //     name: "Amazon Fire",
    //     manufacturer: "Amazoon",
    //     imageSrc: "assets/images/product02.jpg",
    //     description: "Eligible for free shipping and returns",
    //     price: 69.00
    //   },
    //   {
    //     name: "Amazon Echo",
    //     manufacturer: "Amazoon",
    //     imageSrc: "assets/images/product03.jpg",
    //     description: "Eligible for free shipping and returns",
    //     price: 109.99
    //   }
    // ];


  });
