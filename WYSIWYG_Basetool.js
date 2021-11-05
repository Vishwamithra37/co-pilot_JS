    $('#bold').click(function() {
    let selection = window.getSelection();
    if (selection.rangeCount > 0) {
      let range = selection.getRangeAt(0);
      let selectionContents = range.extractContents();
      let span = document.createElement('span');
      span.appendChild(selectionContents);
      span.style.fontWeight = 'bold';
      range.insertNode(span);
    }
  });
  // A button which italicizes highlighted text
  $('#italic').click(function() {
    let selection = window.getSelection();
    if (selection.rangeCount > 0) {
      let range = selection.getRangeAt(0);
      let selectionContents = range.extractContents();
      let span = document.createElement('span');
      span.appendChild(selectionContents);
      span.style.fontStyle = 'italic';
      range.insertNode(span);
    }
  });
  // A button which underlines highlighted text
  $('#underline').click(function() {
    let selection = window.getSelection();
    if (selection.rangeCount > 0) {
      let range = selection.getRangeAt(0);
      let selectionContents = range.extractContents();
      let span = document.createElement('span');
      span.appendChild(selectionContents);
      span.style.textDecoration = 'underline';
      range.insertNode(span);
    }
  });
  // A button which strikes through highlighted text
  $('#strike').click(function() {
    let selection = window.getSelection();
    if (selection.rangeCount > 0) {
      let range = selection.getRangeAt(0);
      let selectionContents = range.extractContents();
      let span = document.createElement('span');
      span.appendChild(selectionContents);
    }

})
