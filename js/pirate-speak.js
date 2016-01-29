var Dictionary = {
  hello: "ahoy",
  hi: "yohoho",
  pardon: [1, {
    me: "avast"
  }],
  excuse: [1, {
    me: "arrr"
  }],
  stranger: "scurvy",
  sir: "matey",
  madam: "proud beauty",
  miss: "comely wench",
  officer: "foul blaggart",
  enemy: "scallywag",
  where: [1, {
    is: "whar be"
  }],
  can: [4, {
    you_help_me_find: "know ye"
  }],
  is: [1, {
    that: "be that"
  }],
  how: [4, {
    far_is_it_to: "how many leagues to"
  }],
  the: "th'",
  a: "a briny",
  any: "some godforsaken",
  nearby: "broadside",
  my: "me",
	you: "ye",
	problem: "hornswaggle",
  your: "yer",
  old: "barnacle-covered",
  attractive: "comely",
  happy: "grog-filled",
  restroom: "head",
  restaurant: "galley",
  hotel: "fleabag inn",
  mall: "market",
  pub: "Skull & Scuppers",
	work: "dubloons",
	program: "letters of marque",
	computer: "ship",
	use: "sail",
  bank: "buried trasure",
  would: [1, {
    like: "be needin"
  }],
  I: [
    [1, {
      desire: "I have a fierce fire in me belly"
    }],
    [5, {
      wish_I_knew_how_to: "I be hankerin to"
    }]
  ],
  my: [
    [4, {
      mother_told_me_to: "me dear ol mum, bless her soul, tol me to"
    }],
    [4, {
      companion_would_like_to: "me mate, ol Rumpot, wants to"
    }]
  ],
  find: "come across",
  take: [2, {
    a_nap: "have a bit of a lie down"
  }],
  make: [2, {
    a_withdrawal: "seize all yer doubloons"
  }],
  have: [2, {
    a_cocktail: "swill a pint or two of grog"
  }],
  kill: [1, {
    him: "blow the man down"
  }],
  frown: "hang the jib",
  take: [2, {
    a_hike: "walk the plank"
  }]
};

function translate(text) {
  var hop = 1;
  var textToReturn = "";
  //checking if the text is already split, if not we split
  if (typeof text === 'string') {
    text = text.split(' ');
  }
  if (text.length > 0) {
    if (typeof Dictionary[text[0]] == 'undefined' || typeof Dictionary[text[0]] === 'string') {
      textToReturn = (Dictionary[text[0]] || text[0]);
      text = text.slice(hop, text.length);
    } else {
      var info = recursiveCheck(text, Dictionary[text[0]]);
      textToReturn = (info.hop == 1) ? text[0] : info.text;
      text = text.splice(info.hop, text.length);
    }
    if (text.length > 0) {
      textToReturn += ' ' + translate(text);
    }

  }
  return textToReturn;
}

function reverseTranslate(text) {
  var hop = 1;
  var textToReturn = "";
  //checking if the text is already split, if not we split
  if (typeof text === 'string') {
    text = text.split(' ');
  }
  if (text.length > 0) {
    if (typeof reverseDictionary[text[0]] == 'undefined' || typeof reverseDictionary[text[0]] === 'string') {
      textToReturn = (reverseDictionary[text[0]] || text[0]);
      text = text.slice(hop, text.length);
    } else {
      var info = recursiveCheck(text, reverseDictionary[text[0]]);
      textToReturn = (info.hop == 1) ? text[0] : info.text;
      text = text.splice(info.hop, text.length);
    }
    if (text.length > 0) {
      textToReturn += ' ' + translate(text);
    }

  }
  return textToReturn;
}

function recursiveCheck(text, arr) {
  var found = {
    hop: 1,
    text: ''
  };
  if (arr.length > 0) {
    if (typeof parseInt(arr[0]) === 'number' && text.length - 1 >= arr[0]) {
      var phrase = text.slice(1, arr[0] + 1);
      if (arr[1][phrase.join('_')]) {
        found.hop = arr[0] + 1;
        found.text = arr[1][phrase.join('_')];
      }
    } else {
      found = recursiveCheck(text, arr[0] || []);
      if (found.hop == 1 && arr.length > 1) {
        found = recursiveCheck(text, arr.slice(1, arr.length));
      }
    }
  }
  return found;
}



$(document).ready(function() {
  var pirateOn = false;
  var reversePh = $('#message').attr('placeholder');
  var orig_msg = '';

  $('#message').change(function(){
    orig_msg = $('#message').val();
  });

  $("#subject").change(function() {

    console.log("dropdown change detected");

    var selection = $("#subject").val();
    var msg_content = $('#message').val();
    var placeholder = $('#message').attr('placeholder');

    /* check if "pirate" is selected */
    if (selection === "pirate") {
      pirateOn = true;
      console.log(pirateOn);
    } else {
      pirateOn = false;
      console.log(pirateOn);
    }

    if (pirateOn == true) {
      if (msg_content !== '') {
        console.log('translating message');
        var out = translate(msg_content);
        $('#message').val(out);
      } else if (msg_content == '') {
        var out = translate(placeholder);
        $('#message').attr('placeholder', out).val("").focus().blur();
      }
    } else if (pirateOn == false) {
      if (msg_content == '') {
        console.log('reverting placeholder');
        var out = reversePh;
        $('#message').attr('placeholder', out).val("").focus().blur();
      } else if (msg_content !== '') {
        console.log('reverting message');
        var out = orig_msg;
        $('#message').val(out);
      }
    } else {
      var out = orig_msg;
      $('#message').val(out);
    }

  });
});
