var JSVEEScala = function() {};

JSVEEScala.addToHead = function(params) {
    return '<script src="/static/jsvee-scala-o1/JSVEE-min.js" type="text/javascript"></script>\n' +
           '<script src="/static/jsvee-scala-o1/JSVEE-scala-min.js" type="text/javascript"></script>\n' +
           '<script src="/static/jsvee-scala-o1/JSVEE-content-min.js" type="text/javascript"></script>\n' +
           '<link href="/static/jsvee-scala-o1/jsvee.css" rel="stylesheet">\n' +
           '<link href="/static/jsvee-scala-o1/jsvee-scala.css" rel="stylesheet">\n' +
           '<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet" type="text/css">' +
           '<link href="https://fonts.googleapis.com/css?family=Inconsolata" rel="stylesheet" type="text/css">';
};

JSVEEScala.addToBody = function(params) {
    return '';
};

JSVEEScala.initialize = function(req, params, handlers, cb) {

    // Initialize the content package
    params.headContent += JSVEEScala.addToHead(params);
    params.bodyContent += JSVEEScala.addToBody(params);

    cb();

};

JSVEEScala.register = function(handlers) {
    handlers.contentPackages['jsvee-scala-o1'] = JSVEEScala;
    handlers.contentTypes.jsvee.installedContentPackages.push(JSVEEScala);
};

JSVEEScala.namespace = 'jsvee-scala-o1';
JSVEEScala.contentTypeNamespace = 'jsvee';
JSVEEScala.packageType = 'content';

