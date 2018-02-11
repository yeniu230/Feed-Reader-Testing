/* feedreader.js
 *
 * 这是 Jasmine 会读取的spec文件，它包含所有的要在你应用上面运行的测试。
 */

/* 我们把所有的测试都放在了 $() 函数里面。因为有些测试需要 DOM 元素。
 * 我们得保证在 DOM 准备好之前他们不会被运行。
 */
$(function() {
    /* 这是我们第一个测试用例 - 其中包含了一定数量的测试。这个用例的测试
     * 都是关于 Rss 源的定义的，也就是应用中的 allFeeds 变量。
    */
    describe('RSS Feeds', function() {
        /* 这是我们的第一个测试 - 它用来保证 allFeeds 变量被定义了而且
         * 不是空的。在你开始做这个项目剩下的工作之前最好实验一下这个测试
         * 比如你把 app.js 里面的 allFeeds 变量变成一个空的数组然后刷新
         * 页面看看会发生什么。
        */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('has url', function() {
            const hasUrl = (element, index, array) => {
                return element.url;
            }
            expect(allFeeds.every(hasUrl)).toBe(true);
        });

        it('has name', function() {
            const hasName = (element, index, array) => {
                return element.name;
            }
            expect(allFeeds.every(hasName)).toBe(true);
        });
    });

    describe('The menu', function() {

        it('is hidden', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        it('click is work', function() {
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    describe('Initial Entries', function() {

        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('have entry', function() {
            expect($(".feed").children().length).toBeGreaterThan(0);
        });
    });

        /* TODO:
         * 写一个测试保证 loadFeed 函数被调用而且工作正常，即在 .feed 容器元素
         * 里面至少有一个 .entry 的元素。
         *
         * 记住 loadFeed() 函数是异步的所以这个而是应该使用 Jasmine 的 beforeEach
         * 和异步的 done() 函数。
         */

    describe('New Feed Selection', function() {
        const contents = $('.feed').html();

        beforeEach(function(done) {
            loadFeed(2, done);
        });

        it('should be changed', function() {
            expect(contents).not.toBe($('.feed').html());
        });
    });
    /* 写一个叫做 "New Feed Selection" 的测试用例 */

        /*
         * 写一个测试保证当用 loadFeed 函数加载一个新源的时候内容会真的改变。
         * 记住，loadFeed() 函数是异步的。
         */
}());
