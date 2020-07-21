var foodList=[];
var orderList=[];
var categoryList=[];
var sum=0;

var showFood=[];
if (typeof(Storage) !== "undefined") {
  // Code for localStorage/sessionStorage.
  if(localStorage.getItem("item")!=null){
    foodList=JSON.parse(localStorage.getItem("item"));
    //playerList=JSON.parse(food_string);
  }
  if(localStorage.getItem("cate")!=undefined){
          categoryList=JSON.parse(localStorage.getItem("cate"));
      }
  
  
  } else {
  // Sorry! No Web Storage support..
  }

function addFood(){
    var name= $("#txtname").val();
      var price=$("#txtprice").val();
      //var cat=$("#cat option:selected" ).val();
      var list={name:name,price:price};
      //var catList={name:name,price:price,cat:cat};
      foodList.push(list);
      // categoryList.push(catList);
      // localStorage.setItem("cate",JSON.stringify(categoryList));
      localStorage.setItem("item",JSON.stringify(foodList));
      console.log(localStorage.setItem("item",JSON.stringify(foodList)));
     showFoodList();
     clearAll();
    
}
function addToTable(i){
var oFood=foodList[i];
 
  orderList.push(oFood);
  sum+=parseInt(orderList[i].total);
  $('#myTable').append('<tr><td>' + oFood.name + '</td>' 
     + '<td>' + '1'+ '</td>'
     + '<td>'+oFood.price+'</td>'
     + '<td>'+oFood.total+'</td>'
     +'<td>'+'<button onclick="deleteRow(this)">Delete</button>'+'<td></tr>'
     
   );
   var foot = $("#myTable").find('tfoot');
   foot.html('<tr><td>'+sum+'</td></tr>');
    //console.log(orderList[i].total);
    console.log(sum);

 }
function showFoodList(){
  if(localStorage.getItem("item")!=null){
  $("#foodContainer").empty();
  var showfood=JSON.parse(window.localStorage.getItem("item"));
  console.log(showFood);
   showfood.forEach(function(f,i){
     $("#foodContainer").append(
     '<div class="card" style="display: inline-block;">'
         +'<img src="images/icecream.jpg" style="width:50%">'
         +'<h5>'+f.name+'</h5>'
         +' <p class="price">'+f.price+'</p>'
         +'<input type="button" onclick="addToTable('+i+')" value="Add">'
         +' </div>'
       );
    });
  }
   }
     function deleteRow(r) {
            $(r).parent().parent().remove();
        
        console.log(amt);
    }
    function addCategory(){
      var name= $("#txtname").val();
      var price=$("#txtprice").val();
      var cat=$("#cat option:selected" ).val();
      var catList={name:name,price:price,cat:cat};
      categoryList.push(catList);
      localStorage.setItem("cate",JSON.stringify(categoryList));
      addToCategoryTable();
      createCategory();
    }

   function addToCategoryTable(){
     addFood();
     if(localStorage.getItem("cate")!=null){
    $("#mycat tbody").empty();
      var catefood=JSON.parse(localStorage.getItem("cate"));
      catefood.forEach(function(f,i){
        $("#mycat").append('<tr><td>' + f.name + '</td>' 
        + '<td>'+f.price+'</td>'
        + '<td>'+f.cat+'</td>'
        + '<td>'+'<input type="button" onclick="editCat('+i+')" value="Edit">'+'</td></tr>'
       );
       });
      }
     }
      function createCategory(){
              $("#category").empty();
              var catefood=JSON.parse(localStorage.getItem("cate"));
              catefood.forEach(function(c,i){
              $("#category").append( '<li>'+c.cat+'</li>');
              });

      }

      function editCat(i){
         $("#txtname").val();
          $("#txtprice").val();
      }
      function clearAll(){
        $("#txtname").val("");
        $("#txtprice").val("");
        $("#cat option:selected" ).val("");
      }
      // $(document).ready(function(){
      //   showFoodList();
      //   addToCategoryTable();
      //   createCategory();
      // });
    
    
    
