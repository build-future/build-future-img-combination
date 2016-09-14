/**
 * Created by kzu on 2016/9/14.
 */
/**
 * Created by samuel on 2016/9/6.
 */


var express = require ('express');

function WebApplication(){

    this.app = express();

    this.server = null;

    this.port = 3000;

    this.init();

}


WebApplication.prototype.init = function () {


    this.app.use(express.static('.'));

    this.server = this.app.listen(this.port,function () {

    });
};

new WebApplication();




