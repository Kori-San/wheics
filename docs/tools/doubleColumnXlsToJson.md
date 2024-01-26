# 🗂️ How to transform a double column XLS to JSON
In this project we have to play with a lot of `.xls` files since (for some reason) it is the preferred way of the french government to store data.

## 1️⃣ &nbsp; Get your `.xls`
This is a simple task. Really. Just get your file.

## 2️⃣ &nbsp; Copy the wanted data
It is simple too just copy the data you want (without the columns name).

You should have a similar result when you past the data you copied, the data of the columns separated by a tab:
```
A	Agriculture, sylviculture et pêche
B	Industries extractives
C	Industrie manufacturière
D	Production et distribution d'électricité, de gaz, de vapeur et d'air conditionné
E	Production et distribution d'eau ; assainissement, gestion des déchets et dépollution
```
> Data from [the INSEE website](https://www.insee.fr/fr/information/2120875) and describs the activity sections defined by the french government.

## 3️⃣ &nbsp; Create a JSON-like data from your 
You can now go to https://sed.js.org where you can paste your data in the left text area.

In the `Command line` input enter the following sed command:
```sed
's/\([^\t]*\)\t\(.*\)/"\1": "\2",/'
```

You can then copy the output shown in the right text area.

## 4️⃣ &nbsp; Create your JSON in your `.js` 
You can now go to your `.js` file and create your JSON like so:
```js
const xlsData = {
    /* Paste the seded data here */
};
```

##
