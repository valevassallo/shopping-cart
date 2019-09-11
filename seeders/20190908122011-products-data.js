/* eslint-disable */
"use strict";

module.exports = {
  up: (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert(
      "Products",
      [
        {
          name: "Yogurt",
          price: 5.9,
          quantity: 0,
          img:
            "https://s3.amazonaws.com/img.mynetdiary.com/blog/yogurt-sugar.jpg"
        },
        {
          name: "Oreo",
          price: 4.2,
          quantity: 0,
          img:
            "https://usatftw.files.wordpress.com/2015/08/classic-oreo-cookie.jpg?w=1000"
        },
        {
          name: "Vanilla Cookies",
          price: 2.6,
          quantity: 0,
          img:
            "https://vivanda.vteximg.com.br/arquivos/ids/173932-1000-1000/243940.jpg?v=636576879771870000"
        },
        {
          name: "Inca Kola",
          price: 10.9,
          quantity: 0,
          img:
            "https://plazavea.vteximg.com.br/arquivos/ids/168952-1000-1000/21186.jpg?v=635769966141800000"
        },
        {
          name: "Apples",
          price: 5.6,
          quantity: 0,
          img:
            "https://pull01-thefruitcompany.netdna-ssl.com/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/r/u/ruby-red-apples_4.jpg"
        },
        {
          name: "Banana",
          price: 0.99,
          quantity: 0,
          img:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/1200px-Banana-Single.jpg"
        },
        {
          name: "Cake mix",
          price: 12.9,
          quantity: 0,
          img:
            "https://s3-ap-southeast-1.amazonaws.com/media.redmart.com/newmedia/1600x/i/m/NEW_IMG_6905.JPG"
        },
        {
          name: "Bitter Chocolate",
          price: 14.9,
          quantity: 0,
          img:
            "https://wongfood.vteximg.com.br/arquivos/ids/160971-500-500/Chocolate-Innato-Bitter-Tableta-90-g-434122006.jpg"
        }
      ],
      {}
    );
  },

  down: (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete("Products", null, {});
  }
};
