// Step 1: Create a variable to hold your NFTs
let nftCollection = [];

// Step 2: Function to mint an NFT
function mintNFT(name, description, category, clothType, license) {
    const nft = {
        name: name,
        description: description,
        category: category,
        clothType: clothType,
        license: license,
        tokenId: nftCollection.length + 1
    };
    nftCollection.push(nft);
    console.log("minted :" , name ,"\n");


}

// Step 3: Function to list all NFTs
function listNFTs() {
    let i = 0;
    while(i < nftCollection.length){
        console.log(`NFT ${i + 1}`);
        console.log(`Name: ${nftCollection[i].name}`);
        console.log(`Description: ${nftCollection[i].description}`);
        console.log(`Category: ${nftCollection[i].category}`);
        console.log(`Cloth Type: ${nftCollection[i].clothType}`);
        console.log(`License: ${nftCollection[i].license}`);
        console.log(`Token ID: ${nftCollection[i].tokenId}`);
        console.log('---------------------');
        i++;

    }
}

// Step 4: Function to get the total supply of NFTs
function getTotalSupply() {
    console.log("Total Supply of Nfts : " ,nftCollection.length); 
    
        
}

// Call the functions to test
mintNFT('Mystic Unicorn', 'A rare and enchanting unicorn with a golden horn.', 'Fantasy', 'Royal Robe', 'CC BY-NC 4.0');
mintNFT('Galactic Warrior', 'A brave warrior from the far reaches of the galaxy.', 'Sci-Fi', 'Battle Armor', 'CC BY-SA 4.0');
mintNFT('Ancient Sorcerer', 'An ancient sorcerer with powerful magical abilities.', 'Fantasy', 'Mystic Cloak', 'CC BY-ND 4.0');
mintNFT('Cyber Ninja', 'A stealthy ninja equipped with advanced cybernetic enhancements.', 'Cyberpunk', 'Stealth Suit', 'CC BY 4.0');

listNFTs();
getTotalSupply();
