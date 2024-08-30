 homecall();



function homecall(){
  let homeContent=document.querySelector(".menu-data");
  homeContent.innerHTML=`
  <div class="home">
        <div class="left-home">
          <h2 class="home-heading">Staking crypto tokens made simple</h2>
          <h3 class="home-heading2">Choose us to be your validator!
          </h3>
          <div class="home-content">
            <p>We are a team of tech-savvy blockchain developers and enthusiasts who run nodes on PoS and PoA blockchains. We took care all of the technical setup needed so that you could easily stake your assets.</p>
          </div>
        </div>
        <div class="right-home">
          <img class="home-img" src="/mpic/home.png" alter="Home"></div>
      </div>
      <button class="home-button">Delegate Now</button>`;
}

function staking(){
  let stackingContent=document.querySelector(".menu-data");
  stackingContent.innerHTML=`
        <div class="staking">
        <div class="right-stak">
          <img class="home-img" src="/mpic/staking.png" alter="Home"></div>
        <div class="left-stak">
          <h2 class="home-heading">Staking</h2>
          <div class="home-content">
            <p>Ztake.org provides a safe, secure and affordable delegation service for Atom holders to share in the benefits of Cosmos’s Proof of Stake protocol. By delegating your tokens holdings to us, you have a chance to earn interest on your tokens while keeping full control of your private keys and avoiding the complexity of running a validator node 24×7 in a safe and secure environment.
            </p>
          </div>
        </div>
      </div>
      <div class="theory-stack">
        <p>
          gaiacli tx staking delegate cosmosvaloper102ruvpv2srmunfffxavttxnhezln6fnc54at8c 10000uatom --gas auto --gas-prices 0.001uatom --chain-id cosmoshub-2 --from yourKey
        </p>
        </div>
  `;
  
}
function cosmo(){
  let cosmosContent=document.querySelector(".menu-data");
  cosmosContent.innerHTML=`
       <div class="home">
        <div class="left-home">
          <h2 class="home-heading">Cosmos Glossary</h2>
          <h4 class="home-heading2">Delegators
          </h4>
          <div class="home-content">
            <p>are Atom holders who cannot, or do not want to run validator operations themselves. Through the Cosmos UI, a user can delegate Atoms to a validator and obtain a part of its revenue in exchange. Because they share revenue with their validators, delegators also share responsibility. Should a validator misbehave, each of its delegators will be partially slashed in proportion to their stake. This is why delegators should perform due diligence on validator candidates before delegating, as well as spreading their stake over multiple validators. It will also help keep network decentralized.</p>
          </div>
        </div>
        <div class="right-home">
          <img class="home-img" src="/mpic/cosmo.png" alter="Home"></div>
      </div>
        <div class="cosmo">
        <div  class="theory-cosmo">
          <h4 class="home-heading2">Validators
          </h4>
          The Cosmos Hub is based on Tendermint, which relies on a set of validators to secure the network. The role of validators is to run a full-node and participate in consensus by broadcasting votes which contain cryptographic signatures signed by their private key. Validators commit new blocks in the blockchain and receive revenue in exchange for their work. They must also participate in governance by voting on proposals. Only the top 100 validators with the highest stake are part of the Active validator set
        </div>
        <div   class="theory-cosmo">
          <h4 class="home-heading2">Minimum self-bond amount
          </h4>
          The minimum amount of Atoms the validator candidate need to have bonded at all time. If the validator’s self-bonded stake falls below this limit, their entire staking pool (i.e. all its delegators) will unbond. This parameter exists as a safeguard for delegators. Indeed, when a validator misbehaves, part of their total stake gets slashed. This included the validator’s self-delegated stake as well as their delegators’ stake. Thus, a validator with a high amount of self-delegated Atoms has more skin-in-the-game than a validator with a low amount. The minimum self-bond amount parameter guarantees to delegators that a validator will never fall below a certain amount of self-bonded stake, thereby ensuring a minimum level of skin-in-the-game. This parameter can only be increased by the validator operator.

        </div>
      </div>
    </div>
  `;
        
}


function partner(){
  let partContent=document.querySelector(".menu-data");
  partContent.innerHTML=`
  <div class="home">
        <div class="left-home">
          <h2 class="home-heading">We want to be your partner in crypto</h2>
          <h3 class="part-heading2">We love nothing more than answering any question you have about this fascinating space.
          </h3>
          <div class="home-content">
            <div   class="theory-partner">
              <h4 class="part-heading2">Our Suppot team is always available to help and answer any questions
              </h4>
              <p class="th-part">
              If you an individual who is interested to get more information on our setup or the one who simply need more guidance in the delegation process, we are here for you. Email us at</p><br>
              <i class="fa-solid fa-envelope"></i>
              <a href="#">support@ztake.org</a>
              </div>
            
          </div>
        </div>
        <div class="right-home">
          <img class="home-img" src="/mpic/partner.png" alter="Home"></div>
      </div>`;
      
}
function about(){
  let aboutContent=document.querySelector(".menu-data");
  aboutContent.innerHTML=`
  <div class="home">
          <div class="left-home">
          <h2 class="home-heading">About</h2>
          <div class="home-content">
            <p>We are early blockchain adopters with an extensive background in tech space. We have both worked for various size IT companies in the past including Amazon and Salesforce. Our tech lead - Roman is a top-notch blockchain engineer with a particular passion to smart contracts and Mira (COO) is a certified Washington notary who has been a long time PoA validator and specializes in Proof of Stake consensus research. Our headquarter is in Seattle, US, one of the most stable countries on a political, economic, and social level.<br><br>
              We have been actively involved in running and testing the COSMOS testnets as well as participated in Game of Stakes. Due to our deep tech background and connections, we would like to leverage our network to help build value-add products for the Cosmos network.</p>
          </div>
        </div>
        <div class="right-home">
          <img class="home-img" src="/mpic/about.png" alter="Home"></div>
      </div>
  `;
 
}