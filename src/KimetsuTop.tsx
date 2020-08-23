import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import LoadingIconPath from './Rolling-1.3s-21px.gif';
import Aqua from './components/lists/aqua';
import Beast from './components/lists/beast';
import Flare from './components/lists/flare';
import Flower from './components/lists/flower';
import Insect from './components/lists/insect';
import Lightning from './components/lists/lightning';
import Love from './components/lists/love';
import Mist from './components/lists/mist';
import Moon from './components/lists/moon';
import Rock from './components/lists/rock';
import Snake from './components/lists/snake';
import Sound from './components/lists/sound';
import Wind from './components/lists/wind';
import Sun from './components/lists/sun';

//* TypeScriptの場合、stateで使う型を定義しておく必要がある
// http://itexplorer.hateblo.jp/entry/20170715-react-tutorial-intrinsic-attributes-error
interface Kimetsu {
  techniques: object[],
  isShow: boolean,
  isModalOpen: boolean,
  gachaBtnText: string,
  loadingIconPath: string
}

//* React.Component の型引数は <Props, State>
//* 空の場合は {} にする
class KimetsuTop extends Component<{}, Kimetsu> {
  constructor(props: any) {
    super(props) // これはおまじない
    this.state = {
      techniques: [
        Aqua,
        Beast,
        Flare,
        Flower,
        Insect,
        Lightning,
        Love,
        Mist,
        Moon,
        Rock,
        Snake,
        Sound,
        Wind,
        // Sun, // TODO: 日の呼吸はXXXノ型 がないので呼び出し時には注意
      ],
      isShow: false,
      isModalOpen: false,
      gachaBtnText: 'ガチャを回す',
      loadingIconPath: '',
    };
  }

  render() {
    // TODO: Hooksは、通常のjsの関数の中には定義出来ない
    // TODO: クラスコンポーネントの中では使えない
    // const [gachaBtnText, setGachaBtnText] = useState('ガチャを回す');

    //******************************* functions
    const handleOpenModal = () => {
      this.setState({
        loadingIconPath: '',
        gachaBtnText: '・・・',
        isModalOpen: true,
      });
    }

    const handleOpenResultModal = () => {
      this.setState({
        loadingIconPath: LoadingIconPath,
      });
      setTimeout(() => { handleOpenModal() }, 1000);
    };

    const handleCloseModal = () => {
      this.setState({
        isModalOpen: false,
        gachaBtnText: 'ガチャを回す',
      });
    };

    const selectOneAtRandom = (targets: any) => {
      return targets[
        Math.floor(Math.random() * targets.length)
      ];
    }

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

    const executeTweet = () => {
      let url: string;
      let selectedTechnique: any = selectOneAtRandom(this.state.techniques);

      const [nunmberOfType, technique]: string[] = selectOneAtRandom(
        selectedTechnique.techniques
      ).split(':');

      let str: string = `今日の私の呼吸は...%0a%0a「全集中！ ${selectedTechnique.breath}の呼吸...」%0a%0a「${nunmberOfType}！」%0a%0a「${technique}！！！」`;
      const appUrl: string = 'https://kimetsu-gacha.firebaseapp.com/';

      if (str.length > 140) {
        return alert("テキストが140字を超えています");

      } else {
        url =
          'http://twitter.com/share?url=' +
          escape('\n' + appUrl) +
          '&text=' +
          str +
          '%0a%0a%23鬼滅の刃ガチャ%0a%23今日の呼吸ガチャ%0a%23鬼滅の刃';
      }

      url = url + '%0a%0a鬼滅の刃 1〜20巻セット↓%0ahttps://amzn.to/31jI7D7%0a%0aガチャを回してみる↓';
      window.open(url, '_blank', 'width=600,height=300');
    }
    //******************************* functions


    //******************************* styles
    const adjastCenter = {
      textAlign: 'center' as 'center',
      //  as 'center' がないと動かない
      // TODO: https://github.com/typestyle/typestyle/issues/281#issuecomment-413007316
    };

    const adjastModalFooter = {
      justifyContent: 'center'
    }
    //******************************* styles

    return (
      <div style={adjastCenter}>
        <br />
        <br />
        <h1>
          鬼滅の刃
          <br />
          〜今日の呼吸ガチャ〜
        </h1>
        <br />
        <br />

        {/* ボタンのフォーカスが残るのはchromeの仕様 */}
        {/* https://github.com/react-bootstrap/react-bootstrap/issues/1300#issuecomment-138422171 */}
        <Button
          style={{
            fontWeight: 'bold',
            backgroundColor: '#00BFFF',
            outlineColor: '#00BFFF',
            borderColor: '#00BFFF',
          }}
          onClick={handleOpenResultModal}
        >
          {this.state.loadingIconPath ? (
            <img src={LoadingIconPath} alt="ガチャを回す" />
          ) : (
            'ガチャを回す'
          )}
        </Button>
        {this.state.isModalOpen && (
          <Modal show={true} onHide={handleCloseModal} animation={true}>
            <Modal.Header style={{ justifyContent: 'center' }}>
              <h5>今日のあなたの呼吸は・・・！？</h5>
            </Modal.Header>
            <Modal.Footer style={adjastModalFooter}>
              <Button
                size="sm"
                style={{ fontWeight: 'bold' }}
                variant="secondary"
                onClick={handleCloseModal}
              >
                閉じる
              </Button>

              <Button
                size="sm"
                style={{ fontWeight: 'bold' }}
                onClick={executeTweet}
              >
                ツイッターで結果を見る
              </Button>
            </Modal.Footer>
          </Modal>
        )}
        {/*TODO: ◯SXでは、if文が書けないので、{ 判定式 && 表示させたい要素(jsの変数使うなら{}で囲う) みたいに書く } */}
        {/* https://www.i-ryo.com/ */}
        {/* {this.state.technique && <p> {this.state.technique}</p>} */}
        {this.state.isShow && (
          <Button onClick={executeTweet}>ツイートする</Button>
        )}
        <br />
        <br />
        <p>
          created_by&nbsp;&nbsp;
          <a href="https://twitter.com/RailsRubyMah6h">
            mah@freelance-engineer
          </a>
          &nbsp;&nbsp;at 2020
        </p>
      </div>
    );
  }
}

export default KimetsuTop;
