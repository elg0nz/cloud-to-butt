document.addEventListener("DOMNodeInserted", function(e) {
  walk(document.body);
}, false);

function walk(node) {
  // I stole this function from here:
  // http://is.gd/mwZp7E
  var child, next;

  switch ( node.nodeType ) {
    case 1:  // Element
    case 9:  // Document
    case 11: // Document fragment
      child = node.firstChild;
      while ( child ) {
        next = child.nextSibling;
        walk(child);
        child = next;
      }
      break;

    case 3: // Text node
      handleText(node);
      break;
  }
}

function handleText(textNode) {
  var v = textNode.nodeValue;
  var replacement = "White Supremacy 💩";

  // TODO: Refactor to make it easier to add more words and handle variations.
  v = v.replace(/\bAlt Right\b/g, replacement);
  v = v.replace(/\balt right\b/g, replacement);
  v = v.replace(/\balt-right\b/g, replacement);
  v = v.replace(/\bAlt-Right\b/g, replacement);
  v = v.replace(/\bWhite Nationalism\b/g, replacement);
  v = v.replace(/\bwhite nationalism\b/g, replacement);

  textNode.nodeValue = v;
}
