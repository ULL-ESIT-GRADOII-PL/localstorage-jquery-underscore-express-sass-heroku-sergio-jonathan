var expect = chai.expect;

describe("Distancia", function() {

  describe("Calculate", function() {
    it("Debería aceptar una cadena literal en formato CSV", function() {
      var original = 'a,b,c,"d,e,f"\nw,x,y,z';
      var result = calculate(original);
      expect(result).to.be.instanceof(Array);
      expect(result[0].value.toString()).to.equal("a,b,c,d,e,f");
      expect(result[1].value.toString()).to.equal("w,x,y,z");
    });

    it("Debería aceptar una cadena literal con errores en formato CSV", function() {
      var original = 'a,b,c,"d,e,f"\nx,y,z';
      var result = calculate(original);
      expect(result).to.be.instanceof(Array);
      expect(result[0].rowClass).to.equal("first");
      expect(result[1].rowClass).to.equal("error");
    });
  });
});
