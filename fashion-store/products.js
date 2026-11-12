/*
  EDIT YOUR CATALOGUE HERE.
  Replace image URLs with your own paths, for example: "assets/products/black-tee.jpg"
  Prices are in INR. Stock is demo stock and is NOT synchronized with a real inventory.
*/
window.STORE_CONFIG = {
  brandName: "ELVYNT",
  // IMPORTANT: replace with your real WhatsApp number, country code + digits only.
  // Example format for India: "919876543210" (no +, spaces or dashes).
  whatsappNumber: "91YOURWHATSAPPNUMBER",
  // Use null until you've decided a shipping fee. null means "To be confirmed".
  shippingCharge: null,
  currency: "INR"
};

window.PRODUCTS = [
  {id:"fm001",name:"Essential Heavyweight Tee",price:899,originalPrice:1199,category:"T-shirts",description:"A relaxed everyday tee with a substantial hand-feel and clean finish. Sample product description: confirm actual fabric and measurements before publishing.",fabric:"Sample: 240 GSM cotton",images:["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=80"],sizes:["S","M","L","XL"],colours:["Black","Off-white"],stock:12,isNew:true,bestseller:true},
  {id:"fm002",name:"Relaxed Oxford Shirt",price:1499,originalPrice:null,category:"Shirts",description:"An easy, versatile shirt designed for layering or wearing on its own. Replace this sample copy with verified product details.",fabric:"Sample: cotton blend",images:["https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=1000&q=80"],sizes:["S","M","L","XL"],colours:["White","Blue"],stock:8,isNew:true,bestseller:false},
  {id:"fm003",name:"Everyday Pullover Hoodie",price:1899,originalPrice:2199,category:"Hoodies",description:"A comfortable pullover silhouette with understated streetwear styling. Check the final fabric, fit and wash-care information with your supplier.",fabric:"Sample: cotton fleece",images:["https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1000&q=80"],sizes:["S","M","L","XL"],colours:["Grey","Black"],stock:7,isNew:true,bestseller:true},
  {id:"fm004",name:"Relaxed Utility Trouser",price:1699,originalPrice:null,category:"Trousers",description:"A relaxed leg and versatile neutral styling for everyday wear. Sample description; update with accurate fit and fabric information.",fabric:"Sample: cotton twill",images:["https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=1000&q=80"],sizes:["28","30","32","34"],colours:["Black","Olive"],stock:5,isNew:false,bestseller:true},
  {id:"fm005",name:"Minimal Logo Tee",price:749,originalPrice:null,category:"T-shirts",description:"A simple staple intended to pair with just about anything. Replace sample copy with actual garment details.",fabric:"Sample: 180 GSM cotton",images:["https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=1000&q=80"],sizes:["S","M","L","XL"],colours:["Off-white","Black"],stock:0,isNew:true,bestseller:false},
  {id:"fm006",name:"Everyday Overshirt",price:1799,originalPrice:1999,category:"Shirts",description:"A useful extra layer with a clean, uncomplicated shape. Confirm construction, pockets and material before launch.",fabric:"Sample: brushed cotton blend",images:["https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=1000&q=80"],sizes:["S","M","L"],colours:["Brown","Olive"],stock:6,isNew:false,bestseller:false},
  {id:"fm007",name:"Core Crew Sweatshirt",price:1599,originalPrice:null,category:"Hoodies",description:"A classic crew-neck layer with a relaxed, everyday feel. Sample product copy for demonstration.",fabric:"Sample: cotton blend fleece",images:["https://images.unsplash.com/photo-1578681994506-b8f463449011?auto=format&fit=crop&w=1000&q=80"],sizes:["S","M","L","XL"],colours:["Grey","Navy"],stock:9,isNew:false,bestseller:true},
  {id:"fm008",name:"Canvas Everyday Tote",price:499,originalPrice:null,category:"Accessories",description:"A lightweight carry-all for daily essentials. Replace with actual dimensions and capacity.",fabric:"Sample: canvas",images:["https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1000&q=80"],sizes:["One size"],colours:["Natural","Black"],stock:15,isNew:true,bestseller:false},
  {id:"fm009",name:"Oversized Green Casual Hoodie",price:1999,originalPrice:2499,category:"Hoodies",description:"Brahma Distressed // 400 GSM Oversized Hoodie.",fabric:"400 GSM ",images:["https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1000&q=80"],sizes:["S","M","L","XL"],colours:["Olive Green"],stock:15,isNew:false,bestseller:true}
];
