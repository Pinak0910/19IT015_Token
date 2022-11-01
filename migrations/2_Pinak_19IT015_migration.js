const Pinak_19IT015 = artifacts.require("./Pinak_19IT015.sol");
const Pinak_19IT015_TokenSale = artifacts.require("./Pinak_19IT015_TokenSale.sol");
const tokenPrice = 1000000000000000; // in wei
module.exports = function (deployer) {
  deployer.deploy(Pinak_19IT015,1000000).then(()=>{
    return deployer.deploy(Pinak_19IT015_TokenSale,Pinak_19IT015.address,tokenPrice);
  });
};