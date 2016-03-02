var should = require('chai').should(),
    expect = require('chai').expect,
    zip = require('../arrzip');


describe('#arrzip short', function () {
    it('zip two arrays with flag not set', function (){
      var a = [1,2,3,4];
      var b = [6,7,8,9,0];
      zip(a,b).should.eql([[1,6],[2,7],[3,8],[4,9]]);
    });

    it('zip three arrays with flag not set', function (){
      var a = [1,2,3,4];
      var b = [6,7,8,9,0];
      var c = [10,11,12,13,14,15];
      zip(a,b,c).should.eql([[1,6,10],[2,7,11],[3,8,12],[4,9,13]]);
    });

    it('zip four arrays with flag set to false', function (){
      var a = [1,2,3,4];
      var b = [6,7,8,9,0];
      var c = [10,11,12,13,14,15];
      var d = [16,17,18,19,20,21,22];
      zip(a,b,c,d,false).should.eql([[1,6,10,16],[2,7,11,17],[3,8,12,18],[4,9,13,19]]);
    });
});

describe('#arrzip long', function () {
    it('Zip three arrays with correct flag', function (){
      var a = [1,2,3,4];
      var b = [6,7,8,9,0];
      var c = [10,11,12,13,14,15];
      zip(a,b,c,true).should.eql([[1,6,10],[2,7,11],[3,8,12],[4,9,13],[0,14],[15]]);
    });

    it('zip three arrays with incorrect flag', function (){
      var a = [1,2,3,4];
      var b = [6,7,8,9,0];
      var c = [10,11,12,13,14,15];
      expect(function () {
        zip(a,b,c,'p');
      }).to.throw(TypeError);
    });

    it('zip three arrays with extra flags', function (){
      var a = [1,2,3,4];
      var b = [6,7,8,9,0];
      var c = [10,11,12,13,14,15];
      expect(function () {
        zip(a,b,c,true,'p');
      }).to.throw(TypeError);
    });
});
