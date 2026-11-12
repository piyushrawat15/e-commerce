# FORME fashion store demo

## Run locally
1. Extract the ZIP.
2. Open `index.html` in a modern browser. For best results, use VS Code with the free Live Server extension.
3. Internet is currently used for the sample Unsplash images and Google Fonts. Replace image URLs with local files if you need offline use.

## Required before launch
1. Open `products.js`.
2. Replace `91YOURWHATSAPPNUMBER` with your WhatsApp number in international digits-only format, e.g. `919876543210` (example only).
3. Edit brand name, prices, product descriptions, image paths and stock values.
4. Replace demo email, Instagram, brand story, and policy text with your real business details.
5. Set `shippingCharge` to a number only after deciding your shipping fee; leave it `null` while fees are not configured.
6. Test a sample order using your own phone before sharing the site publicly.

## Product photos
Put your images in `assets/products/`, then change each product's `images` array in `products.js`, e.g. `images: ["assets/products/black-tee.webp"]`.

## Free publishing
GitHub Pages or Netlify can host this static site for free. Create a repository / site, upload the extracted files with `index.html` at the root, and follow the host's static-site publishing steps. No build command is needed.

## Important limitations
- This is a frontend demo. Cart persistence uses localStorage on the customer's device.
- Stock values are sample values and are not synchronized or reserved.
- The site cannot know whether a WhatsApp message was actually sent.
- Orders are requests only until the store owner manually confirms stock, shipping and payment.
- Do not collect card details, CVV, UPI PIN or passwords in this website.
- Replace sample policies and ensure they accurately describe your business before launch.
