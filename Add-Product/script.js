/**
 * Structure of Js function commets
 * -------------------------------------------
 * The name of the Web Page that function use
 * -------------------------------------------
 * What functon do 
 * inputs
 * outputs
 * discriptin of function 
 * -------------------------------------------
**/
/**---------------------------------------------------------------**/

/**
* -------------------------------------------
 * addProduct.html
 * -------------------------------------------
 * Viewing User Choosed Images.
 * input Id = img
 * Out put Id = i0 / i1 / i2
 * Acept theree of less image count and Display them one image cells on web page. 
 * -------------------------------------------
 **/
function addPimgeView() {

    var imge = document.getElementById("img");

    imge.onchange = function () {

        var file_count = imge.files.length;

        if (file_count <= 3) {

            for (var x = 0; x < file_count; x++) {

                var file = this.files[x];
                var url = window.URL.createObjectURL(file);
                document.getElementById("i" + x).src = url;
            }
        } else {
            alert(file_count + " files. You are proceed to upload only 3 or less than 3 files.")
        }
    }

}