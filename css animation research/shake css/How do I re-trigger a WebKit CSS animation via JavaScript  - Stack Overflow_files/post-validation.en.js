StackExchange.postValidation=function(){function e(e,t,n){var i=e.find('input[type="submit"]:visible'),r=i.length&&i.is(":enabled");r&&i.attr("disabled",!0),o(e),s(e,t,n),u(e),l(e),d(e);var a=function(){1!=t||e.find(y).length?(c(e),r&&i.attr("disabled",!1)):setTimeout(a,250)};a()}function t(t,i,o,s,c){e(t,i,s);var u,l=function(e){if(e.success)if(c)c(e);else{var n=window.location.href.split("#")[0],r=e.redirectTo.split("#")[0];0==r.indexOf("/")&&(r=window.location.protocol+"//"+window.location.hostname+r),u=!0,window.location=e.redirectTo,n.toLowerCase()==r.toLowerCase()&&window.location.reload(!0)}else e.captchaHtml?StackExchange.captcha.init(e.captchaHtml,l):e.errors?p(e.errors,t,i,o):t.find('input[type="submit"]:visible').parent().showErrorMessage(e.message)};t.submit(function(){if(t.find("#answer-from-ask").is(":checked"))return!0;var e=t.find(x);if("[Edit removed during grace period]"==$.trim(e.val()))return m(e,["Comment reserved for system use. Please use an appropriate comment."],f()),!1;if(a(),StackExchange.navPrevention&&StackExchange.navPrevention.stop(),t.find('input[type="submit"]:visible').parent().addSpinner(),StackExchange.helpers.disableSubmitButton(t),StackExchange.options.site.enableNewTagCreationWarning){var i=t.find(y).parent().find("input#tagnames"),s=i.prop("defaultValue");if(i.val()!==s)return $.ajax({"type":"GET","url":"/posts/new-tags-warning","dataType":"json","data":{"tags":i.val()},"success":function(e){n(e,t,u,o,l)}}),!1}return setTimeout(function(){r(t,o,u,l)},0),!1})}function n(e,t,n,a,o){if(e.showWarning){var s=$(e.html);s.bind("popupClose",function(){i(t,n)}),s.find(".popup-actions-cancel, .popup-close a").click(function(){StackExchange.helpers.closePopups(".popup"),i(t,n)}),s.find(".cancel-post").click(function(e){return StackExchange.helpers.closePopups(".popup"),e.preventDefault(),!1}),s.find(".submit-post").click(function(e){return StackExchange.helpers.closePopups(".popup"),r(t,a,n,o),e.preventDefault(),!1}),s.insertBefore(t.find('input[type="submit"]:visible')),StackExchange.helpers.bindMovablePopups(),s.show()}else r(t,a,n,o)}function i(e,t){StackExchange.helpers.removeSpinner(),t||StackExchange.helpers.enableSubmitButton(e)}function r(e,t,n,r){$.ajax({"type":"POST","dataType":"json","data":e.serialize(),"url":e.attr("action"),"success":r,"error":function(){var n;switch(t){case"question":n="An error occurred submitting the question.";break;case"answer":n="An error occurred submitting the answer.";break;case"edit":n="An error occurred submitting the edit.";break;case"tags":n="An error occurred submitting the tags.";break;case"post":default:n="An error occurred submitting the post."}e.find('input[type="submit"]:visible').parent().showErrorMessage(n)},"complete":function(){i(e,n)}})}function a(){for(var e=0;e<C.length;e++)clearTimeout(C[e]);C=[]}function o(e){var t=e.find(b);t.length&&t.blur(function(){C.push(setTimeout(function(){var n=t.val(),i=$.trim(n);if(0==i.length)return g(e,t),void 0;var r=t.data("min-length");if(r&&i.length<r)return m(t,[function(e){return 1==e.minLength?"Title must be at least "+e.minLength+" character.":"Title must be at least "+e.minLength+" characters."}({"minLength":r})],f()),void 0;var a=t.data("max-length");return a&&i.length>a?(m(t,[function(e){return 1==e.maxLength?"Title cannot be longer than "+e.maxLength+" character.":"Title cannot be longer than "+e.maxLength+" characters."}({"maxLength":a})],f()),void 0):($.ajax({"type":"POST","url":"/posts/validate-title","data":{"title":n},"success":function(n){n.success?g(e,t):m(t,n.errors.Title,f())},"error":function(){g(e,t)}}),void 0)},E))})}function s(e,t,n){var i=e.find(w);i.length&&i.blur(function(){C.push(setTimeout(function(){var r=i.val(),a=$.trim(r);if(0==a.length)return g(e,i),void 0;if(5==t){var o=i.data("min-length");return o&&a.length<o?m(i,[function(e){return"Wiki Body must be at least "+e.minLength+" characters. You entered "+e.actual+"."}({"minLength":o,"actual":a.length})],f()):g(e,i),void 0}(1==t||2==t)&&$.ajax({"type":"POST","url":"/posts/validate-body","data":{"body":r,"oldBody":i.prop("defaultValue"),"isQuestion":1==t,"isSuggestedEdit":n},"success":function(t){t.success?g(e,i):m(i,t.errors.Body,f())},"error":function(){g(e,i)}})},E))})}function c(e){var t=e.find(y);if(t.length){var n=t.parent().find("input#tagnames");n.blur(function(){C.push(setTimeout(function(){var i=n.val(),r=$.trim(i);return 0==r.length?(g(e,t),void 0):($.ajax({"type":"POST","url":"/posts/validate-tags","data":{"tags":i,"oldTags":n.prop("defaultValue")},"success":function(n){n.success?g(e,t):m(t,n.errors.Tags,f())},"error":function(){g(e,t)}}),void 0)},E))})}}function u(e){var t=e.find(x);t.length&&t.blur(function(){C.push(setTimeout(function(){var n=t.val(),i=$.trim(n);if(0==i.length)return g(e,t),void 0;var r=t.data("min-length");if(r&&i.length<r)return m(t,[function(e){return 1==e.minLength?"Your edit summary must be at least "+e.minLength+" character.":"Your edit summary must be at least "+e.minLength+" characters."}({"minLength":r})],f()),void 0;var a=t.data("max-length");return a&&i.length>a?(m(t,[function(e){return 1==e.maxLength?"Your edit summary cannot be longer than "+e.maxLength+" character.":"Your edit summary cannot be longer than "+e.maxLength+" characters."}({"maxLength":a})],f()),void 0):(g(e,t),void 0)},E))})}function l(e){var t=e.find(k);t.length&&t.blur(function(){C.push(setTimeout(function(){var n=t.val(),i=$.trim(n);if(0==i.length)return g(e,t),void 0;var r=t.data("min-length");if(r&&i.length<r)return m(t,[function(e){return"Wiki Excerpt must be at least "+e.minLength+" characters; you entered "+e.actual+"."}({"minLength":r,"actual":i.length})],f()),void 0;var a=t.data("max-length");return a&&i.length>a?(m(t,[function(e){return"Wiki Excerpt cannot be longer than "+e.maxLength+" characters; you entered "+e.actual+"."}({"maxLength":a,"actual":i.length})],f()),void 0):(g(e,t),void 0)},E))})}function d(e){var t=e.find(S);t.length&&t.blur(function(){C.push(setTimeout(function(){var n=t.val(),i=$.trim(n);return 0==i.length?(g(e,t),void 0):/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,20}$/i.test(n)?(g(e,t),void 0):(m(t,["This email does not appear to be valid."],h()),void 0)},E))})}function f(){var e=$("#sidebar, .sidebar").first().width()||270;return{"position":{"my":"left top","at":"right center"},"css":{"max-width":e,"min-width":e},"closeOthers":!1}}function h(){var e=$("#sidebar, .sidebar").first().width()||270;return{"position":{"my":"left top","at":"right center"},"css":{"min-width":e},"closeOthers":!1}}function p(e,t,n,i){if(e){var r=function(){var n=0;m(t.find(b),e.Title,f())?n++:g(t,t.find(b)),m(t.find(w),e.Body,f())?n++:g(t,t.find(w)),m(t.find(y),e.Tags,f())?n++:g(t,t.find(y)),m(t.find(x),e.EditComment,f())?n++:g(t,t.find(x)),m(t.find(k),e.Excerpt,f())?n++:g(t,t.find(k)),m(t.find(S),e.Email,h())?n++:g(t,t.find(S));var r=t.find(".general-error"),a=e.General&&e.General.length>0;if(a||n>0){if(!r.length){var o=t.find('input[type="submit"]:visible');o.before('<div class="general-error-container"><div class="general-error"></div><br class="cbt" /></div>'),r=t.find(".general-error")}if(a)m(r,e.General,{"position":"inline","css":{"float":"left","margin-bottom":"10px"},"closeOthers":!1,"dismissable":!1});else{g(t,r);var s;switch(i){case"question":s=function(e){return 1==e.specificErrorCount?"Your question couldn't be submitted. Please see the error above.":"Your question couldn't be submitted. Please see the errors above."}({"specificErrorCount":n});break;case"answer":s=function(e){return 1==e.specificErrorCount?"Your answer couldn't be submitted. Please see the error above.":"Your answer couldn't be submitted. Please see the errors above."}({"specificErrorCount":n});break;case"edit":s=function(e){return 1==e.specificErrorCount?"Your edit couldn't be submitted. Please see the error above.":"Your edit couldn't be submitted. Please see the errors above."}({"specificErrorCount":n});break;case"tags":s=function(e){return 1==e.specificErrorCount?"Your tags couldn't be submitted. Please see the error above.":"Your tags couldn't be submitted. Please see the errors above."}({"specificErrorCount":n});break;case"post":default:s=function(e){return 1==e.specificErrorCount?"Your post couldn't be submitted. Please see the error above.":"Your post couldn't be submitted. Please see the errors above."}({"specificErrorCount":n})}r.text(s)}}else t.find(".general-error-container").remove();var c;v()&&($("#sidebar").animate({"opacity":.4},500),c=setInterval(function(){v()||($("#sidebar").animate({"opacity":1},500),clearInterval(c))},500));var u;t.find(".validation-error").each(function(){var e=$(this).offset().top;(!u||u>e)&&(u=e)});var l=function(){for(var e=0;3>e;e++)t.find(".message").animate({"left":"+=5px"},100).animate({"left":"-=5px"},100)};if(u){var d=$(".review-bar").length;u=Math.max(0,u-(d?125:30)),$("html, body").animate({"scrollTop":u},l)}else l()},a=function(){1!=n||t.find(y).length?r():setTimeout(a,250)};a()}}function m(e,t,n){var i;if(!(t&&0!=t.length&&e.length&&$("html").has(e).length))return!1;if(i=1==t.length?t[0]:"<ul><li>"+t.join("</li><li>")+"</li></ul>",i&&i.length>0){var r=e.data("error-popup");if(r&&r.is(":visible")){var o=e.data("error-message");if(o==i)return!0;r.fadeOutAndRemove()}var s=StackExchange.helpers.showMessage(e,i,n);return s.find("a").attr("target","_blank"),e.addClass("validation-error"),e.data("error-popup",s),e.data("error-message",i),s.click(a),!0}return!1}function g(e,t){if(!t||0==t.length)return!1;var n=t.data("error-popup");return n&&n.is(":visible")&&n.fadeOutAndRemove(),t.removeClass("validation-error"),t.removeData("error-popup"),t.removeData("error-message"),e.find(".validation-error").length||e.find(".general-error-container").remove(),!0}function v(){var e=!1,t=$("#sidebar, .sidebar").first();if(!t.length)return!1;var n=t.offset().left;return $(".message").each(function(){var t=$(this);return t.offset().left+t.outerWidth()>n?(e=!0,!1):void 0}),e}var b="input#title",w="textarea.wmd-input:first",y=".tag-editor",x="input[id^=edit-comment]",k="textarea#excerpt",S="input#m-address",C=[],E=250;return{"initOnBlur":e,"initOnBlurAndSubmit":t,"showErrorsAfterSubmission":p,"getSidebarPopupOptions":f}}();