!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b){function c(a,b){"use strict";this.el=a,this.options=d({},this.options),d(this.options,b),this._init()}var d=a("../helpers/extend"),e=a("../helpers/post"),f=a("../json/form_responses")[0];c.prototype._init=function(){"use strict";var a=this;a.prefix=a.el.id,a.form=a.el.getElementsByClassName(a.prefix+"__form")[0],a.loader=a.el.getElementsByClassName(a.prefix+"__loading")[0],a.responder=a.el.getElementsByClassName(a.prefix+"__response")[0],a.form.onsubmit=function(b){b.preventDefault(),a.submit()}},c.prototype.getAction=function(){"use strict";var a=this,b=a.form.getAttribute("action");return b.replace("subscribe/post?","subscribe/post-json?")},c.prototype.getFormData=function(){"use strict";var a,b,c=this,d={};for(a=0;a<c.form.elements.length;a++)b=c.form.elements[a],b.name.length>0&&b.value.length>0&&(d[b.name]=b.value);return d},c.prototype.setLoading=function(){"use strict";var a=this;this.el.className=a.prefix+"--loading"},c.prototype.displayResponse=function(a){"use strict";var b=this,c=this.el,d=document.createElement("h2"),e=document.createElement("p"),f=document.createElement("a");d.innerHTML=a.title,e.innerHTML=a.message,f.className="button",f.href="https://twitter.com/intent/follow?screen_name=frontendne",f.innerHTML="Follow us on Twitter",b.responder.appendChild(d),b.responder.appendChild(e),b.responder.appendChild(f),c.className=b.prefix+"--response"},c.prototype.handleResponse=function(a){"use strict";var b="";"success"!==a.result?a.msg&&a.msg.indexOf("already subscribed")>=0?b=f.alreadySubscribed:a.msg&&a.msg.indexOf("subscribe attempts")>=0&&(b=f.tooManyAttempts):b=f.success,window.pendingForm.displayResponse(b)},c.prototype.submit=function(){"use strict";var a=this,b=a.getAction(),c=a.getFormData(),d=a.handleResponse;window.pendingForm=this,e(b,c,d),a.setLoading()},b.exports=c},{"../helpers/extend":4,"../helpers/post":5,"../json/form_responses":6}],2:[function(a,b){function c(a,b){"use strict";this.el=a,this.options=d({},this.options),d(this.options,b),this._init()}var d=a("../helpers/extend");c.prototype.options={attr:"placeholder",data:[]},c.prototype._init=function(){"use strict";var a=this,b=a.getRandomID();a.populate(b)},c.prototype.getRandomID=function(){"use strict";var a=this,b=a.options.data.length,c=Math.floor(Math.random()*b),d=a.options.data[c];return d},c.prototype.populate=function(a){"use strict";var b=this,c=b.options.attr;for(var d in a)document.getElementById(d).setAttribute(c,a[d])},b.exports=c},{"../helpers/extend":4}],3:[function(a,b){function c(a,b){"use strict";this.el=a,this.options=d({},this.options),d(this.options,b),this._init()}var d=a("../helpers/extend");c.prototype.options={pattern:/.*/},c.prototype._init=function(){"use strict";var a=this;a.el.oninput=function(){a.validate()},a.validate()},c.prototype.validate=function(){"use strict";var a=this,b=a.options.pattern.test(a.el.value);a.el.className=b?"valid":"invalid"},b.exports=c},{"../helpers/extend":4}],4:[function(a,b){function c(a,b){"use strict";for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a}b.exports=c},{}],5:[function(a,b){var c={currentScript:null,getJSON:function(a,b,d){"use strict";var e=a+(a.indexOf("?")+1?"&":"?"),f=document.getElementsByTagName("head")[0],g=document.createElement("script"),h=[],i="";window.postCallback=d,b.c="window.postCallback";for(i in b)h.push(i+"="+encodeURIComponent(b[i]));e+=h.join("&"),g.type="text/javascript",g.src=e,c.currentScript&&f.removeChild(c.currentScript),f.appendChild(g)},success:null};b.exports=c.getJSON},{}],6:[function(a,b){b.exports=[{alreadySubscribed:{title:"Been here before?",Message:"You're already subscribed."},tooManyAttempts:{title:"Whoa, slow down there",message:"Too many subscribe attempts, try again later."},success:{title:"Success!",message:"You need to confirm your email."}}]},{}],7:[function(a,b){b.exports=[{"mce-NAME":"Luke Skywalker","mce-EMAIL":"luke@rebelalliance.org"},{"mce-NAME":"Jake","mce-EMAIL":"the_dog@adventureti.me"},{"mce-NAME":"Finn","mce-EMAIL":"the_human@adventureti.me"},{"mce-NAME":"Ron Burgundy","mce-EMAIL":"r.burgundy@channel4.tv"},{"mce-NAME":"Batman","mce-EMAIL":"bruce@wayne.org"},{"mce-NAME":"Doc Brown","mce-EMAIL":"emmet.brown@hillvalley.edu"},{"mce-NAME":"Walter White","mce-EMAIL":"heisenberg@savewalterwhite.com"},{"mce-NAME":"Charlie Kelly","mce-EMAIL":"teh_niteman@hotmale.com"},{"mce-NAME":"Jeff Lebowski","mce-EMAIL":"the-dude@gmail.com"},{"mce-NAME":"Peter","mce-EMAIL":"p.gibbins@initech.com"},{"mce-NAME":"Stanley Ipkiss","mce-EMAIL":"somebody-stop-me@yahoo.com"},{"mce-NAME":"Pete Mitchell","mce-EMAIL":"maverick@topgunacademy.gov"},{"mce-NAME":"Rimmer","mce-EMAIL":"a.rimmer@jmc.org"}]},{}],8:[function(a){var b=a("./components/validation"),c=a("./components/randomIdentity"),d=a("./json/identities"),e=a("./components/inlineSubmit");console.log(d),new b(document.getElementById("mce-EMAIL"),{pattern:/\S+@\S+\.\S+/}),new b(document.getElementById("mce-NAME"),{pattern:/[a-z]+/i}),new c(document.getElementById("mailing-list__sign-up"),{data:d}),new e(document.getElementById("mailing-list__sign-up"))},{"./components/inlineSubmit":1,"./components/randomIdentity":2,"./components/validation":3,"./json/identities":7}]},{},[8]);