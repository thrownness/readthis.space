// https://github.com/varun-raj/medium-editor-autolist
(function (root, factory) {
    'use strict';
    if (typeof module === 'object') {
        module.exports = factory;
    } else if (typeof define === 'function' && define.amd) {
        define(factory);
    } else {
        root.AutoList = factory;
    }
}(this, function (MediumEditor) {

  var AutoList = MediumEditor.Extension.extend({
    name: 'autolist',
    init: function(){
      this.subscribe('editableInput', this.onInput.bind(this));
    },
    onInput: function (evt) {
      var list_start = this.base.getSelectedParentElement().textContent;
      if (/^\s*1\.\s/.test(list_start) && this.base.getExtensionByName('orderedlist')){
        this.base.execAction('delete');
        this.base.execAction('delete');
        this.base.execAction('delete');
        this.base.execAction('insertorderedlist');
      }
      else if (/^\s*\*\s/.test(list_start) && this.base.getExtensionByName('unorderedlist')){
        this.base.execAction('delete');
        this.base.execAction('delete');
        this.base.execAction('insertunorderedlist');
      }
      else if (/^\s*-\s/.test(list_start) && this.base.getExtensionByName('unorderedlist')){
        this.base.execAction('delete');
        this.base.execAction('delete');
        this.base.execAction('insertunorderedlist');
      }
    }
  });

  return AutoList;

}(typeof require === 'function' ? require('medium-editor') : MediumEditor)));