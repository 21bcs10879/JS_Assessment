/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.

const nfts = [];

function mintNFT(name, details, image, owner) {
   
    const nft = {
        name: name,
        details: details,
        image: image,
        owner: owner
    };
    
    nfts.push(nft);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
   
    for (let i = 0; i < nfts.length; i++) {
        console.log('\nName: \t\t'+ nfts[i].name);
        console.log('Details: \t'+nfts[i].details);
        console.log('Image: \t\t'+nfts[i].image);
        console.log('Owner: \t\t'+nfts[i].owner);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nfts.length;
}

// call your functions below this line
mintNFT("NFT 1", "First NFT", "image1.png", "Owner A");
mintNFT("NFT 2", "Second NFT", "image2.png", "Owner B");
mintNFT("NFT 3", "Third NFT", "image3.png", "Owner C");

listNFTs();
console.log('\nTotal Supply: '+ getTotalSupply());
