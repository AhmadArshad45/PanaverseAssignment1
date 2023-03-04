var name1 = "Ahmad";
console.log("Hello", name1.toUpperCase());
console.log("Hello", name1.toLowerCase());
titleCase(str);
{
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpfunctionperCase() + str[i].slice(1);
    }
    return str.join(' ');
}
titleCase("I'm a little tea pot");
