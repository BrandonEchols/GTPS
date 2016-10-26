/**
 * Created by Brandon on 10/25/2016.
 */


(function(global) {

    /** Constructor */
    var ImageViewer = function ImageViewer(){

        //Public functions
        ImageViewer.prototype.changeImage = function changeImage(path, imgId){
            var newPath = path + "0" + imgId + ".JPG";
            document.getElementById("imgBox").setAttribute("src", newPath);
        }

        function initImageViewer(){
        }

        //initImageViewer();
        return this;
    };


    /**
     * export for CommonJS style
     */
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        module.exports = new ImageViewer;
    } else {
        global.ImageViewer = ImageViewer;
    }
}(this));
