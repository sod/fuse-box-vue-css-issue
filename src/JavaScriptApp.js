import './GlobalCssDependency.css';

console.log('JavaScriptApp.vue');

console.log('import LazyVueDependency.vue from JavaScriptApp', import('./LazyDependencies/LazyVueDependency.vue'));
console.log('import LazyJavaScriptDependency.js from JavaScriptApp', import('./LazyDependencies/LazyJavaScriptDependency.js'));

document.body.innerHTML = `
<div class="GlobalCssDependency">GlobalCssDependency (should be green if loaded)</div>
<div class="LazyVueDependency">LazyVueDependency (should be green if loaded)</div>
<div class="LazyJavaScriptCssDependency">LazyJavaScriptCssDependency (should be green if loaded)</div>
`;