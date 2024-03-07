//Реалізуйте клас, що описує коло. Клас має складатися з на-
//ступних компонентів:
//поле з радіусом кола;
//get-властивість, що повертає радіус кола;
//set-властивість, що встановлює радіус кола;
//get-властивість, що повертає діаметр кола;
//метод, що обчислює площу кола;
//метод, що обчислює довжину кола.
//Продемонструйте роботу властивостей і методів.
//--
/*
class Circle 
{
    constructor(radius) 
    {
        this._radius = radius;
    }
    get radius() 
    {
        return this._radius;
    }
    set radius(value) 
    {
        this._radius = value;
    }
    get diameter() 
    {
        return this._radius * 2;
    }
    calculateArea() 
    {
        return Math.PI * Math.pow(this._radius, 2);
    }
    calculatePerimeter() 
    {
        return 2 * Math.PI * this._radius;
    }
}
const myCircle = new Circle(5);
console.log("Circle Radius:", myCircle.radius);
console.log("Circle diameter:", myCircle.diameter);
console.log("Circle Area:", myCircle.calculateArea());
console.log("Circle Perimetr:", myCircle.calculatePerimeter());
myCircle.radius = 7;
console.log("Circle new Radius:", myCircle.radius);
console.log("Circle new Diameter:", myCircle.diameter);
console.log("Circle new Area:", myCircle.calculateArea());
console.log("Circle new Perimeter:", myCircle.calculatePerimeter());
*/


//Реалізуйте клас, що описує HTML-елемент.
//Клас HtmlElement має містити:
//назву тегу;
//тег, що самозакривається;
//текстовий вміст;
//масив атрибутів;
//масив стилів;
//масив вкладених таких самих тегів;
//метод встановлення атрибуту;
//метод встановлення стилю;
//метод додавання вкладеного елемента в кінець поточного
//елемента;
//метод додавання вкладеного елемента на початок поточ-
//ного елемента;
//метод getHtml(), який повертає HTML-код у вигляді ряд-
//ка, включаючи HTML-код вкладених елементів.
//За допомогою написаного класу реалізувати наступний блок
//і додати його на сторінку за допомогою document.write().
//--
/*
class HtmlElement 
{
    constructor(tagName, selfClosing = false) 
    {
        this.tagName = tagName;
        this.selfClosing = selfClosing;
        this.textContent = '';
        this.attributes = [];
        this.styles = [];
        this.children = [];
    }
    setAttribute(name, value) 
    {
        this.attributes.push({ name, value });
    }
    setStyle(property, value) 
    {
        this.styles.push({ property, value });
    }
    appendChild(childElement) 
    {
        this.children.push(childElement);
    }
    prependChild(childElement) 
    {
        this.children.unshift(childElement);
    }
    getHtml() 
    {
        let html = `<${this.tagName}`;
        this.attributes.forEach(attr => 
        {
            html += ` ${attr.name}="${attr.value}"`;
        });
        if (this.styles.length > 0) 
        {
            const styles = this.styles.map(style => `${style.property}: ${style.value};`).join(' ');
            html += ` style="${styles}"`;
        }
        if (this.selfClosing) 
        {
            html += ' />';
        } 
        else 
        {
            html += '>';
            if (this.textContent) 
            {
                html += this.textContent;
            }
            this.children.forEach(child => 
            {
                html += child.getHtml();
            });
            html += `</${this.tagName}>`;
        }
        return html;
    }
}
const wrapperDiv = new HtmlElement('div');
wrapperDiv.setAttribute('id', 'wrapper');
wrapperDiv.setStyle('display', 'flex');
const div1 = new HtmlElement('div');
div1.setStyle('width', '300px');
div1.setStyle('margin', '10px');
const h3 = new HtmlElement('h3');
h3.textContent = 'What is Lorem Ipsum?';
div1.appendChild(h3);
const img1 = new HtmlElement('img', true);
img1.setStyle('width', '100%');
img1.setAttribute('src', './image/Screenshot (96).png');
img1.setAttribute('alt', 'Its not Ipsum, but who care?.png');
div1.appendChild(img1);
const p1 = new HtmlElement('p');
p1.setStyle('text-align', 'justify');
p1.textContent = `"Lorem Ipsum is simply dummy text of the printing and typesetting
industry. Lorem Ipsum has been the industry's standard dummy text ever
since the 1500s, when an uknown printer took a gelley of type and 
scrambled it to make a type specimen book."`;
div1.appendChild(p1);
const a1 = new HtmlElement('a');
a1.setAttribute('href', 'https://www.lipsum.com/');
a1.setAttribute('target', '_blank');
a1.textContent = 'More...';
p1.appendChild(a1);
wrapperDiv.appendChild(div1);
const div2 = new HtmlElement('div');
div2.setStyle('width', '300px');
div2.setStyle('margin', '10px');
const img2 = new HtmlElement('img', true);
img2.setStyle('width', '100%');
img2.setAttribute('src', './image/Screenshot (96).png');
img2.setAttribute('alt', 'Its not Ipsum, but who care?.png');
div2.appendChild(img2);
const p2 = new HtmlElement('p');
p2.setStyle('text-align', 'justify');
p2.textContent = `"Lorem Ipsum is simply dummy text of the printing and typesetting
industry. Lorem Ipsum has been the industry's standard dummy text ever
since the 1500s, when an uknown printer took a gelley of type and 
scrambled it to make a type specimen book."`;
div2.appendChild(p2);
const a2 = new HtmlElement('a');
a2.setAttribute('href', 'https://www.lipsum.com/');
a2.setAttribute('target', '_blank');
a2.textContent = 'More...';
p2.appendChild(a2);
wrapperDiv.appendChild(div2);
document.write(wrapperDiv.getHtml());
*/


