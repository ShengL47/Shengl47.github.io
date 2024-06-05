import{_ as o,r as l,o as s,c as e,b as n,a as p,w as i,e as a,d as r}from"./app.06ed8a09.js";const c={},u={class:"custom-container info"},d={viewBox:"0 0 25 25",xmlns:"http://www.w3.org/2000/svg","xml:space":"preserve",style:{"fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2"}},m=n("path",{d:"M13 1.188C6.477 1.188 1.188 6.477 1.188 13S6.477 24.813 13 24.813 24.813 19.523 24.813 13c0-6.523-5.29-11.812-11.813-11.812Zm2.459 18.307c-.608.24-1.092.422-1.455.548a3.838 3.838 0 0 1-1.262.189c-.736 0-1.309-.18-1.717-.539a1.74 1.74 0 0 1-.611-1.367c0-.215.015-.435.045-.659a8.23 8.23 0 0 1 .147-.759l.761-2.688c.067-.258.125-.503.171-.731.046-.23.068-.441.068-.633 0-.342-.071-.582-.212-.717-.143-.135-.412-.201-.813-.201-.196 0-.398.029-.605.09-.205.063-.383.12-.529.176l.201-.828c.498-.203.975-.377 1.43-.521a4.225 4.225 0 0 1 1.29-.218c.731 0 1.295.178 1.692.53.395.353.594.812.594 1.376 0 .117-.014.323-.041.617a4.129 4.129 0 0 1-.152.811l-.757 2.68a7.582 7.582 0 0 0-.167.736 3.892 3.892 0 0 0-.073.626c0 .356.079.599.239.728.158.129.435.194.827.194.185 0 .392-.033.626-.097.232-.064.4-.121.506-.17l-.203.827Zm-.134-10.878a1.807 1.807 0 0 1-1.275.492c-.496 0-.924-.164-1.28-.492a1.57 1.57 0 0 1-.533-1.193c0-.465.18-.865.533-1.196a1.812 1.812 0 0 1 1.28-.497c.497 0 .923.165 1.275.497.353.331.53.731.53 1.196 0 .467-.177.865-.53 1.193Z",style:{fill:"#157ffb","fill-rule":"nonzero"},transform:"translate(-1.257 -1.257) scale(1.0582)"},null,-1),k=[m],v=n("p",{class:"custom-container-title"},"INFO",-1),h=n("p",null,"This feature is enabled by default.",-1),b={class:"custom-container tip"},f={viewBox:"0 0 25 25",xmlns:"http://www.w3.org/2000/svg","xml:space":"preserve",style:{"fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2"}},_=n("path",{d:"M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z",style:{fill:"#48b884","fill-rule":"nonzero"},transform:"matrix(.042 0 0 .042 0 -5.178)"},null,-1),g=n("path",{d:"M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z",style:{fill:"#48b884","fill-rule":"nonzero"},transform:"matrix(.042 0 0 .042 0 -5.178)"},null,-1),y=[_,g],x=n("p",{class:"custom-container-title"},"TIP",-1),w=n("p",null,"Code related to the disabled features will not be included in your site's bundle files.",-1),T=a("The reading time estimation will be shown on the head of the article by default, supported by "),C=a("plugin-reading-time"),j=a("."),q=r(`<h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">gungnirTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">themePlugins</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">readingTime</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">excludes</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;/url1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/url2/.*&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>  <span class="token comment">// exclude pages by their path via a regular expression (optional, default: [])</span>
      <span class="token literal-property property">includes</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;/url1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/url2/.*&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>  <span class="token comment">// include pages by their path via a regular expression, if \`includes\` is specified, \`excludes\` will be ignored (optional, default: [])</span>
      <span class="token literal-property property">wordsPerMinuteCN</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>  <span class="token comment">// number of Chinese words per minute a user can read (optional, default: 300)</span>
      <span class="token literal-property property">wordsPerMinuteEN</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>  <span class="token comment">// number of English words per minute a user can read (optional, default: 160)</span>
      <span class="token literal-property property">excludeCodeBlock</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>  <span class="token comment">// exclude all content inside code blocks or not (optional, default: false)</span>
      <span class="token literal-property property">excludeTexBlock</span><span class="token operator">:</span> <span class="token boolean">true</span>    <span class="token comment">// exclude all content inside tex blocks or not (optional, default: false)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="override" tabindex="-1"><a class="header-anchor" href="#override" aria-hidden="true">#</a> Override</h2><p>You can override reading time in the front matter of each article by:</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">title</span><span class="token punctuation">:</span> Hello Word
<span class="token key atrule">readingTime</span><span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token key atrule">minutes</span><span class="token punctuation">:</span> <span class="token number">3</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="disable" tabindex="-1"><a class="header-anchor" href="#disable" aria-hidden="true">#</a> Disable</h2><p>Or if you want to disable this feature:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">gungnirTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">themePlugins</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">readingTime</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function B(M,N){const t=l("RouterLink");return s(),e("div",null,[n("div",u,[(s(),e("svg",d,k)),v,h]),n("div",b,[(s(),e("svg",f,y)),x,w]),n("p",null,[T,p(t,{to:"/docs/plugins/reading-time/"},{default:i(()=>[C]),_:1}),j]),q])}var P=o(c,[["render",B],["__file","reading-time.html.vue"]]);export{P as default};