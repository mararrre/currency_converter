# Currency Converter

## Description
This is a simple single-page web application to convert currencies between any two countries using the ExchangeRate-API. Built with HTML, CSS, and JavaScript.  



## Features
- Convert between any currencies using 3-letter ISO codes (e.g., USD, KGS, EUR).  
- Live conversion via ExchangeRate-API.  
- Input validation with clear error messages for invalid or empty inputs.  
- Clean, responsive design suitable for desktop and mobile.



## Installation
1. Clone this repository:
git clone https://github.com/mararrre/currency-converter.git

2. Navigate to the project folder:
cd currency-converter

3. No additional setup is needed — all files are plain HTML, CSS, and JS.



## Launch
1. Open `index.html` in any web browser.  
2. Enter the source currency code, target currency code, and the amount you want to convert.  
3. Click the **Convert** button to see the converted value.  
4. Any input errors will appear below the button in the error box.



## Usage
- Use **ISO 4217 currency codes** (3 letters, e.g., USD, KGS, EUR).  
- Amount must be a number greater than 0.  
- Example: convert 100 USD to KGS.



## API
This project uses [ExchangeRate-API](https://www.exchangerate-api.com/) to fetch live conversion rates.  
- Replace the placeholder API key in `script.js` with your own API key.



## License
This project is open-source and free to use.
