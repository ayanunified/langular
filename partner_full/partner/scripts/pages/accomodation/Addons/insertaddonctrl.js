(function() {
    'use strict';

    angular.module('tripoAsiaApp.pages.accomodation')
        .controller('insertlistCtrl', insertlistCtrl);

    /** @ngInject */
    function insertlistCtrl($scope, $timeout,shttp, $httpParamSerializerJQLike, $ocLazyLoad, $http, configService, $rootScope, $location, $routeParams, accomodationService, SweetAlert)


   {

      $scope.accomodation = {};

      $scope.addon = {};

      $scope.addon.price = {};
      $scope.addon.type = '';

      $scope.accomodation.accomodation_id = $routeParams.accomodation_id;
      $scope.addon.accomodation_id = $scope.accomodation.accomodation_id;
      
      $scope.showedit = false;
      $scope.image_path =  configService.getEnvConfig().imageURL+'room/';

    
try{

      $scope.listt = JSON.parse(localStorage.getItem("list"));
       
      $scope.id = localStorage.getItem("id");
      console.log("listt",$scope.listt);
       console.log($scope.id);
      if($scope.id && $scope.listt){
        $scope.showedit = true;
         console.log($scope.listt);
         console.log($scope.id);
      for (var i=0; i < $scope.listt.length; i++) {
           
        if ($scope.listt[i]._id == $scope.id) {
            $scope.addon.name=$scope.listt[i].name;
            $scope.addon.type=$scope.listt[i].type;
            $scope.profilepic =$scope.image_path+$scope.listt[i].icon;
            if($scope.listt[i].description){

               $scope.addon.description = $scope.listt[i].description;
            }
            $scope.addon.price.cash = $scope.listt[i].price.cash;
            $scope.addon.price.tripo = $scope.listt[i].price.tripo;
            
        }
    }
  }
}
catch(error){


}


     $scope.edit = function(){


        if($scope.profilepic){
        if($scope.profile_pic){
        var file = $scope.profile_pic.name.split('.');
         
         var file1 = file[0];
         var file2 = file[1].toLowerCase();
         console.log(file2 == "png" );
         
         if(file2 == "png" || file2 == "jpeg" || file2 == "jpg"){
    

         // $scope.addon.icon = $scope.profile_pic;
        
         
         }
         
         
         else{
             
                swal("OOPS!", "Please upload an image file", "error"); 
                return false;
             
         }
       }
     }
       else{

            swal("OOPS!", "Please select an icon for the addon", "error"); 
            return false;

       }

        if(!$scope.addon.type){

            SweetAlert.swal("Error", "please select an addon type ", "error");
            return false;
        }



       if($scope.id){
           $scope.addon.id = $scope.id;
            $scope.addon.prices = JSON.stringify($scope.addon.price);
            var data = $scope.addon;
  

           shttp.upload('addons/update', data, { icon : $scope.profile_pic })
                .then(
                    function(data, status, headers, config) {
                        console.log(data);
                        
                
                    SweetAlert.swal("Success", "Addon edited successfully!", "success");

                  

                    },
                    function(data, status, header, config) {
                        console.log(data);
                        SweetAlert.swal("Error", "Error encountered while adding company .", "error");
                        // to prevent interaction outside of dialog



                    });



       }

     }
      $scope.addonInsert = function(){
      if($scope.profile_pic){
        var file = $scope.profile_pic.name.split('.');
         
         var file1 = file[0];
         var file2 = file[1].toLowerCase();
         console.log(file2 == "png" );
         
         if(file2 == "png" || file2 == "jpeg" || file2 == "jpg"){
    

         // $scope.addon.icon = $scope.profile_pic;
        
         
         }
         
         
         else{
             
                swal("OOPS!", "Please upload an image file", "error"); 
                return false;
             
         }
       }
       else{

            swal("OOPS!", "Please select an icon for the addon", "error"); 
            return false;

       }
    
        console.log("send",$scope.addon);

        if(!$scope.addon.type){

        	  SweetAlert.swal("Error", "please select an addon type ", "error");
        	  return false;
        }

      // var data = $.param({
      //           accomodation_id: $scope.accomodation_id
              
      //       });
      $scope.addon.prices = JSON.stringify($scope.addon.price);
      console.log( $scope.addon.price);
   var data = $scope.addon;
   

              shttp.upload('addons/insert', data, { icon : $scope.profile_pic })
                .then(
                    function(data, status, headers, config) {
                        console.log(data);

                        if(data.status == 202){

                          SweetAlert.swal("Error", data.msg, "error");
                          return false;
                        }
                        else{
                           SweetAlert.swal("Success", "Addon added successfully!", "success");
                        }
                        
               
                   

                  

                    },
                    function(data, status, header, config) {
                        console.log(data);
                        SweetAlert.swal("Error", "Error encountered while adding company .", "error");
                        // to prevent interaction outside of dialog



                    });


}


   	}
})();