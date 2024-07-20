function e(e){return e[0].toUpperCase()+e.slice(1).split(/(?=[A-Z])/g).join(" ")}document.querySelectorAll("input").forEach(function(t){var l=document.createElement("label");l.className="field-label",l.setAttribute("for",t.id),l.textContent=e(t.name),t.placeholder=e(t.name),t.before(l)});
//# sourceMappingURL=index.b442f95c.js.map
