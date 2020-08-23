"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var react_1 = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var aqua_1 = require("./components/lists/aqua");
var flower_1 = require("./components/lists/flower");
var Rolling_1_3s_21px_gif_1 = require("./Rolling-1.3s-21px.gif");
//* React.Component の型引数は <Props, State>
//* 空の場合は {} にする
var KimetsuTop = /** @class */ (function (_super) {
    __extends(KimetsuTop, _super);
    function KimetsuTop(props) {
        var _this = _super.call(this, props) // これはおまじない
         || this;
        _this.state = {
            techniques: [aqua_1["default"], flower_1["default"]],
            isShow: false,
            isModalOpen: false,
            gachaBtnText: 'ガチャを回す',
            loadingIconPath: ''
        };
        return _this;
    }
    KimetsuTop.prototype.render = function () {
        // TODO: Hooksは、通常のjsの関数の中には定義出来ない
        // TODO: クラスコンポーネントの中では使えない
        // const [gachaBtnText, setGachaBtnText] = useState('ガチャを回す');
        var _this = this;
        var handleOpenModal = function () {
            _this.setState({
                loadingIconPath: '',
                gachaBtnText: '・・・',
                isModalOpen: true
            });
        };
        var handleOpenResultModal = function () {
            _this.setState({
                loadingIconPath: Rolling_1_3s_21px_gif_1["default"]
            });
            setTimeout(function () { handleOpenModal(); }, 1000);
        };
        var handleCloseModal = function () {
            _this.setState({
                isModalOpen: false,
                gachaBtnText: 'ガチャを回す'
            });
        };
        var selectOneAtRandom = function (targets) {
            return targets[Math.floor(Math.random() * targets.length)];
        };
        // ツイートボタンを表示
        // const executeGacha = () => {
        //   this.setState({
        //     isShow: !this.state.isShow
        //   })
        // }
        // const getResultText = () => {
        //   let selectedTechnique: any = selectOneAtRandom(this.state.techniques);
        //   const [nunmberOfType, technique]: string[] = selectOneAtRandom(
        //     selectedTechnique.techniques
        //   ).split(':');
        //   let str: string = `今日の呼吸は...%0a%0a「全集中！ ${selectedTechnique.breath}の呼吸...」%0a%0a「${nunmberOfType}！」%0a%0a「${technique}！！！」`;
        //   const appUrl: string = 'https://kimetsu-gacha.firebaseapp.com/';
        //   if (str.length > 140) {
        //     return alert("テキストが140字を超えています");
        //   } else {
        //     let resultStr: string =
        //       str +
        //       '%0a%0a%23鬼滅の刃ガチャ%0a%23今日の呼吸ガチャ%0a%23鬼滅の刃';
        //     return resultStr + '%0a%0a鬼滅の刃 1〜20巻セット↓%0ahttps://amzn.to/31jI7D7%0a%0a今日の呼吸ガチャを回してみる↓' + appUrl;
        //   }
        // }
        var executeTweet = function () {
            var url;
            var selectedTechnique = selectOneAtRandom(_this.state.techniques);
            var _a = selectOneAtRandom(selectedTechnique.techniques).split(':'), nunmberOfType = _a[0], technique = _a[1];
            var str = "\u4ECA\u65E5\u306E\u79C1\u306E\u547C\u5438\u306F...%0a%0a\u300C\u5168\u96C6\u4E2D\uFF01 " + selectedTechnique.breath + "\u306E\u547C\u5438...\u300D%0a%0a\u300C" + nunmberOfType + "\uFF01\u300D%0a%0a\u300C" + technique + "\uFF01\uFF01\uFF01\u300D";
            var appUrl = 'https://kimetsu-gacha.firebaseapp.com/';
            if (str.length > 140) {
                return alert("テキストが140字を超えています");
            }
            else {
                url =
                    'http://twitter.com/share?url=' +
                        escape('\n' + appUrl) +
                        '&text=' +
                        str +
                        '%0a%0a%23鬼滅の刃ガチャ%0a%23今日の呼吸ガチャ%0a%23鬼滅の刃';
            }
            url = url + '%0a%0a鬼滅の刃 1〜20巻セット↓%0ahttps://amzn.to/31jI7D7%0a%0aガチャを回してみる↓';
            window.open(url, '_blank', 'width=600,height=300');
        };
        //******************* styles
        var adjastCenter = {
            textAlign: 'center'
        };
        var adjastModalFooter = {
            justifyContent: 'center'
        };
        //******************* styles
        return (react_1["default"].createElement("div", { style: adjastCenter },
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("h1", null,
                "\u9B3C\u6EC5\u306E\u5203",
                react_1["default"].createElement("br", null),
                "\u301C\u4ECA\u65E5\u306E\u547C\u5438\u30AC\u30C1\u30E3\u301C"),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement(react_bootstrap_1.Button, { style: {
                    fontWeight: 'bold',
                    backgroundColor: '#00BFFF',
                    outlineColor: '#00BFFF',
                    borderColor: '#00BFFF'
                }, onClick: handleOpenResultModal }, this.state.loadingIconPath ? (react_1["default"].createElement("img", { src: Rolling_1_3s_21px_gif_1["default"], alt: "\u30AC\u30C1\u30E3\u3092\u56DE\u3059" })) : ('ガチャを回す')),
            this.state.isModalOpen && (react_1["default"].createElement(react_bootstrap_1.Modal, { show: true, onHide: handleCloseModal, animation: true },
                react_1["default"].createElement(react_bootstrap_1.Modal.Header, { style: { justifyContent: 'center' } },
                    react_1["default"].createElement("h5", null, "\u4ECA\u65E5\u306E\u3042\u306A\u305F\u306E\u547C\u5438\u306F\u30FB\u30FB\u30FB\uFF01\uFF1F")),
                react_1["default"].createElement(react_bootstrap_1.Modal.Footer, { style: adjastModalFooter },
                    react_1["default"].createElement(react_bootstrap_1.Button, { size: "sm", style: { fontWeight: 'bold' }, variant: "secondary", onClick: handleCloseModal }, "\u9589\u3058\u308B"),
                    react_1["default"].createElement(react_bootstrap_1.Button, { size: "sm", style: { fontWeight: 'bold' }, onClick: executeTweet }, "\u30C4\u30A4\u30C3\u30BF\u30FC\u3067\u7D50\u679C\u3092\u898B\u308B")))),
            this.state.isShow && (react_1["default"].createElement(react_bootstrap_1.Button, { onClick: executeTweet }, "\u30C4\u30A4\u30FC\u30C8\u3059\u308B")),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("p", null,
                "created_by\u00A0\u00A0",
                react_1["default"].createElement("a", { href: "https://twitter.com/RailsRubyMah6h" }, "mah@freelance-engineer"),
                "\u00A0\u00A0at 2020")));
    };
    return KimetsuTop;
}(react_1.Component));
exports["default"] = KimetsuTop;
