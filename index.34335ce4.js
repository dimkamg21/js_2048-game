var n=document.querySelector(".button"),r=document.querySelector(".message-start"),e=document.querySelector(".message-win"),t=document.querySelector(".message-lose"),i=document.querySelector(".game-score"),o=document.querySelector("tbody").rows,a=document.querySelectorAll("td"),c=function(){for(var n=0,r=0,e=[],t=0;t<a.length;t++)e[n]||(e[n]=[]),e[n].push(a[t]),4==++r&&(n++,r=0);return e}(),s=0;function f(){for(var n=0;n<2;n++)l(2);L()}function l(){if(h())for(var n=.9>Math.random()?2:4;;){var r=Math.floor(4*Math.random()),e=Math.floor(4*Math.random());if(""===c[r][e].innerHTML){c[r][e].innerHTML=n;break}d()}}function L(){T(function(n){var r=n.innerHTML;""!==r?n.classList="field-cell field-cell--".concat(r):n.classList="field-cell"})}function u(n,r){for(var e=2;e<=2048;e*=2)if(parseInt(n.innerHTML)===e&&parseInt(r.innerHTML)===e)return!0}function M(n){n.innerHTML="",n.classList.remove("field-cell--".concat(n.innerHTML))}function T(n){for(var r=0;r<4;r++)for(var e=0;e<4;e++)n(c[r][e])}function d(){for(var n=0;n<4;n++)for(var r=0;r<4;r++){var e=o[n].cells[r],t=parseInt(c[n][r].innerHTML);e.innerText="",e.classList.value="",e.classList.add("field-cell"),t>0&&(e.innerText=t.toString(),e.classList.add("field-cell--".concat(t.toString())))}i.innerText=s.toString()}function H(n,r){for(var e=0;e<n.length;e++)for(var t=0;t<n[e].length;t++)if(n[e][t]!==r[e][t])return!0;return!1}function v(){for(var n=Array(c.length).fill(null).map(function(){return Array(c[0].length)}),r=0;r<c.length;r++)for(var e=0;e<c[r].length;e++)n[r][e]=c[r][e].innerHTML;return n}function h(){for(var n=v(),r=0;r<4;r++)for(var e=0;e<4;e++)if(""===n[r][e])return!0;return!1}n.addEventListener("click",function(){r.classList.add("hidden"),t.classList.add("hidden"),e.classList.add("hidden"),s=0,n.classList.contains("start")&&(f(),n.classList.remove("start"),n.classList.add("restart"),n.innerHTML="Restart"),n.classList.contains("restart")&&(T(function(n){return M(n)}),f())}),document.addEventListener("keydown",function(n){"ArrowUp"===n.key&&function(){for(var n=v(),r=0;r<c[0].length;r++)for(var e=!1,t=1;t<c.length;t++)if(""!==c[t][r].innerHTML){for(var i=t-1;i>=0&&""===c[i][r].innerHTML;)c[i][r].innerHTML=c[i+1][r].innerHTML,M(c[i+1][r]),i--;for(;i>=0;)!e&&u(c[i][r],c[i+1][r])?(c[i][r].innerHTML="".concat(2*parseInt(c[i][r].innerHTML)),c[i+1][r].innerHTML="",M(c[i+1][r]),s+=parseInt(c[i][r].innerHTML),e=!0):e=!1,i--}H(n,v())&&l(),d()}(),"ArrowDown"===n.key&&function(){for(var n=v(),r=0;r<c[0].length;r++)for(var e=!1,t=c.length-2;t>=0;t--)if(""!==c[t][r].innerHTML){for(var i=t+1;i<c.length&&""===c[i][r].innerHTML;)c[i][r].innerHTML=c[i-1][r].innerHTML,M(c[i-1][r]),i++;for(;i<c.length;)!e&&u(c[i][r],c[i-1][r])?(c[i][r].innerHTML="".concat(2*parseInt(c[i][r].innerHTML)),c[i-1][r].innerHTML="",M(c[i-1][r]),s+=parseInt(c[i][r].innerHTML),e=!0):e=!1,i++}H(n,v())&&l(),d()}(),"ArrowRight"===n.key&&function(){for(var n=v(),r=0;r<c.length;r++)for(var e=!1,t=c[r].length-2;t>=0;t--)if(""!==c[r][t].innerHTML){for(var i=t+1;i<c[r].length&&""===c[r][i].innerHTML;)c[r][i].innerHTML=c[r][i-1].innerHTML,M(c[r][i-1]),i++;for(;i<c[r].length;)!e&&u(c[r][i],c[r][i-1])?(c[r][i].innerHTML="".concat(2*parseInt(c[r][i].innerHTML)),c[r][i-1].innerHTML="",M(c[r][i-1]),s+=parseInt(c[r][i].innerHTML),e=!0):e=!1,i++}H(n,v())&&l(),d()}(),"ArrowLeft"===n.key&&function(){for(var n=v(),r=0;r<c.length;r++)for(var e=!1,t=1;t<c[r].length;t++)if(""!==c[r][t].innerHTML){for(var i=t-1;i>=0&&""===c[r][i].innerHTML;)c[r][i].innerHTML=c[r][i+1].innerHTML,M(c[r][i+1]),i--;for(;i>=0;)!e&&u(c[r][i],c[r][i+1])?(c[r][i].innerHTML="".concat(2*parseInt(c[r][i].innerHTML)),c[r][i+1].innerHTML="",M(c[r][i+1]),s+=parseInt(c[r][i].innerHTML),e=!0):e=!1,i--}H(n,v())&&l(),d()}(),T(function(n){2048===parseInt(n.innerHTML)&&e.classList.remove("hidden")}),function(){for(var n=v(),r=0;r<4;r++)for(var e=0;e<4;e++)if(r<3&&n[r][e]===n[r+1][e]||e<3&&n[r][e]===n[r][e+1])return!0;return!!h()}()||t.classList.remove("hidden"),i.innerText=s.toString(),L()});
//# sourceMappingURL=index.34335ce4.js.map