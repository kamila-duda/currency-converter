# Currency Converter
> This is a simple currency converter. https://kamila-duda.github.io/currency_converter/

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Status](#status)
* [Contact](#contact)

## General info
A simple currency converter. Enter the amount and select what currency it is. Next, select currency to which you want to exchange.

![currency converter screenshot](https://github.com/kamila-duda/currency_converter/blob/master/images/screen.JPG?raw=true)

## Technologies
* Html
* Css
* Java Script

code snippet
```javascript
const choseCurency = (selected) => {
        let currency = 1
        if(selected!=="pln") {
             currency = Number(document.querySelector(".js-"+selected).innerHTML);
        }
        return currency
    }
```

## Status
Project is: _not finished_.

## Contact
Created by [@Kamila Duda](https://github.com/kamila-duda)