JSVEEScala.meta = {
    'name': 'jsvee-scala',
    'shortDescription': 'JSVEE-pakkaus, joka sisältää Scala-esimerkkejä.',
    'description': '',
    'author': 'Teemu Sirkiä',
    'license': 'MIT',
    'version': '0.1.0',
    'url': '',
    'teaserContent' : ['varAssignment', 'bufferRef1'],
    'contents':     {
        'division': {
            'description': 'division',
            'order': 0,
            'title': 'division'
        },
        'println': {
            'description': 'println',
            'order': 1,
            'title': 'println'
        },
        'println-feedback': {
            'description': 'println-feedback',
            'order': 2,
            'title': 'println-feedback'
        },
        'factorialOfSix': {
            'description': 'factorialOfSix',
            'order': 3,
            'title': 'factorialOfSix'
        },
        'varAssignment': {
            'description': 'varAssignment',
            'order': 4,
            'title': 'varAssignment'
        },
        'varIncrement': {
            'description': 'varIncrement',
            'order': 5,
            'title': 'varIncrement'
        },
        'bufferRef1': {
            'description': 'bufferRef1',
            'order': 6,
            'title': 'bufferRef1'
        },
        'bufferRef2': {
            'description': 'bufferRef2',
            'order': 7,
            'title': 'bufferRef2'
        },
        'stringRef': {
            'description': 'stringRef',
            'order': 8,
            'title': 'stringRef'
        },
        'nestedCalls': {
            'description': 'nestedCalls',
            'order': 9,
            'title': 'nestedCalls'
        },
        'printingVsReturning': {
            'description': 'printingVsReturning',
            'order': 10,
            'title': 'printingVsReturning'
        },
        'printlnWithUnit': {
            'description': 'printlnWithUnit',
            'order': 11,
            'title': 'printlnWithUnit'
        },
        'callStackIntro': {
            'description': 'callStackIntro',
            'order': 12,
            'title': 'callStackIntro'
        },
        'localVars': {
            'description': 'localVars',
            'order': 13,
            'title': 'localVars'
        },
        'callStackProper': {
            'description': 'callStackProper',
            'order': 14,
            'title': 'callStackProper'
        },
        'callStackPuzzle': {
            'description': 'callStackPuzzle',
            'order': 15,
            'title': 'callStackPuzzle'
        },
        'scoreAssignmentHint': {
            'description': 'scoreAssignmentHint',
            'order': 16,
            'title': 'scoreAssignmentHint'
        },
        'objectRefAndState': {
            'description': 'objectRefAndState',
            'order': 17,
            'title': 'objectRefAndState'
        },
        'this': {
            'description': 'this',
            'order': 18,
            'title': 'this'
        },
        'new': {
            'description': 'new',
            'order': 19,
            'title': 'new'
        },
        'refsAndInstances': {
            'description': 'refsAndInstances',
            'order': 20,
            'title': 'refsAndInstances'
        },
        'instantiation': {
            'description': 'instantiation',
            'order': 21,
            'title': 'instantiation'
        },
        'instantiationNeater': {
            'description': 'instantiationNeater',
            'order': 22,
            'title': 'instantiationNeater'
        },
        'thisInClass': {
            'description': 'thisInClass',
            'order': 23,
            'title': 'thisInClass'
        },
        'booleans': {
            'description': 'booleans',
            'order': 24,
            'title': 'booleans'
        },
        'isBetterThan': {
            'description': 'isBetterThan',
            'order': 25,
            'title': 'isBetterThan'
        },
        'ifTrue': {
            'description': 'ifTrue',
            'order': 26,
            'title': 'ifTrue'
        },
        'ifFalse': {
            'description': 'ifFalse',
            'order': 27,
            'title': 'ifFalse'
        },
        'ifWithoutElse': {
            'description': 'ifWithoutElse',
            'order': 28,
            'title': 'ifWithoutElse'
        },
        'compositeClass': {
            'description': 'compositeClass',
            'order': 29,
            'title': 'compositeClass'
        },
        'category': {
            'description': 'category',
            'order': 30,
            'title': 'category'
        },
        'categoryWithBuffer': {
            'description': 'categoryWithBuffer',
            'order': 31,
            'title': 'categoryWithBuffer'
        },
        'categoryNPE': {
            'description': 'categoryNPE',
            'order': 32,
            'title': 'categoryNPE'
        },
        'categoryNPE2': {
            'description': 'categoryNPE2',
            'order': 33,
            'title': 'categoryNPE2'
        },
        'option': {
            'description': 'option',
            'order': 34,
            'title': 'option'
        },
        'optionGetOrElse': {
            'description': 'optionGetOrElse',
            'order': 35,
            'title': 'optionGetOrElse'
        },
        'companionObjectMissing': {
            'description': 'companionObjectMissing',
            'order': 36,
            'title': 'companionObjectMissing'
        },
        'companionObjectPseudo': {
            'description': 'companionObjectPseudo',
            'order': 37,
            'title': 'companionObjectPseudo'
        },
        'companionObjectProper': {
            'description': 'companionObjectProper',
            'order': 38,
            'title': 'companionObjectProper'
        },
        'foreachPseudo': {
            'description': 'foreachPseudo',
            'order': 39,
            'title': 'foreachPseudo'
        },
        'foreachNested': {
            'description': 'foreachNested',
            'order': 40,
            'title': 'foreachNested'
        },
        'arraysNested': {
            'description': 'arraysNested',
            'order': 41,
            'title': 'arraysNested'
        },
        'doLoop': {
            'description': 'doLoop',
            'order': 42,
            'title': 'doLoop'
        },
        'superParameters': {
            'description': 'superParameters',
            'order': 43,
            'title': 'superParameters'
        },
        'higherOrderFunction': {
            'description': 'higherOrderFunction',
            'order': 44,
            'title': 'higherOrderFunction'
        },
        'functionLiteral': {
            'description': 'functionLiteral',
            'order': 45,
            'title': 'functionLiteral'
        },
        'firstClassFunctions': {
            'description': 'firstClassFunctions',
            'order': 46,
            'title': 'firstClassFunctions'
        },
        'recursionCredits': {
            'description': 'recursionCredits',
            'order': 47,
            'title': 'recursionCredits'
        },
        'recursionPalindrome': {
            'description': 'recursionPalindrome',
            'order': 48,
            'title': 'recursionPalindrome'
        },
        'recursionPrintSquares': {
            'description': 'recursionPrintSquares',
            'order': 49,
            'title': 'recursionPrintSquares'
        },
        'recursionFactorial': {
            'description': 'recursionFactorial',
            'order': 50,
            'title': 'recursionFactorial'
        },
        'recursionPalindromeTail': {
            'description': 'recursionPalindromeTail',
            'order': 51,
            'title': 'recursionPalindromeTail'
        },
        'bufferRef3': {
            'description': 'bufferRef3',
            'order': 52,
            'title': 'bufferRef3'
        },
        'employees': {
            'description': 'employees',
            'order': 53,
            'title': 'employees'
        },
        'isBetterThan2': {
            'description': 'isBetterThan2',
            'order': 54,
            'title': 'isBetterThan2'
        },
        'bufferAndStrings': {
            'description': 'bufferAndStrings',
            'order': 55,
            'title': 'bufferAndStrings'
        },
        'byName': {
            'description': 'byName',
            'order': 56,
            'title': 'byName'
        }        
    }
};

module.exports = JSVEEScala;
