/* globals Hub, Comment, __pageType, */
"use strict";var Layout={win:$(window),body:$("body"),header:$("body > header"),headerHeight:$("body > header").outerHeight(),boxResult:$(".result"),boxResPos:$(".result").position(),boxes:$(".boxes"),cmScrollz:$(),topBoxesCon:$(".top-boxes"),resizer:$("#resizer"),resizerHeight:$("#resizer").outerHeight(),dragCover:$("#editor-drag-cover"),footerHeight:$(".editor-footer").outerHeight(),dontTreadOnMe:!1,init:function(){this._bindToHub(),Layout.initLayout(),Layout.preventTabletZooming(),Layout.headerHeight==null&&(Layout.headerHeight=0)},_bindToHub:function(){Hub.sub("server-ui-change",$.proxy(this._onUIChange,this))},_onUIChange:function(e,t){if(t.ui&&t.ui.layout&&t.ui.layout!=="top"){var n=$("#"+t.ui.layout+"-layout").attr("href");document.location=n}},initLayout:function(){Layout.win.resize(function(){var e=Layout.body.height();__pageType==="details"?(Layout.boxResult.height(e/2-6),Layout.topBoxesCon.height(e/2-102)):__pageType==="pres"?(Layout.presSpace=e-Layout.resizerHeight-Layout.footerHeight,Layout.boxResult.height(Layout.presSpace/2),Layout.topBoxesCon.height(Layout.presSpace/2)):(Layout.boxResult.height(e/2-102),Layout.topBoxesCon.height(e/2-6)),__pageType==="pres"?Layout.resizer.css({top:Layout.presSpace/2-1+"px"}):Layout.resizer.css({top:e/2+Layout.headerHeight-7+"px"}),Layout.boxes.height(Layout.win.height()-Layout.headerHeight-Layout.footerHeight),$(".result > iframe").width(Layout.win.width()),Layout.cmScrollz.height(Layout.topBoxesCon.height()-32)}),Layout.resizer.draggable({start:function(){Layout.dragCover.show()},stop:function(e,t){Layout.stopDragging(e,t)},axis:"y",drag:function(e,t){var n=Layout.body.height();__pageType==="details"?(Layout.boxResult.height(t.position.top-Layout.headerHeight+2),Layout.topBoxesCon.height(n+Layout.headerHeight-t.position.top-109)):__pageType==="pres"?(Layout.topBoxesCon.height(t.position.top+1),Layout.boxResult.height(Layout.presSpace-t.position.top)):(Layout.boxResult.height(n+Layout.headerHeight-t.position.top-109),Layout.topBoxesCon.height(t.position.top-Layout.headerHeight+2)),__pageType==="pres"?Layout.cmScrollz.height(t.position.top-32):Layout.cmScrollz.height(t.position.top-95)},containment:Layout.boxes})},stopDragging:function(e,t){Layout.dragCover.hide();var n=Layout.body.height();__pageType==="pres"?Layout.boxResult.height(((Layout.presSpace-t.position.top)/n-Layout.headerHeight)*100+"%"):Layout.boxResult.height(Layout.boxResult.height()/(n-Layout.headerHeight-Layout.footerHeight)*100+"%"),Layout.resizer.css({top:t.position.top/n*100+"%"}),typeof Comment.tweakCommentsSize=="function"&&Comment.tweakCommentsSize(),Hub.pub("editor-refresh",{delay:0})},doneLoading:function(){Layout.win.load($.proxy(function(){this.body.removeClass("preload")},this)).resize(),Layout.cmScrollz=$(".CodeMirror-scroll, .CodeMirror-scrollbar"),Layout.cmScrollz.height(Layout.topBoxesCon.height()-32)},preventTabletZooming:function(){var e=navigator.userAgent.match(/(iPad)/g)?!0:!1;e&&$("head").append("<meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'>")}};Layout.init(),Layout.doneLoading();