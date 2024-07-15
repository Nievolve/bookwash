function enc_str(theString, theKey) {
    var theResult = "";//the result will be here
    for (i = 0; i < theString.length; ++i) {
        theResult += String.fromCharCode(theKey ^ theString.charCodeAt(i));
    }
    return theResult;
}