<template>
<div id="app">
  <slide :steps="1" enter="slideInDown">
    <eg-transition enter="fadeInDown" leave="fadeOut">
      <div v-if="step >= 1">
        <p>
          メンティさん、ご家族のみなさんへ
        </p>
        <p>
          アクセスしていただきありがとうございます！<br />
          この1年間メンターを担当させていただいた、@jaVVVVVVVAと申します。<br />
          サプライズということで、ちょっとしたメッセージを贈らせていただきます。
        </p>
        <br />
        <br />
        <img style="height:300px; width:auto" src="https://3.bp.blogspot.com/-Fqo3zTO4oZA/Ufj1GcMn8WI/AAAAAAAAWmE/7N89X4yrr-E/s800/ojigi_man.png" />
      </div>
    </eg-transition>
  </slide>
  <slide :steps="1" enter="bounceInRight">
    <eg-transition enter="fadeInRight" leave="">
      <div v-if="step >= 1">
        <p>
          メンター自己紹介<br />
          <img style="width:40%; height:auto;" src="https://firebasestorage.googleapis.com/v0/b/messages-benext.appspot.com/o/usa.jpg?alt=media&token=257bc562-7f46-434d-8c1b-93bffb3f7731" />
        </p>
        <p>
          <ul style="list-style: none; text-align:left;">
            <li>
              名前：@jaVVVVVVVA
            </li>
            <li>
              経歴：2015年入社
            </li>
            <li>
              普段のお仕事：<br />
              お客様会社のウェブサイトを作成するため、プログラムを書いたり、
              ユーザーからの問い合わせ対応をしています。
            </li>
          </ul>
        </p>
        <p>
        </p>
      </div>
    </eg-transition>
  </slide>
  <slide :steps="3" enter="bounceInRight">
    <eg-transition enter="fadeInRight" leave="">
      <p v-if="step >= 1">
        メッセージ
      </p>
    </eg-transition>
    <eg-transition enter="fadeInDown" leave="">
      <div v-if="step >= 2">
        <p>
          まずは1年間、お疲れ様でした。
          <br />
          <span style="font-size:70%">初めて会った時はやっていけるかな？と少し心配もしましたが</span>
          <br />
          今ではお客様に一人で作業を任され、しっかりポジションもキープできています👏
          <br />
          毎月の面談の時には仕事の内容を笑って話せるまで成長していて、私もとても嬉しいです。
          <br />
          <br />
          <img style="width:40%; height:auto;" src="https://3.bp.blogspot.com/-j-cAwqnRnl0/V7kyFTN1zcI/AAAAAAAA9Kw/k4fTKl0eOPQEvSi8FQZT3463s65avtjxgCLcB/s800/message_fantastic.png" />
        </p>
      </div>
    </eg-transition>
    <eg-transition enter="fadeInDown" leave="">
      <div v-if="step >= 3">
        <p>
          これから経験を積むにつれ、今まで以上に難しい仕事に取り組む必要も出てくると思いますが、
          メンティさんのペースで頑張っていきましょう💪
          <br />
          先輩してサポートしていけたらと思います。
        </p>
      </div>
    </eg-transition>
  </slide>
  <slide enter="fadeInDown" leave="">
    <img style="width:60%; height:auto;" src="https://2.bp.blogspot.com/-cm2Yugyugpg/VoX5ZrhR79I/AAAAAAAA2VM/hgsDUJ96E_Y/s800/message_goseichou_man.png" />
  </slide>
</div>
</template>

<script>
import {
  Slideshow
} from 'eagle.js'
export default {
  name: 'app',
  mixins: [Slideshow],
  data() {
    return {}
  }
}
</script>

<style>
#app {
  font-family: 'Noto Sans JP', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 100%;
  padding: 0px 5px;
}
</style>
