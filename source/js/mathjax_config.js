// 如果要引用的话，记得像下面这样写，不要忘了下面这个unpkg引用（也可以换成jsdelivr等其他的CDN引用）
// <script defer src="/js/mathjax_config.js"></script>
// <script type="text/javascript" id="MathJax-script" defer src="https://unpkg.com/mathjax@3/es5/tex-chtml.js"></script>

MathJax = {
    tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        displayMath: [['$$', '$$'], ['\\[', '\\]']], // 添加 displayMath 配置用于渲染块级公式
        tags: 'none' // 禁用自动编号
    }
};
