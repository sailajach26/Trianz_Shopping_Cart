//----------------------------------------------------------------
// store (contains the products)
//
// NOTE: nutritional info from http://www.cspinet.org/images/fruitcha.jpg
// score legend:
// 0: below 5% of daily value (DV)
// 1: 5-10% DV
// 2: 10-20% DV
// 3: 20-40% DV
// 4: above 40% DV
//
function store() {
    this.products = [
        new product("JVA", "Java", "Want to take your Java skills to next level?", 12, 779.23, 1, 2, 0, 1, 2),
        new product("NET", ".Net", "Want to take your .Net skills to next level?", 16, 1038.89, 0, 1, 1, 1, 2),
        new product("HTM5", "HTML5", "Want to take your Html5 skills to next level?", 4, 259.74, 0, 2, 1, 2, 2),
        new product("css3", "CSS3", "Want to take your Css3 skills to next level?", 3, 194.81, 4, 4, 1, 2, 0),
        new product("ang1", "AngularJS", "Want to take your Angular1 skills to next level?", 10, 649.36, 0, 0, 0, 1, 2),
        new product("ang2", "Angular 2", "Want to take your Angular2 skills to next level?", 11, 714.29, 4, 4, 1, 1, 1),
        new product("jvs",  "Javascript", "Want to take your Javascript skills to next level?", 8, 519.50, 0, 3, 0, 1, 1),
        new product("jqr",  "Jquery", "Want to take your Jquery skills to next level?", 8, 519.50, 4, 4, 0, 1, 2),
        new product("nodj", "NodeJS", "Want to take your Nodejs skills to next level?", 14, 909.10, 1, 4, 0, 2, 2),
        new product("mndb", "MongoDB", "Want to take your Mongodb skills to next level?", 18, 1168.84, 1, 4, 0, 2, 2),
        new product("php",  "PHP", "Want to take your Php skills to next level?", 8, 519.20, 3, 4, 0, 1, 1),
        new product("sql",  "Sql", "Want to take your Sql skills to next level?", 9, 584.10, 1, 4, 2, 1, 2),
        new product("boot",  "Bootstrap", "Want to take your Bootstrap skills to next level?", 5, 324.68, 3, 4, 2, 2, 2),
        new product("sap",  "SAP", "Want to take your SAP skills to next level?", 19, 1233.77, 1, 2, 0, 1, 2),
        new product("and",  "Android", "Want to take your Android skills to next level?", 8, 519.50, 0, 2, 0, 1, 2),
        new product("shr",  "Sharepoint", "Want to take your Sharepoint skills to next level?", 19, 1233.77, 2, 0, 2, 0),
        new product("orc",  "OracleDB", "Want to take your OracleDB skills to next level?", 4, 259.60, 0, 3, 0, 0, 1),
        new product("lnx",  "Linux", "Want to take your Linux skills to next level?", 6, 389.61, 4, 3, 0, 1, 3),
        new product("c",  "C language", "Want to take your C language skills to next level?", 7, 454.55, 0, 4, 1, 1, 2),
        new product("C++",  "C++ Language", "Want to take your C++ skills to next level?", 8, 519.50, 3, 4, 1, 1, 2),
        new product("ts1", "Testing", "Want to take your Testing skills to next level?", 4, 259.74, 4, 4, 0, 1, 1)
    ];
    this.dvaCaption = [
        "Cost",
        "Low",
        "Average",
        "Good",
        "Great"
    ];
    this.dvaRange = [
        "below 5%",
        "between 5 and 10%",
        "between 10 and 20%",
        "between 20 and 40%",
        "above 40%"
    ];
}
store.prototype.getProduct = function (sku) {
    for (var i = 0; i < this.products.length; i++) {
        if (this.products[i].sku == sku)
            return this.products[i];
    }
    return null;
}
