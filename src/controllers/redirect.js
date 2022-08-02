const knex = require("../database/connection");

function generateFilterId() {
   return Math.floor(Math.random() * (3 - 1 + 1) + 1);
}

async function selectFilter() {
   const queryData = await knex("brindes");
   let gift = "";

   let found = false;

   let sum = 0;
   for (const filtro of queryData) {
      if(filtro.quantidade <= 0)
         sum++;
      if(sum >= queryData.length){
         gift = "https://www.instagram.com/ar/1054517552034163";
         found = true;
      }
   }

   while (!found) {
      let filterSelected = queryData[generateFilterId() - 1];
      let filterId = filterSelected.id;

      if(filterSelected.quantidade <= 0){
         filterSelected = queryData[generateFilterId() - 1];
         filterId = filterSelected.id;
      }

      if(filterSelected.quantidade > 0 && filterId === 1){
         gift = "https://www.instagram.com/ar/532647837293126";
         await knex("brindes").update({quantidade: filterSelected.quantidade - 1}).where('id', filterId);
         found = true;
         break;
      }
      else if(filterSelected.quantidade > 0 && filterId === 2){
         gift = "https://www.instagram.com/ar/509052513391094";
         await knex("brindes").update({quantidade: filterSelected.quantidade - 1}).where('id', filterId);
         found = true;
         break;
      }
      else if(filterSelected.quantidade > 0 && filterId === 3){
         gift = "https://www.instagram.com/ar/247566492982777";
         await knex("brindes").update({quantidade: filterSelected.quantidade - 1}).where('id', filterId);
         found = true;
         break;
      }
   }
   return gift
}

const redirect = async (req, res) => {
   try {
      const ArLinkInstagram = await selectFilter();
      res.redirect(302, ArLinkInstagram);
   } catch (error) {
      console.log("Deu ruim");
      res.status(500).send("Algo deu errado com o servidor!");
   }
};

module.exports = redirect;
