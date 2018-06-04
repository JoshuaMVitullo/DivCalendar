$(document).ready(function() {
  $('tbody').scroll(function(e) { //detect a scroll event on the tbody
  	/*
    Setting the thead left value to the negative valule of tbody.scrollLeft will make it track the movement
    of the tbody element. Setting an elements left value to that of the tbody.scrollLeft left makes it maintain it's relative position at the left of the table.
    */
    $('thead').css("left", -$("tbody").scrollLeft()); //fix the thead relative to the body scrolling
    $('thead th:nth-child(1)').css("left", $("tbody").scrollLeft()); //fix the first cell of the header
    $('tbody td:nth-child(1)').css("left", $("tbody").scrollLeft()); //fix the first column of tdbody
  });
});


/* http://qnimate.com/javascript-scroll-by-dragging/ where I got the open source dragscroll function */
/* Dragscroll function */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports'], factory);
  }
  else if (typeof exports !== 'undefined') {
    factory(exports);
  }
  else {
    factory((root.dragscroll = {}));
  }
}

(this, function (exports) {
  var _window = window;
  var _document = document;
  var mousemove = 'mousemove';
  var mouseup = 'mouseup';
  var mousedown = 'mousedown';
  var EventListener = 'EventListener';
  var addEventListener = 'add' + EventListener;
  var removeEventListener = 'remove' + EventListener;
  var newScrollX, newScrollY;

  var dragged = [];
  var reset = function(i, el) {
    for (i = 0; i < dragged.length;) {
      el = dragged[i++];
      el = el.container || el;
      el[removeEventListener](mousedown, el.md, 0);
      _window[removeEventListener](mouseup, el.mu, 0);
      _window[removeEventListener](mousemove, el.mm, 0);
    }

    // cloning into array since HTMLCollection is updated dynamically
    dragged = [].slice.call(_document.getElementsByClassName('dragscroll'));
    for (i = 0; i < dragged.length;) {
      (function(el, lastClientX, lastClientY, pushed, scroller, cont){
        (cont = el.container || el)[addEventListener](
          mousedown,
          cont.md = function(e) {
            if (!el.hasAttribute('nochilddrag') || _document.elementFromPoint(e.pageX, e.pageY) == cont) {
              pushed = 1;
              lastClientX = e.clientX;
              lastClientY = e.clientY;
              e.preventDefault();
            }
          }, 0
        );

        _window[addEventListener](
          mouseup, cont.mu = function() {pushed = 0;}, 0
        );

        _window[addEventListener](
          mousemove,
          cont.mm = function(e) {
            if (pushed) {
              (scroller = el.scroller||el).scrollLeft -=
                newScrollX = (- lastClientX + (lastClientX=e.clientX));
              scroller.scrollTop -=
                newScrollY = (- lastClientY + (lastClientY=e.clientY));
              if (el == _document.body) {
                (scroller = _document.documentElement).scrollLeft -= newScrollX;
                 scroller.scrollTop -= newScrollY;
              }
            }
          }, 0
        );
      })(dragged[i++]);
    }
  }

  if (_document.readyState == 'complete') {
    reset();
  }
  else {
    _window[addEventListener]('load', reset, 0);
  }

  exports.reset = reset;
}));