//Реалізувати клас, який описує CSS- клас.
//Клас CssClass має містити в собі:
//назву CSS-класу;
//масив стилів;
//метод встановлення стилю;
//метод видалення стилю;
//метод getCss(), який повертає CSS-код у вигляді рядка.
//--
/*
class CssClass
{
    constructor(className, styles = {}) 
    {
        this.className = className;
        this.styles = styles;
    }
    setStyle(property, value) 
    {
        this.styles[property] = value;
    }
    removeStyle(property) 
    {
        delete this.styles[property];
    }
    getCss() 
    {
        let cssCode = `.${this.className} {\n`;
        for (const property in this.styles) 
        {
            if (this.styles.hasOwnProperty(property)) 
            {
                cssCode += `    ${property}: ${this.styles[property]};\n`;
            }
        }
        cssCode += `}`;
        return cssCode;
    }
}
const myCssClass = new CssClass('myClass', 
{
    'color': 'red',
    'font-size': '16px'
});
myCssClass.setStyle('font-weight', 'bold');
myCssClass.removeStyle('color');
console.log(myCssClass.getCss());
*/


//Реалізуйте клас, що описує блок HTML-документ.
//Клас HtmlBlock має містити:
//колекцію стилів, описаних за допомогою класу CssClass;
//кореневий елемент, описаний за допомогою класу
//HtmlElement;
//метод getCode(), який повертає рядок з HTML-кодом
//(спочатку теги style з описом усіх класів, а потім увесь
//HTML-вміст з кореневого тегу та його вкладених елемен-
//тів).
//За допомогою написаних класів, реалізувати наступний блок
//і додати його на сторінку за допомогою document.
//write().
//--
class CssClass 
{
    constructor(name, styles) 
    {
        this.name = name;
        this.styles = styles;
    }
    toString() 
    {
        let styleString = '';
        for (const [key, value] of Object.entries(this.styles)) 
        {
            styleString += `${key}: ${value}; `;
        }
        return `.${this.name} { ${styleString} }`;
    }
}
class HtmlElement
{
    constructor(tagName, attributes = {}, content = '') 
    {
        this.tagName = tagName;
        this.attributes = attributes;
        this.content = content;
        this.children = [];
    }
    addChild(child) 
    {
        this.children.push(child);
    }
    toString() 
    {
        let attributesString = '';
        for (const [key, value] of Object.entries(this.attributes)) 
        {
            attributesString += ` ${key}="${value}"`;
        }
        let childrenString = '';
        for (const child of this.children) 
        {
            childrenString += child.toString();
        }
        return `<${this.tagName}${attributesString}>${this.content}${childrenString}</${this.tagName}>`;
    }
}
class HtmlBlock 
{
    constructor() 
    {
        this.styles = [];
        this.rootElement = null;
    }
    addStyle(cssClass) 
    {
        this.styles.push(cssClass);
    }
    setRootElement(element) 
    {
        this.rootElement = element;
    }
    getCode() 
    {
        let styleCode = '';
        for (const cssClass of this.styles) 
        {
            styleCode += `${cssClass.toString()}\n`;
        }
        const htmlContent = this.rootElement ? this.rootElement.toString() : '';
        return `<style>\n${styleCode}</style>\n${htmlContent}`;
    }
}
const block = new HtmlBlock();
const blockStyles = new CssClass('wrap', { display: 'flex' });
block.addStyle(blockStyles);
const imageStyles = new CssClass('img', { width: '100%' });
block.addStyle(imageStyles);
const textStyles = new CssClass('text', { textAlign: 'justify' });
block.addStyle(textStyles);
const wrapperElement = new HtmlElement('div', { id: 'wrapper', class: 'wrap' });
block.setRootElement(wrapperElement);
const firstBlock = new HtmlElement('div', { class: 'block' });
wrapperElement.addChild(firstBlock);
const secondBlock = new HtmlElement('div', { class: 'block' });
wrapperElement.addChild(secondBlock);
const h3Element = new HtmlElement('h3', {}, 'What is Lorep Ipsum?');
firstBlock.addChild(h3Element);
secondBlock.addChild(h3Element);
const imgElement = new HtmlElement('img', { class: 'img', src: './image/Screenshot (96).png', alt: 'sdfgsdadas.png' });
firstBlock.addChild(imgElement);
secondBlock.addChild(imgElement.clone());
const pElement = new HtmlElement('p', { class: 'text' }, `"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."`);
firstBlock.addChild(pElement);
secondBlock.addChild(pElement.clone());
const aElement = new HtmlElement('a', { href: 'https://www.lipsum.com/', target: '_blank' }, 'More...');
pElement.addChild(aElement);
secondBlock.children[2].addChild(aElement.clone());
document.write(block.getCode());
