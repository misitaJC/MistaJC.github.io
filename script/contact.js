const backgrounds = ['./images/background.jpg'];
const quotes = [
    "MistaJC",
    "📧  1067207635@qq.com",
    "📞    +86 18897976484  ",
    "🌏    Nanchang, China  ",
    "浮世景色百千年依旧，人之在世却如浮沫与泡影",
];
const links = [
    { name: "Github", url: 'https://github.com/misitaJC', icon: './images/github.png' },
    { name: "CSDN", url: 'https://blog.csdn.net/2302_79642540?spm=1010.2135.3001.5421', icon: './images/csdn.png' },
    { name: "知乎", url: 'https://www.zhihu.com/people/qing-yi-98-66', icon: './images/zhihu.png' },
    { name: "Bilibili", url: 'https://space.bilibili.com/472786453?spm_id_from=333.937.0.0', icon: './images/bilibili.png' },
    { name: "抖音", url: 'https://www.douyin.com/user/self?from_tab_name=main', icon: './images/douyin.png' },
    { name: "网易云", url: 'https://music.163.com/#/user/home?id=434347881', icon: './images/netease-cloud.png' },
    { name: "微博", url: 'https://m.weibo.cn/profile/5751734774', icon: './images/weibo.png' },
    { name: "小红书", url: 'https://www.xiaohongshu.com/user/profile/5b7c1cee5dacdf000136eb4d', icon: './images/xiaohongshu.png' },
];

document.addEventListener('DOMContentLoaded', () => {
    // Set random background
    const bgImage = document.getElementById('bgImage');
    bgImage.src = backgrounds[Math.floor(Math.random() * backgrounds.length)];

    // Display all quotes
    const quoteContainer = document.getElementById('randomQuote');
    quotes.forEach((quote, index) => {
        const p = document.createElement('p'); // 创建新的段落元素
        p.textContent = quote; // 设置段落文本内容
        if (index < quotes.length - 1) { // 如果不是最后一项，则添加一个换行
            p.style.marginBottom = '10px'; // 为每个引用添加底部外边距
        }
        quoteContainer.appendChild(p); // 将段落添加到容器中
    });

    // Generate links
    const linkContainer = document.getElementById('linkContainer');
    links.forEach(link => {
        const linkElement = document.createElement('div');
        linkElement.className = 'link-wrapper';

        const iconLink = document.createElement('a');
        iconLink.href = link.url.replace(/&#39;/g, ''); // 移除错误的HTML实体
        iconLink.className = 'link-icon';
        iconLink.target = '_blank';

        const iconElement = document.createElement('img');
        iconElement.src = link.icon;
        iconElement.alt = `${link.name} icon`;

        const textLink = document.createElement('a');
        textLink.href = link.url.replace(/&#39;/g, ''); // 移除错误的HTML实体
        textLink.className = 'link-text';
        textLink.textContent = link.name;
        textLink.target = '_blank';

        iconLink.appendChild(iconElement);
        linkElement.appendChild(iconLink);
        linkElement.appendChild(textLink);
        linkContainer.appendChild(linkElement);
    });
});