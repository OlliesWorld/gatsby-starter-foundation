(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{5:function(e,t,n){n("j36g"),e.exports=n("TMdA")},O3Ez:function(e,t,n){e.exports={iframe:"iframe-media-styles_iframe__Cd_yh"}},TMdA:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/events/[eventSlug]/expo/[vendorId]",function(){return n("r4M7")}])},r4M7:function(e,t,n){"use strict";n.r(t);var r=n("20a2"),a=n("SaX8"),o=n.n(a),i=n("q1tI"),c=n.n(i),u=n("/MKj"),d=n("Iw/E"),s=n("7Jh8"),l=n("zf7/"),v=n("y/LT"),f=n("TSYQ"),m=n.n(f),p=n("ZOap"),w=n("KM0B"),b=n.n(w),_=c.a.createElement,h="youtube",y="vimeo",j="wistia",E="custom",O="session",g=function(e){var t=e.vendor,n=t.video_url,r=t.stream_provider,a=t.roundtable_uuid;switch(r){case h:return _(l.a,{url:"https://www.youtube.com/embed/".concat(n)});case y:return _(l.a,{url:"https://player.vimeo.com/video/".concat(n)});case j:return _(l.a,{url:"https://fast.wistia.net/embed/iframe/".concat(n)});case E:return _("div",null,"Custom (follow up ticket)");case O:return _(p.a,{roundtableUuid:a});default:return null}},I=function(e){var t=e.vendor;return _("div",{className:m()(b.a["vendor-page"],"test-id-expo-page")},!t&&_("div",{className:m()(b.a["loading-wrap"],"test-id-loading-vendor")},_(v.a,{className:b.a.spinner})),t&&_("div",{className:m()(b.a["vendor-media-container"],"test-id-vendor-content")},_(g,{vendor:t})))},N=c.a.createElement,T=o()(r.withRouter,Object(u.b)((function(e){return{vendor:Object(d.a)(e),vendors:Object(d.j)(e)}}),{setActiveVendorId:d.n,createFetchVendorsAction:s.b}))((function(e){var t=e.router,n=e.vendor,r=e.vendors,a=e.setActiveVendorId,o=e.createFetchVendorsAction;return Object(i.useEffect)((function(){r&&0!=r.length||o()}),[]),Object(i.useEffect)((function(){return a(t.query.vendorId),function(){return a(null)}}),[t.query.vendorId,a]),N(I,{vendor:n})})),A=n("XWj9");t.default=Object(A.a)()(T)},"zf7/":function(e,t,n){"use strict";var r=n("TSYQ"),a=n.n(r),o=n("q1tI"),i=n.n(o),c=n("O3Ez"),u=n.n(c),d=i.a.createElement;t.a=function(e){var t=e.url;return d("iframe",{className:a()(u.a.iframe,"test-id-iframe-media"),src:t,frameBorder:"0",allow:"autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"vendor media"})}}},[[5,1,2,4,7,5,0,3,6,8,9,10,11,12,13]]]);