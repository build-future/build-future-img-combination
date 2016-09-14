/**
 * Created by kzu on 2016/9/14.
 */



(function(window,$,_){



    var utils = {
        
        addEventListener:function () {
            
        }
        
    };



    function ImageDragger(options) {

        options = options || {};

        if(!_.isElement(options.node)){
            throw new TypeError('options.node should be of type Element');
        }
        this.node = options.node;

        this.src = options.src;

        this.options = options;

        this.init(options);

    };


    ImageDragger.prototype.init = function (options) {





    };


    







})( this || window,jQuery, _ );